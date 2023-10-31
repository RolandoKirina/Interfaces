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
        for (let j = 0; j < this.columnas; j++) {
            this.casillero[j] = [];
            for (let i = 0; i < filas; i++) {
              this.casillero[j][i] = null; 
            }
        }
    }


}