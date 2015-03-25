var gulp = require("gulp"),
 	babel = require("gulp-babel"),
 	concat = require("gulp-concat"),
 	livereload = require('gulp-livereload');

gulp.task("build", function () {
  return gulp.src(["src/components/**/*.js*", "src/*.js*"])
    .pipe(concat("component.js"))
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('watch', function() {
  	livereload.listen();
  	gulp.watch('src/**/*', ['build']);
});
