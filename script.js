const menu = document.querySelector(".menu");

const navbar = document.querySelector(".navbar");

const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");

const nextSlide = document.querySelector(".next");
const prevSlide = document.querySelector(".prev");

menuOpen.addEventListener("click", () => {
  navbar.classList.add("active");
  menuOpen.style.visibility = "hidden";
  menuOpen.style.display = "none";
  menuClose.style.visibility = "visible";
  menuClose.style.display = "flex";
});

menuClose.addEventListener("click", () => {
  navbar.classList.remove("active");
  menuOpen.style.visibility = "visible";
  menuOpen.style.display = "flex";
  menuClose.style.visibility = "hidden";
  menuClose.style.display = "none";
});

const bannerImg = document.querySelector(".banner-img");

const slides = bannerImg.querySelectorAll("img");

console.log(slides);

let i = 0;

nextSlide.addEventListener("click", () => {


  slides[i].classList.remove("active");
  i = (i + 1) % slides.length;

  slides[i].classList.add("active");


});

prevSlide.addEventListener("click", () => {


  slides[i].classList.remove("active");
  i = (i - 1 + slides.length) % slides.length;
  
  slides[i].classList.add("active");


});

window.onscroll = function() {scrollFunction()};

document.querySelector(".btn-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector(".btn-top").style.display = "none";
function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 20) {
    document.querySelector(".btn-top").style.display = "flex";
  } else {
    document.querySelector(".btn-top").style.display = "none";
  }
}