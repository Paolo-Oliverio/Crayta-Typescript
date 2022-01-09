declare class Mesh extends Entity {
  protected constructor()
  /**
   * Play a named animation on this mesh, once.
   */
  PlayAnimation(animationName: string): AnimationHandle
  /**
   * Play a named animation on this mesh, optionally looping.
   */
  PlayAnimation(animationName: string, looping: boolean): AnimationHandle
  /**
   * Play a named animation on this mesh, optional table can contain named values looping, either playbackTime or playbackSpeed and either 'positionFactor' or 'positionTime'
   */
  PlayAnimation(animationName: string, properties: any): AnimationHandle //TODO: change any
  /**
   * Play a named animation on this mesh, repeatedly.
   */
  PlayAnimationLooping(animationName: string): AnimationHandle
  /**
   * This is the same as the PlayAnimation function taking a table containing playbackTime or playbackSpeed except that looping defaults to true
   */
  PlayAnimationLooping(animationName: string, properties: any): AnimationHandle //TODO: change any
  /**
   * Get a table of animation names that you can play on this mesh with PlayAnimation.
   */
  GetAnimationNames(): any
  /**
   * Get the length of an animation in seconds
   */
  GetAnimationLength(animationName: string): number
  /**
   * Add a thruster to an entity
   */
  CreateThruster(): Thruster
  /**
   * Add a thruster to an entity
   */
  CreateRelativeThruster(): Thruster
  /**
   * Destroy a thruster
   */
  DestroyThruster(handle: Thruster): void
  /**
   * 	Add Impulse. An integral of force over a time interval. Newton seconds.
   */
  AddImpulse(impulse: Vector): void
  /**
   * Add Angular Impulse. An integral of torque over a time interval. Newton seconds.
   */
  AddAngularImpulse(angularImpulse: Rotation): void
  /**
   * Add an angular impulse. An integral of torque over a time interval. Newton seconds.
   */
  mesh: MeshAsset
  /**
   * Turn on or off collision (ie calling entry point OnCollision).
   */
  collisionEnabled: boolean
  /**
   * Turn on or off damage (ie calling of entry point OnDamaged).
   */
  damageEnabled: boolean
  /**
   * Turn on or off damage (ie calling of entry point OnDamaged).
   */
  physicsEnabled: boolean
  /**
   * Turn on or off Gravity.
   */
  gravityEnabled: boolean
  /**
   * Called when this entity is collided with by a player Character with the Character passed as an argument,
   * as well as the voxel mesh Entity from which the onCollision event was sent.
   * An alternative to listening for OnCollision in a script on the entity.
   */
  onCollision: Event
  /**
   * Called when this entity is damaged with the amount of damage, the entity causing the damage and a HitResult
   * structure, as well as the voxel mesh Entity from which the onDamage event was sent.
   * An alternative to listening for OnDamage in a script on the entity.
   */
  onDamage: Event
}
