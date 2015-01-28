'use strict';

var path = require('path');

module.exports = {
  entry: {
    app: ['./src/index.js']
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
        loader: 'jsx?harmony'
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass?' +
          'outputStyle=compact&' +
          'includePaths[]=' + path.resolve(__dirname, './node_modules')
      }
    ]
  },
  output: {
    path: path.join(__dirname, '../../build'),
    filename: 'components.js',
    library: 'Components',
    libraryTarget: 'umd'
  },
  plugins: [
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
