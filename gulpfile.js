var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {

});

gulp.task('sass', function () {
  return gulp.src('./css/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/main.css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./css/**/*.scss', ['sass']);
});
