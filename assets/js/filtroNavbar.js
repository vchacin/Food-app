function filtroCategorias (categoriaSlide) {
    categoriaTxt= document.querySelector(".slider p").innerHTML;
    console.log(categoriaTxt);
    let menuFiltrado = "";

    function imprimirMenu () {
        for (let i = 0; i < arrayMenu.length; i++) {
            if(categoriaTxt === arrayMenu[i].categoriaComida){
                menuFiltrado+= `<section class="menu ${arrayMenu[i].categoriaComida}">
                                    <img src="${arrayMenu[i].imgComida}" alt="${arrayMenu[i].alt}">
                                    <div class="descripcion-menu">
                                        <h2>$ ${arrayMenu[i].precioComida.toFixed(2)}</h2>
                                        <h3>${arrayMenu[i].nombreComida}</h3>
                                        <p>${arrayMenu[i].descripcionComida}</p>
                                        <div class="contador">
                                            <div>-</div>
                                            <p>0</p>
                                            <div>+</div>
                                        </div>
                                    </div>
                                </section>`; 
            }
        }
    }

imprimirMenu ();
document.querySelector(".contenedor-menu").innerHTML = menuFiltrado;
}


