var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    wiredep = require('wiredep').stream,
    config = require('../gulp.config')();

// inject bower and custom JS and CSS into html files
gulp.task('inject', ['styles', 'views'], function() {
    var options = {
        bowerJson: config.bower.json,
        directory: config.bower.directory,
        igonrePath: config.bower.ignorePath
    };

    return gulp
        .src(config.views.dev + '**/*.html')
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js, {relative: true})))
        .pipe($.inject(gulp.src(config.js, {read: false}), {relative: true}))
        .pipe($.inject(gulp.src(config.styles.dev + '**/*.css', {read: false}), {relative: true}))
        .pipe(gulp.dest(config.views.dev));
});
