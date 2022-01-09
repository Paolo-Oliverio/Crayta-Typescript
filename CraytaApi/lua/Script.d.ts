declare interface ScheduleHandle {}

declare interface ScriptStrict {
  properties: any
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
  ListenForEvent(
    eventName: string,
    listenerScriptComponent: Script,
    functionName: string
  )
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
   *  ### Server Only
   * Set the save data for this script to the table supplied. The script must be owned by a User or Player.
   */
  SetSaveData(saveTable: any): void
  /**
   * ### Server Only
   * Get the save data previously written out with SetSaveData on this script. This function returns the save data immediately.
   */
  GetSaveData(): any
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
  /**
   *### Local Only
   *Call eventName on this script on the server.
   */
  SendToServer(eventName: string, ...args: any): void
  /**
   * ### Server Only
   *Call eventName on this script on the client that owns the Player or User this script is attached to.
   */
  SendToLocal(eventName: string, ...args: any): void
}

declare interface Script extends ScriptStrict {
  [prop: string]: any
}
