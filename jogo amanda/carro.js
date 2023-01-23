//código do carro
let yCarros = [40, 96, 150];
let xCarros = [600, 600, 600];
let velocidadeCarros = [2, 2.5, 3.2];
let comprimentoCarro = 40;
let alturaCarro = 50;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
   }
}


function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  }  
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.lenght; i = i + 1){
    if (passouTodaAtela(xCarros[i])){
    xCarros[i] = 600;
    }
  }
}

function passouTodaAtela(xCarros){
  return xCarro < -50;
}