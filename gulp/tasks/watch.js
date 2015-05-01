'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');

module.exports = function() {
  gulp.task('watch', function() {
    watch(['./src/**/*', './demo/**/*'], function() {
      gulp.start(['lint', 'webpack']);
    });
  });
};
