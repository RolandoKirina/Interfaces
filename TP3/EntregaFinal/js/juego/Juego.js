"use strict"

let canvas = document.querySelector("#canvas");
let context = canvas.getContext('2d');

let btn4enlinea = document.getElementById("4enlinea");
let btn5enlinea = document.getElementById("5enlinea");
let btn6enlinea = document.getElementById("6enlinea");
let btn7enlinea = document.getElementById("7enlinea");

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let mouseDown = false;
let lastClicked = null;
let rellenoficha = '#0000FF';
let fichas = [];
let fichastablero = [];
let posicionesFichas =[];
let widthTablero = 800;
let heightTablero = 440;


// valores que cambiaran en el futuro
let col = 7;
let fila = 6;
let tablero = new Tablero(0,0);
let cantLinea = 4; // cambia
let radioFicha = 28;
let decrementacionYFichaTab = 70;
let aumentoXFicha = 110;
let decrementacionfichasCostados = 20;
let numerofichas = 21;
let anchoFicha = 60;



let jugador1 = "alien";
let jugador2 = "hombre de negro";
canvas.addEventListener('mousedown', mousedown);
document.addEventListener("DOMContentLoaded",cargarJuego);
document.addEventListener("DOMContentLoaded",drawTablero);
document.addEventListener("DOMContentLoaded", rellenarTablero);
document.addEventListener("DOMContentLoaded", crearPosicionesFicha);
document.addEventListener("DOMContentLoaded",crearTodasFichas);
//document.addEventListener("DOMContentLoaded", timer);
canvas.addEventListener('mouseup', mouseUp);
canvas.addEventListener('mousemove',mouseMove); 



function cargarJuego(){
    
    btn4enlinea.addEventListener('click', function (){
        
        reset();
        crearXenLinea(7,6,4,28,70,110,
            20,21,60);
            clearCanvas();
            drawTablero();
            rellenarTablero();
            crearPosicionesFicha();
            crearTodasFichas();
            console.log(fichas.length);
    } );
    
    btn5enlinea.addEventListener('click', function(){
        
        reset();
        crearXenLinea(9,7,5,25,62,88,15,28,55);
        clearCanvas();
        drawTablero();
        rellenarTablero();
        crearPosicionesFicha();
        crearTodasFichas();
        console.log(fichas.length);
    });
    
    btn6enlinea.addEventListener('click', function (){
        reset();
        crearXenLinea(11,9,6,18,50,73,12,36,37);
        clearCanvas();
        drawTablero();
        rellenarTablero();
        crearPosicionesFicha();
        crearTodasFichas();
        console.log(fichas.length);
    });
    
    btn7enlinea.addEventListener('click', function (){
        reset();
        crearXenLinea(13,10,7,16,45.2,62.2,9.5,45,33.2);
        clearCanvas();
        drawTablero();
        rellenarTablero();
        crearPosicionesFicha();
        crearTodasFichas();
        console.log(fichas.length);
    });
}



function crearXenLinea(col,fila,cant,radio,decrementacionYTab,aumentoX,decrementacionCostados,nrofichas,ancho){

    fichas = []; //resetea la cantidad de fichas al cambiar entre modos de juego
    posicionesFichas = []; //resetea la cantidad de posiciones al cambiar entre modos de juego
    tablero = new Tablero(fila,col);
    cantLinea = cant; // cambia
    radioFicha = radio;
    decrementacionYFichaTab = decrementacionYTab;
    aumentoXFicha = aumentoX;
    decrementacionfichasCostados = decrementacionCostados;
    numerofichas = nrofichas;
    anchoFicha = ancho;
    
}


function drawTablero(){

    context.fillStyle = "#00182F";
    context.beginPath(); 
    context.rect(150, 60, widthTablero, heightTablero); 
    context.strokeStyle="#000D1A";
    context.lineWidth = "2";
    context.stroke();
    context.shadowColor = 'rgba(0, 0, 0, 0.5)'; // Color de la sombra (negro con transparencia)
    context.shadowBlur = 10; // Difuminado de la sombra
    context.shadowOffsetX = 5; // Desplazamiento horizontal de la sombra
    context.shadowOffsetY = 5; // Desplamiento en y
    context.fill(); 
    context.closePath();

}

function rellenarTablero(){
    let decrementacion = 0;
    let aumentox = 0;
    for (let j = 0; j < tablero.getColumnas();j++){
        aumentox = aumentox + aumentoXFicha;
        decrementacion = 0;
        fichastablero[j] = [];
        for (let i = 0; i < tablero.getFilas(); i++){
            decrementacion = decrementacion - decrementacionYFichaTab;
            crearFichaTab(110,30,radioFicha,"imgs/fichas/fichablanca.png",decrementacion, aumentox,j,i,false,anchoFicha);  
        }
    }
    
}

function crearFichaTab(posX, posY, radio, fill, decrementacion, aumentox,j,i,movible,anchoFicha) {
    posY = posY - decrementacion;
    posX = posX + aumentox;
    let ficha = new Ficha(posX, posY, radio, fill, context,null,movible,anchoFicha);
    
    fichastablero[j][i] = ficha;
    ficha.draw();
}



function crearFicha(posX, posY, radio, fill, decrementacion, aumentox, arr,jugador,movible,anchoFicha) {
    posY = posY - decrementacion;
    posX = posX + aumentox;
    let ficha = new Ficha(posX, posY, radio, fill, context,jugador,movible,anchoFicha);
    arr.push(ficha);
    ficha.draw();
}


function drawAllFichas(){
    clearCanvas();
    drawTablero();
   
    for (let j = 0; j < tablero.getColumnas(); j++){ //mejorar 
        for (let i = 0; i < tablero.getFilas();i++){
            fichastablero[j][i].setAncho(anchoFicha);
            fichastablero[j][i].draw();
        }
    }

    for (let i = 0; i < fichas.length; i++){
        fichas[i].setAncho(anchoFicha);
        fichas[i].draw();
    }

    for (let i = 0; i < posicionesFichas.length; i++){
        posicionesFichas[i].setRadio(radioFicha);
        posicionesFichas[i].drawStroke();
    }

}

function crearTodasFichas(){
    fichas = [];
    let decrementacion = 0;
    for (let i = 0; i < numerofichas; i++){
        decrementacion = decrementacion - decrementacionfichasCostados;
        crearFicha(70,50,radioFicha,"imgs/fichas/CirculoAlien.png",decrementacion,0,fichas,jugador1,true,anchoFicha);
        crearFicha(1020,50,radioFicha,"imgs/fichas/men.png",decrementacion,0,fichas,jugador2,true,anchoFicha);  
    }   
}


function encontrarFiguraClickeada(x,y){
    for (let i = 0; i < fichas.length; i++){
        let ficha = fichas[i];
     //   console.log(ficha);
       // console.log(ficha.estaSeleccionado());
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
       // console.log("pos x: "+lastClicked.getPosX());
        //console.log("pos y: "+lastClicked.getPosY());
    }
    else {  //ARREGLA BUG QUE SIGUE POSICIONANDO FICHA AUNQUE YA LA HAYA SOLTADO
        lastClicked = null;
    }
   
}



function mouseMove(e){
    if (mouseDown && lastClicked != null && lastClicked.getMovible()){
        lastClicked.setPosition(e.offsetX, e.offsetY);   
        drawAllFichas();
    }
}




function mouseUp(){
    mouseDown = false;
    if (lastClicked != null){
        let col = findCol(lastClicked);
        let fila = encontrarFila(col);
    
    if (fila != -1) {
        tablero.casillero[col][fila]= lastClicked;
        setearPosicion(lastClicked,col,fila);
        lastClicked.setMovible(false);
        verificarTurnos();

        //cada vez que se tira una ficha, cuenta a su alrededor si hay 4, si no los hay, resetea el contador.
        //al poner la ultima ficha la cuarta vez, deberia contar 4 a su alrededor y devolver ganador.
        //si no los hay, no acierta ningun caso y va al default, donde se resetea el contador.
       
    
        hizoXenLinea(col,fila)
    }   
    else if (lastClicked.getMovible()){
        //console.log(posicionesFichas[0].getRadio());
        volverPosInicial(lastClicked);
    }
    }


}

function hizoXenLinea(col,fila){
    let contador = 0;
    let contador2 = 0;
    let contador3=0;
    let contador4=0;
    let jugador = lastClicked.getNombreJugador();
    switch(true) {
        case hizoXenLineaHorizontal(col,fila,contador,contador2,jugador): 
            alert("gano en horizontal el jugador "+lastClicked.getNombreJugador());
            reset();
            break;
        case hizoXenLineaVertical(col,fila,contador,jugador):
            alert("gano en vertical el jugador "+lastClicked.getNombreJugador());
            reset();
            break;
        case hizoXenLineaDiagonal(col,fila,contador,contador2,contador3,contador4,jugador):
            alert("gano en diagonal el jugador "+lastClicked.getNombreJugador());
            reset();
            break;
        default:
            // contador = 0; //se resetea, ej se pusieron 2 fichas nada mas, por lo que no contó 4 a su alrededor
            // contador2 = 0;
            // contador3 = 0;
            // contador4 = 0;
            break;
    }
}


function  verificarHorizontalDerecha(col,fila,contador2, jugador){
    let contveces = 0;
    let j = col;
    while (j < tablero.getColumnas() && contveces < cantLinea){
        if (tablero.casillero[col+contveces][fila] != null && tablero.casillero[col+contveces][fila].getNombreJugador() === jugador){
            contador2++;
            if (contador2 == cantLinea){
                return Number(contador2);
            } 
            else if (tablero.casillero[col+contveces][fila] == null || tablero.casillero[col+contveces][fila].getNombreJugador() !== jugador){
                return Number(0);
            }
        }
        contveces++;
        j++
    }
}

function hizoXenLineaHorizontal(col, fila, contador, contador2,jugador) {

    let contadorIzquierda = verificarHorizontalIzquierda(col, fila, contador, jugador);
    let contadorDerecha = verificarHorizontalDerecha(col, fila, contador2, jugador);

    if (contadorIzquierda == cantLinea) {
        alert("gane x hor izq");
        return true;
    } else if (contadorDerecha == cantLinea) {
        alert("gane x hor dere");
        return true;
    } else {
        if (sumoXenLinea(fila,jugador)) {
            alert("cont suma");
            return true;
        }
    }
}



function sumoXenLinea(fila,jugador){
    let cont = 0;
    for (let i = 0; i < tablero.getColumnas(); i++ ){
        if (tablero.casillero[i][fila] != null && tablero.casillero[i][fila].getNombreJugador() === jugador){
            cont++;
            if (cont == cantLinea){
                return true;
            }
        }
        else {
            cont = 0;
        }
    }
    return false;
}
    //anda
function verificarHorizontalIzquierda(col,fila,contador,jugador){

    let i = col;
    let contveces = 0;
    while ( i>0 && contveces < cantLinea){
        if (tablero.casillero[col-contveces][fila] != null && tablero.casillero[col-contveces][fila].getNombreJugador() === jugador){
            contador++;  
            if (contador == cantLinea){
                return Number(contador);
            } 
            else if (tablero.casillero[col-contveces][fila] == null || tablero.casillero[col-contveces][fila].getNombreJugador() !== jugador){
                return Number(0);
            }
        }
        contveces++;
        i--;
    }

}
function hizoXenLineaVertical(col, fila, contador,jugador) {
 
    if (hizoVerticalArriba(col,fila,contador,jugador) == cantLinea){
        alert("vertical arriba")
        return true;
    }
}

function hizoVerticalArriba(col,fila,contador,jugador){
    let i = fila;
    let cantveces = 0;
    while ( i < tablero.getFilas() && cantveces < cantLinea){
        if (tablero.casillero[col][fila+cantveces] != null && tablero.casillero[col][fila+cantveces].getNombreJugador() === jugador){
            contador++;
            if (contador == cantLinea){
                return Number(contador);
            }
        }
        cantveces++;
        i++;
    }
}


function hizoXenLineaDiagonal(col,fila,contador,contador2,contador3, contador4, jugador){
    

    //diagonal normal 

    let j = col;
    let i = fila;
    let cantveces = 0;
    while (j < tablero.getColumnas() && i < tablero.getFilas() && cantveces < cantLinea){
        if (tablero.casillero[col+cantveces][fila+cantveces] != null && tablero.casillero[col+cantveces][fila+cantveces]. getNombreJugador() == jugador){
            contador++;
            console.log("el contador de diagonal normal quedó en: "+contador);
            if (contador == cantLinea){
                alert("gano en diagonal normal");
                return true;
            }
        }
        j++;
        i++;
        cantveces++;
    }


   
    //diagonal normal abajo

    let j2 = col;
    let i2 = fila;
    cantveces = 0;

    while (j2 >= 0 && i2 >= 0 && cantveces < cantLinea){
        if (tablero.casillero[col-cantveces][fila-cantveces] != null && tablero.casillero[col-cantveces][fila-cantveces]. getNombreJugador() == jugador){
            contador2++;
            
            if (contador2 == cantLinea){
                alert("gano en diagonal normal ABAJO");
                return true;
            }
        }
        j2--;
        i2--;
        cantveces++;
    }

    if(contador-1 + contador2 == cantLinea) { //suma los resultados parciales de las dos diagonales normales
        alert("gano en diagonal normal cruzado");
        return true;
    }


    


    //diagonal invertida

    let j3 = col;
    let i3 = fila;
    cantveces = 0;
    while (j3 >= 0  && i3 < tablero.getFilas() && cantveces < cantLinea){
        if (tablero.casillero[col-cantveces][fila+cantveces] != null && tablero.casillero[col-cantveces][fila+cantveces]. getNombreJugador() == jugador){
            contador3++;
            console.log("el contador de diagonal invertida quedó en: "+contador3);
            if (contador3 == cantLinea){
                alert("ganó en diagonal invertida");
                return true;
            }
        }
        j3--;
        i3++;
        cantveces++;
    }



    //diagonal invertida abajo


    let j4 = col;
    let i4 = fila;
    cantveces = 0;
    while (j4 < tablero.getColumnas() && i4>= 0 && cantveces < cantLinea){
        if (tablero.casillero[col+cantveces][fila-cantveces] != null && tablero.casillero[col+cantveces][fila-cantveces]. getNombreJugador() == jugador){
            contador4++;
            console.log("el contador de diagonal invertida ABAJO quedó en: "+contador4);
            if (contador4 == cantLinea){
                alert("ganó en diagonal invertida ABAJO");
                return true;
            }
        }
        j4++;
        i4--;
        cantveces++;
    }


    if(contador3-1 + contador4 == cantLinea) {  //suma los resultados parciales de las dos diagonales invertidas
        alert("gano en diagonal DIAGONAL CRUZADO");
        return true;
    }


    return false;

}


function reset() {

    //console.log(tablero.getColumnas() + tablero.getFilas());
    //console.log(fichas.length);
    if(tablero.getColumnas() > 0 && tablero.getFilas() > 0) {
        for (let j= 0; j< tablero.getColumnas(); j++){
            for (let i = 0; i < tablero.getFilas(); i++) {
                if (tablero.casillero[j][i] != null){
                    //tablero.casillero[j][i].setMovible(true); // seteamos movible para que las fichas puedan moverse hasta su pos original
                  //  volverPosInicial(tablero.casillero[j][i]);
                    tablero.casillero[j][i] = null;
                }
            }
        }
    }
    
    if(fichas.length > 0) {
        for (let i= 0; i< fichas.length; i++){
            fichas[i].setMovible(true);
            let posinix = fichas[i].getPosIniX();
            let posiniy = fichas[i].getPosIniY();
            fichas[i].setPosition(posinix,posiniy); //vuelve bruscamente de momento a la pos original
            fichas[i].draw();
        }
    }

    if(fichas.length > 0) {
        clearCanvas();
        drawTablero();
        drawAllFichas();
    }

    for(let i = 0; i < posicionesFichas.length; i++) {
        //console.log(posicionesFichas[i].getRadio());
        //posicionesFichas[i].setRadio(radioFicha);
    }

}





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
        mouseDown = false;
    }
    console.log(lastClicked.getMovible());
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


    //ARREGLA BUG READING 5 Ya que la columna no esta definida cuando clickeamos y soltamos una ficha sin ponerla en el tablero
    if(columna != undefined) { 
        for (let i = fila; i >= 0; i--) {
            if (tablero.casillero[columna][i] == null) {
                return i;
            }
        }
    }

    return -1; // Si no se encuentra una vacia devuelve -1.
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


function clearCanvas(){
    context.fillStyle = "#00203E";
    context.fillRect(0,0,canvasWidth,canvasHeight);
}

function crearPosicionesFicha(){
    let aumentox = 0;
    for (let i = 0; i < tablero.getColumnas(); i++){
        aumentox = aumentox + aumentoXFicha;
        crearFichaStroke(110,30,radioFicha,"#00FF00",0,aumentox, posicionesFichas,null,false,anchoFicha);  
    }
}

function crearFichaStroke(posX, posY, radio, fill, decrementacion, aumentox, arr,anchoFicha) {
    posY = posY - decrementacion;
    posX = posX + aumentox;
    let ficha = new Ficha(posX, posY, radio, fill, context,0, anchoFicha);
    arr.push(ficha);
    ficha.drawStroke();
}

let segundos = 0;
let minutos = 0;
function timer() {
    // Usar setInterval en lugar de setTimeout para ejecutar una función cada segundo
    setInterval(function() {
        segundos++; // Incrementar el contador de segundos
        if (segundos < 10){
            console.log("minutos " + minutos + "segundos " + 0 + segundos);
        }
        if (segundos >= 10){
            console.log("minutos " + minutos + "segundos " +  segundos);
        }
        if (segundos == 60) {
            minutos++;
            segundos = 0;
            alert("1 min");
            // reset();
        }
    }, 1000);
}
