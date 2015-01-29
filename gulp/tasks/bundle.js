'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('../../webpack.config');

module.exports = function() {
  if (process.env.NODE_ENV !== 'production') {
    webpackConfig.devtool = '@eval-source-map';
    webpackConfig.debug = true;
  }

  gulp.task('bundle', function() {
    return gulp.src('./src/index.js')
      .pipe(webpack(webpackConfig))
      .pipe(gulp.dest('./build'));
  });
};
