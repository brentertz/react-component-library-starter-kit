'use strict';

var browserSync = require('browser-sync');
var gulp = require('gulp');

module.exports = function() {
  gulp.task('serve', function() {
    browserSync({
      files: ['./build/demo/**/*'],
      server: './build/demo',
      open: 'local'
    });
  });
};
