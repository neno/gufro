var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    args = require('yargs').argv,
    config = require('../gulp.config')();

gulp.task('scripts-lint', function () {
    $.util.log('Analyzing source with JSHINT and JSCS');

    return gulp
        .src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('scripts', function () {
    return gulp
        .src(config.js)
        .pipe(gulp.dest(config.scripts.dev));
});
