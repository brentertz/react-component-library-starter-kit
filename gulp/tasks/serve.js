'use strict';

var browserSync = require('browser-sync');
var gulp = require('gulp');
var open = require('open');

module.exports = function() {
  gulp.task('serve', function() {
    browserSync({
      files: ['./build/**/*', './examples/**/*'],
      server: true,
      open: false
    }, function() {
      open('http://localhost:3000/examples/');
    });
  });
};
