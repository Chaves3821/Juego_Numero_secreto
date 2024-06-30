let numeroSecreto =0;
let intento = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 5;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = (texto)
}

function limpiarCaja() {
  let valorCaja = document.getElementById('valorUsuario');
  valorCaja.value =  '';
}

asignarTextoElemento ('h1', "Bienvenido al juego de el numero secreto");
asignarTextoElemento ('p', `Adivina el numero entre 1 y ${numeroMaximo}`);
generarNumSecreto ();

function verificarIntento() {
let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número en ${intento} ${(intento === 1) ? 'intento' : 'intentos'}`) ;
    document.getElementById('reiniciar').removeAttribute('disabled'); 
  } else {
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento('p', `El número secreto es menor a ${numeroUsuario}` );
    } else {
      asignarTextoElemento('p', `El número secreto es mayor a ${numeroUsuario}`);
    }
    intento++
  limpiarCaja()
  }
}

function generarNumSecreto (){
  numeroSecreto =  Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroSecreto);
  console.log(listaNumerosSorteados);

if (listaNumerosSorteados.length == numeroMaximo){
  asignarTextoElemento('p', "Ya se sortearon todos los numeros");
}else{
  if(listaNumerosSorteados.includes(numeroSecreto)){
    return generarNumSecreto();
   }else{
    listaNumerosSorteados.push(numeroSecreto);
    return numeroSecreto
    }
  }
}


  function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
  }
  function condicionesIniciales(){
    asignarTextoElemento ('h1', "Bienvenido al juego de el numero secreto");
    asignarTextoElemento ('p', "Adivina el numero, entre 1 y 10");
    generarNumSecreto ();
    intento = 1;
  }

  








