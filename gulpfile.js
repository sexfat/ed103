const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');

gulp.task('hi', function () {
    //do something
    console.log('hello world 你好gulp');
});

gulp.task('copy', function () {
    return gulp.src('index.html').pipe(gulp.dest('html'))
})

//先執行 'sass copy' 任務 -> 在執行 'minicss'
gulp.task('minicss' ,['sass', 'copy'] , function(){
  return gulp.src('css/*.css')
  .pipe(cleanCSS({
    compatibility: 'ie8'
  })).pipe(gulp.dest('css/mini'))
});

gulp.task('sass' , function(){
    return gulp.src('sass/style1.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'))
})
//監看變動
gulp.task('watch' ,function(){
    //路徑
    gulp.watch('sass/*.scss' ,['sass']);//執行function
})



