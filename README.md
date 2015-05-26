# GUFRO

Front End Prototype with [GulpJS](http://gulpjs.com/) using [Jade](http://jade-lang.com/) for templating and [Sass](http://sass-lang.com/) for styling

## Prerequisites

1. Install [Node.js](http://nodejs.org)
 - on OSX use [homebrew](http://brew.sh) `brew install node`
 - on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

2. Install these NPM packages globally
    ```bash
    npm install -g bower gulp
    ```

## Installing Packages
Run npm and bower to get all the required packages

 - `npm install`
 - `bower install`

## Running gufro

### Linting
 - Run code analysis using `gulp scripts-lint` . This runs jshint, jscs.


### Running in dev mode
 - Run the project with `gulp serve`

This will copy and compile all your templates and assets into the `.tmp` directory
and start `browser-sync` on http://localhost:3000


### Building the project
 - Build the optimized project using `gulp build`
 - This create the optimized code for the project and puts it in the `build` folder


## Exploring gufro

### Source structure
    /src
        /components
        /fonts
        /images
        /layouts
        /styles
        /scripts
        /templates

If you change the structure or rename the folders, don't forget to adapt the gulp.config.js

### Gulp

All settings are stored in gulp.config.js. The gulp folder contains all the gulp tasks.
Simply run `gulp` to get an overview of all the gulp tasks.

`/gulp/main.js` contains all the main gulp tasks.

You can add your own gulp tasks simply by adding a new file to the gulp folder.
Your new gulp task will be made available automatically.
