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
        this.context.shadowColor = 'rgba(0, 0, 0, 0.5)'; 
        this.context.shadowBlur = 12; 
        this.context.shadowOffsetX = 1;  
        this.context.shadowOffsetY = 5; 
        this.context.fillStyle = this.fill;
        this.context.strokeStyle = "#000000";
        this.context.lineWidth = '0.5';
        this.context.beginPath();        
        this.context.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }

    getPosition(){
        return {
            x: this.getPosX(),
            y: this.getPosY()
        }
    }
}
