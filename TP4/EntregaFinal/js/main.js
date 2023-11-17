"use strict"

let menu = document.querySelector(".menu");


let title = document.querySelector("#title");

let divtitle = document.querySelector("#divtitle");


let isOpen = false;
menu.addEventListener('click', function() {
    this.classList.toggle('activar');
    if (!isOpen) {
        menu.classList.add('activar');
        menu.classList.remove('desactivado');
        isOpen = true;
    } else {
        menu.classList.remove('activar');
        menu.classList.add('desactivado');
        isOpen = false;
    }
});


window.addEventListener("scroll", function (){
    let posY = window.scrollY;
    let title = document.getElementById("title");
    let divtitle = document.getElementById("divtitle");
    let scaleValue = 0.4;
    let maxscale =0.9;
    let initialpos = 500;
    let speed = 0.0017;
    console.log(divtitle);
    console.log(title);
    if (posY >= initialpos && posY <= 800) {
        title.classList.add("reducetitle");
        divtitle.classList.remove("absolute");
        divtitle.classList.add("titleSticky");
        scaleValue = Math.max(scaleValue, maxscale - ((posY - initialpos) * speed),0.4);
         /* se resta la escala maxima menos la posy actual menos la pos y
          inicial y se multiplica por la velocidad. se queda con el numero mas grande*/
        title.style.transform = `scale(${scaleValue})`;

    } else if (posY > 800 ) {
        title.classList.remove("reducetitle");
        divtitle.classList.remove("absolute");
        scaleValue = Math.max(scaleValue, 0.5);
        title.style.transform = `scale(${scaleValue})`;
        title.style.left = `(${25}%)`;
    }
    else if(posY < initialpos) {

        title.classList.remove("reducetitle");
        divtitle.classList.remove("titleSticky");
        divtitle.classList.add("absolute");
        title.style.transform = `scale(${scaleValue})`;
    }
});

let spiderwhite = document.getElementById("spiderwhite");
let spiderred = document.getElementById("spiderred");
let spiderblue = document.getElementById("spiderblue");

/*spider white*/
spiderwhite.addEventListener("mouseenter", function (){

    spiderwhite.classList.add("spiderwhite");
    spiderwhite.classList.remove("spiderred");
    spiderwhite.classList.remove("spiderblue");
    spiderwhite.classList.remove("spiderredselected-white");
    spiderwhite.classList.remove("spiderblueselected-white");

    spiderblue.classList.add("spiderwhiteselected-blue");
    spiderblue.classList.remove("spiderredselected-blue");
   

    spiderred.classList.add("spiderwhiteselected-red");
    spiderred.classList.remove("spiderblueselected-red");
    spiderwhite.style.transform =`scale(${1})`;
    spiderblue.style.transform = `scale(${0.5})`;
    spiderred.style.transform = `scale(${0.5})`;
    spiderwhite.style.filter = "blur(0px)";
    spiderred.style.filter = "blur(5px)";
    spiderblue.style.filter = "blur(5px)";
})

spiderred.addEventListener("mouseenter",  function(){

    spiderred.style.transform = `scale(${1})`;
    spiderblue.style.transform = `scale(${0.5})`;
    spiderwhite.style.transform =`scale(${0.5})`;

    /*agregamos la clase spiderred y removemos la clase blue y white*/
   
    spiderblue.classList.remove("spiderblue");
    spiderblue.classList.add("spiderredselected-blue");

    spiderwhite.classList.add("spiderredselected-white");
    spiderwhite.classList.remove("spiderwhite");
    spiderwhite.classList.remove("spiderblueselected-white");

    spiderred.classList.add("spiderred");
    spiderred.classList.remove("spiderwhiteselected-red");
    spiderred.classList.remove("spiderblueselected-red");

    spiderred.style.filter = "blur(0px)";
    spiderwhite.style.filter = "blur(5px)";
    spiderblue.style.filter = "blur(5px)";
})

spiderblue.addEventListener("mouseenter",  function(){

    spiderblue.style.transform = `scale(${1})`;
    spiderred.style.transform = `scale(${0.5})`;
    spiderwhite.style.transform =`scale(${0.5})`;
    spiderblue.style.filter = "blur(0px)";
    spiderwhite.style.filter = "blur(5px)";
    spiderred.style.filter = "blur(5px)";
    
    spiderred.classList.add("spiderblueselected-red");
    spiderred.classList.remove("spiderred");
    spiderred.classList.remove("spiderwhiteselected-red");

    spiderwhite.classList.remove("spiderwhite");
    spiderwhite.classList.add("spiderblueselected-white");
    spiderwhite.classList.remove("spiderredselected-white");

    spiderblue.classList.add("spiderblue");
    spiderblue.classList.remove("spiderwhiteselected-blue");
    spiderblue.classList.remove("spiderredselected-blue");
})

const container = document.querySelector("#bodycontainer");
const goblin = document.querySelector("#goblin");
console.log(container);
console.log(goblin);
let min = 200;
let max = 3000;
container.onscroll = function () {
    let y = window.scrollY;
    console.log(y);
    if(y > min && y < max){
        goblin.style.top =  50 +  y/2.1 + "px";
    }
   
};
