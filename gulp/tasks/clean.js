'use strict';

var gulp = require('gulp');
var del = require('del');

module.exports = function() {
  gulp.task('clean', function(callback) {
    del('./build/**/*', callback);
  });
};
