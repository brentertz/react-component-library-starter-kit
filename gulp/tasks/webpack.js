'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackComponentsConfig = require('../../webpack-components.config');
var webpackDemoConfig = require('../../webpack-demo.config');

function createTask(taskName, webpackConfig) {
  gulp.task(taskName, function(callback) {
    webpack(webpackConfig, function(err, stats) {
      if (err) { throw new gutil.PluginError('webpack', err); }
      gutil.log('[webpack]', stats.toString({
        colors: true
      }));
      callback(null);
    });
  });
}

module.exports = function() {
  createTask('webpack:components', webpackComponentsConfig);
  createTask('webpack:demo', webpackDemoConfig);
  gulp.task('webpack', ['webpack:components', 'webpack:demo']);
};

