declare interface spawnCallback {
  (): void
}

declare interface travelFailedCallback {
  (): void
}

declare interface storageCallback {
  (value: number): void
}

declare interface noargCallback{
	():void
}

declare interface varargCallback {
  (...args: any[]): void
}

declare interface collisionCallback {
  (entity: Entity, hitResult: HitResult): void
}

declare interface userCallback {
  (user: User, ...args: any[]): void
}

declare interface leaderboardResult extends Object {
  name: string
  score: number
  rank: number
  icon: string
}
type leaderboardResults = leaderboardResult[]

declare interface leaderboardCallback {
  (leaderboardResults: leaderboardResults):void
}