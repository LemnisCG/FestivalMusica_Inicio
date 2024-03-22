document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++){
        (function(index) {
            const picture = document.createElement('picture');
            picture.innerHTML = `
            <source srcset="build/css/thumb/${index}.avif" alt="imagen_vocalista/avif">
            <source srcset="build/css/thumb/${index}.webp" alt="imagen_vocalista/webp">
            
            <img loading="lazy" height="300" width="200" src="build/css/thumb/${index}.jpg" alt="imagen_vocalista/jpg">
            `;
            picture.onclick = function(){
                mostrarImagen(index);
            };
    
            galeria.appendChild(picture);
        })(i);
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

    //Crear el Overlay en la imagen
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.appendChild(pictureContainer); // Agregar el contenedor con la imagen al overlay

    //boton para cerrar el overlay

    const cerrarOverlay = document.createElement('P');
    cerrarOverlay.textContent = 'X';
    cerrarOverlay.classList.add('btn-cerrar');
    cerrarOverlay.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body')
        overlay.remove();
    }

    overlay.appendChild(cerrarOverlay);


    //añandiendo overlay a body
    const body = document.querySelector('body');
    body.classList.add('fijar-body')
    body.appendChild(overlay); // Agregar el overlay al cuerpo del documento

}
