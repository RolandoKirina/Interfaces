//preloader

window.addEventListener("load", function() {
    const percentageElement = document.querySelector('#percentage');
const progressBar = document.querySelector('#progress-bar');

// Inicializa el porcentaje en 1%
let percentage = 1;

// Función para actualizar el porcentaje en el DOM
function updatePercentage() {
    percentageElement.textContent = `${percentage}%`;
    progressBar.style.width = `${percentage}%`;

    // Si el porcentaje no ha llegado al 100%, incrementa en 1 después de un breve retraso
    if (percentage < 100) {
        percentage++;
        setTimeout(updatePercentage, 40); // Actualiza cada 40 milisegundos (ajusta según tus necesidades)
    }
}
    // Comienza el proceso de carga
    updatePercentage();

    const loader = document.querySelector(".loader");
    const content = document.querySelector(".all");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", function() {
        content.classList.add("show"); //carga todo el contenido
        this.remove(); //borra el div loader
 }); 
}); 

//nav section
let botonesFooter = document.querySelectorAll("#footer-btn");

botonesFooter.forEach(boton => {
    boton.addEventListener("click", function() {
        boton.parentElement.nextElementSibling.classList.toggle("show");
    });
});

// let botonesNav = document.querySelectorAll("#menu-nav");

let perfil = document.querySelector(".perfil");
let carrito = document.querySelector(".carrito");
let menuburguer = document.querySelector(".hamburguer-menu-desplegado");

perfil.addEventListener("click", function() {
    perfil.nextElementSibling.classList.toggle("show");
    carrito.nextElementSibling.classList.remove("show");
    menuburguer.classList.remove("show");
});

carrito.addEventListener("click", function() {
    carrito.nextElementSibling.classList.toggle("show");
    perfil.nextElementSibling.classList.remove("show");
    menuburguer.classList.remove("show");
});


// botonesNav.forEach(boton => {
//     boton.addEventListener("click", function() {
//         boton.parentElement.nextElementSibling.classList.toggle("show");
//         console.log(boton);
//     })
// });

let openedBurguer = false; //

document.querySelector("#menu-burguer").addEventListener("click", function( ) {
    document.querySelector("#menuH").classList.toggle("show");
    let img = document.querySelector("#imgburguer");


    document.querySelector(".carritoDesplegado").classList.remove("show");
    document.querySelector(".perfilDesplegado").classList.remove("show");
    
    if(!openedBurguer) {
        img.src = "imgs/iconos/menuabierto.png";
       
    }
    else {
        img.src = "imgs/iconos/menucerrado.png";
    }

    openedBurguer = !openedBurguer;

    
});

let ayudaDesplegado = false;

let btnayuda = document.querySelector("#btn-help"); 
let texto = btnayuda.textContent;

btnayuda.addEventListener("click", function() {
    this.classList.toggle("show");
    this.parentElement.nextElementSibling.classList.toggle("show");

    if(!ayudaDesplegado) {
        btnayuda.innerHTML = "cerrar";
    }
    else {
        btnayuda.innerHTML = texto;
    }
   
    ayudaDesplegado = !ayudaDesplegado;

});


let compartirDesplegado = false;

let compartir = document.querySelector("#btn-compartir");
let textoComp = compartir.textContent;


compartir.addEventListener("click", function() {
    compartir.parentElement.nextElementSibling.classList.toggle("show");
    compartir.classList.toggle("show");

    if(!compartirDesplegado) {
        compartir.innerHTML = "Cerrar";
    }
    else {
        compartir.innerHTML = '<img id="imgcompartir" src="imgs/iconos/btn-compartir.png"><p>Compartir</p>';
    }
   
    compartirDesplegado = !compartirDesplegado;
});

