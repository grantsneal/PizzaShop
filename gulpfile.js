var gulp = require("gulp");
var jshint = require("gulp-jshint");

gulp.task("default", function() {
  // console.log("hello gulp");

  return gulp.src("./public/js/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"));  // writes results to console

});

