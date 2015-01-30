'use strict';

var ReactTools = require('react-tools');

module.exports = {
  process: function(src, path) {
    if (path.match(/\.jsx?$/)) {
      src = ReactTools.transform(src);
    } else {
      src = '';
    }

    return src;
  }
};
