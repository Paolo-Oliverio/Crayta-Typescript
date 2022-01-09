declare interface Widget {
  [prop: string]: any
  Show(): void
  Hide(): void
  CallFunction(functionName: string, ...args: any):void
  js: Object
  visible: boolean
}

declare interface WidgetBindings {
  [prop: string]: any
  CallFunction(functionName: string, ...args: any):void
}