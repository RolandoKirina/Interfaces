class Juego {

    constructor(tablero, context) {
        this.tablero = tablero;
        this.context = context;
    }

    addFicha(){
        let posX = 20;
        let posY = 20;
        let color = '#00488A';
        let ficha = new Ficha(posX, posY, 20, color, context);
        this.tablero.addFicha(ficha);
    }


}
