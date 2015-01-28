'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = function() {
  gulp.task('build', function(callback) {
    runSequence(
      ['clean', 'lint'],
      ['bundle'],
      callback
    );
  });
};
