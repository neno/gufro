module.exports = function () {
    var src = './src/',
        tmp = './.tmp/',
        build = './build/',
        data = './data/',
        cssDir = 'styles/',
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
        cssDir: cssDir,
        jade: [
            src + '**/*.jade',
            '!' + src + 'layouts/*.jade'
        ],
        js: src + '**/*.js',
        components: components,
        sass: {
            app: src + cssDir + 'app.scss',
            all: src + '**/*.scss',
            components: components + '**/*.scss'
        },
        styles: {
            dev: tmp + cssDir,
            build: build + cssDir
        },
        src: src,
        templates: src + 'templates/*.jade',
        views: {
            dev: tmp
        }
    };

    return config;
};


//browsersync: {
//    files: [build+'/**', '!'+build+'/**.map'] // Exclude map files
//  , notify: false // In-line notifications (the blocks of text saying whether you are connected to the BrowserSync server or not)
//  , open: true // Set to false if you don't like the browser window opening automatically
//  , port: 3000 // Port number for the live version of the site; default: 3000
//  , proxy: 'brandofsisters.dev' // Using a proxy instead of the built-in server as we have server-side rendering to do via WordPress
////  , startPath: "/brand-of-sisters/"
//  , watchOptions: {
//      debounceDelay: 2000 // Delay for events called in succession for the same file/event
//    }
//  },
