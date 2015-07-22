'use strict';

module.exports = {

    'browserPort': 3000,
    'UIPort': 3001,
    'serverPort': 3002,

    'styles': {
        'src': 'public/**/*.scss',
        'dest': 'build'
    },

    'scripts': {
        'src': 'public/**/*.js',
        'dest': 'build'
    },

    'images': {
        'src': 'public/assets/images/**/*',
        'dest': 'build/assets/images'
    },

    'fonts': {
        'src': ['public/fonts/**/*'],
        'dest': 'build/fonts'
    },

    'views': {
        'watch': [
            'public/index.html',
            'public/**/*.html'
        ],
        'src': 'public/**/*.html',
        'dest': 'public'
    },

    'gzip': {
        'src': 'build/**/*.{html,xml,json,css,js,js.map}',
        'dest': 'build/',
        'options': {}
    },

    'dist': {
        'root': 'build'
    },

    'browserify': {
        'entries': ['./public/main.js'],
        'bundleName': 'main.js',
        'sourcemap': true
    },

    'test': {
        'karma': 'test/karma.conf.js',
        'protractor': 'test/protractor.conf.js'
    }

};
