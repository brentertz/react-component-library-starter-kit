'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,

  debug: process.env.NODE_ENV !== 'production',

  devtool: 'sourcemap',

  entry: './index.jsx',

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          optional: ['runtime'],
          stage: 0
        }
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      }, {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },

  output: {
    path: path.join(__dirname, '..', 'build', 'demo'),
    filename: 'demo.js',
    libraryTarget: 'var'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin('demo.css', { allChunks: true })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['demo', 'node_modules']
  },

  resolveLoader: {
    root: path.join(__dirname, '..' ,'node_modules')
  }
};