'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('test', ['server'], function () {

    return runSequence('unit', 'protractor');

});