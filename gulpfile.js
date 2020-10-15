const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

gulp.task('hi', function () {
    //do something
    console.log('hello world 你好gulp');
});

gulp.task('copy', function () {
    return gulp.src('index.html').pipe(gulp.dest('html'))
})


gulp.task('minicss' ,  function(){
  return gulp.src('style.css')
  .pipe(cleanCSS({
    compatibility: 'ie8'
  })).pipe(gulp.dest('css'))
})