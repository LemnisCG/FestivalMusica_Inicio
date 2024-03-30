document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
};

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes')
    for(let i = 1; i <= 12; i++){
        (function(index){
            const picture = document.createElement('picture');
            picture.innerHTML = `
                <picture>
                    <source srcset="/build/css/thumb/${index}.avif" type="imagen_vocalista/avif">
                    <source srcset="/build/css/thumb/${index}.webp" type="imagen_vocalista/webp">
                    <img loading="lazy" height="300" width="200" src="/build/css/thumb/${index}.jpg" alt="">
                </picture>
            `
            
            picture.onclick = function(){
                mostrarImagen(index);
            }

            galeria.appendChild(picture) 
        })(i);
       
    }
}

function mostrarImagen(id){
    const picture = document.createElement('picture');
    picture.innerHTML = `
        <picture>
            <source srcset="/build/css/grande/${id}.avif" type="imagen_vocalista/avif">
            <source srcset="/build/css/grande/${id}.webp" type="imagen_vocalista/webp">
            <img loading="lazy" height="300" width="200" src="/build/css/grande/${id}.jpg" alt="">
        </picture>
    `
    
    //abrir imagen
    const overlay = document.createElement('DIV');
    overlay.classList.add('overlay');
    overlay.appendChild(picture)
    overlay.onclick = function(){
        const body = document.querySelector('body');
        body.appendChild(overlay)
        overlay.remove();
    }

    //cerrar imagen
    const cerrarBtn = document.createElement('p');
    cerrarBtn.textContent = 'X';
    cerrarBtn.classList.add('btn-cerrar'); 
    cerrarBtn.onclick = function(){
        const body = document.querySelector('body');
        body.appendChild(overlay)
        overlay.remove();
    }
    overlay.appendChild(cerrarBtn)
    
    //añadir imagen a html
    const body = document.querySelector('body');
    body.classList.add('fijar-body')
    body.appendChild(overlay)


}