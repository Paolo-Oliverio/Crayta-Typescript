declare namespace Vector2D {
  const Zero: Vector2D
  function New(this: void, x: number, y: number): Vector2D
  function Distance(vec1: Vector2D, vec2: Vector2D): number
  function SquaredDistance(vec1: Vector2D, vec2: Vector2D): number
  function Cross(vec1: Vector2D, vec2: Vector2D): Vector2D
  function Dot(vec1: Vector2D, vec2: Vector2D): number
  function Lerp(vec1: Vector2D, vec2: Vector2D, alpha: number): Vector2D
  const add: LuaAddition<Vector2D, Vector2D, Vector2D>
  const mul: LuaMultiplication<Vector2D, Vector2D, number> &
    LuaMultiplication<Vector2D, number, Vector2D>
  const sub: LuaSubtraction<Vector2D, Vector2D, Vector2D>
  const negate: LuaNegation<Vector2D, Vector2D>
  const div: LuaDivision<Vector2D, Vector2D, number> &
    LuaDivision<Vector2D, number, Vector2D>
}

declare interface Vector2D {
  x: number
  y: number
  Normalize(): Vector2D
  Length(): number
  SquaredLength(): number
  Abs(): Vector2D
  Ceil(): Vector2D
  Floor(): Vector2D
  add: LuaAdditionMethod<Vector2D, Vector2D>
  sub: LuaSubtractionMethod<Vector2D, Vector2D>
  mul: LuaMultiplicationMethod<number, Vector2D>
  negate: LuaNegationMethod<Vector2D>
  div: LuaDivisionMethod<number, Vector2D>
}
