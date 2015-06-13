'use strict';

const babel = require('babel');

module.exports = {
  process: function(src, path) {
    src = src.replace(/require\(.*\.scss.\);/g, '');

    if (!/node_modules/.test(path) && babel.canCompile(path)) {
      src = babel.transform(src, {
        filename: path,
        optional: ['runtime'],
        stage: 0
      }).code;
    }

    return src;
  }
};
