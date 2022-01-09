declare namespace World {
  /**
   * Todo Doc
   */
}

declare interface DamageModifier {
  voxel: VoxelAsset
  damageMultiplier: number
}
/**
 * VoxelProperties is a table of { voxel = <voxelasset>, health = <number>, healTime = <number> } tables,
 *
 * and/or scripts that have voxel, and optionally health and healTime properties: { name = "voxel", type = "voxelasset" }, { name = "health", type = "number", default = 100 }, { name = "healTime", type = "number", editor = "seconds", default = 3 }.
 */
declare interface VoxelProperties {
  voxel: VoxelAsset
  health: number
  healTime: number
}
/**
 * DamageModifiers is a table of { voxel = <voxelasset>, damageMultiplier = <number> } tables,
 *
 * and/or scripts that have voxel and damageMultiplier properties: { name = "voxel", type = "voxelasset" } and { name = "damageMultiplier", type = "number" }.
 */
declare type damageModifiers = DamageModifier[]

declare interface World {
  /**
   * ### Client Only
   * Revert a property that's been changed on the client back to the server's value for it
   */
  RevertClientProperty(propertyName: string): void
  /**
   * Send a ray (line) from start position to end position, and call the collisionCallback with	the entity that was hit and a HitResult structure if any Entity is hit along the way.
   *
   *Pass an	entityToIgnore to tell it not to hit that one (for example ignore the player when doing a ray from a gun the player is holding).
   */
  Raycast(
    start: Vector,
    end: Vector,
    entityToIgnore: Entity,
    collisionCallback: collisionCallback
  ): void
  /**
   * Send a ray (line) from start position to end position, and call the collisionCallback with the entity that was hit and a HitResult structure if any Entity is hit along the way
   *
   * Pass an array of entities to ignore.
   */
  Raycast(
    start: Vector,
    end: Vector,
    entitiesToIgnoreTable: Array<Entity>,
    collisionCallback: collisionCallback
  ): void
  /**
   * Send a ray (line) from start position to end position, and call the collisionCallback with the entity that was hit and a HitResult structure if any Entity is hit along the way.
   *
   * Pass an entityToIgnore to tell it not to hit that one (for example ignore the player when doing a ray from a gun the player is holding).
   *
   * High fidelity collisions will ignore any collision with an entity's bounding box if it would not also collide with it's more complex inner collision
   */
  Raycast(
    start: Vector,
    end: Vector,
    entityToIgnore: Entity,
    highFidelityCollision: boolean,
    collisionCallback: collisionCallback
  ): void
  /**
   * Send a ray (line) from start position to end position, and call the collisionCallback with the entity that was hit and a HitResult structure if any Entity is hit along the way.
   *
   * Pass an array of entities to ignore.
   *
   * High fidelity collisions will ignore any collision with an entity's bounding box if it would not also collide with it's more complex inner collision.
   */
  Raycast(
    start: Vector,
    end: Vector,
    entitiesToIgnoreTable: Array<Entity>,
    highFidelityCollision: boolean,
    collisionCallback: collisionCallback
  ): void
  /**
   * Find a named Entity within the world.
   *
   * Generally an entity type property which is filled in in the editor is a better option.
   */
  Find(name: string): Entity
  /**
   * Return all entities in the world.
   *
   * ### Can be very slow.
   */
  FindAll(): Entity[]
  /**
   * Return all entities in the world of the given type (Light, Mesh, etc).
   *
   * ### Can be very slow.
   */
  FindAll(entityType: typeof Entity): Entity[]
  /**
   * Find all scripts named scriptName recursively in the world.
   *
   * Most often used where multiple scripts are used to simulate an array of structures.
   */
  FindAllScripts(scriptName: string): Script[]
  /**
   * Find all scripts named scriptName recursively in the world.
   *
   * Most often used where multiple scripts are used to simulate an array of structures.
   */
  FindAllScripts(templateRefScript: ScriptAsset): Script[]
  /**
   * Find any entity with a script matching the script asset recursively in the world, returns the script if found.
   */
  FindScript(scriptName: string): Script
  /**
   * Find any entity with a script matching the script asset recursively in the world, returns the script if found.
   */
  FindScript(templateRefScript: ScriptAsset): Script
  /**
   * Find a Template in the world by name. Returns nil if not found
   */
  FindTemplate(scriptName: string): Template
  /**
   * Get the User that this client is owned by.
   * Client Only
   */
  GetLocalUser(): User
  /**
   * Get a table containing all the User entities within the current world.
   *
   *  This works on the server or the client however the client version of the table might lag behind the server version.
   */
  GetUsers(): User[]
  /**
   * Call the given callback for each User with the User as the argument
   */
  ForEachUser(userCallback: userCallback, ...args: any[]): void
  /**
   * ### Server Only
   * Applies point damage to the first Entity that intersects the given ray.
   */
  ApplyPointDamage(
    baseDamage: number,
    rayStart: Vector,
    direction: Vector,
    fromEntity: Entity
  ): void
  /**
   * ### Server Only
   * Applies point damage to the first Entity that intersects the given ray.
   */
  ApplyPointDamage(
    baseDamage: number,
    rayStart: Vector,
    direction: Vector,
    fromEntity: Entity,
    damageModifiers: damageModifiers
  ): void
  /**
   * ### Server Only
   * Applies radial damage to all Entities within a radius of an origin.
   */
  ApplyRadialDamage(
    baseDamage: number,
    origin: Vector,
    radius: number,
    falloff: number,
    fromEntity: Entity
  ): void
  /**
   * ### Server Only
   * Applies radial damage to all Entities within a radius of an origin.
   */
  ApplyRadialDamage(
    baseDamage: number,
    origin: Vector,
    radius: number,
    falloff: number,
    fromEntity: Entity,
    damageModifiers: damageModifiers
  ): void
  /**
   * Set the voxel properties of the world.
   */
  SetVoxelProperties(voxelProperties: VoxelProperties[]): void

  SetVoxelProperties(
    table: VoxelProperties[],
    defaultMaxHealth: number,
    defaultHealTime: number
  ): void
  /**
   * Get the time of day as a value between 0 and 1
   */
  GetTimeOfDay(): number
  /**
   * Spawn a new Entity from the template pointed at by templateAsset, at the given position and rotation.
   */
  Spawn(templateAsset: Template, position: Vector, rotation: Rotation): Entity
  /**
   *Spawn a new Entity from the template pointed at by templateAsset, at the given locator's position and rotation.
   */
  Spawn(templateAsset: Template, locatorEntity: Locator): Entity
  /**
   * Try calling eventName on all scripts of all Entities within the
   */
  BroadcastToScripts(eventName: string, ...args: any[]): void
  /**
   * Get server up time in seconds (can be called on client or server)
   */
  GetServerTime(): number
  /**
   * Gets unit time (number of seconds that have elapsed since Jan 1 1970).
   */
  GetUTCTime(): number
  GetGames(railName: string, callback: varargCallback): void
  GetGames(railNamesTable: string[], callback: varargCallback): void
  /**
   * Gets the current active challenges
   */
  GetActiveChallenges(): any
  PlayCameraShakeEffectAtLocation(
    cameraShake: CameraShakeAsset,
    scale: number,
    location: Vector,
    innerRadius: number,
    outerRadius: number,
    falloff: number,
    orientToDirection: boolean
  )
  PlayCameraShakeEffectAtLocation(
    cameraShake: CameraShakeAsset,
    location: Vector,
    innerRadius: number,
    outerRadius: number,
    falloff: number,
    orientToDirection: boolean
  )
  GetWorldAsset(): WorldAsset

  startTime: number
  dayLength: number
  sunDirection: number
  sunColor: Color
  /**
   * Intensity of the sun
   */
  sunIntensity: number
  /**
   * Intensity of the ambient light
   */
  skyLightIntensity: number
  /**
   * Post Process effect
   */
  postProcess: PostProcessAsset
  /**
   * Color Grading effect
   */
  colorGrading: ColorGradingAsset
  /**
   * Inner Horizon asset
   */
  innerHorizon: HorizonAsset
  /**
   * Outer Horizon asset
   */
  outerHorizon: HorizonAsset
  /**
   * Sky Mesh asset
   */
  skyMesh: SkyMeshAsset
  /**
   * Enable/Disable Shadows
   */
  enableShadows: boolean
  /**
   * Fog start distance
   */
  fogStartDistance: number
  /**
   * Fog density
   */
  fogDensity: number
  /**
   * Fog falloff
   */
  fogFalloff: number
  /**
   * Color of the fog
   */
  fogColor: Color
  /**
   * Fog Affects Atmosphere
   */
  fogAffectedByAtmosphere: boolean
  /**
   * Cloud Density
   */
  cloudDensity: number
  /**
   * Cloud Coverage
   */
  cloudCoverage: number
  /**
   * Cloud Altitude
   */
  cloudAltitude: number
  /**
   * Cloud Layer Thickness
   */
  cloudLayerThickness: number
  /**
   * atmosphereThickness Set the thickness of the atmosphere. 1 = None, 2 = Thin, 3 = Earth-Like	TODO enum
   */
  atmosphereThickness: number
  /**
   * Atmospheric Scattering Color
   */
  atmosphericScatteringColor: Color
  /**
   * Atmosphere Tint
   */
  atmosphereTint: Color
  /**
   * Set whether the death plane is active or not
   */
  deathPlaneActive: boolean
  /**
   * Height of the death plane, when active the game will send OnFellToDeath to any Player who falls
   */
  deathPlaneZ: number
}
