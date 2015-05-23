var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('../gulp.config')(),
    del = require('del');

gulp.task('views', ['clean-views'], function() {
    $.util.log('Compiling JADE views');
    createViews('templates');
    createViews('components');

//    return gulp
//        .src([
//            config.templates,
//            config.components
//        ])
//        .pipe($.plumber())
//        .pipe($.data(function() {
//            var file = require('../data/data.json');
//            return file;
//        }))
//        .pipe($.data(function() {
//            var file = require('../data/settings.json');
//            return file;
//        }))
//        .pipe($.jade({pretty: true}))
//        .pipe(gulp.dest(config.tmp));
});


function createViews(context) {
    return gulp
        .src(config[context])
        .pipe($.plumber())
        .pipe($.data(function() {
            var file = require('../data/data.json');
            return file;
        }))
        .pipe($.data(function() {
            var file = require('../data/settings.json');
            return file;
        }))
        .pipe($.jade({pretty: true}))
        .pipe(gulp.dest(config.tmp + '/' + context));
}

gulp.task('index-files', ['filelist'], function() {
    $.util.log('Compiling JADE index files');

    return gulp
        .src(config.indexFiles)
        .pipe($.plumber())
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
        .pipe($.data(function() {
            var file = require('../data/data.json');
            return file;
        }))
        .pipe($.jade({pretty: true}))
        .pipe(gulp.dest(config.tmp));
});

gulp.task('clean-views', function(done) {
    del(config.html, done);
});
