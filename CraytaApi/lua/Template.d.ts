declare namespace Template {
  function Find(this: void, name: string): Template
}

declare interface Template {
  /**
   * Find a Template in the world by name. Returns nil if not found. Alternative to World:FindTemplate()
   */
  FindScriptProperty(propertyName: string): any
  /**
   * Todo Doc
   */
  FindScriptProperties(scriptName: string): any
  /**
   * Todo Doc
   */
  FindScriptProperties(script: ScriptAsset): any
  /**
   * Todo Doc
   */
  FindAllScriptProperties(scriptName: string): any
  /**
   * Todo Doc
   */
  FindAllScriptProperties(script: ScriptAsset): any
}