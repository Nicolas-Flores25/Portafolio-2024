document.addEventListener("DOMContentLoaded", function () {

    inicio = document.getElementById('inicio').offsetTop,
    quienSoy = document.getElementById('quien-soy').offsetTop
    //Guardamos la posicion de la pagina.
    habilidades = document.getElementById('habilidades').offsetTop,
        proyectos = document.getElementById('proyectos').offsetTop,
        contacto = document.getElementById('contacto').offsetTop;

    //Accedemos a los botones y agregamos un evento para cuando se de click nos envíe al lugar del ID.

    document.getElementById('inicio-btn').addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: inicio - 250,
            behavior: "smooth"
        });
    })
    document.getElementById('quienSoy-btn').addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: quienSoy - 250,
            behavior: "smooth"
        });
    })
    document.getElementById('habilidades-btn').addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: habilidades - 250,
            behavior: "smooth"
        });
    })
    document.getElementById('proyectos-btn').addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: proyectos - 250,
            behavior: "smooth"
        });
    })

    document.getElementById('contacto-btn').addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: contacto - 100,
            behavior: "smooth"
        });
    })


});