
"use strict"
let btnizq = document.querySelector(".btn-left-cards");

let btnder = document.querySelector(".btn-right-cards");

let cincocards = document.querySelector(".cincocards");

btnizq.classList.add('hidden');
btnizq.addEventListener('click', function(){
    //cincocards.style.transform = `translate(-1300px)`;
    document.querySelector('.cincocards:nth-child(1)').style.transform = 'translateX(0%) skew(-15deg)'; 
    document.querySelector('.cincocards:nth-child(2)').style.transform = 'translateX(0%)';

  setTimeout(function() {
    document.querySelector('.cincocards:nth-child(1)').style.transform = 'translateX(0%) skewX(0deg)';
  }, 500);

  btnder.classList.remove('hidden');
  btnizq.classList.add('hidden');
})


btnder.addEventListener('click', function(){
  // cincocards.style.transform = `translate(1300px)`; 
  document.querySelector('.cincocards:nth-child(1)').style.transform = 'translateX(-100%)';
  document.querySelector('.cincocards:nth-child(2)').style.transform = 'translateX(-100%) skew(15deg)'; 

  setTimeout(function() {
    document.querySelector('.cincocards:nth-child(2)').style.transform = 'translateX(-100%) skewX(0deg)';
  }, 500);

  btnizq.classList.remove('hidden');
  btnder.classList.add('hidden');
});


