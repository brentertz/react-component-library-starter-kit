'use strict';

var babel = require('babel');

module.exports = {
  process: function(src, path) {
    src = src.replace(/require\(.*\.scss.\);/g, '');

    if (!/node_modules/.test(path) && babel.canCompile(path)) {
      src = babel.transform(src, {
        filename: path,
        optional: ['runtime', 'es7.objectRestSpread']
      }).code;
    }

    return src;
  }
};
