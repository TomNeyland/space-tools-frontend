'use strict';

var gulp = require('gulp'),
    protractor = require('gulp-protractor').protractor,
    webdriver = require('gulp-protractor').webdriver,
    webdriverUpdate = require('gulp-protractor').webdriver_update,
    config = require('../config');

gulp.task('webdriver-update', webdriverUpdate);
gulp.task('webdriver', webdriver);

gulp.task('protractor', ['webdriver-update', 'webdriver', 'server'], function () {

    return gulp.src('test/e2e/**/*.js')
        .pipe(protractor({
            configFile: config.test.protractor
        }))
        .on('error', function (err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });

});