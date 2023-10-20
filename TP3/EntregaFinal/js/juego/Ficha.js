class Ficha {
 
    constructor(posX, posY, radio, fill, context){
        this.posX = posX;
        this.posY = posY;
        this.radio = radio;
        this.fill =fill;
        this.context = context;
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
        super.draw();
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();
    }

    getPosition(){
        return {
            x: this.getPosX(),
            y: this.getPosY()
        }
    }
}
