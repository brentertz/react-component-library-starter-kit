'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,

  debug: process.env.NODE_ENV !== 'production',

  devtool: 'sourcemap',

  entry: './index.js',

  eslint: {
    failOnError: true
  },

  externals: [
    {
      react: {
        root: 'React',
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react'
      }
    }
  ],

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          optional: ['runtime'],
          stage: 0
        },
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
        exclude: /node_modules/
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },

  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'components.js',
    library: 'Components',
    libraryTarget: 'umd'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin('components.css', { allChunks: true })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['components', 'node_modules']
  },

  resolveLoader: {
    root: path.join(__dirname, '..', 'node_modules')
  }
};
