/*@noSelfInFile*/
declare interface _globals {
  [prop: string]: any //needed to add and get from global table
  /**
   * Return true if called within a Schedule coroutine
   * @noSelf
   */
  IsInSchedule(this: void): boolean
  /**
   * Wait for at least given time interval in seconds then resume execution, and return the exact time taken (which will be the next frame after time seconds). Only valid within a Schedule function
   * @noSelf
   */
  Wait(this: void, time: number): number
  /**
   * Wait a single frame then resume execution, and return the time taken. Only valid within a Schedule function.
   * @noSelf
   */
  Wait(this: void): number
  /**
   * Standard print function (same as Print), takes a comma separated list of arguments and prints out their string representation.
   * @noSelf
   */
  print(this: void, ...args: any): void
  /**
   * Standard print function (same as print), takes a comma separated list of arguments and prints out their string representation.
   * @noSelf
   */
  Print(this: void, ...args: any): void
  /**
   * Todo Doc
   * @noSelf
   */
  printf(format: string, ...args: any): void
  /**
   * Todo Doc
   * @noSelf
   */
  Printf(format: string, ...args: any): void
  /**
   * Todo Doc
   * @noSelf
   */
  FormatString(format: string, ...args: any): void
  /**
   * Todo Doc
   * @noSelf
   */
  GetWorld(this: void): World
  /**
   * Return true if this script is running on the client
   * @noSelf
   */
  IsClient(): boolean
  /**
   * Return true if this script is running on the server
   * @noSelf
   */
  IsServer(): boolean
  /**
   * @noSelf
   */
  setmetatable(destination: LuaTable, origin: LuaTable): void
  /**
   * @noSelf
   */
  tostring(arg: any): string
  /**
   * @noSelf
   */
  Format(format: string, ...varArg: any): Text
}

declare let _G : _globals

/**
 * Return true if called within a Schedule coroutine
 * @noSelf
 */
declare function IsInSchedule(): boolean
/**
 * Wait for at least given time interval in seconds then resume execution, and return the exact time taken (which will be the next frame after time seconds). 
 * Only valid within a Schedule function
 * @noSelf
 */
declare function Wait(time: number): number
/**
 * Wait a single frame then resume execution, and return the time taken. Only valid within a Schedule function.
 * @noSelf
 */
declare function Wait(): number
/**
 * Standard print function (same as Print), takes a comma separated list of arguments and prints out their string representation.
 * @noSelf
 */
declare function print(...args: any): void
/**
 * Standard print function (same as print), takes a comma separated list of arguments and prints out their string representation.
 * @noSelf
 */
declare function Print(...args: any): void
/**
 * Todo Doc
 * @noSelf
 */
declare function printf(format: string, ...args: any): void
/**
 * Todo Doc
 * @noSelf
 */
declare function Printf(format: string, ...args: any): void
/**
 * @noSelf
 */
declare function FormatString(format: string, ...args: any): void
/**
 * @noSelf
 */
declare function GetWorld(): World
/**
 * Return true if this script is running on the client
 * @noSelf
 */
declare function IsClient(): boolean
/**
 * Return true if this script is running on the server
 * @noSelf
 */
declare function IsServer(): boolean
/**
 * @noSelf
 */
declare function setmetatable(destination: any, origin: any): void
/**
 * @noSelf
 */
declare function tostring(arg: any): string
/**
*@noSelf
*/
declare function Format(format: string|Text, ...varArg: any): Text

declare namespace table{
  function insert(this:void, table: LuaTable|any[], value: any): number
  function remove(this:void, table: LuaTable|any[], index: number | string): any
  function sort(this: void, table: LuaTable | any[], func:(a:any, b:any)=>boolean): void
}
/**
 * Adds Comments to lua output
 * multiple string arguments transpile to multiline comments.
 */
declare namespace lua{
  function comment(this:void, ...args : string[]):void
}