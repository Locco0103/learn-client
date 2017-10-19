var gulp = require('gulp');
var pug = require('gulp-pug');

// gulp.task('default', function() {  
//     console.log("デフォルトタスクだよー");
// });

gulp.task('hoge', function() {  
    console.log("ほげタスクだよー");
});

gulp.task('build', function() {  
  return gulp.src(['*.pug'])
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['build']);

gulp.task('watch', function(){
  gulp.watch('*.pug' ,['build']);
});