var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('../gulp.config')(),
    del = require('del');

gulp.task('fonts', ['clean-fonts'], function () {
    $.util.log('Copying fonts');

    return gulp
        .src(config.fonts.src)
        .pipe(gulp.dest(config.fonts.dev));
});

gulp.task('fonts-build', ['clean-fonts'], function () {
    $.util.log('Copying fonts');

    return gulp
        .src(config.fonts.src)
        .pipe(gulp.dest(config.fonts.build));
});

gulp.task('clean-fonts', function (done) {
    var files = config.build + 'fonts/**/*.*';
    del(files, done);
});
