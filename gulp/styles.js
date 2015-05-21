var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('../gulp.config')(),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

// Compiling SASS --> CSS
gulp.task('styles', ['clean-styles', 'inject-components-styles'], function() {
    return gulp
        .src(config.sass.app)
        .pipe($.plumber())
        .pipe($.sass())
        .pipe($.autoprefixer({browsers: ['last 2 versions', '> 5%']}))
        .pipe(gulp.dest(config.styles.dev))
        .pipe(reload({stream: true}));
});

// Inject components scss files into app.scss
gulp.task('inject-components-styles', function() {
    var moduleFiles = gulp.src(config.sass.components, {read: false});
    var injectOptions = {
        transform: function(filePath) {
            filePath = filePath.replace('src/', '../');
            return '@import "' + filePath + '";';
        },
        starttag: '// injector',
        endtag: '// endinjector',
        addRootSlash: false
    };

    return gulp
        .src(config.sass.app)
        .pipe($.inject(moduleFiles, injectOptions))
        .pipe(gulp.dest(config.src + config.cssDir));
});

gulp.task('clean-styles', function(done) {
    del(config.styles.dev + '**/*.css', done);
});
