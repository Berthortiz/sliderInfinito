const btnLeft = document.getElementById("btn__left");
const btnRight = document.getElementById("btn__right");
let sectionSliders = document.getElementById("section__sliders");
let sliders = document.querySelectorAll(".slider");
let lastSlider = sliders[sliders.length -1];

sectionSliders.insertAdjacentElement("afterbegin", sliders[sliders.length-1]);
btnRight.addEventListener("click", moveRight);
btnLeft.addEventListener("click", moveLeft);

function moveRight() {
  sectionSliders.style.transition = "transform .5s ease";
  sectionSliders.style.transform = "translateX(-50%)";
  
  setTimeout(()=>{
    let firstSlider = document.querySelectorAll(".slider")[0];
    sectionSliders.style.transition ="none";
    sectionSliders.insertAdjacentElement("beforeend", firstSlider);
    sectionSliders.style.transform = "translateX(-25%)";}, 500);
}

function moveLeft() {
  let lastSlider = document.querySelectorAll(".slider")[3];
  sectionSliders.style.transition = "transform .5s ease";
  sectionSliders.style.transform = "translateX(0%)";  

  setTimeout(()=>{
    sectionSliders.style.transition = "none";
    sectionSliders.insertAdjacentElement("afterbegin", lastSlider);
    sectionSliders.style.transform = "translate(-25%)";}, 500);
}



// setInterval(()=>{
//   moveRight();
// },5000)







