const titulo = document.querySelector('h1');

typing(titulo)


function typing(elemento) {
  const textArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 170 * i);
  });
}




;