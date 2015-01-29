'use strict';

var path = require('path');

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
        loader: 'style!css!sass'
      }
    ]
  },
  output: {
    path: path.join(__dirname, '../../build'),
    filename: 'components.js',
    library: 'Components',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
