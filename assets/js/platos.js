let arrayMenu = [{
        id: 1,
        imgComida: "./assets/img/comida1.png",
        precioComida: 52.00,
        nombreComida: "Curry",
        descripcionComida: "Con arroz bastami",
        cantidad: 0,
        alt:  "curry",
        categoriaComida: "Cenas"
    },
    {
        id: 2,
        imgComida: "./assets/img/comida2.png",
        precioComida: 23.00,
        nombreComida: "Ensalada de Pollo Vegana",
        descripcionComida: "Con salsa de queso",
        cantidad: 0,
        alt: "Ensalada de pollo",
        categoriaComida: "Cenas"
    },
    {
        id: 3,
        imgComida: "./assets/img/comida3.png",
        precioComida: 21.00,
        nombreComida: "Patatas Francesas",
        descripcionComida: "Con carne de tocino",
        cantidad: 0,
        alt: "Patatas",
        categoriaComida: "Rapidas"
    },

    {
        id: 4,
        imgComida: "./assets/img/comida4.png",
        precioComida: 6.00,
        nombreComida: "Magdalena de Oreo",
        descripcionComida: "Con crema de cacao",
        cantidad: 0,
        alt: "Magdalena de oreo",
        categoriaComida: "Postres"
    },

    {
        id: 5,
        imgComida: "./assets/img/comida5.png",
        precioComida: 1.50,
        nombreComida: "Flan de Vainilla",
        descripcionComida: "Con cubierta de caramelo",
        cantidad: 0,
        alt: "Flan de vainilla",
        categoriaComida: "Postres"
    },
    {
        id: 6,
        imgComida: "./assets/img/comida6.png",
        precioComida: 8.00,
        nombreComida: "Brownies con Nueces",
        descripcionComida: "Con pasas y maní",
        cantidad: 0,
        alt: "Brownies con nueces",
        categoriaComida: "Postres"
    },
    {
        id: 7,
        imgComida: "./assets/img/comida7.png",
        precioComida: 2.50,
        nombreComida: "Empanada Argentina",
        descripcionComida: "De locro y humita",
        cantidad: 0,
        alt: "Empanada argentina",
        categoriaComida: "Desayuno"
    },
    {
        id: 8,
        imgComida: "./assets/img/comida8.png",
        precioComida: 4.25,
        nombreComida: "Ensalada César",
        descripcionComida: "Con trozos de pan",
        cantidad: 0,
        alt: "Ensalada cesar",
        categoriaComida: "Entrantes"
    },
    {
        id: 9,
        imgComida: "./assets/img/comida9.png",
        precioComida: 3.25,
        nombreComida: "Croquetas de Cangrejo",
        descripcionComida: "Con salsa de ostras",
        cantidad: 0,
        alt: "Croquetas de cangrejo",
        categoriaComida: "Entrantes"
    },
    {
        id: 10,
        imgComida: "./assets/img/comida10.png",
        precioComida: 9.25,
        nombreComida: "Yogur Tropical",
        descripcionComida: "Con frutas frescas",
        cantidad: 0,
        alt: "Yogur con frutas",
        categoriaComida: "Postres"
    },
];

let menuDiv = "";

function imprimirMenu () {
    let menuDiv = "";
    for (let i = 0; i < arrayMenu.length; i++) {
        menuDiv+= `<section class="menu ${arrayMenu[i].categoriaComida}">
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

    document.querySelector(".contenedor-menu").innerHTML = menuDiv;
}

imprimirMenu ();