declare const enum Socket {
  spine_01 = "spine_01",
  spine_02 = "spine_02",
  spine_03 = "spine_03",
  spine_04 = "spine_04",
  spine_05 = "spine_05",
  neck_01 = "neck_01",
  neck_02 = "neck_02",
  head = "head",
  clavicle_l = "clavicle_l",
  shoulder_l = "shoulder_l",
  upperarm_l = "upperarm_l",
  lowerarm_l = "lowerarm_l",
  hand_l = "hand_l",
  weapon_l = "weapon_l",
  clavicle_r = "clavicle_r",
  shoulder_r = "shoulder_r",
  upperarm_r = "upperarm_r",
  lowerarm_r = "lowerarm_r",
  hand_r = "hand_r",
  weapon_r = "weapon_r",
  thigh_l = "thigh_l",
  calf_l = "calf_l",
  foot_l = "foot_l",
  thigh_r = "thigh_r",
  calf_r = "calf_r",
  foot_r = "foot_r",
}

type stringSocket =
  | "spine_01"
  | "spine_02"
  | "spine_03"
  | "spine_04"
  | "spine_05"
  | "neck_01"
  | "neck_02"
  | "head"
  | "clavicle_l"
  | "shoulder_l"
  | "upperarm_l"
  | "lowerarm_l"
  | "hand_l"
  | "weapon_l"
  | "clavicle_r"
  | "shoulder_r"
  | "upperarm_r"
  | "lowerarm_r"
  | "hand_r"
  | "weapon_r"
  | "thigh_l"
  | "calf_l"
  | "foot_l"
  | "thigh_r"
  | "calf_r"
  | "foot_r"

declare class Entity {
  protected constructor()
  [prop: string]: any //needed as you can get script added to the entity.
  /**
   * Returns true if the parameter passed to it is a valid entity
   */
  static IsValid(this: void, entityOrNill: Entity): boolean
  /**
   * TODO Documentation
   */
  IsA(table: typeof Entity): boolean
  /**
   * Get the name of this Entity.
   */
  GetName(): string
  /**
   * ### Client Only
   * Revert a property that's been changed on the client back to the server's value for it
   * Client Only
   */
  RevertClientProperty(propertyName: string): void
  /**
   * Set the position of this Entity in 3D space.
   */
  SetPosition(position: Vector): void
  /**
   * Move from current to position over time.
   */
  AlterPosition(position: Vector, time: number): number
  /**
   * Move from fromPosition to toPosition over time.
   */
  AlterPosition(fromPosition: Vector, toPosition: Vector, time: number): number
  /**
   * Get the position of this Entity.
   */
  GetPosition(): Vector
  /**
   * Set the rotation of this Entity.
   */
  SetRotation(rotation: Rotation): void
  /**
   * Rotate from current to rotation over time.
   */
  AlterRotation(rotation: Rotation, time: number): number
  /**
   * Rotate from fromRotation to toRotation over time.
   */
  AlterRotation(
    fromRotation: Rotation,
    toRotation: Rotation,
    time: number
  ): number
  /**
   * Get the rotation of this Entity.
   */
  GetRotation(): Rotation
  /**
   * Get the rotation of this Entity.
   */
  SetRelativePosition(position: Vector): Vector
  /**
   * Move from current to position over time relative to whatever this entity is parented to.
   */
  AlterRelativePosition(position: Vector, time: number): number
  /**
   * Move from fromPosition to toPosition over time relative to whatever this entity is parented to.
   */
  AlterRelativePosition(
    fromPosition: Vector,
    toPosition: Vector,
    time: number
  ): number
  /**
   * Get the position of this Entity relative to whatever this entity is parented to.
   */
  GetRelativePosition(): Vector
  /**
   * Set the rotation of this Entity relative to whatever this entity is parented to.
   */
  SetRelativeRotation(rotation: Rotation): void
  /**
   * Rotate from current to rotation over time relative to whatever this entity is parented to.
   */
  AlterRelativeRotation(rotation: Rotation, time: number): number
  /**
   * Rotate from fromRotation to toRotation over time relative to whatever this entity is parented to.
   */
  AlterRelativeRotation(
    fromRotation: Rotation,
    toRotation: Rotation,
    time: number
  ): number
  /**
   * Get the rotation of this Entity relative to whatever this entity is parented to.
   */
  GetRelativeRotation(): Rotation
  /**
   * Get the forward facing vector of an Entity from its rotation.
   */
  GetForward(): Vector
  /**
   * Get the forward facing vector of an Entity from its rotation.
   */
  GetRight(): Vector
  /**
   * Get the forward facing vector of an Entity from its rotation.
   */
  GetUp(): Vector
  /**
   * Set the rotation of an Entity to make its front face in a given direction.
   */
  SetForward(forward: Vector): void
  /**
   * Set the rotation of an Entity to make its front face in a given direction, and its top point in another.
   */
  SetForward(forward: Vector, up: Vector): void
  /**
   * Play a sound Asset on this Entity, returning a Handle which can be used to stop the sound.
   */
  PlaySound(sound: SoundAsset): SoundHandle
  /**
   * Play a sound Asset on this Entity, returning a Handle which can be used to stop the sound.
   *
   * Fades in over the given fadeIn time.
   */
  PlaySound(sound: SoundAsset, fadeIn: number): SoundHandle
  /**
   * Play a sound Asset on this Entity, returning a Handle which can be used to stop the sound.
   *
   * Fades in over the given fadeIn time.
   *
   * Fades out any sound already playing in the GroupName with the given fadeIn time.
   */
  PlaySound(sound: SoundAsset, fadeIn: number, groupName: string): SoundHandle
  /**
   * Play a sound Asset on this Entity but without a 3D transform on the sound (useful for UI sounds, stereo music stings, etc).
   */
  PlaySound2D(sound: SoundAsset): SoundHandle
  /**
   * Play a sound Asset on this Entity but without a 3D transform on the sound (useful for UI sounds, stereo music stings, etc).
   *
   * Fades in over the given fadeIn time.
   */
  PlaySound2D(sound: SoundAsset, fadeIn: number): SoundHandle
  /**
   * Play a sound Asset on this Entity but without a 3D transform on the sound (useful for UI sounds, stereo music stings, etc).
   *
   * Fades in over the given fadeIn time.
   *
   * Fades out any sound already playing in the GroupName with the given fadeIn time.
   */
  PlaySound2D(sound: SoundAsset, fadeIn: number, groupName: string): SoundHandle
  /**
   * Play a sound Asset on this Entity at the given location.
   */
  PlaySoundAtLocation(location: Vector, sound: SoundAsset): SoundHandle
  /**
   * Play a sound Asset on this Entity at the given location.
   *
   * Fades in over the given fadeIn time.
   */
  PlaySoundAtLocation(
    location: Vector,
    sound: SoundAsset,
    fadeIn: number
  ): SoundHandle
  /**
   * Play a sound Asset on this Entity at the given location.
   *
   * Fades in over the given fadeIn time.
   *
   * Fades out any sound already playing in the GroupName with the given fadeIn time.
   */
  PlaySoundAtLocation(
    location: Vector,
    sound: SoundAsset,
    fadeIn: number,
    groupName: string
  ): SoundHandle
  /**
   * Given a sound Handle stop the sound on this Entity.
   */
  StopSound(handle: SoundHandle): void
  /**
   * Given a sound Handle stop the sound on this Entity.
   *
   * Fade the sound out over the given fadeOut time.
   */
  StopSound(handle: SoundHandle, fadeOut: number): void
  /**
   * Play a particle effect Asset on this Entity, returning a Handle which can be used to stop the effect.
   */
  PlayEffect(effect: EffectAsset): EffectHandle
  /**
   * Play a particle effect Asset on this Entity, returning a Handle which can be used to stop the effect.
   *
   * Optionally the effect is attached to the entity and so all spawned particles are relative to it.
   */
  PlayEffect(effect: EffectAsset, attached: boolean): EffectHandle
  /**
   * Play a particle effect Asset at a given world location and rotation, returning a Handle which can be used to stop the effect.
   */
  PlayEffectAtLocation(
    location: Vector,
    rotation: Rotation,
    effect: EffectAsset
  ): EffectHandle
  /**
   * Play a particle effect Asset at a given world location and rotation, returning a Handle which can be used to stop the effect.
   * Optionally the effect is attached to the entity and so all spawned particles are relative to it.
   */
  PlayEffectAtLocation(
    location: Vector,
    rotation: Rotation,
    effect: EffectAsset,
    attached: boolean
  ): EffectHandle
  /**
   * TODO Documentation
   */
  StopEffect(handle: EffectHandle): void
  /**
   * ### Server Only
   * Clone the Entity returning the clone.
   */
  Clone(): Entity
  /**
   * ### Server Only
   * Attach this Entity to another Entity
   */
  AttachTo(entityToAttachTo: Entity): void
  /**
   * ### Server Only
   * Attach this Entity to a Character entity, using the named socket
   */
  AttachTo(characterToAttachTo: Character, socketName: stringSocket | Socket): void
  /**
   * ### Server Only
   * Detach from parent
   */
  Detach(): void
  /**
   * Apply damageAmount damage to the Entity (by calling OnDamage on it on any scripts that override that), also pass a HitResult from a World Raycast function and a shootDirection Vector and fromEntity which will be passed to the OnDamage function.
   */
  ApplyDamage(
    damageAmount: number,
    hitResult: HitResult,
    shootDirection: Vector,
    fromEntity: Entity
  ): void
  /**
   * Apply damageAmount damage to the Entity (by calling OnDamage on it on any scripts that override that), also pass a HitResult from a World Raycast function and a shootDirection Vector and fromEntity which will be passed to the OnDamage function.
   *
   * DamageModifiers is a table of { voxel = <voxelasset>, damageMultiplier = <number> } tables, and/or scripts that have voxel and damageMultiplier properties: { name = "voxel", type = "voxelasset" } and { name = "damageMultiplier", type = "number" }.
   */
  ApplyDamage(
    damageAmount: number,
    hitResult: HitResult,
    shootDirection: Vector,
    fromEntity: Entity,
    damageModifiers: damageModifiers
  ): void
  /**
   * Apply damageAmount damage to the Entity (by calling OnDamage on it on any scripts that override that), also pass a shootDirection Vector and fromEntity which will be passed to the OnDamage function.
   */
  ApplyDamage(
    damageAmount: number,
    shootDirection: Vector,
    fromEntity: Entity
  ): void
  /**
   * Apply damageAmount damage to the Entity (by calling OnDamage on it on any scripts that override that), also pass a shootDirection Vector and fromEntity which will be passed to the OnDamage function.
   *
   * DamageModifiers is a table of { voxel = <voxelasset>, damageMultiplier = <number> } tables, and/or scripts that have voxel and damageMultiplier properties: { name = "voxel", type = "voxelasset" } and { name = "damageMultiplier", type = "number" }.
   */
  ApplyDamage(
    damageAmount: number,
    shootDirection: Vector,
    fromEntity: Entity,
    damageModifiers: damageModifiers
  ): void
  /**
   * Get a parent Entity that this Entity is attached to either within the world tree or using the Attach function.
   */
  GetParent(): Entity
  /**
   * Get all children directly below this. The order of children is not guaranteed, and may change randomly.
   */
  GetChildren(): Entity[]
  /**
   * ### Server Only
   * Destroy an Entity. Use with care as any variables referencing that Entity will now be invalid.
   */
  Destroy(): void
  /**
   * Call eventName function with the given args on all scripts that have it as a function.
   *
   * If called on the server do it only on the server, if called on a client do it only on that client.
   */
  SendToScripts(eventName: string, ...args: any): void
  /**
   * ### Server Only
   * Call eventName on all scripts of this Entity on all clients connected to the server with the given args.
   */
  SendToAllClients(eventName: string, ...args: any): void
  /**
   * ### Local Only
   * Call eventName on all script of this Entity on the server.
   */
  SendToServer(eventName: string, ...args: any): void
  /**
   * ### Server Only
   * Call eventName on all scripts of this Entity on the client that owns the Player or User this script is attached to.
   */
  SendToLocal(eventName: string, ...args: any): void
  /**
   * See if this Entity is owned by the local client.
   */
  IsLocal(): boolean
  /**
   * This is alternative to entity.scriptName which is the preferred way of getting a script.
   */
  FindScript(scriptName): Script
  /**
   * This is alternative to entity.scriptName which is the preferred way of getting a script.
   *
   * This can be recursive to find the script on any child entities.
   */
  FindScript(scriptName, recursive: boolean): Script
  /**
   * Find a script by its script asset.
   */
  FindScript(templateRefScript: ScriptAsset): Script
  /**
   * Find a script by its script asset.
   *
   * This can be recursive to find the script on any child entities.
   */
  FindScript(templateRefScript: ScriptAsset, recursive: boolean): Script
  /**
   * Find a script with the named property on it and return value from the property
   */
  FindScriptProperty(propertyName: string): Object
  /**
   * Find all scripts named scriptName recursively on this entity and all child entities.
   *
   * Most often used where multiple scripts are used to simulate an array of structures.
   */
  FindAllScripts(scriptName: string): Script[]
  /**
   * Find all scripts of the given script asset recursively on this entity and all child entities.
   *
   * Most often used where multiple scripts are used to simulate an array of structures.
   */
  FindAllScripts(templateRefScript: ScriptAsset): Script
  /**
   * Find all scripts named scriptName on this entity (and optionally recursively on all child entities if recursive flag is set).
   *
   * Most often used where multiple scripts are used to simulate an array of structures.
   */
  FindAllScripts(scriptName: string, recursive: boolean): Script
  /**
   * Find all scripts of the given script asset on this entity (and optionally recursively on all child entities if recursive flag is set).
   *
   * Most often used where multiple scripts are used to simulate an array of structures.
   */
  FindAllScripts(templateRefScript: ScriptAsset, recursive: boolean): Script
  /**
   * This is alternative to entity.widgetName which is the preferred way of getting a widget.
   */
  FindWidget(widgetName: string): Widget
  /**
   * This is alternative to entity.widgetName which is the preferred way of getting a widget. This can be recursive to find the widget on any child entities.
   */
  FindWidget(widgetName: string, recursive: boolean): Widget
  /**
   * Find a widget by its widget asset.
   */
  FindWidget(widget: WidgetAsset): Widget
  /**
   * Find a widget by its widget asset. This can be recursive to find the widget on any child entities.
   */
  FindWidget(widget: WidgetAsset, recursive: boolean): Widget
  /**
   * ### Server Only
   * When called with an Entity that is owned by a particular client this sees if that Entity has been inited on that client (by calling LocalInit).
   */
  IsLocalReady(): boolean
  /**
   * Play a timeline from variable args.
   *
   * Each key on the timeline is a number for time in seconds followed by a Vector and/or Rotation.
   *
   * An optional easing type can be given for each key, which describes how to interpolate between the previous key and this one, from EaseIn, EaseOut, EaseInOut, Linear (default)
   *
   * The easing types can also be set per axis.
   */
  PlayTimeline(...args: any): number
  /**
   * Loop a timeline from variable args.
   * *
   * Each key on the timeline is a number for time in seconds followed by a Vector and/or Rotation.
   *
   * An optional easing type can be given for each key, which describes how to interpolate between the previous key and this one, from EaseIn, EaseOut, EaseInOut, Linear (default)
   *
   * The easing types can also be set per axis.
   */
  PlayTimelineLoop(...args: any): void
  /**
   * Loop a timeline back and forth from variable args.
   *
   * Each key on the timeline is a number for time in seconds followed by a Vector and/or Rotation.
   *
   * An optional easing type can be given for each key, which describes how to interpolate between the previous key and this one, from EaseIn, EaseOut, EaseInOut, Linear (default)
   *
   * The easing types can also be set per axis.
   */
  PlayTimelinePingPong(...args: any): void
  /**
   * Play a timeline, relative to an entity's parent transform, from variable args.
   *
   * Each key on the timeline is a number for time in seconds followed by a Vector and/or Rotation.
   *
   * An optional easing type can be given for each key, which describes how to interpolate between the previous key and this one, from EaseIn, EaseOut, EaseInOut, Linear (default)
   *
   * The easing types can also be set per axis.
   */
  PlayRelativeTimeline(...args: any): number
  /**
   * Loop a timeline, relative to an entity's parent transform, from variable args.
   *
   * Each key on the timeline is a number for time in seconds followed by a Vector and/or Rotation.
   *
   * An optional easing type can be given for each key, which describes how to interpolate between the previous key and this one, from EaseIn, EaseOut, EaseInOut, Linear (default)
   *
   * The easing types can also be set per axis.
   */
  PlayRelativeTimelineLoop(...args: any): number
  /**
   * Loop a timeline back and forth, relative to an entity's parent transform, from variable args.
   *
   * Each key on the timeline is a number for time in seconds followed by a Vector and/or Rotation.
   *
   * An optional easing type can be given for each key, which describes how to interpolate between the previous key and this one, from EaseIn, EaseOut, EaseInOut, Linear (default)
   *
   * The easing types can also be set per axis.
   */
  PlayRelativeTimelinePingPong(...args: any): number
  /**
   * Cancel any running timeline
   */
  CancelTimeline(): void
  /**
   * Given an entity, get the Template it is an instance of (if there is one).
   *
   * Warning - this will return the template even if lots of things have been adjusted on the instance.
   */
  GetTemplate(): Template
  /**
   * Get Velocity. Centimeters per second.
   */
  GetVelocity(): Vector
  /**
   * Set Velocity. Centimeters per second.
   */
  SetVelocity(velocity: Vector): void
  /**
   * Get AngularVelocity. Degrees per second.
   */
  GetAngularVelocity(): Rotation
  /**
   * Set AngularVelocity. Degrees per second.
   */
  SetAngularVelocity(angularVelocity: Rotation): void
  /**
   * Set whether any physical aspect of the Entity (generally a mesh or a light) is visible within the world.
   */
  visible: boolean
  /**
   * Called when this entity is interacted with by a player, with the player Character and the HitResult passed as arguments, as well as the Entity from which the onInteract event was sent.
   *
   * An alternative to listening for OnInteract in a script on the entity.
   */
  onInteract: Event
  /**
   * Called when this entity is destroyed, with the Entity which sent the event passed as an argument.
   *
   * An alternative to listening for OnDestroy in a script on the entity.
   */
  onDestroy: Event
}
