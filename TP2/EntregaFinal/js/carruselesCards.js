
"use strict";

// let btnizq = document.querySelector(".btn-left-cards");
// let btnder = document.querySelector(".btn-right-cards");

// btnizq.classList.add('hidden');
// btnizq.addEventListener('click', function(){
 
//     // Agrega las clases para la transformación al segundo elemento
//     document.querySelector('.cincocards:nth-child(1)').classList.remove('transformacion-derecha');
//     document.querySelector('.cincocards:nth-child(2)').classList.remove('transformacion-derecha');
//     document.querySelector('.cincocards:nth-child(2)').classList.remove('transformacion-reset-dos');
//     document.querySelector('.cincocards:nth-child(1)').classList.add('transformacion-izquierda');
//     document.querySelector('.cincocards:nth-child(2)').classList.add('transformacion-izquierda');
  
//     setTimeout(function() {
//       // Quita la clase de transformación y agrega la clase de reset después de 1 segundo al segundo elemento
//       document.querySelector('.cincocards:nth-child(2)').classList.remove('transformacion-izquierda');
//       document.querySelector('.cincocards:nth-child(2)').classList.remove('transformacion-derecha');
//       document.querySelector('.cincocards:nth-child(1)').classList.add('transformacion-reset');
      
//       btnder.classList.remove('hidden');
//       btnizq.classList.add('hidden');
//     }, 500);


 
// });

// btnder.addEventListener('click', function(){
//   // Agrega las clases para la transformación al segundo elemento
//   document.querySelector('.cincocards:nth-child(1)').classList.remove('transformacion-reset');
//   document.querySelector('.cincocards:nth-child(1)').classList.remove('transformacion-izquierda');
//   document.querySelector('.cincocards:nth-child(2)').classList.remove('transformacion-izquierda');
//   document.querySelector('.cincocards:nth-child(1)').classList.add('transformacion-derecha');
//   document.querySelector('.cincocards:nth-child(2)').classList.add('transformacion-derecha');

//   setTimeout(function() {
//     // Quita la clase de transformación y agrega la clase de reset después de 1 segundo al segundo elemento
//     document.querySelector('.cincocards:nth-child(2)').classList.remove('transformacion-izquierda');
//     document.querySelector('.cincocards:nth-child(2)').classList.remove('transformacion-derecha');
//     document.querySelector('.cincocards:nth-child(2)').classList.remove('transformacion-reset');
//     document.querySelector('.cincocards:nth-child(2)').classList.add('transformacion-reset-dos');

//     btnizq.classList.remove('hidden');
//   btnder.classList.add('hidden');
//   }, 500);

  
// });


let allBtnIzqs = document.querySelectorAll(".btn-left-cards");
let allBtnDer = document.querySelectorAll(".btn-right-cards");


allBtnIzqs.forEach(boton => {
    boton.classList.add('hidden');
});




allBtnDer.forEach(boton => {
    boton.addEventListener("click", function() {
        let primerCincoCards =  boton.parentElement.firstElementChild;
        let segundoCincoCards =  boton.parentElement.firstElementChild.nextElementSibling;
    

      
          // Agrega las clases para la transformación al segundo elemento
          primerCincoCards.classList.remove('transformacion-reset');
          primerCincoCards.classList.remove('transformacion-izquierda');
          segundoCincoCards.classList.remove('transformacion-izquierda');
            primerCincoCards.classList.add('transformacion-derecha');
            segundoCincoCards.classList.add('transformacion-derecha');
            
            //Quita la clase de transformación y agrega la clase de reset después de 1 segundo al segundo elemento
            setTimeout(function() {

            segundoCincoCards.classList.remove('transformacion-izquierda');
            segundoCincoCards.classList.remove('transformacion-derecha');
            segundoCincoCards.classList.remove('transformacion-reset');
            segundoCincoCards.classList.add('transformacion-reset-dos');
            
            boton.previousElementSibling.classList.remove('hidden');
            boton.classList.add('hidden');
            }, 500);


    });


});


allBtnIzqs.forEach(boton => {
    boton.addEventListener("click", function() {
        let primerCincoCards =  boton.parentElement.firstElementChild;
        let segundoCincoCards =  boton.parentElement.firstElementChild.nextElementSibling;
    

       //Agrega las clases para la transformación al segundo elemento
       primerCincoCards.classList.remove('transformacion-derecha');
    segundoCincoCards.classList.remove('transformacion-derecha');
    segundoCincoCards.classList.remove('transformacion-reset-dos');
    primerCincoCards.classList.add('transformacion-izquierda'); 
    segundoCincoCards.classList.add('transformacion-izquierda');
  
    setTimeout(function() {
       // Quita la clase de transformación y agrega la clase de reset después de 1 segundo al segundo elemento
       segundoCincoCards.classList.remove('transformacion-izquierda');
      segundoCincoCards.classList.remove('transformacion-derecha');
      primerCincoCards.classList.add('transformacion-reset');
      
      boton.nextElementSibling.classList.remove('hidden');
     boton.classList.add('hidden');
    }, 500);



    });


});