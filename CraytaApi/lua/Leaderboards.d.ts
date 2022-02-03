declare namespace Leaderboards {
  /**
   *Gets nearby leaderboard values on the specified leaderboard for the specified user, centered on the user where possible.
   *
   * Results are returned as a parameter to the callback function.
   *
   * Callback function parameter is a table of results, each result contains name, score, rank & icon.
   *
   * May return cached results if used frequently.
   */
  function GetNearbyValues(
    this: void,
    leaderboardId: string,
    numValues: number,
    user: User,
    leaderboardCallback: leaderboardCallback
  ): void
  /**
   *Gets the top ranking values from the specified leaderboard.
	*
   *
   */
  function GetTopValues(
    this: void,
    leaderboardId: string,
    numValues: number,
    leaderboardCallback: leaderboardCallback
  ): void
  /**
   *
   */
  function GetMetadata(this: void, leaderboardId: string, leaderboardCallback: leaderboardCallback): void
  /**
   *
   */
  function GetAllMetadata(this: void, leaderboardCallback: leaderboardCallback): void
  /**
   *
   */
  function GetNearbyValuesForGame(
    this: void,
    gameId: string,
    leaderboardId: string,
    numValues: number,
    user: User,
    leaderboardCallback: leaderboardCallback
  ): void
  /**
   *
   */
  function GetTopValuesForGame(
    this: void,
    gameId: string,
    leaderboardId: string,
    numValues: number,
    leaderboardCallback: leaderboardCallback
  ): void
  /**
   *
   */
  function GetMetadataForGame(
    this: void,
    gameId: string,
    leaderboardId: string,
    leaderboardCallback: leaderboardCallback
  ): void
  /**
   *
   */
  function GetAllMetadataForGame(
    this: void,
    gameId: string,
    leaderboardCallback: leaderboardCallback
  ):void
}
