var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('minjs', function(){
  return gulp.src('src/hash-router.js')
     .pipe(uglify())
     .pipe(rename({
        suffix: ".min"
      }))
     .pipe(gulp.dest('src'));
});

gulp.task('watch', function(){
  gulp.watch('src/hash-router.js', ['minjs']);
});

gulp.task('default', ['minjs', 'watch']);