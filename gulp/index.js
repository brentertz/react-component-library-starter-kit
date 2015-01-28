'use strict';

var fs = require('fs');
var path = require('path');
var tasksPath = path.join(__dirname, 'tasks');
var tasks = fs.readdirSync(tasksPath);

tasks.forEach(function(task) {
  require(path.join(tasksPath, task))();
});
