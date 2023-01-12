"use strict";

const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
  const menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", function (event) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

const slider = document.querySelector(".card__wrapper");

const contentImg = document.querySelectorAll(".card");
const dots = document.getElementsByClassName("dot");

let counter = 0;
const stepSize = contentImg[0].clientWidth;

slider.style.transform = "translateX(" + `${-stepSize * counter}px`;

const rightBtn = document.getElementById("rightBtn");
rightBtn.addEventListener("click", () => {
  if (counter >= contentImg.length - 2) counter = -1;

  slider.classList.add("transformAnimation");
  counter++;
  slider.style.transform = "translateX(" + `${-stepSize * counter}px`;
});

const leftBtn = document.getElementById("leftBtn");
leftBtn.addEventListener("click", () => {
  if (counter <= 0) counter = contentImg.length - 1;

  slider.classList.add("transformAnimation");
  counter--;
  slider.style.transform = "translateX(" + `${-stepSize * counter}px`;
});

// modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("btnSignUp");
const close = document.getElementsByClassName("close")[0];
const btnSend = document.getElementById("button-send");

btn.onclick = () => {
  modal.style.display = "block";
};
close.onclick = () => {
  modal.style.display = "none";
};
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
btnSend.onclick = () => {
  modal.style.display = "none";
};
