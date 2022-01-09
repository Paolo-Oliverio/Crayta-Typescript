declare interface EventBinding {
  script: Script
  function: string
}

declare interface Event {
  Send(...varArgs: any[]): void
  Listen(listenerScriptComponent: Script, functionName: string): void
  /**
   * Return true if this Event is bound to anything, even if its something like "every instance of a script" which
   * would actually resolve to no bindings.
   */
  HasBindings(): boolean
  /**
   * Get a table where each element is a table containing a 'script' variable and a 'function' variable, describing each call that is bound by this event.
   */
  GetAllBindings(): EventBinding[]
}

declare function tostring(event: Event): string
