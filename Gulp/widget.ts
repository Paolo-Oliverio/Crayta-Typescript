import gulp = require("gulp")
import plumber = require("gulp-plumber")
import errorHnd from "./errorhandling"
import babel from "gulp-babel"
const embed = require("gulp-embed")
const preprocess = require("gulp-preprocess")

export const _html = (cb: any, settings: any) => {
  gulp
    .src("Widgets/html/*.html")
    .pipe(plumber())
    .on("error", errorHnd)
    .pipe(preprocess(settings))
    .pipe(embed())
    .pipe(gulp.dest("OUT/Widget"))
  cb()
}

export const _ui = (cb: any, settings: any) => {
  gulp
    .src("Widgets/ts/**/*.ts")
    .pipe(plumber())
    .on("error", errorHnd)
    .pipe(preprocess(settings))
    .pipe(babel({ presets: ["@babel/typescript"] }))
    .pipe(gulp.dest("Widgets/html/assets"))
  cb()
}

export const ui = function (settings: any) {
  return function ui(cb: any) {
    _ui(cb, settings)
  }
}

export const html = function (settings: any) {
  return function html(cb: any) {
    _html(cb, settings)
  }
}