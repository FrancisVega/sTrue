
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
  src: '',
  dst: '/sketchplugins/zen.sketchplugin/Contents/Sketch/sTrue',
};

//
// WATCH
//

// Watch
gulp.task('watch', function(){
  gulp.watch(dirs.src + '**/*', ['copy']);
});

//
// COPY
//
gulp.task('copy', function() {
  console.log("Copy sTrue in " + dirs.dst);
  gulp.src(['sTrue.js'], {cwd: dirs.src})
    .pipe(gulp.dest(dirs.dst));
});


//
// TAREAS GULP
//

gulp.task('default', ['copy', 'watch']);
