document.addEventListener('DOMContentLoaded', () => {
  const resumenDiv = document.getElementById('resumen-pedido');
  const datosUsuario = JSON.parse(localStorage.getItem('datosUsuario'));

  // Alerta de confirmación
  Swal.fire({
    icon: 'success',
    title: '¡Compra realizada con éxito!',
    text: 'Tu pedido ha sido confirmado y está en proceso. ¡Gracias por confiar en SE Indumentaria y Accesorios!',
    confirmButtonText: 'Aceptar'
  });

  // Mostrar los datos si existen
  if (!datosUsuario) {
    resumenDiv.innerHTML = `
      <p>No se encontraron datos del pedido. Por favor, vuelva a completar el formulario.</p>
    `;
  } else {
    resumenDiv.innerHTML = `
      <div class="resumen-contenido">
        <h2>Datos del pedido</h2>
        <p><strong>Nombre:</strong> ${datosUsuario.nombre}</p>
        <p><strong>Teléfono:</strong> ${datosUsuario.telefono}</p>
        <p><strong>Método de entrega:</strong> ${datosUsuario.metodoEntrega === 'envio' ? 'Envío a domicilio' : 'Retiro en local'}</p>
        ${datosUsuario.metodoEntrega === 'envio' ? `
          <p><strong>Dirección:</strong> ${datosUsuario.direccion}</p>
          <p><strong>País:</strong> ${datosUsuario.pais}</p>
          <p><strong>Provincia:</strong> ${datosUsuario.provincia}</p>
          <p><strong>Ciudad:</strong> ${datosUsuario.ciudad}</p>
        ` : ''}
        <h3 class="gracias-compra">¡Gracias por su compra!</h3>
      </div>
    `;

    // Eliminar los datos del localStorage después de mostrar
    localStorage.removeItem('datosUsuario');
  }
});