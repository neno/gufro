var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('../gulp.config')();

// Check scripts for errors and code style
gulp.task('scripts-lint', function() {
    return gulp
        .src(config.alljs)
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}));
});
