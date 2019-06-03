function carouselize() {
  var carousel = document.querySelector('.js-carousel');
  var produtoLista = carousel.querySelector('.js-lista');
  var produtoListaWidth = 0;
  var produtoListaX = 0;
  var produto = carousel.querySelectorAll('.produto');
  var qtdProduto = 0;
  var qtdProdutoVisivel = 4;
  var carouselAntes = carousel.querySelector('.js-antes');
  var carouselProx = carousel.querySelector('.js-prox');

  //Conta os produtos
  [].forEach.call(produto, function(product) {
    qtdProduto++;
    produtoListaWidth += 250;
    produtoLista.style.width = produtoListaWidth+"px";
  });
//Move para o Próximo item
  carouselProx.onclick = function() {
    if(produtoListaX < qtdProduto-qtdProdutoVisivel) {
      produtoListaX++;
      moveprodutoLista();
    }
  };
  //Move para o item Anterior
  carouselAntes.onclick = function() {
    if(produtoListaX > 0) {
      produtoListaX--;
      moveprodutoLista();
    }
  };
  
//Mover o X para o próximo item
  function moveprodutoLista() {
    produtoLista.style.transform = "translateX(-"+205*produtoListaX+"px)";
  }

}

window.onload = carouselize();