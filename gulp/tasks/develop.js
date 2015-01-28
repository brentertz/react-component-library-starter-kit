'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var serveStatic = require('serve-static');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../../webpack.config');

module.exports = function() {
  gulp.task('develop', function() {
    webpackConfig.devtool = '@eval-source-map';
    webpackConfig.debug = true;
    webpackConfig.entry.app.unshift('webpack/hot/dev-server');
    webpackConfig.plugins.unshift(new webpack.HotModuleReplacementPlugin());

    var app = new WebpackDevServer(webpack(webpackConfig), {
      contentBase: 'examples',
      hot: true,
      publicPath: '/build/',
      stats: {
        colors: true
      }
    });
    app.use(serveStatic(path.join(__dirname, '../../node_modules')));
    app.listen(3000, 'localhost', function(err) {
      if (err) {
        throw new gutil.PluginError('webpack-dev-server', err);
      }
      gutil.log('[webpack-dev-server]', 'http://localhost:3000/webpack-dev-server/index.html');
    });
  });
};
