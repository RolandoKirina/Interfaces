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
    for (let i = 0; i < fichas.length; i++){
        fichas[i].draw();
    }
    for (let i = 0; i < fichastablero.length; i++){
        fichastablero[i].draw();
    }
    for (let i = 0; i < posicionesFichas.length; i++){
        posicionesFichas[i].draw();
    }

}

function crearTodasFichas(){
    let decrementacion = 0;
    for (let i = 0; i < numerofichas; i++){
        decrementacion = decrementacion - 20;
        crearFicha(70,50,26,"#FF0000",decrementacion,0,fichas);
        crearFicha(1020,50,26,"#0000FF",decrementacion,0,fichas);  
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
    agregarFicha(lastClicked,5, 6);
    lastClicked = null;
   
    canvas.removeEventListener('mousemove', mouseMove); 
    canvas.removeEventListener('mouseup', mouseUp); 
}

/*function encontrarPosFicha(ficha){

}*/

function agregarFicha(nueva,filas,col){
    let diferencia = 110;
    let valory = 50;
    let posValorValidoY = 25;
    for (let i = 0; i < posicionesFichas.length;i++){
        let fichapos = posicionesFichas[i];

        // alert("x" + i + "valor" + fichapos.getPosX());
        // alert("y" + i + "valor" + fichapos.getPosY());
        // alert("NUEVA" + nueva.getPosX());
        // alert("siguiente " + Number(fichapos.getPosX()+diferencia));
        let posXnueva = nueva.getPosX();
        let posYnueva = nueva.getPosY();
        if (posXnueva >= fichapos.getPosX()-30 && posXnueva < fichapos.getPosX()+diferencia 
        && posYnueva > posValorValidoY && posYnueva<=valory){
            //let tab = tablero.getCasillero();

            addFicha(filas,col,nueva);
              
        }else {
            volverPosInicial(nueva);
        }
    }
}

function volverPosInicial(nueva){
    let posinix = nueva.getPosIniX();
    let posiniy = nueva.getPosIniY();
    let hecho = false;
    let i = nueva.getPosX();
 
   console.log(posinix, posiniy);

    while (i >= posinix && !hecho){
            nueva.setPosition(i,posiniy);
            nueva.draw();
            clearCanvas();
            drawTablero();
            drawAllFichas(); 
            hecho = true; 
            i--;    
        };
 

         for (let i =nueva.getPosY(); i >= posiniy; i--){
             setTimeout(() => {
             nueva.setPosition(posx,i);
             nueva.draw();
             clearCanvas();
             drawTablero();
             drawAllFichas(); 

         }, 100);
     }
    }; 
    
  


function addFicha(fila,columna,nueva){
    if (tablero.casillero[fila][columna] == null && !nueva.getAgregada()){
        tablero.casillero[fila][columna] = nueva;

    }   
    else if (tablero.casillero[fila][columna] != null && !nueva.getAgregada()){
        alert("entre");
        tablero.casillero[fila-1][columna] = nueva;
    } 
    alert("me agregue en la fila" + fila + "columna" + columna);
    nueva.setAgregada(true);
    for (let i = 0; i <7; i++){
        clearCanvas();
        drawTablero();
        drawAllFichas();
        let desplazamiento = 60;
        nueva.setPosY(nueva.getPosY()+desplazamiento);
        nueva.draw();  
    } 
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

