class Ficha {
    constructor(posX, posY, radio, fill, context){
        this.posX = posX;
        this.posY = posY;
        this.radio = radio;
        this.fill =fill;
        this.context = context;
    }

    getPosIni(){
        posIni = this.getPosicion();
        return posIni;
    }
    getPosX(){
        return this.posX;
    }
    getRadio(){
        return this.radio;
    }
    getPosY(){
        return this.posY;
    }
    getFill(){
        return this.fill;
    }
    setFill(fill){
        this.fill = fill;
    }

    draw() {
        this.context.fillStyle = this.fill;
        this.context.strokeStyle = "#000000";
        this.context.lineWidth = '0.5';
        this.context.beginPath();        
        this.context.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }

    getPosicion(){
        return {
            x: this.getPosX(),
            y: this.getPosY()
    }
    }

    setPosition (x,y){
        this.posX = x;
        this.posY = y;
    }

    estaSeleccionado(x,y){
        let posicionx = this.posX - x;
        let posiciony = this.posY - y;
        return Math.sqrt(Math.pow(posicionx,2), Math.pow(posiciony,2)) < this.radio;
    }


}
