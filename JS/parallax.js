document.addEventListener("DOMContentLoaded", function () {

    //accederemos al tamaño de la ventanda (ancho)

    //guardamos el valor del scroll de la ventana junto al callback
    window.addEventListener("scroll", function () {

        var ventanaWidth = this.window.innerWidth;

        //limitaremos el tamaño de ventana a 300 px para que se pueda ejecutar la animación.)

        if (ventanaWidth >= 300) {
            var scroll = this.window.scrollY; // Accedemos al posicionamiento vertical.

            // Para el primer elemento, la transformación en Y debería ser desde -50% hasta (scroll / 2) + 50%
            var transformY = 'translate(-50%,' + ((scroll / 2) - 50) + '%)';
            this.document.querySelector('.cristal').style.transform = transformY;

            // Para el segundo elemento, la transformación en Y debería ser desde -50% hasta (scroll / -20) - 50%
            transformY = 'translate(-50%,' + ((scroll / 20) - 50) + '%)';
            document.querySelector('.cristal').style.transform = transformY;
        }


    });

}); 