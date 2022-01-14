const debug = true
const releasingPackage = false

const settings = {
    DEBUG: debug,
    PACKAGE: releasingPackage,
}

export const settingsLua = {
  context: {
    LUA: true,
  },
}
Object.assign(settingsLua.context,settings)

export const settingsUI = {
  context: {
    UI: true,
  },
}
Object.assign(settingsUI.context, settings)