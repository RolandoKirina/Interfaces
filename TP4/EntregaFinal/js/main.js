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
    let initialpos = 200;
    let speed = 0.0017;
    if (posY >= initialpos && posY <= 800) {
        title.classList.add("reducetitle");
        divtitle.classList.remove("absolute");
        divtitle.classList.add("titleSticky");
        scaleValue = Math.max(scaleValue, maxscale - ((posY - initialpos) * speed),0.4);
         /* se resta la escala maxima menos la posy actual menos la pos y
          inicial y se multiplica por la velocidad. se queda con el numero mas grande*/
        title.style.transform = `scale(${scaleValue})`;
    } 
    else if (posY > 800) {
        title.classList.add("reducetitle");
        divtitle.classList.remove("absolute");
        divtitle.classList.add("titleSticky");
        title.style.transform = `scale(${0.4})`;
        title.style.left = `(${25}%)`;
    }
    else if(posY < initialpos) {

        title.classList.remove("reducetitle");
        divtitle.classList.remove("titleSticky");
        divtitle.classList.add("absolute");
        title.style.transform = `scale(${1})`;
    }
});

divtitle.classList.remove("hidden");
divtitle.classList.remove("spideyredvisible");
let spiderwhite = document.querySelector(".spiderwhite");
let spiderred = document.querySelector(".spiderred");
let spiderblue = document.querySelector(".spiderblue");

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
let min = 400;
let max = 1400; 
let posgoblin = -250;
let heaven = document.querySelector("#heaven");

let leftbuilding = document.querySelector("#left-building");

let centerbuilding = document.querySelector("#center-building");

let rightbuilding = document.querySelector("#right-building");

let whitespidey = document.querySelector("#white-spidey");

let redspidey = document.querySelector("#redspidey");

let blackspidey = document.querySelector("#black-spidey");

console.log(redspidey);
console.log(blackspidey);
let leftspiderweb = document.querySelector("#left-spider-web");

let rightspiderweb = document.querySelector("#right-spider-web");

    container.onscroll = function () {
        let y = window.scrollY;
        if(y > min && y < max){
            goblin.style.top =  posgoblin - y*0.25 + "px";
            /* cambiamos el top original del goblin incrementandole el top negativo*/
        }
        /*seccion hero*/
        let minhero =10;
        if (y > minhero){
            heaven.style.top =  y *0.10 + "px";
            leftbuilding.style.top =  140 + y *0.25 + "px";
            centerbuilding.style.top =  550 + y *0.25 + "px";
            rightbuilding.style.top =  140 + y *0.25 + "px";

            /*sumamos el top de cada imagen con el y y multiplicamos por velocidad*/
            whitespidey.style.top =  400 - y *0.50 + "px";
            redspidey.style.top =  440 - y *0.75 + "px";

            leftspiderweb.style.top =  420 - y *0.75 + "px";
            blackspidey.style.top =  360 - y *0.50 + "px";

            whitespidey.classList.remove("hidden");
            whitespidey.classList.add("spideyvisible");
            redspidey.classList.remove("hidden");
            redspidey.classList.add("spideyredvisible");
            divtitle.classList.remove("hidden");
            divtitle.classList.add("spideyredvisible");
            blackspidey.classList.remove("hidden");
            blackspidey.classList.add("spideyvisible");
            rightspiderweb.style.top =  410 - y *0.50 + "px";
        }
    };
