"use strict"


class Tablero {

    constructor() {
        this.filas = 6;
        this.columnas = 7;
    }

    constructor(filas, columnas){
        this.filas = filas;
        this.columnas = columnas;
        this.fichas = [];
        this.inicializarTablero(filas, columnas);
    }

    addFicha(ficha){
        this.fichas.push(ficha);
        
    }

    inicializarTablero(filas, columnas){
        for (let i = 0; i < filas; i++) {
            this.fichas[i] = [];
            for (let j = 0; j < columnas; j++) {
              this.fichas[i][j] = "hola"; 
            }
        }
    }
}