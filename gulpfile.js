const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('hi', function () {
    //do something
    console.log('hello world 你好gulp');
});

gulp.task('copy', function () {
    return gulp.src('index.html').pipe(gulp.dest('html'))
})

//先執行 'sass copy' 任務 -> 在執行 'minicss'
gulp.task('minicss' ,['sass'] , function(){
  return gulp.src('css/*.css')
  .pipe(concat('all.css'))
  .pipe(cleanCSS({
    compatibility: 'ie8'
  })).pipe(gulp.dest('css/all'))
});

gulp.task('sass' , function(){
    return gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'))
})
//監看變動
gulp.task('watch' ,function(){
    //路徑
    gulp.watch('sass/*.scss' ,['minicss']);//執行function
});

//合併css
gulp.task('concatCss',['sass'], function() {
    return gulp.src('css/*.css')
      .pipe(concat('all.css'))
      .pipe(gulp.dest('./css/concat/'));
  });



