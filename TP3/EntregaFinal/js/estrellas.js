"use strict";

/* estrellas */

let estrellas = document.querySelectorAll("#estrellas");

estrellas.forEach(estrella => {
     estrella.addEventListener("mouseenter", function() {
        console.log(estrella);
     });
});