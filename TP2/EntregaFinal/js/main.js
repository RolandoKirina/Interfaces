"use strict";

let botones = document.querySelectorAll("#footer-btn");

botones.forEach(boton => {
    boton.addEventListener("click", function() {
        boton.parentElement.nextElementSibling.classList.toggle("show");
    });
});


