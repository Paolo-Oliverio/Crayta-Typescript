import gulp = require("gulp")
import plumber = require("gulp-plumber")
import errorHnd from "./errorhandling"
const sass = require("gulp-sass")(require('sass'));
import purgecss = require("gulp-purgecss")

export const css = (cb: any) => {
  gulp
    .src("Widgets/css/**/*.scss")
    .pipe(plumber())
    .on("error", errorHnd)
    .pipe(sass())
    //.pipe(rename({ extname: ".css" }))
    .pipe(gulp.dest("Widgets/html/assets"))
  cb()
}

export default css