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

let backgroundspidershover = document.querySelector("#backgroundspidershover");
let clippathtop = document.querySelector("#clip-path-top");
let clippathbottom = document.querySelector("#clip-path-bottom");
/*spider white*/
spiderwhite.addEventListener("mouseenter", function (){

    backgroundspidershover.style.backgroundColor = "#FF00A7";
    backgroundspidershover.style.opacity = "0.4";
    clippathtop.style.backgroundColor = "#C92B94";
    clippathtop.style.opacity = "1";
    clippathbottom.style.backgroundColor = "#C92B94";
    clippathbottom.style.opacity = "1";
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

    backgroundspidershover.style.backgroundColor = "#2552C8";
    backgroundspidershover.style.opacity = "0.3";

    clippathtop.style.backgroundColor = "#2552C8";
    clippathtop.style.opacity = "0.6";

    clippathbottom.style.backgroundColor = "#2552C8";
    clippathbottom.style.opacity = "0.6";

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

    backgroundspidershover.style.backgroundColor = "#000000";

    backgroundspidershover.style.opacity = "0.2";

    clippathtop.style.backgroundColor = "#304C71";
    clippathtop.style.opacity = "1";

    clippathbottom.style.backgroundColor = "#304C71";
    clippathbottom.style.opacity = "1";

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


let card1 = document.querySelector("#card1");
let card2 = document.querySelector("#card2");
let card3 = document.querySelector("#card3");
let leftspiderweb = document.querySelector("#left-spider-web");

let cardscontainer = document.querySelector("#cards-content");


let test1 = document.querySelector("#test1");

let test2 = document.querySelector("#test2");

let test3 = document.querySelector("#test3");
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
            redspidey.style.top =  440 - y *0.90 + "px";
            rightspiderweb.style.top =  410 - y *0.50 + "px";
            leftspiderweb.style.top =  420 - y *0.90+ "px";
            blackspidey.style.top =  360 - y *0.50 + "px";


            leftbuilding.classList.remove("hidden");
            centerbuilding.classList.remove("hidden");
            rightbuilding.classList.remove("hidden");
            whitespidey.classList.remove("hidden");
            redspidey.classList.remove("hidden");
            divtitle.classList.remove("hidden");
            blackspidey.classList.remove("hidden");

            leftbuilding.classList.add("visiblebuildings");
            centerbuilding.classList.add("visiblebuildings");
            rightbuilding.classList.add("visiblebuildings");
            whitespidey.classList.add("spideyvisible");
            redspidey.classList.add("spideyredvisible");           
            divtitle.classList.add("spideyredvisible");
            blackspidey.classList.add("spideyvisible");
            leftspiderweb.classList.add("visibleleftspiderweb");
            rightspiderweb.classList.add("visiblerigthspiderweb");
        }

        console.log(y);
        let mincards = 1421;
        if (y > mincards){

            card1.classList.remove("hidden");
            card1.classList.add("visiblecard1");
            card2.classList.remove("hidden");
            card2.classList.add("visiblecard2");
            card3.classList.remove("hidden");
            card3.classList.add("visiblecard3");

            card1.classList.add("fadeincard1");
            card2.classList.add("fadeincard2");
            card3.classList.add("fadeincard3");
            /*si no aplica los estilos antes que la animacion*/
            setTimeout(() =>{
                card1.style.top = `${1650}px`;
            },1000);
            setTimeout(() =>{
                card2.style.top = `${1650}px`;
            },1500);
            setTimeout(() =>{
                card3.style.top = `${1650}px`;
            },2000);
        }
      
        let mintest = 2200;

        if (y > mintest){
            test1.style.top =  990 - y *0.50 + "px";
            test2.style.top =  1120 -y *0.50 + "px";
            test3.style.top =  1320 - y *0.50 + "px";
        }   

    };


    let imgtest1 =test1.firstElementChild;
    let imgtest2 =test2.firstElementChild;
    let imgtest3 =test3.firstElementChild;
    imgtest1.addEventListener("mouseenter", function (){
        test1.classList.add("test1skew");
        setTimeout(() => {
            test1.style.transform = `skew(${5}deg)`; // Aplicar la transformación con style.transform
        }, 1000); 
        test2.classList.remove("test1skew");
        test3.classList.remove("test1skew");
    })
    imgtest2.addEventListener("mouseenter", function (){
        test2.classList.add("test1skew");
        setTimeout(() => {
            test2.style.transform = `skew(${5}deg)`; // Aplicar la transformación con style.transform
        }, 1000); 
        test1.classList.remove("test1skew");
        test3.classList.remove("test1skew");
    })

    imgtest3.addEventListener("mouseenter", function (){
        test3.classList.add("test1skew");
        setTimeout(() => {
            test3.style.transform = `skew(${5}deg)`; // Aplicar la transformación con style.transform
        }, 1000); 
        test2.classList.remove("test1skew");
        test1.classList.remove("test1skew");
    })


    // imgtest3.addEventListener("mouseover",function (){
    //     test1.classList.remove("test1skew");
    //     test2.classList.remove("test1skew");
    //     test3.classList.remove("test1skew");
    //     test3.classList.add("skewtestreverse");
    // } )

document.addEventListener("DOMContentLoaded", loader);

function loader (){
    const percentageElement = document.querySelector('#percentage');
 
    const content = document.querySelector("#content");

    // Inicializa el porcentaje en 1%
    let percentage = 1;

    // Función para actualizar el porcentaje en el DOM
    function updatePercentage() {
        percentageElement.textContent = `${percentage}%`;


        // incrementa el porc de a 1
        if (percentage < 100) {
            percentage++;
            setTimeout(updatePercentage, 1); // Actualiza cada 40 milisegundos
        }
        else {
            loader.classList.remove("backgroundblackloader");
            loader.classList.add("hiddenblock");
            content.classList.remove("hiddenblock");
            content.classList.add("content");
        }
    }
    // se llama por primera vez al update
    updatePercentage();

    const loader = document.querySelector(".backgroundblackloader");

}

let btnmenu = document.querySelector("#btnmenu");

btnmenu.addEventListener('click', showdropdownmenu);

function showdropdownmenu (){
     let menu = document.querySelector("#dropdownmenu");
     menu.classList.toggle("menuopen");
     let li = document.querySelector("#li");
     li.classList.add("livisible");
     li.style.opacity = "1";
}