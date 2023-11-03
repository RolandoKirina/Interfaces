//preloader

window.addEventListener("load", function() {
    const percentageElement = document.querySelector('#percentage');
const progressBar = document.querySelector('#progress-bar');

// Inicializa el porcentaje en 1%
let percentage = 1;

// Función para actualizar el porcentaje en el DOM
function updatePercentage() {
    percentageElement.textContent = `${percentage}%`;
    progressBar.style.width = `${percentage}%`;

    // Si el porcentaje no ha llegado al 100%, incrementa en 1 después de un breve retraso
    if (percentage < 100) {
        percentage++;
        setTimeout(updatePercentage, 40); // Actualiza cada 40 milisegundos (ajusta según tus necesidades)
    }
}
    // Comienza el proceso de carga
    updatePercentage();

    const loader = document.querySelector(".loader");
    const content = document.querySelector(".all");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", function() {
        content.classList.add("show"); //carga todo el contenido
        this.remove(); //borra el div loader
 }); 
}); 
