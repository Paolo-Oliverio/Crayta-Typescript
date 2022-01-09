


declare namespace GameStorage {
  /**
   * ### Server Only
   * Get the value of a global counter for this game.
   *
   * Global counters are shared between all servers running the game and saved between sessions.
   * The value is returned by calling the callback function with the value as an argument.
   *
   * Global counters are always whole (integer) numbers.
   */
  function GetCounter(
    this: void,
    counterName: string,
    callback: storageCallback
  ): void
  /**
   * ### Server Only
   * Update the value of a global counter for this game by adding increment to the existing value.
   *
   * Global counters are shared between all servers running the game and saved between sessions.
   * The value is returned by calling the callback function with the value as an argument.
   *
   * Global counters are always whole (integer) numbers.
   */
  function UpdateCounter(
    counterName: string,
    increment: number,
    callback: storageCallback
  ): void
  /**
   * ### Server Only
   * Update the value of a global counter for this game by adding increment to the existing value.
   *
   * Global counters are shared between all servers running the game and saved between sessions.
   *
   * Global counters are always whole (integer) numbers.
   */
  function UpdateCounter(counterName: string, increment: number): void
}