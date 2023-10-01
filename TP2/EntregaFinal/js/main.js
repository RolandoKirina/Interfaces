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

let h = document.querySelector("#btn-help"); 
h.addEventListener("click", function() {
    h.parentElement.classList.toggle("show");
});




