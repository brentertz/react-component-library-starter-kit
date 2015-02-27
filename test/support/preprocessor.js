'use strict';

var ReactTools = require('react-tools');
var traceur = require('traceur');

module.exports = {
  process: function(src, path) {
    if (!/node_modules/.test(path)) {
      if (path.match(/\.jsx?$/)) {
        src = ReactTools.transform(src, { harmony: true });
        src = traceur.compile(src, { modules: 'commonjs' }, path);
      }
      else {
        src = '';
      }
    }

    return src;
  }
};
