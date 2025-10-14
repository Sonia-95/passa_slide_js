let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let slideInterval;

function mostrarSlides() {
  // Esconder todas as imagens
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Mostrar o slide atual
  slides[slideIndex].style.display = "block";
}

function proximoSlide() {
  slideIndex++;
  if(slideIndex >= slides.length) {
    slideIndex = 0;
  }
  mostrarSlides();
}

function slideAnterior() {
  slideIndex--;
  if(slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  mostrarSlides();
}

// Função para iniciar o slideshow automático
function iniciarSlideshowAutomatico() {
  slideInterval = setInterval(proximoSlide, 4000);
}

// Interrompe e reinicia o slideshow automático quando usuário clica nos botões
function resetarIntervalo() {
  clearInterval(slideInterval);
  iniciarSlideshowAutomatico();
}

// Configura os event listeners **apenas uma vez**
prev.addEventListener("click", () => {
  slideAnterior();
  resetarIntervalo();
});

next.addEventListener("click", () => {
  proximoSlide();
  resetarIntervalo();
});

// Iniciar o slideshow ao carregar a página
window.onload = () => {
  mostrarSlides();
  iniciarSlideshowAutomatico();
};
