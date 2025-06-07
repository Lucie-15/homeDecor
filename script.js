const view = document.querySelector(".reviewsView");
const btnPrev = document.querySelector(".reviewsBtnPrev");
const btnNext = document.querySelector(".reviewsBtnNext");
const reviewsWidth = document.querySelector(".reviewsItem").offsetWidth;

let index = 0;
let width = window.innerWidth;

btnNext.addEventListener("click", () => {
   event.preventDefault();
  if (index < 5) {
    index++;
    view.style.transform = translateX(-${index * reviewsWidth}px);
  }
});

btnPrev.addEventListener("click", () => {
  event.preventDefault();
  if (index > 0) {
    index--;
    view.style.transform = translateX(-${index * reviewsWidth}px);
  }
});

const quizes = document.querySelectorAll(".faqQ");

quizes.forEach((quiz) => {
  quiz.addEventListener("click", () => {
    const answer = quiz.nextElementSibling;
    const btn = quiz.querySelector(".faqBtn");

    if (answer.style.display === "block") {
      answer.style.display = "none";
      btn.src = "assets/icons/arrowDown.svg";
      quiz.style.borderRadius = "1rem 0rem 0rem 1rem";
      quiz.classList.remove("active");
      quiz.style.borderBottom = "0.1rem solid black";
    } else {
      answer.style.display = "block";
      btn.src = "assets/icons/arrowUp.svg";
      quiz.style.borderRadius = "1rem 0rem 0rem 0rem";
      quiz.style.borderBottom = "none";
      quiz.style.boxShadow = "none"
      quiz.classList.add("active");
    }
  });
});


const menuIcon = document.querySelector(".menuIcon");
const menu = document.querySelector(".menu");
const xp = document.querySelector(".xp");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
  xp.classList.toggle ("active");
});




const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");
  const links = document.querySelectorAll(".navbar a");
  const logo1 = document.querySelector(".logo1");

  // Toggle navbar
  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("show");
    hamburger.classList.toggle("active");
    logo1.classList.toggle("hide-logo");
  });

  // Highlight active link on scroll
  window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 60; // Offset for fixed header
    links.forEach(link => {
      const section = document.querySelector(link.getAttribute("href"));
      if (
        section &&
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });

const testimonials = document.querySelectorAll('.test');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');
const dotsContainer = document.getElementById('testimonialDots');

let current = 0;
let autoSlideInterval;

function showTestimonial(index) {
  current = index;
  testimonials.forEach((test, i) => {
    test.classList.toggle('active', i === index);
    dotsContainer.children[i].classList.toggle('active', i === index);
  });
}

function createDots() {
  testimonials.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => {
      resetAutoSlide();
      showTestimonial(i);
    });
    dotsContainer.appendChild(dot);
  });
}

function nextTestimonial() {
  showTestimonial((current + 1) % testimonials.length);
}

function prevTestimonialFunc() {
  showTestimonial((current - 1 + testimonials.length) % testimonials.length);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextTestimonial, 5000);
}

// Initialize
createDots();
showTestimonial(current);
autoSlideInterval = setInterval(nextTestimonial, 5000);

prevBtn.addEventListener('click', () => {
  prevTestimonialFunc();
  resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
  nextTestimonial();
  resetAutoSlide();
});