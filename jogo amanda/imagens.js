// imagens do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

function preload (){
  imagemDaEstrada = loadImage("IMAGENS/estrada.png");
  imagemDoAtor = loadImage ("IMAGENS/ator-1.png");
  imagemCarro = loadImage ("IMAGENS/carro-1.png");
  imagemCarro2 = loadImage ("IMAGENS/carro-2.png");
  imagemCarro3 = loadImage ("IMAGENS/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3];
}