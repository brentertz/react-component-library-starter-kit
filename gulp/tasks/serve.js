'use strict';

var connect = require('connect');
var gulp = require('gulp');
var open = require('open');
var serveStatic = require('serve-static');

module.exports = function() {
  gulp.task('serve', function() {
    var app = connect();
    app.use(serveStatic('./'));
    app.listen(3000, function() {
      open('http://localhost:3000/examples/');
    });
  });
};
