"use strict"

let canvas = document.querySelector("#canvas");
let context = canvas.getContext('2d');

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let numerofichas = 21;
let mouseDown = false;
let lastClicked = null;
let rellenoficha = '#0000FF';
let tablero = new Tablero(6,7);

let fichas = [];
let fichastablero = [];
let posicionesFichas =[];

canvas.addEventListener('mousedown', mousedown);
document.addEventListener("DOMContentLoaded",drawTablero);
document.addEventListener("DOMContentLoaded", rellenarTablero);
document.addEventListener("DOMContentLoaded", crearPosicionesFicha);
document.addEventListener("DOMContentLoaded",crearTodasFichas);
//document.addEventListener("DOMContentLoaded",prueba);

function drawTablero(){

    context.fillStyle = "#00182F";
    context.beginPath(); 
    context.rect(150, 60, 800, 440); 
    context.strokeStyle="#000D1A";
    context.lineWidth = "2";
    context.stroke();
    context.shadowColor = 'rgba(0, 0, 0, 0.5'; // Color de la sombra (negro con transparencia)
    context.shadowBlur = 10; // Difuminado de la sombra
    context.shadowOffsetX = 5; // Desplazamiento horizontal de la sombra
    context.shadowOffsetY = 5; // Desplamiento en y
    context.fill(); 
    context.closePath();

}


   
/*function crearImagen(){
    let imagen = new Image();
    imagen.src = "imgs/fichas/fichablanca.png";
    imagen.onload = function() {
      let patron = context.createPattern(imagen, "no-repeat");
      context.fillStyle = patron;
      context.beginPath();
      context.arc(300+desp,10, 50, 0, 2 * Math.PI);
      context.fill();
      context.closePath();
    };
    document.removeEventListener("DOMContentLoaded", createCircle);
}*/


function rellenarTablero(){
    let decrementacion = 0;
    let aumentox = 0;
    for (let j = 0; j < tablero.getColumnas();j++){
        aumentox = aumentox + 110;
        decrementacion = 0;
        for (let i = 0; i < tablero.getFilas(); i++){
            decrementacion = decrementacion - 70;
            crearFicha(110,30,28,"#FFFFFF",decrementacion, aumentox, fichastablero);     
        }
    }
}

function crearFicha(posX, posY, radio, fill, decrementacion, aumentox, arr) {
    posY = posY - decrementacion;
    posX = posX + aumentox;
    let ficha = new Ficha(posX, posY, radio, fill, context);
    arr.push(ficha);
    ficha.draw();
}


function drawAllFichas(){
    clearCanvas();
    drawTablero();

    for (let i = 0; i < fichastablero.length; i++){
        fichastablero[i].draw();
    }

    for (let i = 0; i < fichas.length; i++){
        fichas[i].draw();
    }

    for (let i = 0; i < posicionesFichas.length; i++){
        posicionesFichas[i].draw();
    }

}

function crearTodasFichas(){
    let decrementacion = 0;
    for (let i = 0; i < numerofichas; i++){
        decrementacion = decrementacion - 20;
        crearFicha(70,50,28,"#FF0000",decrementacion,0,fichas);
        crearFicha(1020,50,28,"#0000FF",decrementacion,0,fichas);  
    }   
}


function encontrarFiguraClickeada(x,y){
    for (let i = 0; i < fichas.length; i++){
        let ficha = fichas[i];
        if (ficha.estaSeleccionado(x,y)){
            return ficha;
        }
    }
}


function mousedown(e){
    
    mouseDown = true;
    let figuraClickeada = encontrarFiguraClickeada(e.offsetX, e.offsetY);

    if (figuraClickeada != null){ 
        lastClicked = figuraClickeada;
    }

    canvas.addEventListener('mousemove',mouseMove);   
}

function mouseMove(e){
    
    if (mouseDown && lastClicked != null){
        lastClicked.setPosition(e.offsetX, e.offsetY);   
        drawAllFichas();
    }
    canvas.addEventListener('mouseup', mouseUp);
}

function mouseUp(){
    mouseDown = false;
    //let columna = encontrarPosFicha(lastClicked);
    //let fila = tablero.casillero.getFilas();
    //let casillero 


    agregarFicha(lastClicked,5);
    lastClicked = null;
   
    canvas.removeEventListener('mousemove', mouseMove); 
    canvas.removeEventListener('mouseup', mouseUp); 
}

function agregarFicha(nueva,filas){
    
    let diferencia = 25; //corregida diferencia
    let valory = 50;
    let posValorValidoY = 25;
    let posXnueva = nueva.getPosX();
    let posYnueva = nueva.getPosY();
    let encontro = false;
    let posFichaX = 0; //posiciones donde se pueden colocar fichas
    let posFichaY = 0;
 

    for(let i = 0; i < posicionesFichas.length; i++) { 
        posFichaX = posicionesFichas[i].getPosIniX();
        posFichaY = posicionesFichas[i].getPosIniX();

        if(posXnueva >= posFichaX - 30 && posXnueva < posFichaX + diferencia && posYnueva > posValorValidoY && posYnueva<=valory) { //mira si coincide con alguna de las posiciones de las fichas
            addFicha(filas,i,nueva, posFichaX); //añade la ficha en el tablero
            encontro = true;
        }

    }

    if(!encontro) {
        volverPosInicial(nueva);
    }

}

//let iteraciones = 7; //que vaya subiendo la ficha a medida se ocupan lugares.
//se guardan cambios pero deberia resetearse al poner la ficha en otra columna

function addFicha(fila,columna,nueva, centrarFichaPuesta){
    let iteraciones = 7; 
    if (tablero.casillero[fila][columna] == null && !nueva.getAgregada()){
        tablero.casillero[fila][columna] = nueva;
    }   
    else if (tablero.casillero[fila][columna] != null && !nueva.getAgregada()){
        alert("me posicione arriba de la ficha previamente puesta");
        tablero.casillero[fila][columna] = nueva;
        iteraciones--; //ERROR, SOLO SE REDUCE UNA VEZ
    } 
    alert("me agregue en la fila" + fila + "columna" + columna);
    nueva.setAgregada(true);

    let desplazamiento = 60; 




    for (let i = 0; i < iteraciones; i++){ //CORREGIR, esta bug
        clearCanvas();
        drawTablero();
        drawAllFichas();
        
        console.log(nueva.getPosY());
        nueva.setPosY(nueva.getPosY()+desplazamiento);
        nueva.setPosX(centrarFichaPuesta);
        nueva.draw();  

        clearCanvas();
        drawTablero();
        drawAllFichas();
        nueva.draw(); 
      

    } 
}



function volverPosInicial(nueva){ //en caso de posicion incorrecta, vuelve a la pos original la ficha
    let posinix = nueva.getPosIniX();
    let posiniy = nueva.getPosIniY();

    alert("volvio a la pos original, pos incorrecta");
 
   console.log(posinix, posiniy);

   nueva.setPosition(posinix,posiniy); //vuelve bruscamente de momento a la pos original
   nueva.draw();
   clearCanvas();
   drawTablero();
   drawAllFichas(); 


} 
    
  






function clearCanvas(){
    context.fillStyle = "#00203E";
    context.fillRect(0,0,canvasWidth,canvasHeight);
}

function crearPosicionesFicha(){
    let aumentox = 0;
    for (let i = 0; i < tablero.getColumnas(); i++){
        aumentox = aumentox + 110;
        crearFicha(110,30,27,"#00FF00",0,aumentox, posicionesFichas);  
    }
}

