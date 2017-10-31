var gulp = require('gulp');
var pkg = require('./package.json')

var imageMin = require('gulp-imagemin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var header = require('gulp-header');
var webserver = require('gulp-webserver');

gulp.task('html',function(){
  // . 現在の作業ディレクトリ
  gulp.src('./src/index.html')
      .pipe(gulp.dest('./dist'));
});

gulp.task('msg',function(){
  gulp.src('./src/img/photo?.jpg')
    .pipe(imageMin())
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('js',function(){
   gulp.src('./src/js/*.js')
    .pipe(plumber())
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(header("/* copyright <%= pkg.name %> */",{pkg: pkg}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('webserver',function(){
  gulp.src('./dist')
    .pipe(
      webserver({
        host:
      }));
});

gulp.task('watch',function(){
  gulp.watch('./src/js/*.js',['js']);
});

gulp.task('default',['js','watch'] );