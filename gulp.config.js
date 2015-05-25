module.exports = function () {
    var src = './src/',
        tmp = './.tmp/',
        build = './build/',
        data = './data/',
        cssDir = 'styles/',
        fontsDir = 'fonts/',
        imgDir = 'images/',
        jsDir = 'scripts/',
        components = src + 'components/',
        nodeModules = './node_modules/',
        bowerComponents = './bower_components';

    var config = {
        alljs: [
            '**/*.js',
            '!' + nodeModules + '**/*.js',
            '!' + bowerComponents + '**/*.js'
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
        data: [
            data + 'data.json',
            data + 'settings.json'
        ],
        fonts: {
            src: src + fontsDir + '**/*.*',
            dev: tmp + fontsDir,
            build: build + fontsDir
        },
        html: tmp + '**/*.html',
        indexFiles: src + '*.jade',
        images: {
            src: src + imgDir + '**/*.*',
            dev: tmp + imgDir,
            build: build + imgDir
        },
        jade: [
            src + '**/*.jade',
            '!' + src + 'layouts/*.jade'
        ],
        js: src + jsDir + '**/*.js',
        sass: {
            app: src + cssDir + 'app.scss',
            all: src + '**/*.scss',
            components: components + '**/*.scss',
            componentsFile: src + cssDir + '_3.components.scss',
            main: [
                src + cssDir + '*.scss',
                '!' + src + cssDir + '_*.scss'
            ]
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
        tmp: tmp
    };

    return config;
};
