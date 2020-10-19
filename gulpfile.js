const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');


gulp.task('hi', function () {
    //do something
    console.log('hello world 你好gulp');
});

gulp.task('copy', function () {
    return gulp.src('index.html').pipe(gulp.dest('html'))
})

//先執行 'sass copy' 任務 -> 在執行 'minicss'
//先執行 sass -> concat -> mini
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

//合併css
gulp.task('concatCss',['sass'], function() {
    return gulp.src('css/*.css')
      .pipe(concat('all.css'))
      .pipe(gulp.dest('./css/concat/'));
  });
// html template
  gulp.task('fileinclude', function() {
    gulp.src(['./app/*.html'])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('./'));
  });



  //監看變動
gulp.task('watch' ,function(){
    //路徑
    gulp.watch('sass/*.scss' ,['minicss']);//執行function
    gulp.watch(['app/*.html' , 'app/**/*.html' ] ,['fileinclude']);//執行function
});


var reload = browserSync.reload;

//瀏覽器
// gulp.task('default', function() {
//   browserSync.init({
//       server: {
//           baseDir: "./",
//           index : "index.html"
//       }
//   });
//   gulp.watch('sass/*.scss' ,['minicss']).on('change' , reload);
//   gulp.watch(['app/*.html' , 'app/**/*.html' ] ,['fileinclude']).on('change' , reload);//執行
// });


//壓縮圖片
// gulp.task('img', function () {
//   gulp.src('./images/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('images/mini'))
// })

exports.img = () => (
  gulp.src('./images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./images/mini'))
);




