type ScheduleHandle = undefined | null

declare interface ScriptEvents {
  /**
   * ### Server Only
   * Called to initialize a script on the server.
   */
  Init(): void
  /**
   * ### Client Only
   * Called to initialize a script on the client.
   */
  ClientInit(): void
  /**
   * ### Server Only
   * Called when a player interacts with an entity on all scripts of the entity.
   */
  OnInteract(char: Character, hit: HitResult): void
  /**
   * ### Server Only
   * Called when a player collides with an entity on all scripts of the entity.
   *
   * Also calls this function on the player's scripts with the entity as the argument.
   */
  OnCollision(other: Entity): void
  /**
   * Called each frame on server
   */
  OnTick(dt: number): void
  /**
   * Called each frame on client"
   */
  ClientOnTick(dt: number): void
  /**
   * ### Server Only
   * Called by a trigger component when
   * an entity enters the trigger volume
   */
  OnTriggerEnter(other: Entity): void
  /**
   * ### Server Only"
   * Called by a trigger component when"
   * an entity exits the trigger volume"
   */
  OnTriggerExit(other: Entity): void
  /**
   * ### Server Only
   */
  OnDestroy(): void
}
declare interface PlayerEvents {
  /**
   * ### Server Only
   * Called on server when the user's hotbar index changes, either by using the previous and next buttons
   * or using the hotbar keys on a keyboard.
   *
   * Calls function on all user and player scripts.
   */
  OnHotbarChanged(hotbarIndex: number): void
  /**
   * ### Local Only
   * Called each frame on owner's client"
   */
  LocalOnTick(dt: number): void
  /**
   * ### Server Only
   * Called when a new user joins the game.
   */
  OnUserLogin(user: User): void
  /**
   * ### Server Only
   * Called when a new user leaves the game.
   */
  OnUserLogout(user: User): void
  /**
   * ### Local Only
   * Called to initialize a script on the client that controls this entity (eg player, user, etc...)
   */
  LocalInit(): void
  /**
   * ### Local Only
   * Called to initialize a script on the client that controls this entity (eg player, user, etc...)
   */
  LocalInit(): void
  /**
   * ### Server Only"
   * Called by the game on a Player when"
   * the Player is below the death plane setting"
   */
  OnDeathPlaneTrigger(): void
  /**
  "* ### Server on Character and User
  "*/
  OnIronSightStart(): void
  /**
  "* ### Server on Character and User
  "*/
  OnIronSightStop(): void
  /**
   * ### Server on Character and User
   */
  OnSprintStart(): void
  /**
   * ### Server on Character and User
   */
  OnSprintStop(): void
  /**
   * ### Server on Character and User
   */
  OnMantleStart(): void
  /**
   * ### Server on Character and User
   */
  OnMantleStop(): void
  /**
   * ### Server on Character and User
   */
  OnSlideStart(): void
  /**
   * ### Server on Character and User
   */
  OnSlideStop(): void
  /**
   * ### Server on Character and User
   */
  OnRollStart(): void
  /**
   * ### Server on Character and User
   */
  OnRollStop(): void
  /**
   * ### Server on Character and User
   */
  OnCrouch(): void
  /**
   * ### Server on Character and User
   */
  OnStand(): void
  /**
   * ### Server on Character and User
   */
  OnJump(): void
  /**
   * ### Server on Character and User
   */
  OnButtonPressed(button: stringButton): void
  /**
   * ### Server on Character and User
   */
  OnButtonReleased(button: stringButton): void
  /**
   * ### Server on Character and User
   */
  OnSpawnEffectEnded(): void
  /**
   * ### Server on Character and User
   */
  OnActivityTriggered(id: string, display: Text, category: string): void
  /**
   * ### Local Only
   */
  LocalOnIronSightStart(): void
  /**
   * ### Local Only
   */
  LocalOnIronSightStop(): void
  /**
   * ### Local Only
   */
  LocalOnSprintStart(): void
  /**
   * ### Local Only
   */
  LocalOnSprintStop(): void
  /**
   * ### Local Only
   */
  LocalOnMantleStart(): void
  /**
   * ### Local Only
   */
  LocalOnMantleStop(): void
  /**
   *### Local Only
   */
  LocalOnSlideStart(): void
  /**
   *### Local Only
   */
  LocalOnSlideStop(): void
  /**
   *### Local Only
   */
  LocalOnRollStart(): void
  /**
   *### Local Only
   */
  LocalOnRollStop(): void
  /**
   * ### Local Only
   */
  LocalOnCrouch(): void
  /**
   * ### Local Only
   */
  LocalOnStand(): void
  /**
   * ### Local Only
   */
  LocalOnJump(): void
  /**
   * ### Local Only
   */
  LocalOnButtonPressed(): void
  /**
   * ### Local Only
   */
  LocalOnButtonReleased(): void
  /**
   * ### Local Only
   */
  LocalOnSpawnEffectEnded(): void
  /**
   * ### Client Only
   * Called when a quick chat message is triggered by a user
   */
  OnChatMessage(user: User, message: Text):void
}
declare interface ScriptStrict extends Partial<ScriptEvents> {
  Properties: property.Array
  properties: any | null
  /**
   * Alternative to self.properties, this gets the bag of values produced from the property
   */
  GetProperties(): any
  /**
   * ### Client Only
   * Revert a property that's been changed on the client back to the server's value for it
   * @param propertyName name of the property to revert back to server's value
   */
  RevertClientProperty(propertyName: string): void
  /**
   * Returns the Entity that the script is attached to.
   */
  GetEntity(): Entity
  /**
   * Returns the ScriptAsset this is an instance of.
   */
  GetScriptAsset(): ScriptAsset
  /**
   * Tell this script that listenerScriptComponent wants to be informed when it sounds eventName using SendEventToListeners.
   *
   * eventName will be called on the listenerScriptComponent script.
   */
  ListenForEvent(eventName: string, listenerScriptComponent: Script): void
  /**
   * Tell this script that listenerScriptComponent wants to be informed when it sounds eventName using SendEventToListeners.
   *
   * functionName will be called on the listenerScriptComponent script.
   */
  ListenForEvent(eventName: string, listenerScriptComponent: Script, functionName: string):void
  /**
   * Call eventName on any scripts that have registered for it using ListenForEvent with the given args.
   *
   * If called on the server do it only on the server, if called on a client do it only on that client.
   */
  SendEventToListeners(eventName: string, ...args: any): void
  /**
   * Pass this a function to do that function in a thread. Can use globals like Wait to control flow as the function will be re-entrant.
   *
   * Returns a Handle which can be passed to Cancel
   */
  Schedule(func: noargCallback): ScheduleHandle
  /**
   *Cancel a scheduled task if its running.
   */
  Cancel(handle: ScheduleHandle): void
  /**
   *Call eventName on this script if it exists, with the given args.
   */
  SendToScript(eventName: string, ...args: any): void
  /**
   * ### Server Only
   *Call eventName on this script on all clients currently connected to the server with the given args.
   *
   *Note, this function call can not guarantee that entities are all in a ready state on the client at the time of call,and might therefore miss events during construction.
   */
  SendToAllClients(eventName: string, ...args: any): void
}
/**
 * Script that doesn't require strinct typing and previous declaration
 */
declare interface Script extends ScriptStrict {
  [prop: string]: any
}

/**
 * Scripts made for Player and User 
 * */
declare interface LocalScriptStrict extends ScriptStrict, Partial<PlayerEvents> {
  /**
   * Returns the User or Character Entity that the script is attached to.
   */
  GetEntity(): User | Character
  /**
   *  ### Server Only
   * Set the save data for this script to the table supplied. The script must be owned by a User or Player.
   */
  SetSaveData(saveTable: any): void
  /**
   * ### Server Only
   * Get the save data previously written out with SetSaveData on this script. This function returns the save data immediately.
   */
  GetSaveData(savedata:(data:any)=>void): any
  /**
   * ### Server Only
   *Call eventName on this script on the client that owns the Player or User this script is attached to.
   */
  SendToLocal(eventName: string, ...args: any): void
  /**
   *### Local Only
   *Call eventName on this script on the server.
   */
  SendToServer(eventName: string, ...args: any): void
}

/**
 * Scripts made for Player and User 
 * 
 * doesn't require strinct typing and previous declaration
 * 
 * There is also a strictly Typed LocalScriptStrict version
 * */
declare interface LocalScript extends LocalScriptStrict {
  [prop: string]: any
}

/**
 * Scripts made for Player and User 
 * */
declare interface CharacterScriptStrict extends LocalScriptStrict {
  /**
   * Returns the User or Character Entity that the script is attached to.
   */
  GetEntity(): Character
}

/**
 * Scripts made for Player and User 
 * 
 * doesn't require strinct typing and previous declaration
 * 
 * There is also a strictly Typed LocalScriptStrict version
 * */
declare interface CharacterScript extends CharacterScriptStrict {
  [prop: string]: any
}

/**
 * Scripts made for Player and User 
 * */
declare interface UserScriptStrict extends LocalScriptStrict {
  /**
   * Returns the User or Character Entity that the script is attached to.
   */
  GetEntity(): User
}

/**
 * Scripts made for Player and User 
 * 
 * doesn't require strinct typing and previous declaration
 * 
 * There is also a strictly Typed LocalScriptStrict version
 * */
declare interface UserScript extends UserScriptStrict {
  [prop: string]: any
}