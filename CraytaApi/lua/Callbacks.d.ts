declare type spawnCallback = (this:void) => void
declare type travelFailedCallback = (this:void) => void
declare type storageCallback = (this:void,value: number) => void
declare type varargCallback = (this:void,...args: any[]) =>  void
declare type collisionCallback = (this:void,entity: Entity, hitResult: HitResult) => void
declare type userCallback = (this:void, user: User, ...args: any[]) => void
declare type leaderboardResult = {
  name: string
  score: number
  rank: number
  icon: string
}
type leaderboardResults = leaderboardResult[]
declare type leaderboardCallback = (this:void, leaderboardResults: leaderboardResults) => void