declare namespace Color {
  export function New(
    this: void,
    red: number,
    gree: number,
    blue: number,
    alpha: number
  ): Color
  export function New(
    this: void,
    red: number,
    gree: number,
    blue: number
  ): Color
}

declare interface Color {
  red: number
  gree: number
  blue: number
  alpha: number
}

declare function tostring(color: Color): string
