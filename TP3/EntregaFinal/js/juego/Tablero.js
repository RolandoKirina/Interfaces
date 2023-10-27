"use strict"
class Tablero {

    constructor(filas, columnas){
        this.filas = filas;
        this.columnas = columnas;
        this.fichas = [];
        //this.inicializarTablero(filas, columnas);
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
    addFicha(ficha){
        this.fichas.push(ficha);
    }

    drawFichas() {
        clearCanvas();
        for (let i = 0; i < fichas.length; i++) {
            fichas[i].draw(context);
        }
    }

    /*inicializarTablero(filas, columnas){
        for (let i = 0; i < filas; i++) {
            this.fichas[i] = [];
            for (let j = 0; j < columnas; j++) {
              this.fichas[i][j] = "hola"; 
            }
        }
    }*/
}