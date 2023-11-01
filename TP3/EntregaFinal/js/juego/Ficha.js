class Ficha {
    constructor(posX, posY, radio, fill, context,nombreJugador,movible){
        this.posX = posX;
        this.posY = posY;
        this.posiniX = posX;
        this.posiniY = posY;
        this.radio = radio;
        this.fill =fill;
        this.context = context;
        this.nombreJugador = nombreJugador;
        this.movible = movible;
    }

    getMovible(){
        return this.movible;
    }
    setMovible(valor){
        this.movible = valor;
    }
    getNombreJugador(){
        return this.nombreJugador;
    }

    getAgregada(){
        return this.agregada;
    }
    setAgregada(valor){
        this.agregada = valor;
    }

    getPosIniX(){
        return this.posiniX;
    }
    getPosIniY(){
        return this.posiniY;
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
    
    setPosY(nueva){
        this.posY = nueva;
    }  
    
    setPosX(nueva){
        this.posX = nueva;
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

    

    draw() {
        this.context.fillStyle = this.fill;
        this.context.strokeStyle = "#000000";
        this.context.lineWidth = '0.5';
        this.context.beginPath(); 
        context.globalAlpha = 1.0;       
        this.context.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();

    }

    /*draw() {
        let imagen = this.fill;
        imagen.src = "imgs/fichas/fichablanca.png";
        imagen.onload = function() {
            let img = context.createPattern(imagen, "no-repeat");
            this.context.fillStyle = img;
            this.context.beginPath();
            this.context.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
            this.context.fill();
            this.context.closePath();
        };
    }*/

    drawStroke(){
        this.context.strokeStyle = "#00262F";
        this.context.globalAlpha = 0.5;
        this.context.lineWidth=1;
        this.context.beginPath();        
        this.context.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.closePath();
    }

    estaSeleccionado(x,y){
        let posicionx = this.posX - x;
        let posiciony = this.posY - y;
        return Math.sqrt(Math.pow(posicionx,2), Math.pow(posiciony,2)) < this.radio;
    }
}
