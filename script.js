const titulo = document.querySelector('h1');

typing(titulo)


function typing(elemento) {
  const textArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 180 * i);
  });
}


var links = document.querySelectorAll('.topnav a');

// Adiciona um evento de clique a cada link
links.forEach(function (link) {
  link.addEventListener('click', function () {
    // Remove a classe "active" de todos os links
    links.forEach(function (link) {
      link.classList.remove('active');
    });

    // Adiciona a classe "active" ao link clicado
    this.classList.add('active');
  });
});