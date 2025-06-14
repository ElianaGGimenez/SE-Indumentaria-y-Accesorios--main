function renderCarrito() {
  const carritoContainer = document.getElementById('carrito-container');
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  carritoContainer.innerHTML = '';

  if (carrito.length === 0) {
    carritoContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
    return;
  }

  carrito.forEach((producto, index) => {
    const subtotal = producto.precio * producto.cantidad;
    const item = document.createElement('div');
    item.classList.add('item-carrito');

    item.innerHTML = `
      <p><strong>${producto.nombre}</strong></p>
      <p>Precio unitario: $${producto.precio.toLocaleString()}</p>
      <p>Cantidad: 
        <button onclick="cambiarCantidad(${index}, -1)">-</button>
        ${producto.cantidad}
        <button onclick="cambiarCantidad(${index}, 1)">+</button>
      </p>
      <p>Subtotal: $${subtotal.toLocaleString()}</p>

      <!-- Sección de cuotas por producto -->
      <label for="cuotas-${index}">Cuotas:</label>
      <select id="cuotas-${index}" onchange="actualizarCuota(${index})">
        <option value="1">1 cuota (sin interés)</option>
        <option value="3">3 cuotas</option>
        <option value="6">6 cuotas</option>
        <option value="12">12 cuotas</option>
      </select>
      <p id="cuota-texto-${index}" class="text"></p>

      <button onclick="finalizarPedido(${index})">Finalizar pedido</button>
      <button onclick="eliminarProducto(${index})">Eliminar</button>
      <hr>
    `;

    carritoContainer.appendChild(item);

    setTimeout(() => actualizarCuota(index), 0);
  });
}

function actualizarCuota(index) {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const producto = carrito[index];
  const cuotas = parseInt(document.getElementById(`cuotas-${index}`).value);
  const totalSinInteres = producto.precio * producto.cantidad;
  const interes = cuotas === 1 ? 1 : 1.15;
  const totalConInteres = totalSinInteres * interes;
  const valorCuota = totalConInteres / cuotas;

  document.getElementById(`cuota-texto-${index}`).textContent =
    `Total a pagar: $${totalConInteres.toFixed(2)} — ${cuotas} cuota(s) de $${valorCuota.toFixed(2)}`;
}

function finalizarPedido(index) {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const producto = carrito[index];
  const cuotas = parseInt(document.getElementById(`cuotas-${index}`).value);

  // Guardar datos para usuario.html
  sessionStorage.setItem('productoSeleccionado', JSON.stringify(producto));
  sessionStorage.setItem('cuotasSeleccionadas', cuotas);
  sessionStorage.setItem('indiceProducto', index);

  // Redirigir para completar datos
  window.location.href = '/html/usuario.html';
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
