var gulp = require('gulp');  // gulp is the automated task runner
var browserSync = require('browser-sync').create();  // for auto-reloading the browser
var useref = require('gulp-useref');  // handles build dependency orders
var uglify = require('gulp-uglify');  // minifies files
var gulpIf = require('gulp-if');  // used to check file types
var imagemin = require('gulp-imagemin');  // minifies images
var cache = require('gulp-cache');  // caches images to reduce minification operation
var del = require('del');  // deletes auto generated files
var runSequence = require('run-sequence');  // allows gulp to run tasks sequentially instead of parallel
var changed = require('gulp-changed');  // tells gulp to only compile changed files
var nodemon = require('gulp-nodemon');  // allows gulp to run the node server with nodemon
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('build', function(callback) {
  runSequence('clean:dist', [ 'useref', 'images'], callback);
});

gulp.task('default', ['browserSync', 'set-dev-node-env'], function() {
  gulp.watch(['src/*.html'], browserSync.reload);
});

gulp.task('start', function(callback) {
  runSequence('build', 'set-prod-node-env', 'nodemon', callback);
});

gulp.task('set-dev-node-env', function() {
  return process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-node-env', function() {
  return process.env.NODE_ENV = 'production';
});

gulp.task('browserSync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    port: 5000,
    notify: true
  });
});

gulp.task('nodemon', function(callback) {
  var called = false;
  return nodemon({
    script: 'server/app.js',
    ext: 'js html',
    ignore: ['gulpfile.js']
  })
  .on('start', function() {
    if (!called) {
      called = true;
      callback();
    }
  })
  .on('restart', function() {
    setTimeout(function() {
      browserSync.reload({ stream: false });
    }, 1000);
  });
});

gulp.task('angular-annotate', function() {
  return gulp.src('src/*.js')
    .pipe(ngAnnotate());
});

gulp.task('useref', function() {
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(changed('*.js'))
    .pipe(gulpIf('*.js', ngAnnotate()))
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
  return gulp.src('src/assets/*.+(png|jpg)')
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
})
