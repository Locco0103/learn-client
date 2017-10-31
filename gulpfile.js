var gulp = require('gulp');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');

// gulp.task('default', function() {  
//     console.log("デフォルトタスクだよー");
// });

gulp.task('hoge', function() {  
    console.log("ほげタスクだよー");
});

// ファイルの生成
gulp.task('build', function() {  
  return gulp.src(['lp/**/*.pug'])
  // return gulp.src(['lp/**/*.pug','books/**/**/*.pug'])
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    // ./ -> ./lp/ に変えてみます
    .pipe(gulp.dest("./lp/"));
});

gulp.task('default', ['build']);

gulp.task('watch', function(){
  gulp.watch('lp/**/*.pug' ,['build']);
// 10.27 書いてみるが動かず
  // gulp.watch('books/**/**/*.pug' ,['build']);
});