let vermelho = document.getElementById('vermelho')
let amarelo = document.getElementById('amarelo')
let verde = document.getElementById('verde')
let automatico = document.getElementById('automatico')
let semaforo = document.getElementById('semaforo')

function semaforo_vermelho(){
  semaforo.src = './imagens/vermelho.png'
}

function semaforo_amarelo(){
  semaforo.src = './imagens/amarelo.png'
}
function semaforo_verde(){
  semaforo.src = './imagens/verde.png'
}

function semaforo_automatico(){
  let i = 0;
  let cores = ["./imagens/verde.png" , "./imagens/amarelo.png" ,"./imagens/vermelho.png"];
  setInterval(function(){
    semaforo.src = cores[i];
    if(i == 2){
      i = 0;
    }else{
      i++;
    }
  }, 2000)
}

vermelho.addEventListener('click' , semaforo_vermelho)
amarelo.addEventListener('click' , semaforo_amarelo)
verde.addEventListener('click' , semaforo_verde)
automatico.addEventListener('click' , semaforo_automatico)
