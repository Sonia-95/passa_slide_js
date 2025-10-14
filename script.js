let slideIndex = 0;
mostrarSlides();

function mostrarSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(mostrarSlides, 4000); // troca a cada 4 segundos
}

// Botões manual
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("click", () => {
  slideIndex -= 2; // volta um
  if (slideIndex < 0) slideIndex = 0;
  mostrarSlides();
});

next.addEventListener("click", () => {
  mostrarSlides(); // avança um
});
