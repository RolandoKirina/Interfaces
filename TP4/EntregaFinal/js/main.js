"use strict"

let menu = document.querySelector(".menu");

menu.addEventListener('click', function() {
    this.classList.toggle('activar');
});


let title = document.querySelector("#title");

let divtitle = document.querySelector("#divtitle");

window.addEventListener("scroll", function (){
    let posY = window.scrollY;
    let title = document.getElementById("title");
    let divtitle = document.getElementById("divtitle");
    let scaleValue = 0.4;
    let maxscale =0.9; 
    let initialpos = 1;
    let speed = 0.0017;
    if (posY >= initialpos && posY <= 300) {
        title.classList.remove("maintitle");
        title.classList.add("reducetitle");
        divtitle.classList.remove("absolute");
        divtitle.classList.add("titleSticky");
        scaleValue = Math.max(scaleValue, maxscale - ((posY - initialpos) * speed),0.4);
         /* se resta la escala maxima menos la posy actual menos la pos y
          inicial y se multiplica por la velocidad. se queda con el numero mas grande*/
        title.style.transform = `scale(${scaleValue})`;

    } else if (posY > 300 ) {
        title.classList.remove("maintitle");
        title.classList.remove("reducetitle");
        divtitle.classList.remove("absolute");
        scaleValue = Math.max(scaleValue, 0.4);
        title.style.transform = `scale(${scaleValue})`;
    }
    console.log(posY);
});


