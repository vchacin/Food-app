function imprimirMenu (categoria) {
    let menuFiltrado = "";
    for (let i = 0; i < arrayMenu.length; i++) {
        if(categoria === arrayMenu[i].categoriaComida){
            menuFiltrado+= `<section class="menu ${arrayMenu[i].categoriaComida}">
                                <img src="${arrayMenu[i].imgComida}" alt="${arrayMenu[i].alt}">
                                <div class="descripcion-menu">
                                    <h2>$ ${arrayMenu[i].precioComida.toFixed(2)}</h2>
                                    <h3>${arrayMenu[i].nombreComida}</h3>
                                    <p>${arrayMenu[i].descripcionComida}</p>
                                    <div class="contador">
                                        <button class="counter-resta" onclick="actualizarValorContador('contador-${arrayMenu[i].id}','-')">-</button>
                                        <p id="contador-${arrayMenu[i].id}" class="counter-display">0</p>
                                        <button class="counter-suma" onclick="actualizarValorContador('contador-${arrayMenu[i].id}','+')">+</button>
                                    </div>
                                </div>
                            </section>`; 
        }
    }

    document.querySelector(".contenedor-menu").innerHTML = menuFiltrado;

    let pressedCategory = document.querySelector("."+categoria);
    let pressedSlide = document.querySelectorAll(".press");
    pressedSlide.forEach(el => el.classList.remove("press"));
    pressedCategory.classList.add("press");
}

function imprimirMenuCompleto () {
    let menuFiltrado = "";
    for (let i = 0; i < arrayMenu.length; i++) {
    menuFiltrado+= `<section class="menu ${arrayMenu[i].categoriaComida}">
                        <img src="${arrayMenu[i].imgComida}" alt="${arrayMenu[i].alt}">
                        <div class="descripcion-menu">
                            <h2>$ ${arrayMenu[i].precioComida.toFixed(2)}</h2>
                            <h3>${arrayMenu[i].nombreComida}</h3>
                            <p>${arrayMenu[i].descripcionComida}</p>
                            <div class="contador">
                                <button class="counter-resta" onclick="actualizarValorContador('contador-${arrayMenu[i].id}','-')">-</button>
                                <p id="contador-${arrayMenu[i].id}" class="counter-display">0</p>
                                <button class="counter-suma" onclick="actualizarValorContador('contador-${arrayMenu[i].id}','+')">+</button>
                            </div>
                        </div>
                    </section>`; 
    }

    document.querySelector(".contenedor-menu").innerHTML = menuFiltrado;

    let pressedSlide = document.querySelectorAll(".press");
    pressedSlide.forEach(el => el.classList.remove("press"));
}


