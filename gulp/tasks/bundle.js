'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('../../webpack.config');

module.exports = function() {
  if (process.env.NODE_ENV !== 'production') {
    webpackConfig.devtool = '@eval-source-map';
    webpackConfig.debug = true;
  }

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
