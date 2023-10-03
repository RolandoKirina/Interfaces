"use strict";

//formulario ingresar

let iconoerror = document.querySelector('.icoerrorhidden');
let diverror = document.querySelector("#diverror");
let passerror = document.querySelector(".diverrorcontravis");
let form = document.querySelector('#formregister');
let inputerror = document.querySelector('.contraseñaerror');
let labelerror = document.querySelector('#labelerror');
form.addEventListener('submit', registrar);

let usuarios = [];

function registrar(e){ //paso x parametros el evento de submit
    e.preventDefault();

    let datos = new FormData(formregister);
    let name = datos.get('name');
    let surname = datos.get('surname');
    let username = datos.get('username');
    let age = datos.get('age');
    let email = datos.get('email');
    let pass = datos.get('password');
    let pass2 = datos.get('password2');

    let user = {
        "nombre": name,
        "surname": surname,
        "username": username,
        "age": age,
        "email": email,
        "pass": pass
    }
    if ((pass == pass2) && (!estaRegistrado(user)) && captchacompletado){
        usuarios.push(user);
    }
    else {  
        if (estaRegistrado(user)){
            diverror.innerHTML = " ";
            diverror.classList.add("diverrorvisible");
            diverror.innerHTML += "Ya tienes una cuenta registrada"
        }
        else {
            passerror.innerHTML = " ";
            passerror.classList.remove("errorcontrahidden");
            passerror.classList.add("diverrorcontraflex");
            iconoerror.classList.remove("icoerrorhidden");
            iconoerror.classList.add("icoformerrorvis");
            inputerror.classList.add("errorinput");
            labelerror.classList.add("errorred");
            passerror.innerHTML += "Las contraseñas no coinciden";
        }
    }
}

function estaRegistrado(user){
        let registrado = false;
        if (usuarios.length>0){
            let i = 0;
            while ( i < usuarios.length && !registrado){
                if (usuarios[i].nombre == user.nombre && usuarios[i].email == user.email){
                    registrado = true;
                }
            }
        }
        return registrado;
}

let captcha = document.querySelector("#captcharectangulo");
captcha.addEventListener('click', captchacompletado);
let completo = false;

function captchacompletado (){
    let img = captcha.firstChild; // toma la imagen que esta del boton capthca
    img.classList.remove('icoerrorhidden');
    img.classList.add('tickvisible');
    completo = true;
    return completo
}

 



/*
let botonesFooter = document.querySelectorAll("#footer-btn");

botonesFooter.forEach(boton => {
    boton.addEventListener("click", function() {
        boton.parentElement.nextElementSibling.classList.toggle("show");
    });
});

let botonesNav = document.querySelectorAll("#menu-nav");

botonesNav.forEach(boton => {
    boton.addEventListener("click", function() {
        boton.parentElement.nextElementSibling.classList.toggle("show");
    })
});

let openedBurguer = false; //

document.querySelector("#menu-burguer").addEventListener("click", function( ) {
    document.querySelector("#menuH").classList.toggle("show");
    let img = document.querySelector("#imgburguer");

    if(!openedBurguer) {
        img.src = "imgs/iconos/menuabierto.png";
    }
    else {
        img.src = "imgs/iconos/menucerrado.png";
    }

    openedBurguer = !openedBurguer;

    
});

let ayudaDesplegado = false;

let btnayuda = document.querySelector("#btn-help"); 
let texto = btnayuda.textContent;

btnayuda.addEventListener("click", function() {
    this.classList.toggle("show");
    this.parentElement.nextElementSibling.classList.toggle("show");

    if(!ayudaDesplegado) {
        btnayuda.innerHTML = "cerrar";
    }
    else {
        btnayuda.innerHTML = texto;
    }
   
    ayudaDesplegado = !ayudaDesplegado;

});


let compartirDesplegado = false;

let compartir = document.querySelector("#btn-compartir");
//let textoComp = compartir.textContent;


compartir.addEventListener("click", function() {
    compartir.parentElement.nextElementSibling.classList.toggle("show");
    compartir.classList.toggle("show");

    if(!compartirDesplegado) {
        compartir.innerHTML = "Cerrar";
    }
    else {
        compartir.innerHTML = textoComp;
    }
   
    compartirDesplegado = !compartirDesplegado;
});

*/