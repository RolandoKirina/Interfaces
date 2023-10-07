const btnLeftCard = document.querySelector(".btn-left-cards"),
      btnRightCard = document.querySelector(".btn-right-cards"),
      sliderCards = document.querySelector("#slidercards"),
      sliderSectionCards = document.querySelectorAll(".s-section");


btnLeftCard.addEventListener("click", e => moveToLeft())
btnRightCard.addEventListener("click", e => moveToRight())

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSectionCards.length;

function moveToRight() {
    if (counter >= sliderSectionCards.length-1) {
        counter = 0;
        operacion = 0;
        sliderCards.style.transform = `translate(-${operacion}%)`;
        sliderCards.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    sliderCards.style.transform = `translate(-${operacion}%)`;
    sliderCards.style.transition = "all ease .6s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderSectionCards.length-1;
        operacion = widthImg * (sliderSectionCards.length-1)
        sliderCards.style.transform = `translate(-${operacion}%)`;
        sliderCards.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    sliderCards.style.transform = `translate(-${operacion}%)`;
    sliderCards.style.transition = "all ease .6s"
    
    
}   