//Llamando a las dependencias de sass y gulp
const {src,dest, watch,parallel} = require ("gulp");
//css
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')(require('sass'));

const webp = require('gulp-webp')

//Buscando un archivo
function css(cb) {
    src('src/scss/**/*.scss') //Identifica el archivo
        .pipe(plumber())
        .pipe(sass()) //Copila en archivo
        .pipe(dest('build/css')); // Almacena el archivo
    
    cb(); // 
}
//imaganes

function versionWebp(cb) {

    const opciones = {
        quality: 50
    }

    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/css'))
}

//Añadiendo watch 
function dev(cb) {
    watch('src/scss/**/*.scss', css);

    cb();
}
exports.css = css;
exports.versionWebp = versionWebp;
exports.dev = parallel(versionWebp,dev);