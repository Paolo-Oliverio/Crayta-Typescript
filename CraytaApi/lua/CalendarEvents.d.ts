declare namespace CalendarEvents {
  /**
   * Gets the next CalendarEvent with the given Id 
   * If the only matches are in the past, it will return that
   */
  function GetEvent(this: void, eventId: string): any
  /**
   * Returns true if an event with the given ID is active at the current time
   */
  function IsEventActive(this: void, eventId: string): boolean
  /**
   * Gets a table with every CalendarEvent that has been scheduled
   * Warning: Gets all past CalendarEvents that are still searchable too
   */
  function GetAllEvents(): any[] //TODO verify and fix
  /**
   * Gets a table with all CalendarEvents that are scheduled in the future
   */
  function GetUpcomingEvents(): any[] //TODO verify and fix
  /**
   * Gets a table with every CalendarEvent that is currently active now
   */
  function GetActiveEvents(): any[] //TODO verify and fix
}