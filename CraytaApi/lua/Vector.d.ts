declare namespace Vector {
  const Zero: Vector
  function New(this: void, x: number, y: number, z: number): Vector
  function Distance(vec1: Vector, vec2: Vector): number
  function SquaredDistance(vec1: Vector, vec2: Vector): number
  function Cross(vec1: Vector, vec2: Vector): Vector
  function Dot(vec1: Vector, vec2: Vector): number
  function Lerp(vec1: Vector, vec2: Vector, alpha: number): Vector
  const add: LuaAddition<Vector, Vector, Vector>
  const mul: LuaMultiplication<Vector, Vector, number> &
    LuaMultiplication<Vector, number, Vector>
  const sub: LuaSubtraction<Vector, Vector, Vector>
  const negate: LuaNegation<Vector, Vector>
  const div: LuaDivision<Vector, Vector, number> &
    LuaDivision<Vector, number, Vector>
}

declare interface Vector {
  x: number
  y: number
  z: number
  Normalize(): Vector
  Length(): number
  SquaredLength(): number
  Abs(): Vector
  Ceil(): Vector
  Floor(): Vector
  add: LuaAdditionMethod<Vector, Vector>
  sub: LuaSubtractionMethod<Vector, Vector>
  mul: LuaMultiplicationMethod<number, Vector>
  negate: LuaNegationMethod<Vector>
  div: LuaDivisionMethod<number, Vector>
}
