let iconoerror = document.querySelector('.icoerrorhidden');
let diverror = document.querySelector("#diverror");
let passerror = document.querySelector(".diverrorcontravis");
let inputerror = document.querySelector('.contraseñaerror');
let labelerror = document.querySelector('#labelerror');

//form login 

let formLogin = document.querySelector('#formlogin');
console.log(formLogin);
formLogin.addEventListener("submit", verificarLogin);

function verificarLogin(e) {
    e.preventDefault();

    let datos = new FormData(formLogin);
console.log(datos);
    let nombreLogin = datos.get('name');
    let contraLogin = datos.get('password');

    let userLogin = {
        name : "usuario",
        password: "1234"
    }

    if(nombreLogin == userLogin.name && contraLogin == userLogin.password) {
        console.log("logueado correctamente");
        //animacion
    }
    else if(nombreLogin == "" && contraLogin == "") {
        console.log("nombre y contra vacios");

        iconoerror.classList.remove("icoerrorhidden");
        iconoerror.classList.add("icoformerrorvis");
      
    }

    else if(nombreLogin == "") {
        console.log("nombre vacio");
    }
    else if(contraLogin == "") {
        console.log("contra vacia");
    }
    else {
        console.log("incorrecto");
    }

}