var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    config = require('../gulp.config')(),
    del = require('del'),
    fm = require('front-matter'),
    fs = require('fs'),
    path = require('path');

//gulp.task('index-templates', function() {
//    var templates = [],
//        components = [],
//        json = __dirname + '/../data/index.json';
//
//    $.util.log('Populate /data/index.json with template data');
//
//    return gulp
//        .src(config.templates)
//        .pipe($.plumber())
//        .pipe($.data(function(file) {
//            var content = fm(String(file.contents));
//            var f = getFilepath(file, 'templates/');
//
//            content.attributes.fileName = f;
//            templates.push(content.attributes);
//
//            fs.writeFileSync(json, JSON.stringify({
//                templates: templates
//            }));
//        }));
//});
//
//gulp.task('index-components', function() {
//    var components = [],
//        json = __dirname + '/../data/components.json';
//
//    $.util.log('Populate /data/components.json with components data');
//
//    return gulp
//        .src(config.components)
//        .pipe($.plumber())
//        .pipe($.data(function(file) {
//            var content = fm(String(file.contents));
//            var f = getFilepath(file, 'components/');
//
//            content.attributes.fileName = f;
//            components.push(content.attributes);
//
//            fs.writeFileSync(json, JSON.stringify({
//                components: components
//            }));
//        }));
//});

gulp.task('index', function() {
    createIndex('templates');
    createIndex('components');
});

function createIndex(type) {
    var data = [],
        jsonData = {},
        json = __dirname + '/../data/' + type +'.json';

    $.util.log('Populate /data/' + type + '.json with components data');

    return gulp
        .src(config[type])
        .pipe($.plumber())
        .pipe($.data(function(file) {
            var content = fm(String(file.contents));
            var f = getFilepath(file, type + '/');

            content.attributes.fileName = f;
            data.push(content.attributes);

            jsonData[type] = data;

            fs.writeFileSync(json, JSON.stringify(jsonData));
        }));
}

function getFilepath(file, prefix) {
    var f = file.path.split('/').pop();
    f = prefix + f;
    f = f.replace('jade', 'html');
    return f;
}
