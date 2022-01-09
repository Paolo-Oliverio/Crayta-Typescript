declare namespace Rotation {
  /**
   * Zero rotation on each axis (0, 0, 0)
   */
  const Zero: Rotation
  /**
   * Make a rotation from pitch, yaw and roll
   */
  function New(this: void, pitch: number, yaw: number, roll: number): Rotation
  /**
   * Make a rotation from a vector
   */
  function FromVector(this: void, vector: Vector): Rotation
  /**
   * operator +
   */
  const add: LuaAddition<Rotation, Rotation, Rotation>
  /**
   * operator *
   */
  const mul: LuaMultiplication<Rotation, Rotation, number> &
    LuaMultiplication<Rotation, number, Rotation>
  /**
   * operator -
   */
  const sub: LuaSubtraction<Rotation, Rotation, Rotation>
}

declare interface Rotation {
  /**
   * Pitch component of Rotation
   */
  pitch: number
  /**
   * Yaw component of Rotation
   */
  yaw: number
  /**
   * Roll component of Rotation
   */
  roll: number
  /**
   * Rotate a given vector by a rotation.
   * @param vector the vector to rotate
   */
  RotateVector(vector: Vector): Vector
  /**
   * Unrotate a given vector by this rotation - the opposite of Rotation.RotateVector.
   * @param vector the vector to rotate
   */
  UnrotateVector(vector: Vector): Vector
  /**
   * Get the inverse of this rotation.
   */
  Inverse(): Rotation
  /**
   * operator +
   */
  add: LuaAdditionMethod<Rotation, Rotation>
  /**
   * operator -
   */
  sub: LuaSubtractionMethod<Rotation, Rotation>
  /**
   * operator *
   */
  mul: LuaMultiplicationMethod<number, Rotation>
}
