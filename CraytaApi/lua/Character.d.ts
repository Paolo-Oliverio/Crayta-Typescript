declare class Character extends Entity {
  protected constructor()
  /**
   * TODO Documentation
   */
  Attach(entityToAttach: Entity, socketName: string): void
  /**
   * TODO Documentation
   */
  GetUser(): User
  /**
   * TODO Documentation
   */
  SetAlive(alive: boolean): void
  /**
   * TODO Documentation
   */
  IsAlive(): boolean
  /**
   * TODO Documentation
   */
  GetLookAtPos(): Vector
  /**
   * TODO Documentation
   */
  GetLookAt(): LuaMultiReturn<[Vector, Vector]>
  /**
   * TODO Documentation
   */
  SetInputLocked(inputLocked: boolean): void
  /**
   * TODO Documentation
   */
  SetGrip(gripPresetAsset: GripAsset): void
  /**
   * TODO Documentation
   */
  SetNoGrip(): void
  /**
   * TODO Documentation
   */
  PlayAction(actionName: stringAction, properties: ActionOptions): void //TODO check and change any
  /**
   * TODO Documentation
   */
  PlayAction(actionName: stringAction): void
  /**
   * TODO Documentation
   */
  HasAction(actionName: stringAction): void
  /**
   * TODO Documentation
   */
  GetActions(): string[]
  /**
   * TODO Documentation
   */
  GetActionEvents(actionName: stringAction): string[]
  /**
   * TODO Documentation
   */
  HasActionEvent(actionName: stringAction, eventName: string): boolean
  /**
   * TODO Documentation
   */
  GetPlayLength(actionName: stringAction): number
  /**
   * TODO Documentation
   */
  Launch(impulse: Vector): void
  /**
   * TODO Documentation
   */
  GetInteraction(): LuaMultiReturn<[Entity, HitResult]>
  /**
   * TODO Documentation
   */
  PlayVibrationEffect(vibrationEffect: VibrationEffectAsset): void
  /**
   * TODO Documentation
   */
  PlayManualVibration(
    intensity: number,
    duration: number,
    affectSmallMotors: boolean,
    affectLargeMotors: boolean
  ): void
  /**
   * TODO Documentation
   */
  AdjustAim(...args: any): void
  /**
   * TODO Documentation
   */
  CancelAdjustAim(handle: AdjustAimHandle): void
  /**
   * TODO Documentation
   */
  IsAdjustAimActive(): boolean
  /**
   * TODO Documentation
   */
  speedMultiplier: number
  /**
   * TODO Documentation
   */
  jumpHeightMultiplier: number
  /**
   * TODO Documentation
   */
  canSprint: boolean
  /**
   * TODO Documentation
   */
  canRun: boolean
  /**
   * TODO Documentation
   */
  canWalk: boolean
  /**
   * TODO Documentation
   */
  canMantle: boolean
  /**
   * TODO Documentation
   */
  maxMantleHeight: number
  /**
   * TODO Documentation
   */
  canSlide: boolean
  /**
   * TODO Documentation
   */
  canRoll: boolean
  /**
   * TODO Documentation
   */
  canRelax: boolean
  /**
   * TODO Documentation
   */
  breakFall: boolean
  /**
   * TODO Documentation
   */
  breakFallSpeed: number
  /**
   * TODO Documentation
   */
  canJump: boolean
  /**
   * TODO Documentation
   */
  displayDefaultNameTag: boolean
  /**
   * TODO Documentation
   */
  displayDefaultQuickChat: boolean
  /**
   * TODO Documentation
   */
  canCrouch: boolean
  /**
   * TODO Documentation
   */
  interactionRange: number
  /**
   * TODO Documentation
   */
  cameraType: number
  /**
   * TODO Documentation
   */
  forcedCameraPerspective: number
  /**
   * TODO Documentation
   */
  canIronSight: boolean
  /**
   * TODO Documentation
   */
  thirdPersonFOV: number
  /**
   * TODO Documentation
   */
  thirdPersonIronSightFOV: number
  /**
   * TODO Documentation
   */
  firstPersonFOV: number
  /**
   * TODO Documentation
   */
  firstPersonIronSightFOV: number
  /**
   * TODO Documentation
   */
  ironSightLookSpeedMultiplier: number
  /**
   * TODO Documentation
   */
  cameraDistance: number
  /**
   * TODO Documentation
   */
  cameraPitch: number
  /**
   * TODO Documentation
   */
  cameraYaw: number
  /**
   * TODO Documentation
   */
  cameraLock: boolean
  /**
   * TODO Documentation
   */
  cameraSecondaryAction: number
  /**
   * TODO Documentation
   */
  cameraCollisionEnabled: boolean
  /**
   * TODO Documentation
   */
  damageEnabled: boolean
}