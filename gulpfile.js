//Llamando a las dependencias de sass y gulp
const {src,dest, watch,parallel} = require ("gulp");
//css
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')(require('sass'));
//imagene
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

//Buscando un archivo
function css(cb) {
    src('src/scss/**/*.scss') //Identifica el archivo
        .pipe(plumber())
        .pipe(sass()) //Copila en archivo
        .pipe(dest('build/css')); // Almacena el archivo
    
    cb(); // 
}

//js
function javascript(cb) {
    src("src/js/**/*.js")
        .pipe(dest("build/css"))

    cb();
}
//imaganes
function imagenes(cb) {
    const opciones = {
        optimizationLevel: 3
    }

    src('src/img/**/*.{png,jpg}')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('build/css'))

    cb();
}

function versionWebp(cb) {

    const opciones = {
        quality: 50
    }

    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/css'))
}

function versionAvif(cb) {

    const opciones = {
        quality: 50
    }

    src('src/img/**/*.{png,jpg}')
        .pipe(avif(opciones))
        .pipe(dest('build/css'))
}

//Añadiendo watch 
function dev(cb) {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);

    cb();
}
exports.css = css;
exports.js = javascript
exports.imagenes = imagenes
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes,versionWebp,versionAvif,dev,javascript);