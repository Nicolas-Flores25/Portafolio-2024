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
});
