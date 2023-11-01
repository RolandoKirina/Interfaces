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
let cantLinea = 4;

let jugador1 = "rojas";
let jugador2 = "azules";
canvas.addEventListener('mousedown', mousedown);
document.addEventListener("DOMContentLoaded",drawTablero);
document.addEventListener("DOMContentLoaded", rellenarTablero);
document.addEventListener("DOMContentLoaded", crearPosicionesFicha);
document.addEventListener("DOMContentLoaded",crearTodasFichas);


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
        fichastablero[j] = [];
        for (let i = 0; i < tablero.getFilas(); i++){
            decrementacion = decrementacion - 70;
            crearFichaTab(110,30,28,"#FFFFFF",decrementacion, aumentox,j,i,false);  
        }
    }
    
}

function crearFichaTab(posX, posY, radio, fill, decrementacion, aumentox,j,i) {
    posY = posY - decrementacion;
    posX = posX + aumentox;
    let ficha = new Ficha(posX, posY, radio, fill, context);
    
    fichastablero[j][i] = ficha;
    ficha.draw();
}



function crearFicha(posX, posY, radio, fill, decrementacion, aumentox, arr,jugador,movible) {
    posY = posY - decrementacion;
    posX = posX + aumentox;
    let ficha = new Ficha(posX, posY, radio, fill, context,jugador,movible);
    arr.push(ficha);
    ficha.draw();
}


function drawAllFichas(){
    clearCanvas();
    drawTablero();

    for (let j = 0; j < 7; j++){ //mejorar 
        for (let i = 0; i < 6;i++){
            fichastablero[j][i].draw();
        }
    }

    for (let i = 0; i < fichas.length; i++){
        fichas[i].draw();
    }

    for (let i = 0; i < posicionesFichas.length; i++){
        posicionesFichas[i].drawStroke();
    }

}

function crearTodasFichas(){
    let decrementacion = 0;
    for (let i = 0; i < numerofichas; i++){
        decrementacion = decrementacion - 20;
        crearFicha(70,50,28,"#FF0000",decrementacion,0,fichas,jugador1,true);
        crearFicha(1020,50,28,"#0000FF",decrementacion,0,fichas,jugador2,true);  
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


//setColorPosiciones(){
   // seguir
//}
function mouseMove(e){
    
    if (mouseDown && lastClicked != null && lastClicked.getMovible()){
        lastClicked.setPosition(e.offsetX, e.offsetY);   
        drawAllFichas();
    }
    canvas.addEventListener('mouseup', mouseUp);
}

function mouseUp(){
    mouseDown = false;
    let col = findCol(lastClicked);
    let fila = encontrarFila(col);

    if (fila != -1) {
        tablero.casillero[col][fila]= lastClicked;
        setearPosicion(lastClicked,col,fila);
        lastClicked.setMovible(false);
        //verificarTurnos();
        if (hizoXenLineaHor(fila) || hizoXenLineaVertical(col) || hizoXenLineaDiagonal(fila,col) || hizoXenLineaDiagonalInvertida(primerafila,col)){
            alert("ganaste");
            reset();
        }
     
    }   
    else if (lastClicked.getMovible()){
        volverPosInicial(lastClicked);
    }
   
    lastClicked = null;
  
   
    canvas.removeEventListener('mousemove', mouseMove); 
    canvas.removeEventListener('mouseup', mouseUp); 
}


function hizoXenLineaHor(fila){
    //alert("hola")
    let j = 0;
    let cant = 0;
    let jugador = lastClicked.getNombreJugador();
    while (j < tablero.getColumnas()){
         if (tablero.casillero[j][fila] != null && tablero.casillero[j][fila].getNombreJugador()=== jugador){
             cant++;
         }
        j++;
    }
    return cant==cantLinea;
}

function hizoXenLineaVertical(col){

    let i = 0;
    let cantjug1 = 0;
    let cantjug2 = 0;

    while (i < tablero.getFilas()){
        if (tablero.casillero[col][i] != null && tablero.casillero[col][i].getNombreJugador() === jugador1){
            cantjug1++;
            cantjug2 = 0;
        }
        else if(tablero.casillero[col][i] != null && tablero.casillero[col][i].getNombreJugador() === jugador2) {
            cantjug2++;
            cantjug1 = 0;
        }
        i++;
    }
    return cantjug1==cantLinea || cantjug2 == cantLinea;
}
function hizoXenLineaDiagonal(fila,col){
    
    let cant = 0; 
    let jugador = lastClicked.getNombreJugador();
    for (let j = 0; j < tablero.getColumnas(); j++){
       for (let i = 0; i < tablero.getFilas(); i++){
            if (j==i){
                console.log("j" + j + "i" + i );
                if (tablero.casillero[j][i] != null && tablero.casillero[j][i].getNombreJugador() === jugador){
                    cant++;
                }
            }   
       }
    }
    return cant==cantLinea;
}

function hizoXenLineaDiagonalInvertida(fila,col){
    
    let cant = 0; 
    let jugador = lastClicked.getNombreJugador();
    for (let j = 0; j <= tablero.getColumnas(); j++){
       for (let i = tablero.getFilas(); i >0 ; i--){
            if (j+i == fila+col) {
                console.log(j+i);
                if (tablero.casillero[j][i] != null && tablero.casillero[j][i].getNombreJugador() === jugador){
                    cant++;
                }
            }   
       }
    }
    console.log(fila);
    console.log(cant);
    return cant==cantLinea;

}

function reset() {
    for (let j= 0; j< tablero.getColumnas(); j++){
        for (let i = 0; i < tablero.getFilas(); i++) {
            if (tablero.casillero[j][i] != null){
                tablero.casillero[j][i].setMovible(true); // seteamos movible para que las fichas puedan moverse hasta su pos original
                volverPosInicial(tablero.casillero[j][i]);
                tablero.casillero[j][i] = null;
            }
        }
    }
}






function verificarTurnos(){
    let jugador = lastClicked.getNombreJugador(); // obtiene el nombre de cualquier jugador
    if (!lastClicked.getMovible()){ // si no es movible la ultima
        for (let i = 0; i < fichas.length; i++){ // si el nombre del jugador coincide con x fichas las inhabilita
            if (fichas[i].getNombreJugador() === jugador) { 
                    fichas[i].setMovible(false); 
            }
            else { //si no las habilita para jugar
                if (!EstaEnTablero(fichas[i])) {
                    fichas[i].setMovible(true);
                }
                
            }
        }   
    }
}

function EstaEnTablero(ficha){
    let posXficha = ficha.getPosX();
    let posYficha = ficha.getPosY();
    let esta = false;
    for (let j = 0; j < tablero.getColumnas();j++){
        for (let i = 0; i < tablero.getFilas();i++){
   
            if (posXficha ==fichastablero[j][i].getPosX() && posYficha == fichastablero[j][i].getPosY()){
                esta = true;
            }
        }
    }
    return esta;
}

function setearPosicion(nueva,col,fila){
   
    let posYfichaTab = fichastablero[col][fila].getPosY();
    //let posYnueva = nueva.getPosY();
    let posXvalida = fichastablero[col][fila].getPosX();
    nueva.setPosX(posXvalida);
    nueva.setMovible(false);
    //PREGUNTARLE AL PROFESOR COMO HACER LA ANIMACION
    // for (let i = posYnueva ; i <= posYfichaTab; i++){     
    //     nueva.setPosY(i);
    //     nueva.draw();
    //     limpiarTodoCanvas()
    // }
    nueva.setPosY(posYfichaTab);
    nueva.draw();
    limpiarTodoCanvas()
}

function limpiarTodoCanvas(){
    clearCanvas();
    drawTablero();
    drawAllFichas();
}
function findCol(nueva){
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
        posFichaY = posicionesFichas[i].getPosIniY();

        if(posXnueva >= posFichaX - 30 && posXnueva < posFichaX + diferencia 
            && posYnueva > posValorValidoY && posYnueva<=valory) { //mira si coincide con alguna de las posiciones de las fichas
            encontro = true;
            return i;
        }
    }
    if(!encontro && nueva.estaSeleccionado(posXnueva,posYnueva)) {
        volverPosInicial(nueva);
    }

}


//let iteraciones = 7; //que vaya subiendo la ficha a medida se ocupan lugares.
//se guardan cambios pero deberia resetearse al poner la ficha en otra columna

function encontrarFila(columna) {

    let fila = tablero.getFilas()-1;

    for (let i = fila; i >= 0; i--) {
        if (tablero.casillero[columna][i] == null) {
            return i;
        }
    }

    return -1; // Si no se encuentra una fila vacía, puedes devolver -1 u otro valor que indique que no hay filas vacías.
}

//function addFicha(fila,columna,nueva, centrarFichaPuesta){
    //let iteraciones = 7; 
    /*if (tablero.casillero[fila][columna] == null && !nueva.getAgregada()){
        tablero.casillero[fila][columna] = nueva;
    }   
    else if (tablero.casillero[fila][columna] != null && !nueva.getAgregada()){
        alert("me posicione arriba de la ficha previamente puesta");
        tablero.casillero[fila][columna] = nueva;
        iteraciones--; //ERROR, SOLO SE REDUCE UNA VEZ
    } 
    alert("me agregue en la fila" + fila + "columna" + columna);
    nueva.setAgregada(true);

    let desplazamiento = 60; */

    /*for (let i = 0; i < iteraciones; i++){ //CORREGIR, esta bug
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
    } */




function volverPosInicial(nueva){ //en caso de posicion incorrecta, vuelve a la pos original la ficha
    //alert(nueva.getMovible())
    if (nueva.getMovible()){ // Para que si esta en el tablero no vuelva a la posicion original
        let posinix = nueva.getPosIniX();
        let posiniy = nueva.getPosIniY();
        nueva.setPosition(posinix,posiniy); //vuelve bruscamente de momento a la pos original
        nueva.draw();
        clearCanvas();
        drawTablero();
        drawAllFichas();
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
        crearFichaStroke(110,30,27,"#00FF00",0,aumentox, posicionesFichas,null,false);  
    }
}

function crearFichaStroke(posX, posY, radio, fill, decrementacion, aumentox, arr) {
    posY = posY - decrementacion;
    posX = posX + aumentox;
    let ficha = new Ficha(posX, posY, radio, fill, context);
    arr.push(ficha);
    ficha.drawStroke();
}
