let contador=0;

function resta() {
 contador --;
 actualizarNumero();
}

function actualizarNumero (){
  document.getElementsByClassName(contadorDisplay).innerHTML = contador;
}