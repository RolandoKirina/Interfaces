
"use strict"

let menu = document.querySelector(".menu");

menu.addEventListener('click', function() {
    this.classList.toggle('activar');
});


let title = document.querySelector("#title");

window.addEventListener("scroll", function (){
    let posY = window.scrollY;
    let posicion = 100;
    if (posY >= posicion) {
        title.classList.remove("maintitle");
        title.classList.add("reducetitle");
    } 
});