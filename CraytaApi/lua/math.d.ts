//https://www.tutorialspoint.com/lua/lua_math_library.htm
declare namespace math {
  function abs(this: void, n: number): number
  function acos(this: void, n: number): number
  function asin(this: void, n: number): number
  function atan(this: void, n: number): number
  function atan2(this: void, y: number,x:number): number
  function ceil(this: void, n: number): number
  function cos(this: void, n: number): number
  function cosh(this: void, n: number): number
  function deg(this: void, n: number): number
  function exp(this: void, n: number): number
  function floor(this: void, n: number): number
  function fmod(this: void, x: number,y:number): number
  function frexp(this: void, x: number): number
  function huge(this: void): number
  function ldexp(this: void, m: number, e: number): number
  function log(this: void, n: number): number
  function log10(this: void, n: number): number
  function max(this: void, x: number, ...arg: number[]): number
  function min(this: void, x: number, ...arg: number[]): number
  function modf(this: void, x: number): number
  const pi: number
  function pow(this: void, x: number, y: number): number
  function rad(this: void, x: number): number
  function random(this: void,m?:number,n?:number): number
  function randomseed(this: void, x: number): number
  function sin(this: void, x: number): number
  function sinh(this: void, x: number): number
  function sqrt(this: void, x: number): number
  function tan(this: void, x: number): number
  function tanh(this: void, x: number): number

  function lerp(a: number, b: number, alpha: number): number
  function sign(value: number): number
  function copysign(value: number, sign: number): number
  function clamp(value: number, min: number, max: number): number
}
