//Plugin to simply traslate arrays in LUA without indexing changes.
import ts from "typescript"
import * as tstl from "typescript-to-lua"
import * as lua from "typescript-to-lua/dist/LuaAST"

import {
  transformOptionalChainWithCapture,
  ExpressionWithThisValue,
} from "typescript-to-lua/dist/transformation/visitors/optional-chaining"
import { isMultiReturnCall} from "typescript-to-lua/dist/transformation/visitors/language-extensions/multi"
import {transformOrderedExpressions} from "typescript-to-lua/dist/transformation/visitors/expression-list"
import {
  isNumberType,
  isStringType,
} from "typescript-to-lua/dist/transformation/utils/typescript/types"
import {
  LuaLibFeature,
  transformLuaLibFunction,
} from "typescript-to-lua/dist/transformation/utils/lualib"
import {invalidMultiReturnAccess} from "typescript-to-lua/dist/transformation/utils/diagnostics"

const plugin: tstl.Plugin = {
  visitors: {
	[ts.SyntaxKind.ElementAccessExpression]: (node, context) => {
		return transformElementAccessExpressionWithCapture(context, node).expression
	},
  },
}

export function tryGetConstEnumValue(
  context: tstl.TransformationContext,
  node: ts.EnumMember | ts.PropertyAccessExpression | ts.ElementAccessExpression
): lua.Expression | undefined {
  const value = context.checker.getConstantValue(node)
  if (typeof value === "string") {
    return lua.createStringLiteral(value, node)
  } else if (typeof value === "number") {
    return lua.createNumericLiteral(value, node)
  }
}

export function transformElementAccessExpressionWithCapture(
  context: tstl.TransformationContext,
  node: ts.ElementAccessExpression
): ExpressionWithThisValue {
  const constEnumValue = tryGetConstEnumValue(context, node)
  if (constEnumValue) {
    return { expression: constEnumValue }
  }

  if (ts.isOptionalChain(node)) {
    return transformOptionalChainWithCapture(context, node, undefined)
  }

  const [table, accessExpression] = transformOrderedExpressions(context, [
    node.expression,
    node.argumentExpression,
  ])

  const type = context.checker.getTypeAtLocation(node.expression)
  const argumentType = context.checker.getTypeAtLocation(
    node.argumentExpression
  )
  if (isStringType(context, type) && isNumberType(context, argumentType)) {
    // strings are not callable, so ignore thisValueCapture
    return {
      expression: transformLuaLibFunction(
        context,
        LuaLibFeature.StringAccess,
        node,
        table,
        accessExpression
      ),
    }
  }

  if (isMultiReturnCall(context, node.expression)) {
    const accessType = context.checker.getTypeAtLocation(
      node.argumentExpression
    )
    if (!isNumberType(context, accessType)) {
      context.diagnostics.push(invalidMultiReturnAccess(node))
    }

    // When selecting the first element, we can shortcut
    if (
      ts.isNumericLiteral(node.argumentExpression) &&
      node.argumentExpression.text === "0"
    ) {
      return { expression: table }
    } else {
      const selectIdentifier = lua.createIdentifier("select")
      return {
        expression: lua.createCallExpression(selectIdentifier, [
          accessExpression,
          table,
        ]),
      }
    }
  }
  
  return {
    expression: lua.createTableIndexExpression(table, accessExpression, node),
  }
}


export default plugin
