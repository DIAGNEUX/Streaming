window.onload=function(){
   
  
document.addEventListener("DOMContentLoaded", function () {
  
const carrousel = document.querySelectorAll(".carous_me");
const prev_btn = document.querySelector('.btn_left');
const next_btn = document.querySelector('.btn_right');

const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
let auto_interval;
const slides = document.querySelectorAll('.grid_them');

function Affiche_slide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add("show"); 
        } else {
            slide.classList.remove("show"); 
        }
    });

    dots.forEach((dot_el, i) => {
        if (i === index) {
            dot_el.classList.add("active_dot");
        } else {
            dot_el.classList.remove("active_dot");
        }
    });
    
}

prev_btn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    Affiche_slide(currentSlide);
});

next_btn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    Affiche_slide(currentSlide);
});

function automatique_next() {
    currentSlide = (currentSlide + 1) % slides.length;
    Affiche_slide(currentSlide);
}

auto_interval = setInterval(automatique_next, 5000); 

carrousel.forEach((carrousel_el) => {
    carrousel_el.addEventListener('mouseenter', () => {
        clearInterval(auto_interval);
    });

    carrousel_el.addEventListener('mouseleave', () => {
        auto_interval = setInterval(automatique_next, 5000); 
    });
});
Affiche_slide(currentSlide);
});
}

