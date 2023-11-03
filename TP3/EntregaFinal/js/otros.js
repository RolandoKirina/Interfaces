"use strict";

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


/* botones ayuda y compartir */


// let ayudaDesplegado = false;

// let btnayuda = document.querySelector("#btn-help"); 
// let texto = btnayuda.textContent;

// btnayuda.addEventListener("click", function() {
//     this.classList.toggle("show");
//     this.parentElement.nextElementSibling.classList.toggle("show");

//     if(!ayudaDesplegado) {
//         btnayuda.innerHTML = "cerrar";
//     }
//     else {
//         btnayuda.innerHTML = texto;
//     }
   
//     ayudaDesplegado = !ayudaDesplegado;

// });


// let compartirDesplegado = false;

// let compartir = document.querySelector("#btn-compartir");
// let textoComp = compartir.textContent;


// compartir.addEventListener("click", function() {
//     compartir.parentElement.nextElementSibling.classList.toggle("show");
//     compartir.classList.toggle("show");

//     if(!compartirDesplegado) {
//         compartir.innerHTML = "Cerrar";
//     }
//     else {
//         compartir.innerHTML = '<img id="imgcompartir" src="imgs/iconos/btn-compartir.png"><p>Compartir</p>';
//     }
   
//     compartirDesplegado = !compartirDesplegado;
// });


/* estrellas */

let estrellas = document.querySelectorAll("#estrellas");

// estrellas.forEach(estrella => {
//      estrella.addEventListener("mouseenter", function() {
//         alert("hola");
//         console.log(estrella);
//      });
// });

for(let i = 0; i < estrellas.length; i++) {
    estrellas[i].addEventListener("mouseenter", function() {

        estrellas[i].src = "./imgs/iconos/estrellaverde.png";

        if(i == 4) {
            estrellas[3].src = "./imgs/iconos/estrellaverde.png";
            estrellas[2].src = "./imgs/iconos/estrellaverde.png";
            estrellas[1].src = "./imgs/iconos/estrellaverde.png";
            estrellas[0].src = "./imgs/iconos/estrellaverde.png";
        }
        else if(i == 3) {
            estrellas[4].src = "./imgs/iconos/estrella.png";
            estrellas[2].src = "./imgs/iconos/estrellaverde.png";
            estrellas[1].src = "./imgs/iconos/estrellaverde.png";
            estrellas[0].src = "./imgs/iconos/estrellaverde.png";
        }
        else if(i == 2) {
            estrellas[4].src = "./imgs/iconos/estrella.png";
            estrellas[3].src = "./imgs/iconos/estrella.png";
            estrellas[1].src = "./imgs/iconos/estrellaverde.png";
            estrellas[0].src = "./imgs/iconos/estrellaverde.png";
        }
        else if(i == 1) {
            estrellas[4].src = "./imgs/iconos/estrella.png";
            estrellas[3].src = "./imgs/iconos/estrella.png";
            estrellas[2].src = "./imgs/iconos/estrella.png";
            estrellas[0].src = "./imgs/iconos/estrellaverde.png";
        }
        else if(i == 0) {
            estrellas[4].src = "./imgs/iconos/estrella.png";
            estrellas[3].src = "./imgs/iconos/estrella.png";
            estrellas[2].src = "./imgs/iconos/estrella.png";
            estrellas[1].src = "./imgs/iconos/estrella.png";
        } 

     });
}