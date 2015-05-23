var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    wiredep = require('wiredep').stream,
    config = require('../gulp.config')();

// inject bower and custom JS and CSS into html files
gulp.task('inject', ['styles', 'scripts', 'views', 'index-files'], function() {
    $.util.log('Wire up all bower and inject all custom CSS and JS');

    var options = {
        bowerJson: config.bower.json,
        directory: config.bower.directory,
        igonrePath: config.bower.ignorePath
    };

    return gulp
        .src(config.html)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.scripts.dev + '**/*.js', {read: false}), {relative: true}))
        .pipe($.inject(gulp.src(config.styles.dev + '**/*.css', {read: false}), {relative: true}))
        .pipe(gulp.dest(config.tmp));
});

// Collect, merge and inject optimized assets into HTML
gulp.task('inject-optimized', ['inject'], function() {
    return gulp
        .src(config.html)
        .pipe($.plumber())
        .pipe(gulp.dest());
});
