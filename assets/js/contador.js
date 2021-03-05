function actualizarValorContador(id, operador){
  let elementoContador = document.getElementById(id);
  let contadorProducto = parseInt(elementoContador.innerHTML);


  if (operador == "+"){
    contadorProducto ++;
  } 

  if (operador == "-"){
    if (contadorProducto > 0) {
      contadorProducto --;
    }
  }

  elementoContador.innerHTML = contadorProducto;
}