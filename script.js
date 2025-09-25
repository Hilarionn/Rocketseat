// Função para alternar modo claro/escuro
function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');
  const img = document.querySelector("#profile img");
  if (html.classList.contains('light')) {
    img.setAttribute('src', 'Assets/Avatar-light.png');
  } else {
    img.setAttribute('src', 'Assets/Avatar.png');
  }
}

// Alerta de "Página em construção"
document.addEventListener('DOMContentLoaded', () => {
  const comingSoonLinks = document.querySelectorAll('.coming-soon'); // seleciona todos os links com a classe
  comingSoonLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();             // impede que o link navegue
      alert('Página em construção!');     // mostra a mensagem
    });
  });
});