const carousel = document.querySelector(".carousel");
const dots = document.querySelectorAll(".dot");
const cards = document.querySelectorAll(".card");

// Função para atualizar o ponto ativo
function updateActiveDot() {
  // Calcula a posição da rolagem
  const scrollLeft = carousel.scrollLeft;
  const cardWidth = cards[0].offsetWidth; // Largura do cartão

  // Calcula o índice do ponto baseado na posição da rolagem
  const index = Math.round(scrollLeft / cardWidth);

  // Atualiza a classe 'active' nos pontos
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Adiciona o evento de rolagem ao carrossel
carousel.addEventListener("scroll", updateActiveDot);

// Adiciona a funcionalidade de clique nos pontos
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    carousel.scrollTo({
      left: cards[0].offsetWidth * index,
      behavior: "smooth",
    });
  });
});

// Inicializa o primeiro ponto como ativo
updateActiveDot();
