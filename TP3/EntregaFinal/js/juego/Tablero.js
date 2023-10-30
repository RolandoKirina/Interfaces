"use strict"
class Tablero {

    constructor(filas, columnas){
        this.filas = filas;
        this.columnas = columnas;
        this.casillero = [];
        this.inicializarTablero(filas, columnas);
    }

    getCasillero(){
        return this.casillero;
    }
    getFilas(){
        return this.filas;
    }
    getColumnas(){
        return this.columnas;
    }
    setFilas(filas){
        this.filas = filas;
    }
    setColumnas(columnas){
        this.columnas = columnas;
    }

    drawFichas() {
        clearCanvas();
        for (let i = 0; i < fichas.length; i++) {
            casillero[i].draw(context);
        }
    }
    

    inicializarTablero(filas, columnas){
        for (let i = 0; i < filas; i++) {
            this.casillero[i] = [];
            for (let j = 0; j < columnas; j++) {
              this.casillero[i][j] = null; 
            }
        }
    }

    // addFicha(fila,columna,nueva){
    //     if (this.casillero[fila][columna] == null){
    //     this.casillero[fila][columna] = nueva;
    //     alert("me agregue en la fila" + fila + "columna" + columna);
    //     }else {
    //         this.casillero[fila-1][columna] = nueva;
    //     }
    //     for (let i = 0; i <100;i++ ){
    //         let desplazamiento = 5;
    //         nueva.setPosY(this.getPosY()+desplazamiento);
    //         nueva.draw();
    //     }
      
    // }
}