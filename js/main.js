//Variables


const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.nav');
const enlaces = document.querySelectorAll('.nav__link');
const btnDownload = document.querySelector('#download');


document.addEventListener('DOMContentLoaded', () => {
    //Mostrar Menu
    btnMenu.addEventListener( 'click', ( e ) => {
    
        menu.classList.toggle('show');
    } )
    //ScrollNav -- Scroll Navegacion
    scrollNav();
    //navFixed -- Navegacion Fija
    navFixed();
    //Descarga CV
    btnDownload.addEventListener('click', mostrarMensaje );
})



function scrollNav() {

    enlaces.forEach( enlace  => {

        enlace.addEventListener('click', ( e ) => {
            e.preventDefault();

            const seccion = document.querySelector(e.target.attributes.href.value);

            
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        })
    })
}



function navFixed() {
    const barra = document.querySelector('.nav_content');

        const observer = new IntersectionObserver( entries => {
            if (entries[0].isIntersecting ) {

                barra.classList.remove('fijo');
            }else {
                barra.classList.add('fijo');
            }
        }) 

    observer.observe( document.querySelector('.hero'));
}

function mostrarMensaje () {
    

}