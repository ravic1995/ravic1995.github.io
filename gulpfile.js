var gulp = require('gulp'),
    browserify = require('browserify'),
    del = require('del'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    streamify = require('gulp-streamify'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    rename = require('gulp-rename');

var paths = {
  css:['./css/*.less'],
  js: ['./js/app/*.js'],
  app_js: ['./js/app/app.js'],
  index: ['./index.html']
};

gulp.task('clean', function(done) {
  return del(['./js/build/*.js'], done);
});

gulp.task('js', gulp.series('clean', function() { 
  return browserify(paths.app_js)
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./js/build'));
}));

gulp.task('css', function () {
  return gulp.src(paths.css)
    .pipe(less())
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src(paths.index)
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    port: 3000,
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch(paths.index, gulp.series('html'));
  gulp.watch(paths.css, gulp.series('css'));
  gulp.watch(paths.js, gulp.series('js'));
});

gulp.task('default', gulp.parallel('css', 'js','connect', 'watch'));
