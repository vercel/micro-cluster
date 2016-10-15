const gulp = require('gulp')
const del = require('del')
const cache = require('gulp-cached')
const help = require('gulp-task-listing')
const babel = require('gulp-babel')
const ext = require('gulp-ext')

gulp.task('help', help)

gulp.task('compile', () => {
  return gulp.src('bin/**/*')
  .pipe(cache('bin'))
  .pipe(babel())
  .pipe(ext.crop())
  .pipe(gulp.dest('dist/bin'))
})

gulp.task('clean', () => del(['dist']))
gulp.task('default', ['compile'])
