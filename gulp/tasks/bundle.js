'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('../../webpack.config');

module.exports = function() {
  gulp.task('bundle', function() {
    return gulp.src('./src/index.js')
      .pipe(webpack(webpackConfig))
      .pipe(gulp.dest('./build'));
  });
};
