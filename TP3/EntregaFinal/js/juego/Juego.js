"use strict"

let canvas = document.querySelector("#canvas");
let context = canvas.getContext('2d');
canvas.addEventListener('mousedown', mousedown);
document.addEventListener("DOMContentLoaded", clearCanvas);
document.addEventListener("DOMContentLoaded", seleccionarPersonajes);
document.addEventListener("DOMContentLoaded",cargarJuego);
document.addEventListener("DOMContentLoaded",drawTablero);
document.addEventListener("DOMContentLoaded", rellenarTablero);
document.addEventListener("DOMContentLoaded", crearPosicionesFicha);
document.addEventListener("DOMContentLoaded",crearTodasFichas);

canvas.addEventListener('mouseup', mouseUp);
canvas.addEventListener('mousemove',mouseMove); 
let btn4enlinea = document.getElementById("4enlinea");
let btn5enlinea = document.getElementById("5enlinea");
let btn6enlinea = document.getElementById("6enlinea");
let btn7enlinea = document.getElementById("7enlinea");
let turnos = document.querySelector("#turno");

let modoJuego = document.querySelector("#modoJuegoElegir");

let contadortimer = document.querySelector("#contadortimer");

let btnElegirMinutos = document.querySelector("#btnElegirMinutos");

let envio = false;

let cantMinutosMaximo = 2;
    btnElegirMinutos.addEventListener('click', function(){
        let inputvalue = document.querySelector("#minutos").value;
        console.log(inputvalue);
        if(!envio) {
            cantMinutosMaximo = Number(inputvalue);
            console.log(cantMinutosMaximo);
            envio = true;
        }
       
       
    }
) 
let btnReset = document.querySelector("#reset");
btnReset.addEventListener('click', mostrarMensajeReset);
let empato = false;
let segundos = 59;
let minutos = cantMinutosMaximo;

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

//Seccion elegir fichas

const jugador1 = "Jugador 1"; //el nombre del jugador no cambia, solo cambia la ruta de la ficha
const jugador2 = "Jugador 2"; //el nombre del jugador no cambia, solo cambia la ruta de la ficha

let contadorPersonaje = 0;
const topeContadorPersonaje = 2;

let primerValor = null; //variables de comparacion para asignar rutas de imagenes
let segundoValor = null;

let imagenesficha = document.querySelectorAll("#imgFicha");
let elegirpersonajes = document.querySelector("#elegirpersonajes");

let rutajug1 = "imgs/fichas/men.png";  //imagenes por defecto
let rutajug2= "imgs/fichas/CirculoAlien1.png";  //imagenes por defecto
//imagen de tablero

let rutaTablero = "imgs/MIBfondo/mib.jpg";

// let colorCanvas = "#805130";
let colorCanvas = "#000911";
let imagenTablero = new Image();
imagenTablero.src = rutaTablero;

imagenTablero.onload = () => {
    drawTablero();
}

//dibuja el rectangulo del tablero incluyendo la imagen
function drawTablero(){

    context.beginPath();
    context.rect(150, 60, widthTablero, heightTablero);   
    // ancho y alto de la imagen
    let anchoimagen = imagenTablero.width;
    let altoimagen = imagenTablero.height;

    //para que no se rompa la imagen
    let aspecto = anchoimagen / altoimagen;

    let ancho = widthTablero; // Cambia el ancho según tus necesidades
    let altura = heightTablero;

    //dibuja
    context.drawImage(imagenTablero, 550 - ancho / 2, 280 - altura / 2, ancho, altura);
}


//se encarga de traer la imagen  de la ficha del jugador 1 y jugador 2
function seleccionarPersonajes(){
   
    imagenesficha.forEach(img => {
        img.addEventListener("click", function() {
            if (primerValor === null) {
                primerValor = img.getAttribute("alt");
                rutajug1 = img.getAttribute("src");               
            } 
            else {
                // esto es cuando elegis la segunda ficha y pasa al menu tablero
                if (primerValor != null & segundoValor == null){
                        segundoValor = img.getAttribute("alt");
                        rutajug2 = img.getAttribute("src");
                        // si se seleccionaron ambos,eliminamos los event listener
                        imagenesficha.forEach(img => img.removeEventListener("click", seleccionarPersonajes));
                        elegirpersonajes.classList.remove("elegirpersonajes");
                        elegirpersonajes.classList.add("hidden");
                        modoJuego.classList.remove("hiddendos");
                        modoJuego.classList.add("tablerojuego");
                        modoJuego.classList.add("modosJuego");
                        btnElegirMinutos.classList.remove("hidden"); //muestra el boton x primera vez
                        btnElegirMinutos.classList.add('btn', 'colorblanco', 'btnañadiralcarro', 'h4', 'tercer-hover-boton', 'btnabsoluto');;
                        minutos = cantMinutosMaximo-1;
                        segundos = 59;
                        turnos.classList.add("resaltado");
                        turnos.classList.remove("hidden");
                       

                        if(!envio) {
                            cantMinutosMaximo = 2; // si no hizo click a enviar le setea x default 2 minutos
                        }

                }   
                }
            }
        );
    });
    }




//se encarga de crear cada tablero depende de cual elija el usuario
function cargarJuego(){
    
    btn4enlinea.addEventListener('click', function (){
        reset();
        if(mensaje == " ") {
            timer();
        }
        contadortimer.classList.remove("hidden");
        contadortimer.classList.add("timer");
        modoJuego.classList.remove("modosJuego");
        modoJuego.classList.add("hiddendos");
        crearXenLinea(7,6,4,28,70,110,
            20,21,60);
            clearCanvas();
            drawTablero();
            rellenarTablero();
            crearPosicionesFicha();
            crearTodasFichas();
    } );
    
    btn5enlinea.addEventListener('click', function(){
        reset();
        if(mensaje == " ") {
            timer();
        }
        contadortimer.classList.remove("hidden");
        contadortimer.classList.add("timer");
        modoJuego.classList.remove("modosJuego");
        modoJuego.classList.add("hiddendos");
        crearXenLinea(8,7,5,28,62,100,15,28,60);
        clearCanvas();
        drawTablero();
        rellenarTablero();
        crearPosicionesFicha();
        crearTodasFichas();

    });
    
    btn6enlinea.addEventListener('click', function (){
        reset();
        if(mensaje == " ") {
            timer();
        }
        contadortimer.classList.remove("hidden");
        contadortimer.classList.add("timer");
        modoJuego.classList.remove("modosJuego");
        modoJuego.classList.add("hiddendos");
        crearXenLinea(9,8,6,26,55,88,12,36,55);
        clearCanvas();
        drawTablero();
        rellenarTablero();
        crearPosicionesFicha();
        crearTodasFichas();

    });
    
    btn7enlinea.addEventListener('click', function (){
        reset();
        if(mensaje == " ") {
            timer();
        }
        contadortimer.classList.remove("hidden");
        contadortimer.classList.add("timer");
        modoJuego.classList.remove("modosJuego");
        modoJuego.classList.add("hiddendos");

        crearXenLinea(10,9,7,20,49.5,80,9.5,45,42);
        clearCanvas();
        drawTablero();
        rellenarTablero();
        crearPosicionesFicha();
        crearTodasFichas();
    });
}


//crea el tablero con la cantidad de fichas  que se elijan y las fichas de arriba y de los jugadores
function crearXenLinea(col,fila,cant,radio,decrementacionYTab,aumentoX,decrementacionCostados,nrofichas,ancho){
    
    modoJuego.classList.remove("modosJuego");
    modoJuego.classList.add("hidden");
    elegirpersonajes.classList.remove("elegirpersonajes");
    elegirpersonajes.classList.add("hidden");
    contadortimer.classList.remove("hidden");
    contadortimer.classList.add("timer");

    turnos.innerHTML = "Tira una ficha para empezar";

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

//rellena el tablero con las fichas blancas
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

// crea la ficha individual del tablero, llamando a crear ficha de la clase ficha
function crearFichaTab(posX, posY, radio, fill, decrementacion, aumentox,j,i,movible,anchoFicha) {
    posY = posY - decrementacion;
    posX = posX + aumentox;
    let ficha = new Ficha(posX, posY, radio, fill, context,null,movible,anchoFicha);
    
    fichastablero[j][i] = ficha;
    ficha.draw();
}


//crea la ficha de los jugadores 1 y 2
function crearFicha(posX, posY, radio, fill, decrementacion, aumentox, arr,jugador,movible,anchoFicha) {
    posY = posY - decrementacion;
    posX = posX + aumentox;
    let ficha = new Ficha(posX, posY, radio, fill, context,jugador,movible,anchoFicha);
    arr.push(ficha);
    ficha.draw();
}


//dibuja las fichas del arreglo de posiciones, las de los costados, y la de los tableros
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

//se encarga de crear las fichas del jugador 1 y del jugador2
function crearTodasFichas(){
    fichas = [];
    let decrementacion = 0;
    for (let i = 0; i < numerofichas; i++){
        decrementacion = decrementacion - decrementacionfichasCostados;
        crearFicha(70,50,radioFicha,rutajug1,decrementacion,0,fichas,jugador1,true,anchoFicha);
        crearFicha(1020,50,radioFicha,rutajug2,decrementacion,0,fichas,jugador2,true,anchoFicha);  
    }   
    
}

//recorre todo el arreglo de fichas de jugadores y retorna si hay alguna seleccionada.
function encontrarFiguraClickeada(x,y){
    for (let i = 0; i < fichas.length; i++){
        let ficha = fichas[i];
        if (ficha.estaSeleccionado(x,y)){
            return ficha;
        }
    }
}

// se activa cuando el usuario hace click en algun lugar del canvas
function mousedown(e){
    
    mouseDown = true;
    let figuraClickeada = encontrarFiguraClickeada(e.offsetX, e.offsetY);

    if (figuraClickeada != null){ 
        lastClicked = figuraClickeada;
    }
    else { 
        lastClicked = null;
    }
   
}


// se activa cuando el usuario mueve una ficha
function mouseMove(e){
    if (mouseDown && lastClicked != null && lastClicked.getMovible()){
        lastClicked.setPosition(e.offsetX, e.offsetY);   
        drawAllFichas();
    }
}



// se activa cuando el usuario suelta una ficha
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
        console.log("hola");
            volverPosInicial(lastClicked);
        }
    }


}

//verifica cada vez que se tira una ficha si el usuario gano o no.
function hizoXenLinea(col,fila){
    let contador = 0;
    let contador2 = 0;
    let contador3=0;
    let contador4=0;
    let jugador = lastClicked.getNombreJugador();
    switch(true) {
        case hizoXenLineaHorizontal(col,fila,contador,contador2,jugador): 
            minutos = cantMinutosMaximo-1;
            segundos = 59;
            stop = true;
            showMensaje();
            break;
        case hizoXenLineaVertical(col,fila,contador,jugador):
            minutos = cantMinutosMaximo-1;
            segundos = 59;
            stop = true;
            showMensaje();
            break;
        case hizoXenLineaDiagonal(col,fila,contador,contador2,contador3,contador4,jugador):
            minutos = cantMinutosMaximo-1;
            segundos = 59;
            stop = true;
            showMensaje(); 
            break;
        default:
            contador = 0; //se resetea, ej se pusieron 2 fichas nada mas, por lo que no contó 4 a su alrededor
            contador2 = 0;
            contador3 = 0;
            contador4 = 0;
            break;
    }
}


// se encarga de contar a partir de la ultima ficha lanzada a la derecha y retorna la cantidad de fichas que sumo el ultimo jugador
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

// se encarga de ver si el jugador hizo x en linea horizontal.
function hizoXenLineaHorizontal(col, fila, contador, contador2,jugador) {

    let contadorIzquierda = verificarHorizontalIzquierda(col, fila, contador, jugador);
    let contadorDerecha = verificarHorizontalDerecha(col, fila, contador2, jugador);

    if (contadorIzquierda == cantLinea) {
        return true;
    } else if (contadorDerecha == cantLinea) {
        return true;
    } else {
        if (sumoXenLinea(fila,jugador)) {
            return true;
        }
    }
}


//se fija recorriendo el tablero si la suma horizontal valio x en linea
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


//verifica a partir de la ultima ficha lanzada si el jugador sumo x en linea a izquierda
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

//verifica que hayan 4 fichas del mismo jugador juntas en vertical
function hizoXenLineaVertical(col, fila, contador,jugador) {
 
    if (hizoVerticalArriba(col,fila,contador,jugador) == cantLinea){
        return true;
    }
}

//verifica que hayan 4 fichas del mismo jugador juntas en vertical
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

//verifica que hayan 4 fichas del mismo jugador juntas en diagonal mirando todas las diagonales
function hizoXenLineaDiagonal(col,fila,contador,contador2,contador3, contador4, jugador){
    

    //diagonal normal 

    let j = col;
    let i = fila;
    let cantveces = 0;
    while (j < tablero.getColumnas() && i < tablero.getFilas() && cantveces < cantLinea){
        if (tablero.casillero[col+cantveces][fila+cantveces] != null && tablero.casillero[col+cantveces][fila+cantveces]. getNombreJugador() == jugador){
            contador++;
            if (contador == cantLinea){
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
                return true;
            }
        }
        j2--;
        i2--;
        cantveces++;
    }

    if(contador-1 + contador2 == cantLinea) { //suma los resultados parciales de las dos diagonales normales
        return true;
    }


    


    //diagonal invertida

    let j3 = col;
    let i3 = fila;
    cantveces = 0;
    while (j3 >= 0  && i3 < tablero.getFilas() && cantveces < cantLinea){
        if (tablero.casillero[col-cantveces][fila+cantveces] != null && tablero.casillero[col-cantveces][fila+cantveces]. getNombreJugador() == jugador){
            contador3++;
            if (contador3 == cantLinea){
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
            if (contador4 == cantLinea){
                return true;
            }
        }
        j4++;
        i4--;
        cantveces++;
    }

    if(contador3-1 + contador4 == cantLinea) {  //suma los resultados parciales de las dos diagonales invertidas
        return true;
    }

    return false;
}

//vuelve x ficha a su posicion inicial, por ejemplo si tira la ficha en un lugar ajeno al tablero
function volverPosInicial(nueva) {
    let duracion = 700;
    const posInicialX = nueva.getPosIniX();
    const posInicialY = nueva.getPosIniY();
    const posXActual = nueva.getPosX();
    const posYActual = nueva.getPosY();
    const pasos = 60; // Número de pasos en la animación
    const intervalo = duracion / pasos; // Intervalo entre pasos

    let paso = 0;

    const animacionInterval = setInterval(() => {
        if (paso >= pasos) {
            clearInterval(animacionInterval);
            nueva.setPosX(posInicialX);
            nueva.setPosY(posInicialY);
            nueva.draw();
            clearCanvas();
            drawTablero();
            drawAllFichas();
            limpiarTodoCanvas();
            mouseDown = false;
        } else {
            paso++;
            const progreso = paso / pasos;
            const posXAnimacion = posXActual + (posInicialX - posXActual) * progreso;
            const posYAnimacion = posYActual + (posInicialY - posYActual) * progreso;
            nueva.setPosX(posXAnimacion);
            nueva.setPosY(posYAnimacion);
            nueva.draw();
            limpiarTodoCanvas();
        }
    }, intervalo);
}


//verifica los turnos de modo que juegue el jugador 1 y luego el 2 o viceversa
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

    
    if(jugador == jugador1) {
        turnos.innerHTML = " Turno: "+jugador2;
    }
    else {
        turnos.innerHTML = " Turno: "+jugador1;
    }
}

//verifica que x ficha se encuentre en el tablero
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

//coloca las fichas desde que se tiran arriba del tablero hacia abajo en la ubicacion en la que debe ir.
function setearPosicion(nueva,col,fila){
   
    let duracion = 600; //velocidad de la animacion
    const fichaTablero = fichastablero[col][fila];
    const posXInicial = nueva.getPosX();
    const posYInicial = nueva.getPosY();
    const posXFinal = fichaTablero.getPosX();
    const posYFinal = fichaTablero.getPosY();
    const pasos = 60; // iteraciones de la animacion
    const intervalo = duracion / pasos; // Intervalo entre pasos

    let paso = 0;

    const animacionInterval = setInterval(() => {
        if (paso >= pasos) { // si paso es mayor al maximo de pasos
            clearInterval(animacionInterval); // limpia el intervalo
            nueva.setPosX(posXFinal); //setea las posiciones
            nueva.setPosY(posYFinal);
            nueva.setMovible(false); //lo inserta en el tablero
            nueva.draw(); //dibuja la ultima caida
            limpiarTodoCanvas(); //limpia el canvas
        } else {
            paso++;
            const progreso = paso / pasos; // va midiendo cuanto progresa la animacion
            const posXAnimacion = posXInicial + (posXFinal - posXInicial) * progreso; // suma la posx inicial le suma la diferencia entre 
            const posYAnimacion = posYInicial + (posYFinal - posYInicial) * progreso; // la posxfinal y la inicial y multiplica por la cantidad de progreso.
            nueva.setPosX(posXAnimacion); // setea las posiciones
            nueva.setPosY(posYAnimacion);
            nueva.draw(); // dibuja
            limpiarTodoCanvas(); //limpia el canvas
        }
    }, intervalo);
}

//limpia el canvas y vuelve a dibujar el tablero y todas las fichas
function limpiarTodoCanvas(){
    clearCanvas();
    drawTablero();
    drawAllFichas();
}

//encuentra la columna donde se tiró la ficha 
function findCol(nueva){
    let diferencia = 40; //tiene un margen de 40 px para errar...
    let valory = 50;
    let posValorValidoY = 0; //empieza en el techo del canvas
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



//encuentra la fila donde la ficha se colocará en base a la columna ya encontrada(si la encontró)
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

//limpia el canvas
function clearCanvas(){

    // context.fillStyle = "#C79A6B";
    context.fillStyle = "#000911";
    context.fillRect(0,0,canvasWidth,canvasHeight);
}

//crea las posiciones donde las fichas pueden tirarse para colocarse en el tablero
function crearPosicionesFicha(){
    let aumentox = 0;
    for (let i = 0; i < tablero.getColumnas(); i++){
        aumentox = aumentox + aumentoXFicha;
        crearFichaStroke(110,30,radioFicha,"#00FF00",0,aumentox, posicionesFichas,null,false,anchoFicha);  
    }
}

//crea las fichas especiales donde estan las ubicaciones disponibles para tirar la ficha
function crearFichaStroke(posX, posY, radio, fill, decrementacion, aumentox, arr,anchoFicha) {
    posY = posY - decrementacion;
    posX = posX + aumentox;
    let ficha = new Ficha(posX, posY, radio, fill, context,0, anchoFicha);
    arr.push(ficha);
    ficha.drawStroke();
}

let timerDom = document.querySelector("#timer");
timerDom.innerHTML = " ";
let mensaje = " ";
let intervalID;

let btnaceptarReinicio = document.querySelector("#reiniciar");
let btnContinuarJugando = document.querySelector("#continuar");
let mensajeReinicio = document.querySelector("#mensajeReinicio");

btnaceptarReinicio.addEventListener('click', function (){
    mensajeReinicio.classList.add("hidden");
    segundos =59; //para que cuando se reinicie tambien se reinicie el timer
    minutos = cantMinutosMaximo-1;
    stop = false;
    reset();
});

btnContinuarJugando.addEventListener('click', function (){
    mensajeReinicio.classList.add("hidden");
    stop = false;
})

//muestra el mensaje de reset en pantalla
function mostrarMensajeReset(){
    stop = true;
    mensajeReinicio.classList.remove("hidden");
    mensajeReinicio.classList.add("mensaje");
}

//resetea el juego poniendo las fichas en su pos original, resetea el tablero seteandolo en null, vuelve el juego al menu principal
function reset() {
    envio = false;
    //mostrar primero menu elegir modo de juego al reiniciar partida
    timerDom.innerHTML = " ";
    elegirpersonajes.classList.add("elegirpersonajes");
    elegirpersonajes.classList.remove("hidden");
    modoJuego.classList.remove("modosJuego");
    modoJuego.classList.add("hidden");
    modoJuego.classList.remove("elegirpersonajes");
    contadortimer.classList.remove("timer");
    contadortimer.classList.add("hidden");
    btnElegirMinutos.classList.add("hidden"); //lo oculta al btn y luego lo muestra
    turnos.innerHTML = " ";
    turnos.classList.remove("hidden");
    turnos.classList.add("resaltado");
    btnElegirMinutos.classList.remove('btn', 'colorblanco', 'btnañadiralcarro', 'h4', 'tercer-hover-boton', 'btnabsoluto');

    stop = false;
    minutos = cantMinutosMaximo-1;
    segundos = 59;


    if(tablero.getColumnas() > 0 && tablero.getFilas() > 0) {
        for (let j= 0; j< tablero.getColumnas(); j++){
            for (let i = 0; i < tablero.getFilas(); i++) {
                if (tablero.casillero[j][i] != null){
                    tablero.casillero[j][i] = null; //seteamos null para que el tablero se vuelva vacio.
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

    primerValor = null;
    segundoValor = null;


}

let clickeo = false;
let btnPausar = document.getElementById("btnpausar");

let imagenPausar = document.getElementById("imagenpausar");


btnPausar.addEventListener('click',function (){
    if (segundos > 0 && minutos >= 0 && !clickeo){
    
       stop = true; //frena el timer
       clickeo = true //el user clickea el btn
       btnPausar.innerHTML = '<img src="imgs/iconos/play.png" id="imagenpausar">Reanudar' //cambio el DOM
    }
    else if (clickeo){
        stop = false;
        clickeo = false; 
        btnPausar.innerHTML = '<img src="imgs/iconos/pausa.png" id="imagenpausar">Pausar';
    }
});

let stop = false; //sirve para frenar el timer cuando esta el mensaje de reinicio.
let mensajestop;

//muestra un timer en pantalla para ver el tiempo que queda disponible en la partida del juego
function timer() {
    timerDom.innerHTML = " ";
        // Usar setInterval en lugar de setTimeout para ejecutar una función cada segundo
        intervalID =  setInterval(function(){
            if (!stop){
                segundos--; // Incrementar el contador de segundos
            }
            if (minutos >= 0 && minutos < 10 && segundos < 10){
                mensaje =  0 + "" + minutos + ":" + 0 + segundos;
                timerDom.innerHTML = mensaje;
            }
            else if (segundos > 10 && minutos < 10){
                mensaje =  0 + "" + minutos + ":" + segundos;
                timerDom.innerHTML = mensaje;
            } 
            else {
                mensaje =  minutos + ":" + segundos;
                timerDom.innerHTML = mensaje;
            }
                
            if (segundos == 0 && minutos > 0 && !stop) {
                minutos--;
                segundos = 59;
            }
            if (minutos == 0 && segundos == 0 && !stop){
                //clearInterval(intervalID);
                stop = true;
                empato = true;
                showMensaje();
                segundos =59; //para que cuando se reinicie tambien se reinicie el timer
                minutos = cantMinutosMaximo-1; 
            }
        }, 1000);
}


let mensajeGanador = document.querySelector("#mensajeGanador");
let opacidad = document.querySelector("#opacidad");
let divGanador = document.querySelector("#divGanador");
let botonReset = document.querySelector("#botonReset");

//muestra mensaje del ganador cuando hay 4 en linea
function showMensaje(){
    mensajeGanador.innerHTML = " ";
    opacidad.classList.remove("hidden");
    opacidad.classList.add("opacidad")
    divGanador.classList.remove("hidden");
    divGanador.classList.add("divGanador");
    mensajeGanador.classList.remove("hidden");
    mensajeGanador.classList.add("textoGanador");
    if (!empato){
        mensajeGanador.innerHTML += "Gano el " + lastClicked.getNombreJugador();
    }
    else {
        mensajeGanador.innerHTML += "Empate";
        empato = false;
    }
    botonReset.addEventListener('click', function(){
        opacidad.classList.add("hidden");
        divGanador.classList.add("hidden");
        divGanador.classList.remove("divGanador");
        mensajeGanador.classList.add("hidden");
        reset();
    })

}