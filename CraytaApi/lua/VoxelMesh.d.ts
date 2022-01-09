declare class VoxelMesh extends Entity {
  protected constructor()
  /**
   * Change a single voxel in world space.
   * Server Only
   */
  SetVoxel(pos: Vector, voxelAsset: VoxelAsset): void
  /**
   * Change a cuboid of voxels with given dimensions in world units (centimeters). 1 voxel = 25cm.
   * Server Only
   */
  SetVoxelBox(pos: Vector, dimensions: Vector, voxelAsset: VoxelAsset): void
  /**
   * Change a cube of voxels with a given half-size in world units (centimeters) for each axis. 1 voxel = 25cm.
   * Server Only
   */
  SetVoxelBox(pos: Vector, halfSize: number, voxelAsset: VoxelAsset): void
  /**
   * Change an elipsoid of voxels with given dimensions in world units (centimeters). 1 voxel = 25cm.
   * Server Only
   */
  SetVoxelSphere(pos: Vector, dimensions: Vector, voxelAsset: VoxelAsset): void
  /**
   * Change a sphere of voxels with a given radius in world units (centimeters). 1 voxel = 25cm.
   * Server Only
   */
  SetVoxelSphere(pos: Vector, radius: number, voxelAsset: VoxelAsset): void
  /**
   * Reset any SetVoxel...() calls that have been done during play, returning the voxel prop to	its starting state (ie as it was in the editor).
   * Server Only
   */
  ResetVoxels(): void
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
  DestroyThruster(Thruster): void
  /**
   * Add Impulse. An integral of force over a time interval. Newton seconds.
   */
  AddImpulse(impulse: Vector): void
  /**
   * Add an angular impulse. An integral of torque over a time interval. Newton seconds.
   */
  AddAngularImpulse(angularImpulse: Rotation): void
  /**
   * Add an angular impulse. An integral of torque over a time interval. Newton seconds.
   */
  mesh: VoxelMesh
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
