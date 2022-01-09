declare class Trigger extends Entity {
  protected constructor()
  /**
   *Returns whether a passed in entity is currently within the trigger
   */
  IsOverlapping(entity: Entity): boolean
  /**
   *Returns whether the point given (world space) is within the bounds of the trigger (whether the trigger is active or not)
   */
  IsInside(worldPosition: Vector): boolean
  /**
   *Set whether the trigger should only overlap players or all entities.
   */
  playersOnly: boolean
  /**
   *Set whether the trigger should only overlap players or all entities.
   */
  size: Vector
  /**
   *The trigger box is active
   */
  active: boolean
  /**
   *The trigger box is interactable
   */
  interactable: boolean
  /**
   *Called when this trigger volume is entered by a valid entity, with the Entity passed as an argument,as well as the trigger Entity from which the onTriggerEnter event is sent.
   *
   *An alternative to listening for OnTriggerEnter in a script on the entity.
   */
  onTriggerEnter: Event
  /**
   *Called when this trigger volume is exited by a valid entity, with the Entity passed as an argument,
   *as well as the trigger Entity from which the onTriggerExit event is sent.
   *
   *An alternative to listening for OnTriggerExit in a script on the entity.
   */
  onTriggerExit: Event
}
