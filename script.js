function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  const img = document.querySelector("#profile img")
  if (html.classList.contains('light')) {
    img.setAttribute('src', 'Assets/Avatar-light.png')
  } else {
    img.setAttribute('src', 'Assets/Avatar.png')
  }
}

// Alerta de página em construção

const comingSoonLinks = document.querySelectorAll('.coming-soon');
comingSoonLinks.forEach(link => {
  link.addEventListener('click', function(event){
    event.preventDefault();
    alert('Página em construção!');
  });
});




