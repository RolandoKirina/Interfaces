"use strict"

let menu = document.querySelector(".menu");

menu.addEventListener('click', function() {
    this.classList.toggle('activar');
});


let title = document.querySelector("#title");

let divtitle = document.querySelector("#divtitle");
window.addEventListener("scroll", function (){
    let posY = window.scrollY;
    let posicion = 100;
    let postitle = 150;
    let posfinal =160;
    if (posY >= posicion) {
        title.classList.remove("maintitle");
        title.classList.add("reducetitle");
        divtitle.classList.remove("absolute");
        divtitle.classList.add("titleSticky");
    } 
    console.log(posY);
});