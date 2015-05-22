var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('../gulp.config')(),
    del = require('del'),
    fm = require('front-matter'),
    fs = require('fs'),
    path = require('path'),
    browserSync = require('browser-sync');

// Compiling Jade --> Html
gulp.task('views', ['clean-views','index'], function() {
    return gulp
        .src(config.jade)
        .pipe($.plumber())
        .pipe($.data(function() {
            var file = require('../data/data.json');
            return file;
        }))
        .pipe($.data(function() {
            var file = require('../data/templates.json');
            return file;
        }))
        .pipe($.data(function() {
            var file = require('../data/components.json');
            return file;
        }))
        .pipe($.data(function() {
            var file = require('../data/settings.json');
            return file;
        }))
        .pipe($.data(function(file) {
            var content = fm(String(file.contents));
            file.contents = new Buffer(content.body);
            return content.attributes;
        }))
        .pipe($.jade({pretty: true}))
        .pipe(gulp.dest(config.tmp));
});

gulp.task('clean-views', function(done) {
    del(config.html, done);
});


