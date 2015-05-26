var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('../gulp.config')();

// List all main tasks

// Run in dev mode
gulp.task('serve', ['browser-sync']);

// Copy and compile templates and assets
gulp.task('dev', ['inject', 'fonts', 'images']);

// Build and optimize the project for production
gulp.task('build', ['optimize', 'fonts-build', 'images-build']);

// List all tasks
gulp.task('help', $.taskListing);

gulp.task('default', ['help']);
