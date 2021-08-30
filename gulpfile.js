// Initialize modules
const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const terser = require('gulp-terser');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const browsersync = require('browser-sync').create();

// Sass task
function scssTask() {
    return src('app/scss/*.scss', { sourcemaps: true})
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('app/css/', { sourcemaps: '.'}));
}

/* // Javascript Task

function jsTask() {
    return src('app/js/*.js', {sourcemaps: true})
    .pipe(terser())
    .pipe(dest('app/js/',{ sourcemaps: '.'}))
} */

// Browsersync
function browserSyncServer(cb) {
    browsersync.init({
        server: {
            baseDir: '.',
        },
        notify: {
            styles: {
                top: 'auto',
                bottom: '0',
            },
        },
    });
    cb();
}
function browserSyncReload(cb) {
    browsersync.reload();
    cb();
}

// Watch Task
function watchTask() {
    watch('*.html', browserSyncReload);
    watch(['app/scss/**/*.scss', 'app/js/**/*.js'],
    series(scssTask, browserSyncReload));
}

// Default Gulp Task
exports.default = series(scssTask,  browserSyncServer, watchTask);

// npm install @babel/core @babel/preset-env postcss autoprefixer browser-sync cssnano dart-sass gulp gulp-babel 
// gulp-postcss gulp-sass gulp-terser