//Llamando a las dependencias de sass y gulp
const {src,dest, watch} = require ("gulp");
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')(require('sass'));

//Buscando un archivo
function css(cb) {
    src('src/scss/**/*.scss') //Identifica el archivo
        .pipe(plumber())
        .pipe(sass()) //Copila en archivo
        .pipe(dest('build/css')); // Almacena el archivo
    
    cb(); // 
}



//Añadiendo watch 
function dev(cb) {
    watch('src/scss/**/*.scss', css);

    cb();
}
exports.css = css
exports.dev = dev