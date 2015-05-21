var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('../gulp.config')(),
    del = require('del'),
    fm = require('front-matter'),
    fs = require('fs'),
    path = require('path');

gulp.task('index', function() {
    var toc = [];
    var json = __dirname + '/../data/index.json';

    $.util.log('Populate /data/index.json with template data');

    return gulp
        .src(config.templates)
        .pipe($.plumber())
        .pipe($.data(function(file) {
            var content = fm(String(file.contents));
            var f = getFilepath(file);

            content.attributes.fileName = f;
            toc.push(content.attributes);

            fs.writeFileSync(json, JSON.stringify({templates: toc}));
        }));

    function getFilepath(file) {
        var f = file.path.split('/').pop();
        f = 'templates/' + f;
        f = f.replace('jade', 'html');
        return f;
    }
});
