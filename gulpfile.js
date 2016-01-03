
  ////////////////////////////////////////////////////////////////////////////
  //                                                                        //
  //  Secuoyas MOtion Wrapper Library - Secuoyas (c) 2015                   //
  //                                                                        //
  ////////////////////////////////////////////////////////////////////////////


  'use strict';

  var gulp         = require('gulp');
  var jshint       = require('gulp-jshint');
  var browserSync  = require('browser-sync');

  //
  // Dirs
  //

  var dirs = {
    src: 'smowl/uncompressed/',
    dst: 'dist/'
  };

  //
  // REFRESCO DEL NAVEGADOR
  //

  gulp.task('browserSync', function() {
    browserSync({
      files: "*.php, *.html, *.js, *.css",
      server: {
        baseDir: "",
        //baseDir: dirs.tests
      },
      // browser: 'safari'
      browser: 'google chrome',
      notify: false
    })
  });

  //
  // WATCH
  //

  gulp.task('watch', ['browserSync'], function(){
    gulp.watch(dirs.src + '**/*.js', browserSync.reload);
  });


  //
  // LINT TASK
  //

  gulp.task('lint', function() {
    return gulp.src(dirs.src + 'lib/**/*')
      .pipe(plumber())
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  });

  //
  // TAREAS GULP
  //

  gulp.task('default', ['watch']);
