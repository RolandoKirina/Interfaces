
"use strict"

let menu = document.querySelector(".menu");

menu.addEventListener('click', function() {
    this.classList.toggle('activar');
});

// btn.addEventListener('click', function(){
//     /* si esta la clase la quita y si no la agrega*/
//     btn.classList.toggle('activar');
// })