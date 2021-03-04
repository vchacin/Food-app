function compra(){
    var infoHomeElements = document.getElementsByClassName("infoHome");
    for (var i = 0; i < infoHomeElements.length; i=i+1) {
        infoHomeElements[i].style.display = "none";
        
    }

    var infoCompraElements = document.getElementsByClassName("infoCompra");
    for (var i = 0; i < infoCompraElements.length; i=i+1) {
        infoCompraElements[i].style.display = "block";
    }
    
    
}




