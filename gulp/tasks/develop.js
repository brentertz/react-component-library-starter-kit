'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = function() {
  gulp.task('develop', function(callback) {
    runSequence(
      'build',
      'serve',
      'watch',
      callback
    );
  });
};
