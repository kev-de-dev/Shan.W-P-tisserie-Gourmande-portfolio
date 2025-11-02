const slideshow = document.querySelector(".slideshow");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
const slideCount = slides.length;
const slideInterval = 3000; // 3s par slide

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  const offset = -(100 / slideCount) * currentIndex; // translation en %
  slideshow.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, slideInterval);
