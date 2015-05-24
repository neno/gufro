var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('../gulp.config')(),
    del = require('del'),
    matter = require('jade-var-matter');

gulp.task('views', ['clean-views'], function() {
    $.util.log('Compiling JADE views');
    return gulp
        .src(config.jade)
        .pipe($.plumber())
        .pipe($.data(function() {
            var file = require('../data/data.json');
            return file;
        }))
        .pipe($.data(function() {
            var file = require('../data/settings.json');
            return file;
        }))
        .pipe($.data(function(file) {
            return matter(String(file.contents));
        }))
        .pipe($.nav())
        .pipe($.jade({pretty: true}))
        .pipe(gulp.dest(config.tmp));
});

gulp.task('clean-views', function(done) {
    del(config.html, done);
});
