'use strict';

var config = require('../config'),
    browserSync = require('browser-sync'),
    gulp = require('gulp');

gulp.task('browserSync', function () {

    browserSync({
        port: config.browserPort,
        ui: {
            port: config.UIPort
        },
        proxy: 'localhost:' + config.serverPort
    });

});
