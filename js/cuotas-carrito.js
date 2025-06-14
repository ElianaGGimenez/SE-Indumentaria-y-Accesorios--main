document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('cuotas-carrito');
    const cuotasGuardadas = localStorage.getItem('cuotasSeleccionadas');

    if (cuotasGuardadas) {
        select.value = cuotasGuardadas;
    }

    actualizarResumenCuotas();
    select.addEventListener('change', guardarCuotasSeleccionadas);
});

function guardarCuotasSeleccionadas() {
    const select = document.getElementById('cuotas-carrito');
    const cuotas = select.value;
    localStorage.setItem('cuotasSeleccionadas', cuotas);
    actualizarResumenCuotas();
}

function actualizarResumenCuotas() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const cuotas = parseInt(localStorage.getItem('cuotasSeleccionadas')) || 3;
    const textoCuotas = document.getElementById('cuotas-seleccionadas-texto');
    const detalle = document.getElementById('detalle-cuotas');

    if (carrito.length === 0) {
        textoCuotas.textContent = "No seleccionaste cuotas todavía.";
        detalle.textContent = "";
        return;
    }

    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    const interes = 1.15;
    const totalConInteres = total * interes;
    const valorCuota = (totalConInteres / cuotas).toFixed(2);

    textoCuotas.textContent = `Seleccionaste pagar en ${cuotas} cuotas.`;
    detalle.textContent = `Total con interés: $${totalConInteres.toFixed(2)} — Cuota: $${valorCuota}`;
}
