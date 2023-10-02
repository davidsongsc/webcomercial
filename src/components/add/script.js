
const banner = document.getElementById("banner");
const imagens = banner.getElementsByTagName("img");
let index = 0;

// exibe a primeira imagem
imagens[index].classList.add("active");

// define o intervalo de tempo para trocar a imagem
setInterval(function() {
  // remove a classe "active" da imagem atual
  imagens[index].classList.remove("active");

  // atualiza o index para a próxima imagem
  index++;

  // se atingiu o fim do banner, volta para o início
  if (index >= imagens.length) {
    index = 0;
  }

  // adiciona a classe "active" para exibir a próxima imagem
  imagens[index].classList.add("active");
}, 5000); // troca a imagem a cada 5 segundos
