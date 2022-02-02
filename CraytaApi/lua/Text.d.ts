declare interface Text {
  FormatTime(this: void, format: string, time: number): Text
  Format(this: void, format: string, ...varArg: any): Text
  Format(this: void, ...varArg: any): Text
}