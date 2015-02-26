'use strict';

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
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
        loader: 'jsx?harmony'
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'components.js',
    library: 'Components',
    libraryTarget: 'umd'
  },
  plugins: [
    new ExtractTextPlugin('components.css', { allChunks: true })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
