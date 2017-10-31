var gulp = require('gulp');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');

gulp.task('build',function(){
  return gulp.src(['./chapter?/*.pug'])
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./'));
});


gulp.task('default',['build']);

gulp.task('watch',function(){
  gulp.watch('./chapter?/*.pug',['build']);
});
