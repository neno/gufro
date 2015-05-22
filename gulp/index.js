var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('../gulp.config')(),
    del = require('del'),
    fm = require('front-matter'),
    fs = require('fs'),
    path = require('path');

gulp.task('index', function() {
    createIndex('templates');
    createIndex('components');
});

function createIndex(context) {
    var data = [],
        jsonData = {},
        json = __dirname + '/../data/' + context +'.json';

    $.util.log('Populate /data/' + context + '.json with components data');

    return gulp
        .src(config[context])
        .pipe($.plumber())
        .pipe($.data(function(file) {
            var content = fm(String(file.contents));
            var f = getFilepath(file, context);

            content.attributes.fileName = f;
            data.push(content.attributes);
            jsonData[context] = data;
            fs.writeFileSync(json, JSON.stringify(jsonData));
        }));
}

function getFilepath(file, context) {
    var urlParts = file.path.split('/'),
        idx = urlParts.indexOf(context),
        f = urlParts.slice(idx).join('/');

    f = f.replace('jade', 'html');
    return f;
}
