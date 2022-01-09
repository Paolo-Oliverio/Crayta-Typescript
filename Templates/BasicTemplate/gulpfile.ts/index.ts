import { gulp, lua, html, ui, css } from "../../../gulp"
import { settingsLua, settingsUI } from "./settings"

gulp.task("LuaWatch", function () {
  gulp.watch("Scripts/Src/**/*.ts", lua(settingsLua))
})

gulp.task("UiWatch", function () {
  gulp.watch("Widgets/**/*.ts", ui(settingsUI))
})

gulp.task("Ui", ui(settingsUI))
gulp.task("css", css)
gulp.task("lua", lua(settingsLua))
gulp.task("embed", html(settingsLua))

gulp.task("default", function (cb) {
  gulp.series(["lua","LuaWatch"])(cb)
})