declare namespace property {
  type Array = (Boolean|Number|String|Text|Vector|Vector2D|Rotation|Asset|Entity|Event|Color)[]

const enum Type {
  Number = "number",
  String = "string",
  Text = "text",
  Boolean = "boolean",
  Vector = "vector",
  Vector2d = "vector2d",
  Rotation = "rotation",
  Entity = "entity",
  Color = "color",
  Event = "event",
  Asset = "asset",
  CameraShake = "camerashakeasset",
  Template = "template"
}

  /**
   * All available types
   */
  type stringPropertyType =
    | "number"
    | "string"
    | "text"
    | "boolean"
    | "vector"
    | "vector2d"
    | "rotation"
    | "entity"
    | "color"
    | "event"
    | "asset"
    | "camerashakeasset"
    | "template"
    | "templateasset"
    | "voxelasset"
    | "meshasset"
    | "soundasset"
    | "worldasset"
    | "effectasset"
    | "scriptasset"
    | "widgetasset"
    | "skydomeasset"
    | "innerhorizonasset"
    | "outerhorizonasset"
    | "gripasset"
    | "colorgradingasset"
    | "postprocessasset"
    | "skymeshasset"
    | "skylayerasset"
    | "voxelmeshasset"
  /**
   * string (default:nil)
   *
   * Possible values: “” (empty string or nil), “array”
   *
   * Setting this to “array” will present the property as an array of the given type, allowing the user to add and remove values.
   *
   * Each array element, and the “length” field is inherited from a template individually.
   *
   * Any array property of a type that supports default values can set an array of defaults too, eg container="array", default={1, 2, 3, 4}
   */
  type stringContainer = "" | "array"
  /**
   * Used in editor attribute of propertyNumber
   */
  type stringEditor = "int" | "float" | "seconds" | "days" | "slider"
  /**
   * Used in "is" attribute of propertyEntity
   */
  type stringEntityType =
    | ""
    | "Character"
    | "User"
    | "Mesh"
    | "Light"
    | "Sound"
    | "Effect"
    | "VoxelMesh"
    | "Trigger"
    | "Locator"
    | "Camera"
  /**
   * Used in "is" attribute of Asset Property
   */
  type stringAssetType =
    | "templateasset"
    | "voxelasset"
    | "meshasset"
    | "soundasset"
    | "worldasset"
    | "effectasset"
    | "scriptasset"
    | "widgetasset"
    | "skydomeasset"
    | "innerhorizonasset"
    | "outerhorizonasset"
    | "gripasset"
    | "colorgradingasset"
    | "postprocessasset"
    | "skymeshasset"
    | "skylayerasset"
    | "voxelmeshasset"

  /**
   * Basic interface for other properties
   */
  interface Basic extends Object {
    /**
     * The property name that will appear in the editor.
     */
    name: string
    /**
     * The kind of variable this property represent.
     */
    type: stringPropertyType | Type
    /**
     * A tooltip message that appears when hovering over the element in editor.
     */
    tooltip?: string
    /**
     * False hides the property in the editor UI. Useful if you want a property just for replicating data to clients, and want to keep the UI tidy by preventing the user from being able to see/edit it.
     */
    editable?: boolean
    /**
     * False hides the property, but only in basic mode.
     */
    editableInBasicMode?: boolean
    /**
     * string (default:nil)
     *
     * Possible values: “” (empty string or nil), “array”
     *
     * Setting this to “array” will present the property as an array of the given type, allowing the user to add and remove values.
     *
     * Each array element, and the “length” field is inherited from a template individually.
     *
     * Any array property of a type that supports default values can set an array of defaults too, eg container="array", default={1, 2, 3, 4}
     */
    container?: stringContainer
    /**
     * Specify a function that returns true or false to conditionally show or hide a property based on another.
     *
     * The function is passed a parameter to access the rest of the properties on the script.
     *
     * For example, you might hide an “clipSize” property on a gun if it has a boolean “infiniteAmmo” property set to true: visibleIf = (p)=>{return not p.infiniteAmmo}
     */
    visibleIf?: property.isVisible
    /**
     * Includes this property in a collapsible group of the given name in the editor.
     *
     * Sub-groups can be specified by entering multiple names separated by |, eg group="Lighting|Sky Light".
     */
    group?: string
  }
  /**
   *
   */
  interface Step extends Basic {
    /**
     * number (default: 1) – adjusts how fast the number changes with a gamepad
     */
    stepSpeed?: number
    /**
     * number (default: 0.1) – as above, but when pressing the ‘slow’ modifier
     */
    slowStepSpeed?: number
    /**
     * number (default: 10) – as above, but when pressing the ‘fast’ modifier
     */
    fastStepSpeed?: number
  }
  /**
   *
   */
  interface Number extends Step {
	type : "number" | Type.Number
    /**
     * number default to 0 if not present
     */
    default?: number | number[]
    /**
     * number – sets the min/max value that can be entered into the editor UI. Doesn’t apply at runtime.
     */
    min?: number
    /**
     * number – sets the min/max value that can be entered into the editor UI. Doesn’t apply at runtime.
     */
    max?: number
    /**
     * allowFloatingPoint – bool (default: true) – allow/disallow decimal numbers in the editor UI. Doesn’t apply at runtime.
     */
    allowFloatingPoint?: boolean
    /**
     * table, a list of allowed values, either named: {Slow = 0.25, Normal = 1, Fast = 2, Ludicrous = 100}, or unnamed: {0.25, 1, 2, 100}
     */
    options?: { [key: string]: number } | string[]
    /**
     * string (default: chosen automatically based on other settings; either enum, int or float).
     *
     * Changes the widget displayed in the editor. Possible values: int, float, seconds, days, slider.
     */
    editor?: stringEditor
  }
  /**
   *
   */
  interface String extends Basic {
	type: "string" | Type.String
    /**
     * default to string (“”) if not present
     */
    default?: string | string[]
    /**
     * table, a list of allowed values, either named: {Slow = 0.25, Normal = 1, Fast = 2, Ludicrous = 100}, or unnamed: {0.25, 1, 2, 100}
     */
    options?: { [key: string]: string } | string[]
  }
  /**
   *
   */
  interface Boolean extends Basic {
	type : "boolean"  | Type.Boolean
    /**
     * boolean default to (false)
     */
    default?: boolean | boolean[]
  }
  /**
   *
   */
  interface Vector extends Step {
	type : "vector"  | Type.Vector
    /**
     *  Vector default to Vector.Zero
	 * 
	 * 	For any other Vector value use Vector.New(1,2,3)
     */
    default?: globalThis.Vector | globalThis.Vector[]
  }
  /**
   *
   */
  interface Vector2D extends Step {
    type: "vector2d" | Type.Vector2d
    /**
     * Vector2D default to Vector2D.Zero
     *
     * For any other Vector2D value use Vector2D.New(1,2)
     */
    default?: globalThis.Vector2D | globalThis.Vector2D[]
  }
  /**
   *
   */
  interface Rotation extends Step {
    type: "rotation" | Type.Rotation
    /**
     * Rotation default to Rotation.Zero
     *
     * For any other Rotation value use Rotation.New(pitch: number,jaw: number,roll: number)
     */
    default?: globalThis.Rotation | globalThis.Rotation[]
  }

  /**
   *
   */
  interface Color extends Step {
    type: "color" | Type.Color
    /**
     * Default to Black
     *
     * For any other Color value use Color.New(r: number,g: number,b: number,a?: number)
     */
    default?: globalThis.Color | globalThis.Color[]
  }

  /**
   * 
   */
  interface Text extends Basic{

  }

  /**
   *
   */
  interface Entity extends Basic {
	type : "entity"  | Type.Entity
    /**
     * string (default: “”) – require the entity to be of a specific physical type: Character, User, Mesh, Light, Sound, Effect, VoxelMesh, Trigger, Locator, Camera.
     *
     * This doesn’t apply at runtime.
     */
    is?: stringEntityType
  }
  /**
   *
   */
  interface Event extends Basic {
	type : "event"  | Type.Event
  }
  /**
   *
   */
  interface Asset extends Basic {
	  
    is?: stringAssetType
  }

  interface isVisible {
    (property: any[]): boolean
  }
}
