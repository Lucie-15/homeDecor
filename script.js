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