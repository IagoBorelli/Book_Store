const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const carrossel = document.querySelector(".carrossel");
let index = 0;
const items = document.querySelectorAll(".item");
const totalItems = items.length;
const visibleItems = 3; // Agora o carrossel mostra 3 itens por vez

// Função para atualizar o carrossel
function updateCarrossel() {
  const offset = -(index * (items[0].offsetWidth + 20)); // 20px é o margin-right de cada item
  carrossel.style.transform = `translateX(${offset}px)`;
}

// Função para mover para a esquerda
prevButton.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = totalItems - visibleItems; // Vai para o final
  }
  updateCarrossel();
});

// Função para mover para a direita
nextButton.addEventListener("click", () => {
  if (index < totalItems - visibleItems) {
    index++;
  } else {
    index = 0; // Vai para o início
  }
  updateCarrossel();
});
