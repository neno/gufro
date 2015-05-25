var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('../gulp.config')(),
    del = require('del');

gulp.task('images', ['clean-images-dev'], function () {
    $.util.log('Copying');

    return gulp
        .src(config.images.src)
        .pipe(gulp.dest(config.images.dev));
});

gulp.task('images-build', function () {
    $.util.log('Copying and compressing images');

    return gulp
        .src(config.images.src)
        .pipe($.imagemin({optimizationLevel: 4}))
        .pipe(gulp.dest(config.images.build));
});

gulp.task('clean-images-dev', function(done) {
    var images = config.images.dev + '**/*.*';
    del(images, done);
});

gulp.task('clean-images-dev', function(done) {
    var images = config.images.build + '**/*.*';
    del(images, done);
});
