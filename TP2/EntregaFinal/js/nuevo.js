
"use strict";

let btnizq = document.querySelector(".btn-left-cards");
let btnder = document.querySelector(".btn-right-cards");

btnizq.classList.add('hidden');
btnizq.addEventListener('click', function(){
 
    // Agrega las clases para la transformación al segundo elemento
    document.querySelector('.cincocards:nth-child(1)').classList.remove('transformacion-derecha');
    document.querySelector('.cincocards:nth-child(2)').classList.remove('transformacion-derecha');
    document.querySelector('.cincocards:nth-child(2)').classList.remove('transformacion-reset-dos');
    document.querySelector('.cincocards:nth-child(1)').classList.add('transformacion-izquierda');
    document.querySelector('.cincocards:nth-child(2)').classList.add('transformacion-izquierda');
  
    setTimeout(function() {
      // Quita la clase de transformación y agrega la clase de reset después de 1 segundo al segundo elemento
      document.querySelector('.cincocards:nth-child(2)').classList.remove('transformacion-izquierda');
      document.querySelector('.cincocards:nth-child(2)').classList.remove('transformacion-derecha');
      document.querySelector('.cincocards:nth-child(1)').classList.add('transformacion-reset');
  
    }, 1000);


  btnder.classList.remove('hidden');
  btnizq.classList.add('hidden');
});

btnder.addEventListener('click', function(){
  // Agrega las clases para la transformación al segundo elemento
  document.querySelector('.cincocards:nth-child(1)').classList.remove('transformacion-reset');
  document.querySelector('.cincocards:nth-child(1)').classList.remove('transformacion-izquierda');
  document.querySelector('.cincocards:nth-child(2)').classList.remove('transformacion-izquierda');
  document.querySelector('.cincocards:nth-child(1)').classList.add('transformacion-derecha');
  document.querySelector('.cincocards:nth-child(2)').classList.add('transformacion-derecha');

  setTimeout(function() {
    // Quita la clase de transformación y agrega la clase de reset después de 1 segundo al segundo elemento
    document.querySelector('.cincocards:nth-child(2)').classList.remove('transformacion-izquierda');
    document.querySelector('.cincocards:nth-child(2)').classList.remove('transformacion-derecha');
    document.querySelector('.cincocards:nth-child(2)').classList.remove('transformacion-reset');
    document.querySelector('.cincocards:nth-child(2)').classList.add('transformacion-reset-dos');


  }, 1000);

  btnizq.classList.remove('hidden');
  btnder.classList.add('hidden');
});