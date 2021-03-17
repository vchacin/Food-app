let Menu = {
    filterMenu: function(categoria){
        let menuFiltrado = "";
        if(categoria !== null) {
            for (let i = 0; i < arrayMenu.length; i++) {
                if(categoria === arrayMenu[i].categoria){
                    menuFiltrado+= `<section class="menu ${arrayMenu[i].categoria}">
                                        <img src="${arrayMenu[i].img}" alt="${arrayMenu[i].alt}">
                                        <div class="descripcion-menu">
                                            <h2>$ ${arrayMenu[i].precio.toFixed(2)}</h2>
                                            <h3>${arrayMenu[i].nombre}</h3>
                                            <p>${arrayMenu[i].descripcion}</p>
                                            <div class="contador">
                                                <button class="counter-resta" onclick="actualizarValorContador('contador-${arrayMenu[i].id}','-')">-</button>
                                                <p id="contador-${arrayMenu[i].id}" class="counter-display">0</p>
                                                <button class="counter-suma" onclick="actualizarValorContador('contador-${arrayMenu[i].id}','+'); Cart.Add(${arrayMenu[i].id}, GetValue('contador-${arrayMenu[i].id}'), ${arrayMenu[i].precio}, '${arrayMenu[i].nombre}');">+</button>
                                            </div>
                                        </div>
                                    </section>`; 
                }
            }
        } else {
            for (let i = 0; i < arrayMenu.length; i++) {
                menuFiltrado+= `<section class="menu ${arrayMenu[i].categoria}">
                                    <img src="${arrayMenu[i].img}" alt="${arrayMenu[i].alt}">
                                    <div class="descripcion-menu">
                                        <h2>$ ${arrayMenu[i].precio.toFixed(2)}</h2>
                                        <h3>${arrayMenu[i].nombre}</h3>
                                        <p>${arrayMenu[i].descripcion}</p>
                                        <div class="contador">
                                            <button class="counter-resta" onclick="actualizarValorContador('contador-${arrayMenu[i].id}','-')">-</button>
                                            <p id="contador-${arrayMenu[i].id}" class="counter-display">0</p>
                                            <button class="counter-suma" onclick="actualizarValorContador('contador-${arrayMenu[i].id}','+'); Cart.Add(${arrayMenu[i].id}, GetValue('contador-${arrayMenu[i].id}'), ${arrayMenu[i].precio}, '${arrayMenu[i].nombre}');">+</button>
                                        </div>
                                    </div>
                                </section>`; 
                }
        }
        

        document.querySelector(".contenedor-menu").innerHTML = menuFiltrado;

        Menu.setActive(categoria);       
    },
    setActive: function(categoria){
        let pressedSlide = document.querySelectorAll(".press");
        pressedSlide.forEach(el => el.classList.remove("press"));

        if(categoria !== null){
            let pressedCategory = document.querySelector("."+categoria);
            pressedCategory.classList.add("press");

        }
    }
}