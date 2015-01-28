'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

module.exports = function() {
  gulp.task('lint', function() {
    gulp.src('./src/**/*.js*')
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'));
  });
};
