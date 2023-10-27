"use strict"

let canvas = document.querySelector("#canvas");
let context = canvas.getContext('2d');

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let numerofichas = 21;

let rellenoficha = '#0000FF';
let tablero = new Tablero(6,7);

let fichas = [];

function drawTablero(){

    context.fillStyle = "#00284E";
    context.beginPath();
    context.fillRect(55,15,190,140);
    context.closePath();
}

drawTablero();



// 4 en raya c jugador tiene 21 fichas

function crearFicha(posX, posY, radio, color, decrementacion) {
    posY = posY - decrementacion;
    let ficha = new Ficha(posX, posY, radio, color, context);
    fichas.push(ficha);
    ficha.draw();
}


function crearTodasFichas(){
    let decrementacion = 0;
    for (let i = 0; i < numerofichas; i++){
        decrementacion = decrementacion - 6;
        crearFicha(27,16,7,'#0000FF',decrementacion);
        crearFicha(273,16,7,'#FF0000',decrementacion);  
    }   
}

crearTodasFichas();



function rellenarTablero(){
    let decrementacion = 0;
    for (let j = 0; j < tablero.getColumnas;j++){
        for (let i = 0; i < tablero.getFilas; i++){
            decrementacion = decrementacion - 6;;
            crearFicha(50,16,7,'#FFFFFF',decrementacion);     
        }
    }
}

rellenarTablero();
/*function clearCanvas() {
    context.fillStyle = '#F8F8FF';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
}*/

