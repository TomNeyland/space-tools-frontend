'use strict';

var config = require('../config'),
    gulp = require('gulp'),
    templateCache = require('gulp-angular-templatecache');

// Views task
gulp.task('views', function () {

    // Put our index.html in the dist folder
    gulp.src('public/index.html')
        .pipe(gulp.dest(config.dist.root));

    // Process any other view files from app/views
    return gulp.src(config.views.src)
        .pipe(templateCache({
            standalone: true
        }))
        .pipe(gulp.dest(config.views.dest));

});