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

//GUARDAR EN CONSTANTES LOS VALORES DEL RADIO DE LAS FICHAS Y EL TABLERO
//CALCULAR LAS DIAGONALES A PARTIR DE LA FICHA LANZADA, MIRANDO LA FILA Y LA COL
let jugador1 = "alien";
let jugador2 = "hombre de negro";
canvas.addEventListener('mousedown', mousedown);
document.addEventListener("DOMContentLoaded",drawTablero);
document.addEventListener("DOMContentLoaded", rellenarTablero);
document.addEventListener("DOMContentLoaded", crearPosicionesFicha);
document.addEventListener("DOMContentLoaded",crearTodasFichas);

canvas.addEventListener('mouseup', mouseUp);
canvas.addEventListener('mousemove',mouseMove); 
function drawTablero(){

    context.fillStyle = "#00182F";
    context.beginPath(); 
    context.rect(150, 60, 800, 440); 
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
        aumentox = aumentox + 110;
        decrementacion = 0;
        fichastablero[j] = [];
        for (let i = 0; i < tablero.getFilas(); i++){
            decrementacion = decrementacion - 70;
            crearFichaTab(110,30,28,"imgs/fichas/fichablanca.png",decrementacion, aumentox,j,i,false);  
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

    for (let j = 0; j < tablero.getColumnas(); j++){ //mejorar 
        for (let i = 0; i < tablero.getFilas();i++){
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
        crearFicha(70,50,28,"imgs/fichas/CirculoAlien.png",decrementacion,0,fichas,jugador1,true);
        crearFicha(1020,50,28,"imgs/fichas/men.png",decrementacion,0,fichas,jugador2,true);  
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
        volverPosInicial(lastClicked);
    }
    }

    lastClicked = null;
}

function hizoXenLinea(col,fila){
    let contador =0;
    let contador2 = 0;
    switch(true) {
        case hizoXenLineaHorizontal(col,fila,contador,contador2): 
            alert("gano en horizontal el jugador "+lastClicked.getNombreJugador());
            reset(contador);
            break;
        case hizoXenLineaVertical(col,fila,contador):
            alert("gano en vertical el jugador "+lastClicked.getNombreJugador());
            reset(contador);
            break;
        case hizoXenLineaDiagonalNormal(col,fila,contador):
            alert("gano en diagonal normal el jugador "+lastClicked.getNombreJugador());
            reset(contador);
            break;
        case hizoXenLineaDiagonalInvertida(col,fila,contador):
            alert("gano en diagonal invertida el jugador "+lastClicked.getNombreJugador());
            reset(contador);
            break;
        default:
            contador = 0; //se resetea, ej se pusieron 2 fichas nada mas, por lo que no contó 4 a su alrededor
            break;
    }
}

function  verificarHorizontalDerecha(col,fila,contador2, jugador){
    let contveces = 0;
    let j = col;
    while (j < tablero.getColumnas() && contveces < cantLinea){
        if (tablero.casillero[col+contveces][fila] != null && tablero.casillero[col+contveces][fila].getNombreJugador() === jugador){
            contador2++;
            console.log("contador " + contador2);
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

function hizoXenLineaHorizontal(col, fila, contador, contador2) {
    let jugador = lastClicked.getNombreJugador();
   
    let contadorIzquierda = verificarHorizontalIzquierda(col, fila, contador, jugador);
    let contadorDerecha = verificarHorizontalDerecha(col, fila, contador2, jugador);

    if (contadorIzquierda == cantLinea) {
        alert("gane x hor izq");
        return true;
    } else if (contadorDerecha == cantLinea) {
        alert("gane x hor dere");
        return true;
    } else {
        console.log("cont izquie" + Number(contadorIzquierda));
        console.log("contador der " + Number(contadorDerecha))
        if (sumoXenLinea(fila,jugador)) {
            alert("cont suma");
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
            //console.log(contador);     
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
function hizoXenLineaVertical(col, fila, contador) {
   // console.log("ver");


    return false;
}

function hizoXenLineaDiagonalNormal(col, fila, contador) {
  //  console.log("norm");
    return false;
}

function hizoXenLineaDiagonalInvertida(col, fila, contador) {
   // console.log("inver");
    return false;
}

function reset(contador) {
    for (let j= 0; j< tablero.getColumnas(); j++){
        for (let i = 0; i < tablero.getFilas(); i++) {
            if (tablero.casillero[j][i] != null){
                tablero.casillero[j][i].setMovible(true); // seteamos movible para que las fichas puedan moverse hasta su pos original
                volverPosInicial(tablero.casillero[j][i]);
                tablero.casillero[j][i] = null;
            }
        }
    }

    contador = 0;
}





// function hizoXenLineaHor(col,fila){
//     //alert("hola")
//     // let j = 0;
 
//     // let jugador = lastClicked.getNombreJugador();
//     // while (j < tablero.getColumnas()){
//     //      if (tablero.casillero[j+i][fila] != null && tablero.casillero[j][fila].getNombreJugador()=== jugador){
//     //          cant++;
//     //      }
//     //     j++;
//     // }
//     let jugador = lastClicked.getNombreJugador();
//     console.log(jugador)
//     for (let i =0; i <= cantLinea-1; i++){
//         if (tablero.casillero[col+i][fila] != null && tablero.casillero[col+i][fila].getNombreJugador()=== jugador){
//             cant++;
//             if (cant==cantLinea){
//                 alert("gano horizontal jk");
//                return cant==cantLinea;
//         }
//     }

//     for (let j =0; j < cantLinea; j++){
//         if (tablero.casillero[col-j][fila] != null && tablero.casillero[col-j][fila].getNombreJugador()=== jugador){
//             cant2++;
//             console.log(cant2);
//             if (cant2==cantLinea-1){
//                 alert("gano horizontal");
//                return cant2==cantLinea;
//             }
//         }
//      }

//   return cant==cantLinea || cant2==cantLinea  || cant + cant2 == cantLinea;
// }
// }


// function hizoXenLineaVertical(col, fila){

//     let i = 0;
//     let cantjug1 = 0;
//     let cantjug2 = 0;

//     while (i < tablero.getFilas() && (cantjug1 < cantLinea || cantjug2 < cantLinea)){
//         if (tablero.casillero[col][i] != null && tablero.casillero[col][i].getNombreJugador() === jugador1){

//             cantjug1++;
//             if(cantjug1 == cantLinea) {
//                 alert("gano vertical");
//                 return true;
//             }
//             cantjug2 = 0;
//         }
//         else if(tablero.casillero[col][i] != null && tablero.casillero[col][i].getNombreJugador() !== jugador1) {
      
//             cantjug2++;
//             if(cantjug2 == cantLinea) {
//                 alert("gano vertical");
//                 return true;
//             }
//             cantjug1 = 0;
//         }
//         i++;
//     }

//     return false;
// }


// function hizoXenLineaDiagonal(fila,col){

//     return hizoXenLineaDiagonalNormal(fila,col) || hizoXenLineaDiagonalInvertida(fila,col);

// }


// let contJug1 = 0;
// function hizoXenLineaDiagonalInvertida(fila,col){

//     //alert("hola");
  
//     // let contJug2 = 0; 

//     for (let i =  0; i < cantLinea; i++){
//         if (tablero.casillero[col+i][fila-i] != null && tablero.casillero[col+i][fila-i].getNombreJugador() === jugador1){
          
//             contJug1++;
//             console.log("col" + Number(col-i) + "fil" + Number(fila-i));
//             console.log(contJug1 + "contjug1");
//             if (contJug1 == cantLinea){
//                 alert("gano diagonal invertida");
//                 return true;
//             }
//             // contJug2 = 0;
//         }
//     }
   
//     return false;
// }

// function hizoXenLineaDiagonalNormal(fila,col){

//     let contJug1 = 0;
//     let contJug2 = 0; 
//     for (let i =  0; i < cantLinea; i++){
//         if (tablero.casillero[col-i][fila-i] != null && tablero.casillero[col-i][fila-i].getNombreJugador() === jugador1){
          
//             contJug1++;
//             // console.log("col" + Number(col-i) + "fil" + Number(fila-i));
//             // console.log(contJug1 + "contjug1");
//             if (contJug1 == cantLinea){
//                 alert("gano diagonal normal");
//                 return true;
//             }
//             contJug2 = 0;
//         }
//         else if(tablero.casillero[col-i][fila-i] != null && tablero.casillero[col-i][fila-i].getNombreJugador() !==jugador1){
//             contJug2++;  
//             // console.log(contJug2 + "contjug2");
//             if (contJug2 == cantLinea){
//                 alert("gano diagonal normal");
//                 return true;
//             }
//             contJug1 = 0;
//         }
//     }
//     return false;
// }





// function hizoXenLineaDiagonal(fila,col){ METODOVIEJO
    
//     let cant = 0; 
//     let jugador = lastClicked.getNombreJugador();
//     for (let j = 0; j < tablero.getColumnas(); j++){
//        for (let i = 0; i < tablero.getFilas(); i++){
//             if (j==i){
//                 console.log("j" + j + "i" + i );
//                 if (tablero.casillero[j][i] != null && tablero.casillero[j][i].getNombreJugador() === jugador){
//                     cant++;
//                 }
//             }   
//        }
//     }
//     return cant==cantLinea;
// }





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

    for (let i = fila; i >= 0; i--) {
        if (tablero.casillero[columna][i] == null) {
            return i;
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
