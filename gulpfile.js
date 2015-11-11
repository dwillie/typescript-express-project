var gulp   = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var sass   = require('gulp-sass');
var uglify = require('gulp-uglify');
var ts     = require('gulp-typescript');

gulp.task('scripts', function() {
  var tsProject = ts.createProject('tsconfig.json');

  return tsProject.src()
    .pipe(ts(tsProject))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.ts', ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);
