declare function MACRO<T>(t: T): T

declare interface arrayNumber {
  [prop: number]: number
}

declare interface array2dNumber {
  [prop: number]: arrayNumber
}

declare type arraynum = number[][]

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
  GetWorld(): World
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
}

declare let _G : _globals

/**
 * Return true if called within a Schedule coroutine
 */
declare function IsInSchedule(this: void): boolean
/**
 * Wait for at least given time interval in seconds then resume execution, and return the exact time taken (which will be the next frame after time seconds). Only valid within a Schedule function
 */
declare function Wait(this: void, time: number): number
/**
 * Wait a single frame then resume execution, and return the time taken. Only valid within a Schedule function.
 */
declare function Wait(this: void): number
/**
 * Standard print function (same as Print), takes a comma separated list of arguments and prints out their string representation.
 */
declare function print(this: void, ...args: any): void
/**
 * Standard print function (same as print), takes a comma separated list of arguments and prints out their string representation.
 */
declare function Print(this: void, ...args: any): void
/**
 * Todo Doc
 */
declare function printf(format: string, ...args: any): void
/**
 * Todo Doc
 */
declare function Printf(format: string, ...args: any): void
/**
 * Todo Doc
 */
declare function FormatString(format: string, ...args: any): void
/**
 * Todo Doc
 */
declare function GetWorld(): World
/**
 * Return true if this script is running on the client
 */
declare function IsClient(): boolean
/**
 * Return true if this script is running on the server
 */
declare function IsServer(): boolean
/**
 * @noSelf
 */
declare function setmetatable(destination: any, origin: any): void

