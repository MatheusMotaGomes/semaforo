let vermelho = document.getElementById('vermelho')
let amarelo = document.getElementById('amarelo')
let verde = document.getElementById('verde')
let automatico = document.getElementById('automatico')
let semaforo = document.getElementById('semaforo')

let trocador_de_imagens = ["./imagens/vermelho.png", "./imagens/amarelo.png", "./imagens/verde.png"];
let indice_atual = 0;



function semaforo_vermelho(){
  semaforo.src = './imagens/vermelho.png'
}

function semaforo_amarelo(){
  semaforo.src = './imagens/amarelo.png'
}
function semaforo_verde(){
  semaforo.src = './imagens/verde.png'
}

function trocarImagem() {
  for(indice_atual;indice_atual <=2; indice_atual++){
    document.getElementById("semaforo").src = trocador_de_imagens[indice_atual];
    setInterval(1000)
  }

}

vermelho.addEventListener('click' , semaforo_vermelho)
amarelo.addEventListener('click' , semaforo_amarelo)
verde.addEventListener('click' , semaforo_verde)
automatico.addEventListener('click' , trocarImagem)


