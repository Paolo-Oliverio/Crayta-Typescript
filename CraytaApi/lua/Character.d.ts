declare class Character extends Entity {
  protected constructor()
  /**
   * Get the User entity which controls this Character
   */
  GetUser(): User
  /**
   * ### Server Only
   * For a Player set it to be alive (true) or dead (false).
   */
  SetAlive(alive: boolean): void
  /**
   * Get whether a Player is alive. Return false for non-Player.
   */
  IsAlive(): boolean
  /**
   * ### Server Only, Local Only
   * Get the point the player is looking at, for an action camera this is the same as User:GetCameraLookAtPos but for orbit style cameras it will be in front of the player
   */
  GetLookAtPos(): Vector
  /**
   * ### Server Only, Local Only
   * Return two values, the position of the player's virtual "eye" and the position the player is looking at. For an action camera this is the same as User:GetCameraLookAt but for an orbit style camera it will be the player's head position and what is in front of the player.
   */
  GetLookAt(): LuaMultiReturn<[Vector, Vector]>
  /**
   * ### Server Only, Local Only
   * Lock player control
   */
  SetInputLocked(inputLocked: boolean): void
  /**
   * Set the current grip animations used by this player. Passing nil is the same as calling SetNoGrip()
   */
  SetGrip(gripPresetAsset: GripAsset): void
  /**
   * Reverts the player back to the default 'unarmed' animations. Can also be achieved by calling SetGrip(nil)
   */
  SetNoGrip(): void
  /**
   * Play an animation action, with properties specifying how it should be played
   */
  PlayAction(actionName: stringAction, properties: ActionOptions): void //TODO check and change any
  /**
   * Play an animation action with default properties
   */
  PlayAction(actionName: stringAction): void
  /**
   * Returns true if the current grip can perform this type of action
   */
  HasAction(actionName: stringAction): void
  /**
   * Get the name of every available action for this grip type
   */
  GetActions(): string[]
  /**
   * Get the name of every event available event for an action
   */
  GetActionEvents(actionName: stringAction): string[]
  /**
   * Returns true if this action has an animation event of the specified name
   */
  HasActionEvent(actionName: stringAction, eventName: string): boolean
  /**
   * Returns the length of an animation, in seconds, assuming a playbackSpeed of 1 is set
   */
  GetPlayLength(actionName: stringAction): number
  /**
   * Launch the character
   */
  Launch(impulse: Vector): void
  /**
   * ### Server Only, Local Only
   * Get whichever Entity you would interact with if you pressed interact
   */
  GetInteraction(): LuaMultiReturn<[Entity, HitResult]>
  /**
   * TODO Documentation
   */
  PlayVibrationEffect(vibrationEffect: VibrationEffectAsset): void
  /**
   * TODO Documentation
   */
  PlayManualVibration(intensity: number, duration: number, affectSmallMotors: boolean, affectLargeMotors: boolean): void
  /**
   * TODO Documentation
   */
  AdjustAim(...args: any): AdjustAimHandle
  /**
   * TODO Documentation
   */
  CancelAdjustAim(handle: AdjustAimHandle): void
  /**
   * TODO Documentation
   */
  IsAdjustAimActive(): boolean
  /**
   * Multiplier on movement speed (default is 1.0)
   */
  speedMultiplier: number
  /**
   * Multiplier on jump height (default is 1.0)
   */
  jumpHeightMultiplier: number
  /**
   * Turn on or off ability to sprint
   */
  canSprint: boolean
  /**
   * Turn on or off ability to run
   */
  canRun: boolean
  /**
   * Turn on or off ability to walk
   */
  canWalk: boolean
  /**
   * Turn on or off ability to walk
   */
  canMantle: boolean
  /**
   * Set the maximum height that a player can mantle
   */
  maxMantleHeight: number
  /**
   * Turn on or off ability to slide
   */
  canSlide: boolean
  /**
   * Turn on or off ability to slide
   */
  canRoll: boolean
  /**
   * Turn on or off ability to slide
   */
  canRelax: boolean
  /**
   * Turn on or off ability to slide
   */
  breakFall: boolean
  /**
   * Turn on or off ability to slide
   */
  breakFallSpeed: number
  /**
   * Turn on or off ability to jump
   */
  canJump: boolean
  /**
   * Turn on or off the default name tag
   */
  displayDefaultNameTag: boolean
  /**
   * Turn on or off the default overhead quick chat
   */
  displayDefaultQuickChat: boolean
  /**
   * Turn on or off ability to crouch or go prone
   */
  canCrouch: boolean
  /**
   * Interaction range (from camera in cm)
   */
  interactionRange: number
  /**
   * Interaction range (from camera in cm)
   */
  cameraType: number
  /**
   * Set restrictions on the action player camera perspective. 1 = No Restrictions, 2 = 1st Person Only, 3 = 3rd Person Only. (Default is 1)
   */
  forcedCameraPerspective: number
  /**
   * Will the action camera iron-sight on secondary press
   */
  canIronSight: boolean
  /**
   * FOV of the third person action camera
   */
  thirdPersonFOV: number
  /**
   * FOV of the third person action camera in Iron Sight mode
   */
  thirdPersonIronSightFOV: number
  /**
   * FOV of the first person camera
   */
  firstPersonFOV: number
  /**
   * FOV of the first person camera in Iron Sight mode
   */
  firstPersonIronSightFOV: number
  /**
   * Speed multiplier of the look controls in Iron Sight mode
   */
  ironSightLookSpeedMultiplier: number
  /**
   * Set the orbit camera max distance from the character
   */
  cameraDistance: number
  /**
   * Set the orbit camera's pitch
   */
  cameraPitch: number
  /**
   * Set the orbit camera's pitch
   */
  cameraYaw: number
  /**
   * Lock/Unlock the orbit camera
   */
  cameraLock: boolean
  /**
   * Set what the secondary action does in the orbit camera
   */
  cameraSecondaryAction: number
  /**
   * Enable/Disable the camera's collision
   */
  cameraCollisionEnabled: boolean
  /**
   * Turn on or off damage (ie calling of entry point OnDamaged).
   */
  damageEnabled: boolean
}