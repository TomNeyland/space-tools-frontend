/**
 * Created by skessler on 7/21/15.
 */

'use strict';

var fs = require('fs'),
    onlyScripts = require('./util/scriptFilter'),
    tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

tasks.forEach(function (task) {
    require('./tasks/' + task);
});