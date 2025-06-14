const CARRO_KEY = 'carrito';

function agregarAlCarrito(boton) {
    const productoId = boton.getAttribute('data-id');
    const nombre = boton.getAttribute('data-nombre');
    const precio = parseFloat(boton.getAttribute('data-precio'));

    let carrito = JSON.parse(localStorage.getItem(CARRO_KEY)) || [];
    const index = carrito.findIndex(item => item.id === productoId);

    if (index !== -1) {
        carrito[index].cantidad += 1;
    } else {
        carrito.push({ id: productoId, nombre, precio, cantidad: 1 });
    }

    localStorage.setItem(CARRO_KEY, JSON.stringify(carrito));

    mostrarMensaje(`${nombre} fue agregado al carrito`);
}

function mostrarMensaje(mensaje) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.textContent = mensaje;
    mensajeDiv.style.position = 'fixed';
    mensajeDiv.style.bottom = '20px';
    mensajeDiv.style.right = '20px';
    mensajeDiv.style.background = '#333';
    mensajeDiv.style.color = '#fff';
    mensajeDiv.style.padding = '10px 20px';
    mensajeDiv.style.borderRadius = '5px';
    mensajeDiv.style.zIndex = '9999';
    document.body.appendChild(mensajeDiv);

    setTimeout(() => {
        mensajeDiv.remove();
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregar = document.querySelectorAll('.btn-agregar-carrito');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            agregarAlCarrito(boton);
            window.location.href = '/html/carrito.html';
        });
    });

    renderCarrito(); // Se mantiene si estás usando el mismo archivo para renderizar el carrito también
});

function renderCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    const totalElement = document.getElementById('total');
    let carrito = JSON.parse(localStorage.getItem(CARRO_KEY)) || [];

    if (!carritoContainer) return;

    carritoContainer.innerHTML = '';

    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
        totalElement.textContent = '';
        return;
    }

    let total = 0;

    carrito.forEach((producto, index) => {
        const item = document.createElement('div');
        item.classList.add('item-carrito');
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        item.innerHTML = `
            <p><strong>${producto.nombre}</strong></p>
            <p>Precio unitario: $${producto.precio.toLocaleString()}</p>
            <p>Cantidad: 
                <button onclick="cambiarCantidad(${index}, -1)">-</button>
                ${producto.cantidad}
                <button onclick="cambiarCantidad(${index}, 1)">+</button>
            </p>
            <p>Subtotal: $${subtotal.toLocaleString()}</p>
            <button onclick="eliminarProducto(${index})">Eliminar</button>
            <hr>
        `;
        carritoContainer.appendChild(item);
    });

    totalElement.textContent = `Total: $${total.toLocaleString()}`;
}

function cambiarCantidad(index, cambio) {
    let carrito = JSON.parse(localStorage.getItem(CARRO_KEY)) || [];
    carrito[index].cantidad += cambio;
    if (carrito[index].cantidad < 1) carrito[index].cantidad = 1;
    localStorage.setItem(CARRO_KEY, JSON.stringify(carrito));
    renderCarrito();
}

function eliminarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem(CARRO_KEY)) || [];
    carrito.splice(index, 1);
    localStorage.setItem(CARRO_KEY, JSON.stringify(carrito));
    renderCarrito();
}
