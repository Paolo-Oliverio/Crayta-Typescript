type stringAction = "Melee" | "Fire" | "Reload"

interface ActionEvents {
  (): void
}

interface ActionEventsBranching {
  (): boolean
}

/**
 * Note: if both playbackSpeed and playbackTime are set, you’ll get a warning, and playbackTime will be preferred
 */
declare interface ActionOptions {
  /**
   * Sets the speed to play this animation at. 2 = double speed, 0.5 = half speed.
   * Note: If playbackTime is also set, you’ll get a warning, and playbackTime will be preferred
   */
  playbackSpeed?: number
  /**
   * Sets the time that this animation should take. 1 = 1 second, 10 = 10 seconds.
   * Note: If playbackSpeed is also set, you’ll get a warning, and playbackTime will be preferred
   */
  playbackTime?: number
  /**
   * Some actions trigger events – these are functions that will be triggered in your Lua code once the animation for an action reaches a certain point.
   * An event can be either a standard event, or a branching event. A standard event expects your lua function to return nothing.
   * A branching event expects your lua function to return a bool. Events can be omitted from this table, if a branching event is omitted, the default return value for this branching event will be used. See examples of events below.
   */
  events?: ActionEventFunctions
}

declare interface ActionEventFunctions {
  /**
   * This will trigger at the point in the animation when the cleaver looks like it has hit the chopping surface
   */
  ChopImpact?: ActionEvents
  /**
   * If false, another chop will take place immediately without playing the intro of the animation again.  If true, the chop animation will play its outro sequence and complete
   */
  IsChopComplete?: ActionEventsBranching
  /**
   * This will trigger at the point in the animation when the knife looks like it should hit its target
   */
  MeleeImpact?: ActionEvents
  /**
   * This will trigger at the point in the animation when the ammo has been inserted into the weapon
   */
  AmmoAdded?: ActionEvents
  IsReloadComplete?: ActionEventsBranching
  OnCompleted?: ActionEvents
}