var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('../gulp.config')(),
    del = require('del'),
    fs = require('fs'),
    path = require('path');

gulp.task('filelist', function() {
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
        .pipe($.tap(function(file) {
            var f = getFilepath(file, context);
            var t = f.split('/').pop();
            t = t.replace('-',' ').replace('.html','');
            data.push({
                fileName: f,
                title: t
            });
        }))
        .on('end', function(file) {
            jsonData[context] = data;
            $.util.log(data);
            fs.writeFileSync(json, JSON.stringify(jsonData));
        });
}

function getFilepath(file, context) {
    var urlParts = file.path.split('/'),
        idx = urlParts.indexOf(context),
        f = urlParts.slice(idx).join('/');

    f = f.replace('jade', 'html');
    return f;
}
