'use strict';

var config = require('../config'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    gulpif = require('gulp-if'),
    handleErrors = require('../util/handleErrors'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {

    return gulp.src(config.styles.src)
        .pipe(sass({
            sourceComments: global.isProd ? 'none' : 'map',
            sourceMap: 'sass',
            outputStyle: global.isProd ? 'compressed' : 'nested'
        }))
        .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.styles.dest))
        .pipe(gulpif(browserSync.active, browserSync.reload({stream: true})));

});