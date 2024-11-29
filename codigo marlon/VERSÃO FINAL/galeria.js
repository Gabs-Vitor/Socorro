document.querySelectorAll('.carousel').forEach(carousel => {
  const images = carousel.querySelectorAll('.carousel-images img');
  const carouselImages = carousel.querySelector('.carousel-images');
  const description = carousel.querySelector('.description');
  const prevBtn = carousel.querySelector('.prevBtn');
  const nextBtn = carousel.querySelector('.nextBtn');
  let currentIndex = 0;

  // Função para atualizar a posição do carrossel
  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`; // Transição suave para a próxima imagem
    description.style.display = "none"; // Oculta a descrição ao trocar de imagem
  }

  // Função para exibir a descrição da imagem clicada
  function showDescription(event) {
    const desc = event.target.getAttribute('data-description');
    description.textContent = desc;
    description.style.display = "block"; // Mostra a descrição
  }

  // Evento para a seta anterior (anterior)
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });

  // Evento para a seta próxima (próxima)
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });

  // Evento para exibir a descrição ao clicar na imagem
  images.forEach(img => {
    img.addEventListener('click', showDescription);
  });

  // Inicializa o carrossel na primeira imagem
  updateCarousel();
});

// Seleciona o ícone do hambúrguer e a navbar
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

// Adiciona um evento de clique no ícone do hambúrguer
hamburger.addEventListener('click', () => {
  // Alterna a classe 'open' para abrir ou fechar o menu lateral
  navbar.classList.toggle('open');
});
