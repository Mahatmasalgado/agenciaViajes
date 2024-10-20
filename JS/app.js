/* Para dispositivos de tablet */
window.addEventListener('resize', function() {
    // Obtiene el ancho actual de la ventana
    let width = this.window.innerWidth;
    console.log(width);
    

    // Aplica diferentes acciones dependiendo del ancho de la ventana
    if (width <= 430){
        console.log('Pantalla celular');
        //cambiamos logo
        const logo = document.querySelector(".encabezado__logo--icono");
        logo.src = "../img/Logo-pequenio.png";
    }
    
    if (width <= 768) {
        console.log('Pantalla de tablet');
        // obtenemos lista nav
        const menu = document.querySelector(".encabezado__navegacion--menu");

        if (menu.classList.contains("none")){
            const navLista = document.querySelectorAll(".encabezado__navegacion--elemento");
            navLista.forEach(element => {
                element.classList.add("none");
            });

            menu.classList.remove("none");
        }
    }else{
        console.log('Pantalla de escritorio');

        // obtenemos lista nav
        const navLista = document.querySelectorAll(".encabezado__navegacion--elemento");

        if (navLista[0].classList.contains("none")){
            //agregamos logo primero
            const logo = document.querySelector(".encabezado__logo--icono");
            logo.src = "../img/logoprovisriablanca-1@2x.png";

            //modificamos lo demás
            navLista.forEach(elemento => {
                elemento.classList.remove("none");
            });
            const menu = document.querySelector(".encabezado__navegacion--menu");
            menu.classList.add("none")
        }

    }

});

// También puedes ejecutar el código una vez al cargar la página para aplicar las propiedades iniciales
window.dispatchEvent(new Event('resize'));
