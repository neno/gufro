var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('../gulp.config')(),
    del = require('del'),
    wiredep = require('wiredep').stream;

// Collect and optimize assets into HTML and save everything to build directory
gulp.task('optimize', ['clean-build', 'inject'], function() {
    $.util.log('Optimizing all assets');

    var assets = $.useref.assets({searchPath: config.tmp}),
        cssFilter = $.filter('**/*.css'),
        jsFilter = $.filter('**/*.js');

    return gulp
        .src(config.html)
        .pipe($.plumber())
        .pipe(assets)
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe(jsFilter.restore())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest(config.build));
});

gulp.task('clean-build', function() {
    del(config.build);
});
