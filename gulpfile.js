const gulp = require('gulp')
const del = require('del')
const cache = require('gulp-cached')
const eslint = require('gulp-eslint')
const help = require('gulp-task-listing')
const babel = require('gulp-babel')
const ext = require('gulp-ext')

gulp.task('help', help)

gulp.task('compile', function () {
  return gulp.src('bin/**/*')
  .pipe(cache('bin'))
  .pipe(babel())
  .pipe(ext.crop())
  .pipe(gulp.dest('build/bin'))
})

gulp.task('lint', function () {
  return gulp.src([
    'gulpfile.js',
    'bin/*'
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
})

gulp.task('clean', () => del(['build']))
gulp.task('default', ['lint', 'compile'])
