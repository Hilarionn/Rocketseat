// Seleciona o botão toggle
const switchBtn = document.querySelector("#switch button");

// Adiciona listener para clique
switchBtn.addEventListener("click", toggleMode);

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // Seleciona a imagem do perfil
  const img = document.querySelector("#profile img");

  // Troca a imagem conforme o modo
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Assets/Avatar-light.png"); // case correto
  } else {
    img.setAttribute("src", "./Assets/Avatar.png");
  }
}
