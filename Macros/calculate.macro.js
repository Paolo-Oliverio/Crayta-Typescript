const { createMacro } = require("babel-plugin-macros")

const myMacro = ({ references, state, babel }) => {
  const t = babel.types;
  references.default.map((reference) => {
      const value = babel.types.NumericLiteral(reference.parentPath
        .get("arguments")[0]
        .evaluate().value)
      reference.parentPath.replaceWith(value)
  })
}

module.exports = createMacro(myMacro)