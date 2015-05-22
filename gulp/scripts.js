var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    args = require('yargs').argv,
    config = require('../gulp.config')();

// Check scripts for errors and code style
//gulp.task('scripts-lint', function() {
//    return gulp
//        .src(config.alljs)
//        .pipe($.jscs())
//        .pipe($.jshint())
//        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}));
//});

gulp.task('scripts-lint', function () {
    $.util.log('Analyzing source with JSHINT and JSCS');

    return gulp
        .src([
            config.src + '**/*.js',
            './*.js'
        ])
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('scripts', ['scripts-lint'], function () {
    return gulp
        .src(config.js)
        .pipe(gulp.dest(config.scripts.dev));
});
