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
  SpawnPlayer(playerTemplate: Template, position: Vector, rotation: Rotation): Character
  /**
   * ### Server Only
   * 	Spawn a player Entity for this User using the supplied template asset and trigger the spawn effect with callback
   */
  SpawnPlayerWithEffect(playerTemplate: Template, onEffectEnded: spawnCallback): Character
  /**
   * ### Server Only
   * Spawn a player Entity for this User using the supplied template asset, at the position of the spawnPoint (which can be any Entity with a 'playerstart' component) and trigger the spawn effect with callback.
   */
  SpawnPlayerWithEffect(playerTemplate: Template, locatorEntity: Locator, onEffectEnded: spawnCallback): Character
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
  SpawnPlayerWithEffect(playerTemplate: Template): Character
  /**
   * ### Server Only
   * Spawn a player Entity for this User using the supplied template asset,	at the position of the spawnPoint (which can be any Entity with a 'playerstart' component) and trigger the spawn effect.
   */
  SpawnPlayerWithEffect(playerTemplate: Template, locatorEntity: Locator): Character
  /**
   * ### Server Only
   * Spawn a player Entity for this User using the supplied template asset,	at the given position and trigger the spawn effect
   */
  SpawnPlayerWithEffect(playerTemplate: Template, position: Vector, rotation: Rotation): Character
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
  GoToWorld(worldAsset: WorldAsset, travelFailedCallback: travelFailedCallback): void
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
  /**
   * ### Local Only
   * Converts a position in world space to a widget space co-ordinate Returned on-screen values are in the range 0 to 1
   * Usage example: function MyPlayerScript:LocalOnTick(deltaTime)
   * local user = self:GetEntity():GetUser()
   * local widget = self:GetEntity().widget
   * local screenPos = user:ProjectPositionToWidget(widget, Vector.New(0,0,0))
   * Printf("Screen pos: {1}", screenPos)
   * end
   */
  ProjectPositionToWidget(widget: Widget, worldLocation: Vector): Vector2D
  /**
   *
   */
  PlayVibrationEffect(vibrationEffect: VibrationEffectAsset): void
  /**
   *
   */
  PlayManualVibration(intensity: number, duration: number, affectSmallMotors: boolean, affectLargeMotors: boolean): void
  /**
   * Play a camera shake effect on this User with a scale multiplier
   * @param cameraShake
   * @param scale
   */
  PlayCameraShakeEffect(cameraShake: CameraShakeAsset, scale: number): void
  /**
   * Play a camera shake effect on this User
   * @param cameraShake
   */
  PlayCameraShakeEffect(cameraShake: CameraShakeAsset): void
  /**
   * Set a scale on the user's actual move input and an addition 2D vector to add to it.
   * Used for example to auto-walk a player forward but scaling the real input down to zero and adding an additional value.
   */
  SetMoveOverride(scale: Vector2D, add: Vector2D): void
  /**
   * Set a scale on the user's actual look input and an addition 2D vector to add to it.
   * Used for example to auto-look a player at a particular point by scaling the real input down to zero and adding an additional value.
   */
  SetLookOverride(scale: Vector2D, add: Vector2D)

  SetLeaderboardValue(leaderboardId: string, value: number, callback: leaderboardCallback): void
  /**
   *
   * @param leaderboardId
   * @param value
   */
  SetLeaderboardValue(leaderboardId: string, value: number): void
  /**
   * Gets the highest ranking value on the specified leaderboard for this user. Results are returned as parameters to the callback function. Callback function parameters are Score & Rank
   */
  GetLeaderboardValue(leaderboardId: string, callback: leaderboardCallback): void
  /**
   * ### Server Only
   * Add a number to the leaderboard value on the specified leaderboard for this user.
   * Results are returned as parameters to the callback function.
   * Callback function parameter is the new score
   */
  AddToLeaderboardValue(leaderboardId: string, increment: number, callback: leaderboardCallback): void
  /**
   * ### Server Only
   * Add a number to the leaderboard value on the specified leaderboard for this user.
   */
  AddToLeaderboardValue(leaderboardId: string, increment: number): void
  /**
   * Gets the current progress on an active challenge
   */
  GetChallengeProgress(challengeId: string): void
  /**
   * ### Server Only
   * Sends an event for this user that can be used by the Challenges and Activities systems.
   * Takes a lua table of named parameters which are checked against the conditions inside each challenge and activity.
   */
  SendXPEvent(eventName: string, eventParametersTable: any): void
  /**
   * ### Server Only
   * Sends an event for this user that can be used by the Challenges and Activities systems.
   * This is the same as sending an empty parameter list in the other SendXPEvent overload.
   */
  SendXPEvent(eventName: string): void
  /**
   * Get whether this player has the current battle pass and what level they are on
   */
  GetBattlePassInfo(): any
  showDefaultCrosshair: boolean
  useHotbar: boolean
  hotbarMax: number
  hotbarIndex: number
  // The current voice channel for this user (1 - 32)
  voiceChannel: VoiceChannel
}

declare type VoiceChannel =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
