document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(i = 1; i <= 12; i++){
        const picture = document.createElement('picture');
        picture.innerHTML = `
        <source srcset="build/css/thumb/${i}.avif" alt="imagen_vocalista/avif">
        <source srcset="build/css/thumb/${i}.webp" alt="imagen_vocalista/webp">
        
        <img loading="lazy" height="300" width="200" src="build/css/thumb/${i}.jpg" alt="imagen_vocalista/jpg">
        `
        picture.onclick = function(){
            mostrarImagen(i);
        }

        galeria.appendChild(picture)

    }

}

function mostrarImagen(id) {
    const pictureContainer = document.createElement('div'); // Crear un contenedor para la imagen
    const picture = document.createElement('picture');
    picture.innerHTML = `
        <source srcset="build/css/grande/${id}.avif" type="image/avif">
        <source srcset="build/css/grande/${id}.webp" type="image/webp">
        <img loading="lazy" src="build/css/grande/1.jpg.jpg" alt="imagen_vocalista">
    `;

    pictureContainer.appendChild(picture); // Agregar la imagen al contenedor

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.appendChild(pictureContainer); // Agregar el contenedor con la imagen al overlay

    const body = document.querySelector('body');
    body.appendChild(overlay); // Agregar el overlay al cuerpo del documento
}
