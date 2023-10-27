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
    context.shadowOffsetY = 5; // Despl
    context.fill(); 
    context.closePath();

   
}

drawTablero();



// 4 en raya c jugador tiene 21 fichas

function crearFicha(posX, posY, radio, color, decrementacion, aumentox, arr) {
    posY = posY - decrementacion;
    posX = posX + aumentox;
    let ficha = new Ficha(posX, posY, radio, color, context);
    arr.push(ficha);
    ficha.draw();
}


function crearTodasFichas(){
    let decrementacion = 0;
    for (let i = 0; i < numerofichas; i++){
        decrementacion = decrementacion - 20;
        crearFicha(70,50,26,'#0000FF',decrementacion,0,fichas);
        crearFicha(1020,50,26,'#FF0000',decrementacion,0,fichas);  
    }   
}

crearTodasFichas();



function rellenarTablero(){
    let decrementacion = 0;
    let aumentox = 0;
    for (let j = 0; j < tablero.getColumnas();j++){
        aumentox = aumentox + 110;
        decrementacion = 0;
        for (let i = 0; i < tablero.getFilas(); i++){
            decrementacion = decrementacion - 70;
            crearFicha(110,30,28,'#FFFFFF',decrementacion, aumentox, fichastablero);     
        }
    }
}

rellenarTablero();

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
    lastClicked = null;
    canvas.removeEventListener('mousemove', mouseMove); 
    canvas.removeEventListener('mouseup', mouseUp); 
}

canvas.addEventListener('mousedown', mousedown);

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

function clearCanvas() {
    context.fillStyle = '#00203E';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
}

function crearPosicionesFicha(){
    let aumentox = 0;
    for (let i = 0; i < tablero.getColumnas(); i++){
        aumentox = aumentox + 110;
        crearFicha(110,30,27,'#FF0000',0,aumentox, posicionesFichas);
        
    }
}

crearPosicionesFicha();