'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('../../webpack.config');

module.exports = function() {
  gulp.task('bundle', function(callback) {
    webpack(webpackConfig, function(err, stats) {
      if (err) { throw new gutil.PluginError('webpack', err); }
      gutil.log('[webpack]', stats.toString({
        colors: true
      }));
      callback(null);
    });
  });
};
