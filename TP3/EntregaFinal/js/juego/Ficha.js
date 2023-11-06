class Ficha {
    constructor(posX, posY, radio, fill, context,nombreJugador,movible,ancho){
        this.posX = posX;
        this.posY = posY;
        this.posiniX = posX;
        this.posiniY = posY;
        this.radio = radio;
        this.fill =fill;
        this.context = context;
        this.nombreJugador = nombreJugador;
        this.movible = movible;
        this.ancho = ancho;
        this.ruta = new Image();
        this.ruta.src = this.fill;
        this.ruta.onload = () => {
            this.draw();
        }
    }

    getRadio(){
        return this.radio;
    }

    setRadio(valor){
        this.radio = valor;
    }

    getAncho(){
        return this.ancho;
    }
    setAncho(valor){
        this.ancho = valor;
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

    clear() {
        // Borra la ficha dibujando un rectángulo del color del fondo
        context.fillStyle = "#00203E"; // El color del fondo
        context.fillRect(this.posX - this.radio, this.posY - this.radio, this.radio * 2, this.radio * 2);
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
    
            this.context.beginPath();
            this.context.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);    
            // ancho y alto de la imagen
            let anchoimagen = this.ruta.width;
            let altoimagen = this.ruta.height;
    
            //para que no se rompa la imagen
            let aspecto = anchoimagen / altoimagen;
        
            let ancho = this.ancho; // Cambia el ancho según tus necesidades
            let altura = ancho / aspecto;
    
            //dibuja
            this.context.drawImage(this.ruta, this.posX - ancho / 2, this.posY - altura / 2, ancho, altura);
}

    drawStroke(){
        this.context.beginPath();   
        this.context.strokeStyle = "#0A5499";
        this.context.lineWidth=1;
        this.context.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.closePath();
    }

    estaSeleccionado(x, y) {
        let posicionx = this.posX - x;
        let posiciony = this.posY - y;
        return Math.sqrt(Math.pow(posicionx, 2) + Math.pow(posiciony, 2)) < this.radio;
    }
}
