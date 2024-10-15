/* Para dispositivos de tablet */
function tablet(){
    if (window.screen.width <= 768){
        const logo = document.querySelectorAll(".encabezado__logo--icono");
        const navlista = document.querySelector(".encabezado__navegacion--lista");
        const nav = document.querySelector(".encabezado__navegacion");

        const menu = document.createElement("img");

        logo.src = "../img/Logo-pequenio.png";


        navlista.style.display = "none";
        menu.src = "../img/menu.png";       // URL de la imagen
        menu.alt = "Boton menu";
        nav.appendChild(menu);
    }
}

tablet();