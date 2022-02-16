
declare interface Js {
  [prop: string]: any
  CallFunction(functionName: string, ...args: any):void
}

declare interface Widget {
  [prop: string]: any
  Show(): void
  Hide(): void
  CallFunction(functionName: string, ...args: any):void
  js: Js
  visible: boolean
}

declare interface WidgetBindings {
  [prop: string]: any
  CallFunction(functionName: string, ...args: any):void
}