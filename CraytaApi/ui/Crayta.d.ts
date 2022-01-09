declare interface callback {
  (...args: any): void
}

declare namespace engine {
  function createJSModel(name: string, data: object): void
  function on(CoherentFunction: string, callback: callback): void
  function updateWholeModel(data: object):void
  function synchronizeModels(): void
}