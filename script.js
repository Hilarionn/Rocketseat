function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light'); // adiciona/remove classe 'light'

    const img = document.querySelector("#profile img");

    if (html.classList.contains('light')) {
        img.setAttribute('src', './Assets/Avatar-light.png'); // caminho relativo correto
    } else {
        img.setAttribute('src', './Assets/Avatar.png');
    }
}

}


/*
if (html.classList.contains('light')) {
    html.classList.remove('light')
} else {
    html.classList.add('light')
*/

