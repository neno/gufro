module.exports = function () {
    var src = './src/',
        tmp = './.tmp/',
        build = './build/',
        data = './data/',
        cssDir = 'styles/',
        jsDir = 'scripts/',
        components = src + 'components/';

    var config = {
        // all js to vet
        alljs: [
            src + '**/*.js',
            data + '**/*.json',
        ],
        bower: {
            json: require('./bower.json'),
            directory: './bower_components',
            ignorePath: '../..'
        },
        browserSync: {
            server: {
                baseDir: tmp
            },
            files: [tmp + '/**', '!' + build + '/**.map'],
            watchOptions: {
                debounceDelay: 2000 // Delay for events called in succession for the same file/event
            },
            reloadDelay: 1000
        },
        build: build,
        cssDir: cssDir,
        html: tmp + '**/*.html',
        jade: [
            src + '**/*.jade',
            '!' + src + 'layouts/*.jade'
        ],
        js: src + jsDir + '**/*.js',
        components: components + '**/*.jade',
        sass: {
            app: src + cssDir + 'app.scss',
            all: src + '**/*.scss',
            components: components + '**/*.scss'
        },
        scripts: {
            dev: tmp + jsDir,
            build: build + jsDir
        },
        styles: {
            dev: tmp + cssDir,
            build: build + cssDir
        },
        src: src,
        templates: src + 'templates/*.jade',
        tmp: tmp
    };

    return config;
};
