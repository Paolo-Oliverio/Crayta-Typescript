declare class User extends Entity {
  protected constructor()
  /**
   * Get the display name of the User.
   */
  GetUsername(): Text
  /**
   * Get the display name of the User.
   */
  GetPlayerCardIcon(): string
  /**
   * ### Server Only
   * Spawn a player Entity for this User using the supplied template asset.
   */
  SpawnPlayer(playerTemplate: Template): Character
  /**
   * ### Server Only
   * Spawn a player Entity for this User using the supplied template asset, at the position and rotation of the locatorEntity.
   */
  SpawnPlayer(playerTemplate: Template, locatorEntity: Locator): Character
  /**
   * ### Server Only
   * Spawn a player Entity for this User using the supplied template asset, at the given position and rotation.
   */
  SpawnPlayer(
    playerTemplate: Template,
    position: Vector,
    rotation: Rotation
  ): Character
  /**
   * ### Server Only
   * 	Spawn a player Entity for this User using the supplied template asset and trigger the spawn effect with callback
   */
  SpawnPlayerWithEffect(
    playerTemplate: Template,
    onEffectEnded: spawnCallback
  ): Character
  /**
   * ### Server Only
   * Spawn a player Entity for this User using the supplied template asset, at the position of the spawnPoint (which can be any Entity with a 'playerstart' component) and trigger the spawn effect with callback.
   */
  SpawnPlayerWithEffect(
    playerTemplate: Template,
    locatorEntity: Locator,
    onEffectEnded: spawnCallback
  ): Character
  /**
   * ### Server Only
   * Spawn a player Entity for this User using the supplied template asset,at the given position and trigger the spawn effect
   */
  SpawnPlayerWithEffect(
    playerTemplate: Template,
    position: Vector,
    rotation: Rotation,
    onEffectEnded: spawnCallback
  ): Character
  /**
   * ### Server Only
   * Spawn a player Entity for this User using the supplied template asset and trigger the spawn effect with callback
   */
  SpawnPlayerWithEffect(playerTemplate): Character
  /**
   * ### Server Only
   * Spawn a player Entity for this User using the supplied template asset,	at the position of the spawnPoint (which can be any Entity with a 'playerstart' component) and trigger the spawn effect.
   */
  SpawnPlayerWithEffect(
    playerTemplate: Template,
    locatorEntity: Locator
  ): Character
  /**
   * ### Server Only
   * Spawn a player Entity for this User using the supplied template asset,	at the given position and trigger the spawn effect
   */
  SpawnPlayerWithEffect(
    playerTemplate: Template,
    position: Vector,
    rotation: Rotation
  ): Character
  /**
   * ### Server Only
   * Despawn a player
   */
  DespawnPlayer(): void
  /**
   * ### Server Only
   * Despawn a player and trigger the despawn effect with callback when it finishes
   */
  DespawnPlayerWithEffect(onEffectEnded: spawnCallback): void
  /**
   * ### Server Only
   * Despawn a player and trigger the despawn effect
   */
  DespawnPlayerWithEffect(): void
  /**
   * Get the Entity (if there is one) that has been spawned for the User.
   *
   * For now this is always a Character entity.
   */
  GetPlayer(): Character
  /**
   * ### Server Only
   * Set camera view of this User to the given cameraEntity (which can be either a Camera entity or a Character entity).
   */
  SetCamera(cameraEntity: Entity): void
  /**
   * ### Server Only
   * 	Set camera view of this User to the given cameraEntity (which can be either a Camera entity or a Character entity). Transitions the camera over a given time from the previous one.
   */
  SetCamera(cameraEntity: Entity, transitionTime: number): void
  /**
   *
   */
  GetCamera(): Camera
  /**
   * Get the point the camera is looking at
   */
  GetCameraLookAtPos(): Vector
  /**
   * Return two values, the position of the camera and a point the camera is facing at (where it collides with the scene).
   */
  GetCameraLookAt(): LuaMultiReturn<[Vector, Vector]>
  /**
   * ### Server Only, Local Only
   */
  LeaveGame(): void
  /**
   * ### Server Only
   */
  LeaveGame(travelFailedCallback: travelFailedCallback): void
  /**
   * ### Server Only, Local Only
   */
  GoToGame(gameId: string): void
  /**
   * ### Server Only
   */
  GoToGame(gameId: string, travelFailedCallback: travelFailedCallback): void
  /**
   * ### Server Only, Local Only
   * Send this user to another world on a separate server. If a world isn't provided, they'll be sent to the Game Settings Default World.
   */
  GoToWorld(worldAsset: WorldAsset): void
  /**
   * ### Server Only
   * Send this user to another world on a separate server. If a world isn't provided, they'll be sent to the Game Settings Default World.
   */
  GoToWorld(
    worldAsset: WorldAsset,
    travelFailedCallback: travelFailedCallback
  ): void
  /**
   * ### Server Only, Local Only
   */
  OpenStore(): void
  /**
   * ### Server Only, Local Only
   */
  OpenNews(): void
  /**
   * ### Server Only, Local Only
   */
  OpenGameHelp(helpPageId: string): void
  /**
   * ### Server Only, Local Only
   */
  OpenGameHelp(): void
  /**
   * ### Server Only, Local Only
   */
  OpenGameControls(controlSchemeId: string): void
  /**
   * ### Server Only, Local Only
   */
  OpenGameControls(): void
  /**
   * Converts a position in world space to a screen space co-ordinate	Returned on-screen values are in the range 0 to 1
   */
  ProjectPositionToScreen(worldLocation: Vector): Vector2D
}
