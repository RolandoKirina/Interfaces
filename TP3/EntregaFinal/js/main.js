"use strict";

//formulario ingresar

let iconoerror = document.querySelector('.icoerrorhidden');
let diverror = document.querySelector("#diverror");
let passerror = document.querySelector(".diverrorcontravis");
let form = document.querySelector('#formregister');
let inputerror = document.querySelector('.contraseñaerror');
let labelerror = document.querySelector('#labelerror');
let registrocorrecto = document.querySelector(".hidden");
form.addEventListener('submit', registrar);

let usuarios = [];

function registrar(e){ //paso x parametros el evento de submit}

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
        registrocorrecto.classList.remove("hidden");
        registrocorrecto.classList.add("pulse");

       setTimeout ("redireccionar()", 3000);
    }
    else {  
        if (estaRegistrado(user)){
            diverror.innerHTML = " ";
            diverror.classList.add("diverrorvisible");
            registrocorrecto.classList.remove("pulse");
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

function redireccionar(){
   window.location="home.html";
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



