const productos = [
  // Indumentaria
  {
    id: 1,
    nombre: "Vestido Widy",
    precio: 39000,
    cuotas: "6 cuotas de $6.500*",
    img: "/img/1.webp",
    link: "../productos/producto1.html",
    categoria: "indumentaria",
  },
  {
    id: 2,
    nombre: "Vestido Widy",
    precio: 39000,
    cuotas: "6 cuotas de $6.500*",
    img: "/img/2.webp",
    link: "../productos/producto2.html",
    categoria: "indumentaria",
  },
  {
    id: 3,
    nombre: "Short Tery Recorte",
    precio: 46000,
    cuotas: "6 cuotas de $7.666,67*",
    img: "/img/3.webp",
    link: "../productos/producto3.html",
    categoria: "indumentaria",
  },
  {
    id: 13,
    nombre: "Vestido Strats",
    precio: 59900,
    cuotas: "6 cuotas de $9.983,33*",
    img: "/img/8.webp",
    link: "../productos/producto13.html",
    categoria: "indumentaria",
  },
  {
    id: 14,
    nombre: "Remera Over Eden",
    precio: 36990,
    cuotas: "6 cuotas de $6.165*",
    img: "/img/9.webp",
    link: "../productos/producto14.html",
    categoria: "indumentaria",
  },
  {
    id: 15,
    nombre: "Camisa Oslo II",
    precio: 69900,
    cuotas: "6 cuotas de $11.650*",
    img: "/img/10.webp",
    link: "../productos/producto15.html",
    categoria: "indumentaria",
  },
  {
    id: 4,
    nombre: "Campera Kipper Special Relaxed",
    precio: 75000,
    cuotas: "6 cuotas de $12.500*",
    img: "/img/4.webp",
    link: "../productos/producto4.html",
    categoria: "indumentaria",
  },
  {
    id: 5,
    nombre: "Bermuda Blast Rot Gabardina Slim fit",
    precio: 59000,
    cuotas: "6 cuotas de $9.833,33*",
    img: "/img/5.webp",
    link: "../productos/producto5.html",
    categoria: "indumentaria",
  },
  {
    id: 6,
    nombre: "Bermuda Flash Slim fit",
    precio: 59000,
    cuotas: "6 cuotas de $9.833,33*",
    img: "/img/6.webp",
    link: "../productos/producto6.html",
    categoria: "indumentaria",
  },
  {
    id: 16,
    nombre: "Campera Oruga",
    precio: 128000,
    cuotas: "6 cuotas de $21.333,33",
    img: "/img/ho1.webp",
    link: "../productos/producto16.html",
    categoria: "indumentaria",
  },
  {
    id: 17,
    nombre: "Campera Brecker",
    precio: 72000,
    cuotas: "6 cuotas de $12.000",
    img: "/img/ho2.webp",
    link: "../productos/producto17.html",
    categoria: "indumentaria",
  },
  {
    id: 18,
    nombre: "Campera Shadow",
    precio: 75000,
    cuotas: "6 cuotas de $12.500",
    img: "/img/ho3.webp",
    link: "../productos/producto18.html",
    categoria: "indumentaria",
  },

  // Accesorios
  {
    id: 7,
    nombre: "Colgante 3 en uno -smile",
    precio: 6900,
    cuotas: "3x $2.300",
    img: "/img/12.webp",
    link: "../productos/producto7.html",
    categoria: "accesorios",
  },
  {
    id: 8,
    nombre: "Colgante 3 en uno -arandela",
    precio: 7900,
    cuotas: "3x $2.633,33",
    img: "/img/16.webp",
    link: "../productos/producto8.html",
    categoria: "accesorios",
  },
  {
    id: 9,
    nombre: "Colgante 3 en uno -triangulo",
    precio: 6900,
    cuotas: "3x $2.300",
    img: "/img/13.webp",
    link: "../productos/producto9.html",
    categoria: "accesorios",
  },
  {
    id: 10,
    nombre: "Pulsera cadena x3",
    precio: 4900,
    cuotas: "3x $1.633,33",
    img: "/img/14.webp",
    link: "../productos/producto10.html",
    categoria: "accesorios",
  },
  {
    id: 11,
    nombre: "Pulsera con dije y perla",
    precio: 4900,
    cuotas: "3x $1.633,33",
    img: "/img/15.webp",
    link: "../productos/producto11.html",
    categoria: "accesorios",
  },
  {
    id: 12,
    nombre: "Set de aros",
    precio: 9900,
    cuotas: "3x $3.300",
    img: "/img/17.webp",
    link: "../productos/producto12.html",
    categoria: "accesorios",
  },
];

function formatearPrecio(precio) {
  return "$" + precio.toLocaleString("es-AR");
}

document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector("main > h1").textContent.toLowerCase();

  const productosFiltrados = productos.filter(
    (producto) => producto.categoria === titulo
  );

  const contenedor = document.getElementById("productos-container");

  productosFiltrados.forEach((producto) => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("div1");

    const img = document.createElement("img");
    img.classList.add("img3");
    img.src = producto.img;
    img.alt = producto.nombre;
    divProducto.appendChild(img);

    const pNombre = document.createElement("p");
    pNombre.textContent = producto.nombre;
    divProducto.appendChild(pNombre);

    const pCuotas = document.createElement("p");
    pCuotas.classList.add("cuotas");
    pCuotas.textContent = producto.cuotas;
    divProducto.appendChild(pCuotas);

    const pPrecio = document.createElement("p");
    pPrecio.textContent = formatearPrecio(producto.precio);
    divProducto.appendChild(pPrecio);

    const aComprar = document.createElement("a");
    aComprar.href = producto.link;
    aComprar.textContent = "Comprar";
    divProducto.appendChild(aComprar);

    contenedor.appendChild(divProducto);
  });
});
