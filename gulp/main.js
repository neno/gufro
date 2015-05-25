var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('../gulp.config')();

// List all main tasks

gulp.task('serve', ['browser-sync']);

gulp.task('dev', ['inject', 'fonts', 'images']);

gulp.task('build', ['optimize', 'fonts-build', 'images-build']);

gulp.task('default');
