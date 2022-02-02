import gulp = require("gulp")
import plumber = require("gulp-plumber")
const preprocess = require("gulp-preprocess")
import errorHnd from "./errorhandling"
import babel = require("gulp-babel")
import rename = require("gulp-rename")

const _lua = (cb: any, settingsLua:any) => {
  gulp
    .src(settingsLua.path || "Scripts/Src/**/*.ts")
    .pipe(plumber())
    .on("error", errorHnd)
    .pipe(preprocess(settingsLua))
    .pipe(babel())
    .pipe(rename({ extname: ".ts" }))
    .pipe(gulp.dest("./XformPreprocess"))
  cb()
}

export const lua = function (settings:any){return function lua(cb:any){_lua(cb, settings)}}
export default lua