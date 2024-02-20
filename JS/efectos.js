document.addEventListener("DOMContentLoaded", function() {
    var efectoMenu = document.querySelectorAll('.navbar-nav .nav-link');

    efectoMenu.forEach(function(link, index) {
        link.style.position = 'relative';
        link.style.top = '-100px';
        setTimeout(function() {
            link.style.transition = 'top 1s ease-in-out';
            link.style.top = '0';
        }, 500 + (index * 500));
    });

    var efectoCristal = document.querySelectorAll('.cristal');
    
    efectoCristal.forEach(function(link, index){
        link.style.opacity = "0";
    });

    //agregamos un retraso para que cargue la animacion

    setTimeout(function(){
        efectoCristal.forEach(function(link, index){
            link.style.transition = 'opacity 1.5s ease-in-out';
            link.style.opacity = "1";
        }, 500);

    });

});
