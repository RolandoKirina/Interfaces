"use strict"

let menu = document.querySelector(".menu");

/* variables titulo spidey friends */
let title = document.querySelector("#title");

let divtitle = document.querySelector("#divtitle");





/* Seccion loader de la pagina */

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





/* Seccion nav abrir menu */


/* animacion menu nav */
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





/* animacion desplegar menu nav */
let btnmenu = document.querySelector("#btnmenu");

btnmenu.addEventListener('click', showDropdownMenu);

let open = false;

function showDropdownMenu() {

    let menu = document.querySelector("#dropdownmenu");
    menu.classList.toggle("menuopen");



    let listItems = document.querySelectorAll('.hiddenblock ul li');
    let time = 250;
    let totaltime = 0; 


    if (open == false){
        listItems.forEach((li) => {
            /* si tiene la clase la remueve y restablece la opacidad */
            // li.classList.remove("livisible");
            totaltime += time;
            setTimeout(() => {
                li.classList.add("livisible");
                li.style.opacity = "1";
            }, totaltime);
            open = true;
        });
    } else {
        listItems.forEach((li) => {
            li.classList.remove("livisible");
            li.style.opacity = "0";
            open = false;
        })
    }

    
}





/* variables spiders buildings */

let heaven = document.querySelector("#heaven");

let leftbuilding = document.querySelector("#left-building");

let centerbuilding = document.querySelector("#center-building");

let rightbuilding = document.querySelector("#right-building");

let whitespidey = document.querySelector("#white-spidey");

let redspidey = document.querySelector("#redspidey");

let blackspidey = document.querySelector("#black-spidey");

let leftspiderweb = document.querySelector("#left-spider-web");

let rightspiderweb = document.querySelector("#right-spider-web");

/* variables cards animados */

let card1 = document.querySelector("#card1");
let card2 = document.querySelector("#card2");
let card3 = document.querySelector("#card3");

/* variables tests */

let test1 = document.querySelector("#test1");

let test2 = document.querySelector("#test2");

let test3 = document.querySelector("#test3");


window.addEventListener("scroll", function (){

    /* Seccion animacion titulo spidey friends */

    let posY = window.scrollY;

    titleSpideyFriendsAnimated(posY);

    goblinAnimated(posY);

    spidersAndBuildings(posY);

    cardsAnimated(posY);

    testsAnimated(posY);

    avengersMouseMove(posY);

    textImgsMoreFriendsAnimated(posY);
   
});




/* Seccion primer titulo spidey friends */

function titleSpideyFriendsAnimated(posY) {
    let scaleValue = 0.4;
    let maxscale =0.9;
    let initialpos = 100;
    let maxinitialpos = 800;
    let speed = 0.0017;


    if (posY >= initialpos && posY <= maxinitialpos) {
        title.classList.add("reducetitle");
        divtitle.classList.remove("absolute");
        divtitle.classList.add("titleSticky");
        scaleValue = Math.max(scaleValue, maxscale - ((posY - initialpos) * speed),0.4);
         /* se resta la escala maxima menos la posy actual menos la pos y
          inicial y se multiplica por la velocidad. se queda con el numero mas grande*/
        title.style.transform = `scale(${scaleValue})`;
    } 
    else if (posY > maxinitialpos) {
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
}



/* Seccion goblin animado segun scroll */

function goblinAnimated(y) {
    const goblin = document.querySelector("#goblin");
    let min = 400;
    let max = 1400; 
    let posgoblin = -250;
    if(y > min && y < max){
        goblin.style.top =  posgoblin - y*0.25 + "px";
        /* cambiamos el top original del goblin incrementandole el top negativo*/
    }
}





function spidersAndBuildings(y) {

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



        
        setTimeout(() => {
            leftbuilding.classList.remove("hidden");
            centerbuilding.classList.remove("hidden");
            rightbuilding.classList.remove("hidden");
            whitespidey.classList.remove("hidden");
            redspidey.classList.remove("hidden");
            divtitle.classList.remove("hidden");
            blackspidey.classList.remove("hidden");
            whitespidey.classList.add("showWhiteSpidey");
            whitespidey.style.left="6.7%";

            redspidey.classList.add("showRedSpidey"); 

            blackspidey.classList.add("showBlackSpidey");
            blackspidey.style.right="15%";

            leftbuilding.classList.add("visiblebuildings");
            centerbuilding.classList.add("visiblebuildings");
            rightbuilding.classList.add("visiblebuildings");
            
        },500); /* en medio segundo aparecen los personajes*/
        
        divtitle.classList.add("divtitlevisible");
        leftspiderweb.classList.add("visibleleftspiderweb");
        rightspiderweb.classList.add("visiblerigthspiderweb");
    }
} 





function cardsAnimated(y) {
    
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
}





function testsAnimated(y) {
    
    let mintest = 2200;

    if (y > mintest){
        test1.style.top =  990 - y *0.50 + "px";
        test2.style.top =  1120 -y *0.50 + "px";
        test3.style.top =  1320 - y *0.50 + "px";
    }   

}





function avengersMouseMove(y) {
    let minparallaxmouse = 3200;
    if (y > minparallaxmouse && y < 4000){
        let sky = document.querySelector("#sky");
        let trees = document.querySelector("#trees");
        let girl = document.querySelector("#girl");
        let black = document.querySelector("#black");
        let hulk = document.querySelector("#hulk");
        document.addEventListener("mousemove", parallaxSectionAvengers);    

        function parallaxSectionAvengers(e){
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            sky.style.left =  `${0 + mouseX  * 0.0005}%`;
            sky.style.top =`${0 +mouseY * 0.0010}%`;
            
            trees.style.top =`${0 +mouseY * 0.0006}%`;

            girl.style.left =  `${0 + mouseX  * 0.008}%`;
            girl.style.top =`${-10 +mouseY * 0.008}%`;

            /* 432 es el left del hulk menos el mouse en x por una velocidad*/
            hulk.style.left =  `${55 + mouseX  * 0.008}%`;
            hulk.style.top =`${20 +mouseY * 0.008}%`;

            black.style.left =  `${38 + mouseX  * 0.008}%`;
            black.style.top =`${-50 + mouseY * 0.008}%`;

        }
    }
}





function textImgsMoreFriendsAnimated(y) {
    
    console.log(y);
    /*seccion more friends*/
    let minmorefriends = 4000;
    let maxmorefriends = 5300;
    let mintext = 3500;
    let divimages = document.querySelector("#divimages");

    let texts = document.querySelectorAll(".textTitle");
    if (y < minmorefriends){
        divimages.style.position = "absolute";
        divimages.style.top = "199.5px";
    }
    if (y >= mintext){
        texts[0].classList.add("textvisibles");
    }

    let minfirstimg = 4200;
    let maxsecondimg = 4600;
    let maxthirdimg = 5022;
    let maxfourthimg = 5060;
    let mintextscroll = 5061;
    
    if (y >= minmorefriends && y <= maxmorefriends ){
        texts[0].style.top = 2200 -y *0.50 + "px";
        texts[1].style.top = 2800 -y *0.50 + "px";
        texts[2].style.top = 3400 -y *0.50 + "px";
        texts[3].style.top = 4000 -y *0.50 + "px";

        divimages.style.position = "fixed";
        divimages.style.top = "215px";

        if (y < minfirstimg){
        divimages.classList.add("img1");
        divimages.classList.remove("img2");
        divimages.classList.remove("img3");
        divimages.classList.remove("img4");
        texts[1].classList.remove("textvisibles");
        texts[2].classList.remove("textvisibles");
        texts[3].classList.remove("textvisibles");

        texts[0].classList.remove("textinvisibles");
        texts[0].classList.add("textvisibles");
        texts[1].classList.remove("converthiddentext");
        texts[2].classList.remove("converthiddentext");
        }
        else if (y >= minfirstimg && y < maxsecondimg){

        divimages.classList.add("img2");
        divimages.classList.remove("img1");
        divimages.classList.remove("img3");
        divimages.classList.remove("img4");
        texts[0].classList.remove("textvisibles");
        texts[2].classList.remove("textvisibles");
        texts[3].classList.remove("textvisibles");

        texts[1].classList.remove("textinvisibles");
        texts[1].classList.add("textvisibles");
        texts[0].classList.add("textinvisibles");
        texts[1].classList.remove("converthiddentext");
        texts[2].classList.remove("converthiddentext");

        }
        else if (y >= maxsecondimg && y < maxthirdimg){
        divimages.classList.add("img3");
        divimages.classList.remove("img1");
        divimages.classList.remove("img2");
        divimages.classList.remove("img4");

        texts[0].classList.remove("textvisibles");
        texts[1].classList.remove("textvisibles");
        texts[3].classList.remove("textvisibles");
        texts[2].classList.add("textvisibles");

        texts[2].classList.remove("textinvisibles");
        texts[1].classList.add("textinvisibles");

        texts[1].classList.remove("converthiddentext");
        texts[2].classList.remove("converthiddentext");
        }
        else if (y >= maxthirdimg && y <= maxfourthimg ){
        divimages.classList.add("img4");
        divimages.classList.remove("img1");
        divimages.classList.remove("img2");
        divimages.classList.remove("img3");
        // texts[2].classList.toggle("textinvisibles");

        texts[0].classList.remove("textvisibles");
        texts[1].classList.remove("textvisibles");
        texts[2].classList.remove("textvisibles");

        texts[3].classList.add("textvisibles");
        texts[2].classList.add("textinvisibles");

        texts[1].classList.remove("converthiddentext");
        texts[2].classList.remove("converthiddentext");

        }
        else if (y> mintextscroll && y < maxmorefriends){
        console.log("holaaaaaaa")
        divimages.style.position = "absolute";
        divimages.style.top = "1363.5px";
        }

        if (y>=4292 && y < 4300){
        texts[1].classList.add("converthiddentext");
        }
        if (y >= 4692 && y < 4700){
        texts[2].classList.add("converthiddentext");
        }
    }
}



/* Seccion animacion hover spiders white, red y blue */


divtitle.classList.remove("hidden");
divtitle.classList.remove("spideyredvisible");
let spiderwhite = document.querySelector(".spiderwhite");
let spiderred = document.querySelector(".spiderred");
let spiderblue = document.querySelector(".spiderblue");

let backgroundspidershover = document.querySelector("#backgroundspidershover");
let clippathtop = document.querySelector("#clip-path-top");
let clippathbottom = document.querySelector("#clip-path-bottom");

function hoverSpiders() {

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

/* al quitar el mouse, vuelven los valores por defecto */


spiderwhite.addEventListener("mouseleave", function () {

    defaultCharactersBackground();

    spiderblue.style.transform = `scale(${1})`;
    spiderred.style.transform = `scale(${1})`;
    spiderblue.style.filter = "blur(0px)";
    spiderred.style.filter = "blur(0px)";

});

spiderred.addEventListener("mouseleave", function () {

    defaultCharactersBackground();

    spiderblue.style.transform = `scale(${1})`;
    spiderwhite.style.transform = `scale(${1})`;
    spiderblue.style.filter = "blur(0px)";
    spiderwhite.style.filter = "blur(0px)";

});

spiderblue.addEventListener("mouseleave", function () {

    defaultCharactersBackground();

    spiderred.style.transform = `scale(${1})`;
    spiderwhite.style.transform = `scale(${1})`;
    spiderred.style.filter = "blur(0px)";
    spiderwhite.style.filter = "blur(0px)";

});

function defaultCharactersBackground() {
    backgroundspidershover.style.backgroundColor = "#FFFFFF";
    clippathtop.style.backgroundColor = "#FFFFFF";
    clippathtop.style.opacity = "1";

    clippathbottom.style.backgroundColor = "#FFFFFF";
    clippathbottom.style.opacity = "1";

    spiderwhite.classList.add("spiderwhite");
    spiderblue.classList.add("spiderblue");
    spiderred.classList.add("spiderred");

    spiderwhite.classList.remove("spiderredselected-white");
    spiderwhite.classList.remove("spiderblueselected-white");

    spiderblue.classList.remove("spiderredselected-blue");
    spiderblue.classList.remove("spiderwhiteselected-blue");

    spiderred.classList.remove("spiderblueselected-red");
    spiderred.classList.remove("spiderwhiteselected-red");
}




}

hoverSpiders();





function hoverTests() {

    /* animacion cambio perspectiva ghost spiders test */
    let imgtest1 =test1.firstElementChild;
    let imgtest2 =test2.firstElementChild;
    let imgtest3 =test3.firstElementChild;


    /* hace hover */
    imgtest1.addEventListener("mouseenter", function (){
        test1.classList.remove("testSkewReverse");
        test1.classList.add("testSkew");
    });

    imgtest2.addEventListener("mouseenter", function (){
        test2.classList.remove("testSkewReverse");
        test2.classList.add("testSkew");
    })

    imgtest3.addEventListener("mouseenter", function (){
        test3.classList.remove("testSkewReverse");
        test3.classList.add("testSkew");
    })


    /* no hace hover */
    imgtest1.addEventListener("mouseleave", function (){
        test1.classList.remove("testSkew");
        test1.classList.add("testSkewReverse");
    });

    imgtest2.addEventListener("mouseleave", function (){
        test2.classList.remove("testSkew");
        test2.classList.add("testSkewReverse");
    });

    imgtest3.addEventListener("mouseleave", function (){
        test3.classList.remove("testSkew");
        test3.classList.add("testSkewReverse");
    });

}


hoverTests();


let sprisheet = document.querySelector("#sprisheet");

sprisheet.addEventListener("mouseenter", sprisheetHover);


let secondsprisheet = document.querySelector("#secondsprisheet");
secondsprisheet.addEventListener("mouseenter",secondSprisheetHover);

function secondSprisheetHover() {
    secondsprisheet.classList.remove("secondspidersprisheet");
    secondsprisheet.classList.add("secondspidersprisheetHover");
    secondsprisheet.addEventListener("mouseleave", function(){
        secondsprisheet.classList.remove("secondspidersprisheetHover");
        secondsprisheet.classList.add("secondspidersprisheet");
    });
}

function sprisheetHover(){
    sprisheet.classList.remove("spidersprisheet");
    sprisheet.classList.add("spiderSpriteHover");
    sprisheet.addEventListener("mouseleave", function(){
        sprisheet.classList.remove("spiderSpriteHover");
        sprisheet.classList.add("spidersprisheet");
    });
}


