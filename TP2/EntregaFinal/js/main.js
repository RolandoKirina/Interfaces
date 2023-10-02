"use strict";

let botonesFooter = document.querySelectorAll("#footer-btn");

botonesFooter.forEach(boton => {
    boton.addEventListener("click", function() {
        boton.parentElement.nextElementSibling.classList.toggle("show");
    });
});

let botonesNav = document.querySelectorAll("#menu-nav");

botonesNav.forEach(boton => {
    boton.addEventListener("click", function() {
        boton.parentElement.nextElementSibling.classList.toggle("show");
    })
});

let openedBurguer = false; //

document.querySelector("#menu-burguer").addEventListener("click", function( ) {
    document.querySelector("#menuH").classList.toggle("show");
    let img = document.querySelector("#imgburguer");

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

compartir.addEventListener("click", function() {
    compartir.parentElement.nextElementSibling.classList.toggle("show");
    compartir.classList.toggle("show");

    if(!compartirDesplegado) {
        compartir.innerHTML = "Cerrar";
    }
    else {
        compartir.innerHTML = texto;
    }
   
    compartirDesplegado = !compartirDesplegado;
});


