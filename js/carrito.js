function renderCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    const totalElement = document.getElementById('total');
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

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
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito[index].cantidad += cambio;
    if (carrito[index].cantidad < 1) carrito[index].cantidad = 1;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderCarrito();
}

function eliminarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderCarrito();
}

document.addEventListener('DOMContentLoaded', renderCarrito);