var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('../gulp.config')(),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('browser-sync', ['dev'], function() {
    $.util.log('Serve prototype and sync browsers');

    browserSync(config.browserSync);

    gulp.watch(config.sass.all, ['styles']);
    gulp.watch(config.jade, ['inject']).on('change', reload);
    gulp.watch([config.js, config.data], ['inject']).on('change', reload);
});
