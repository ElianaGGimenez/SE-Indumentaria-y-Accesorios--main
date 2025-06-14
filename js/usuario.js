const data = {
  "Argentina": {
    "Buenos Aires": [
      "La Plata", "Mar del Plata", "Bahía Blanca", "Tandil", "Olavarría",
      "Luján", "Pergamino", "San Nicolás", "Mercedes", "Quilmes",
      "Campana", "Zárate", "Necochea", "Chivilcoy", "Junín",
      "Morón", "Tigre", "Avellaneda", "Lanús", "San Isidro",
      "Almirante Brown", "Lomas de Zamora", "San Fernando", "Escobar", "Merlo",
      "Florencio Varela", "Berazategui", "Quilmes", "Ituzaingó", "José C. Paz"
    ],
    "Córdoba": [
      "Córdoba", "Villa Carlos Paz", "Río Cuarto", "Villa María", "Alta Gracia",
      "Jesús María", "Bell Ville", "Cosquín", "Río Tercero", "Deán Funes",
      "Villa Dolores", "La Falda", "San Francisco", "San Marcos Sierras",
      "Leones", "Oliva", "Jesús María", "Tancacha", "Oncativo"
    ],
    "Santa Fe": [
      "Rosario", "Santa Fe", "Rafaela", "Venado Tuerto", "Reconquista",
      "Cañada de Gómez", "Firmat", "Casilda", "San Lorenzo", "Tostado",
      "Esperanza", "San Javier", "San Cristóbal", "Gálvez", "Pérez",
      "Villa Gobernador Gálvez", "Las Parejas", "Funes", "Cañada de Gómez"
    ],
    "Mendoza": [
      "Mendoza", "San Rafael", "Godoy Cruz", "Luján de Cuyo", "General Alvear",
      "Maipú", "Tunuyán", "San Martín", "Las Heras", "Lavalle",
      "Rivadavia", "Junín", "Guaymallén"
    ],
    "Tucumán": [
      "San Miguel de Tucumán", "Yerba Buena", "Concepción", "Tafí Viejo",
      "Banda del Río Salí", "Graneros", "Río Chico", "Las Talitas"
    ],
    "Salta": [
      "Salta", "San Ramón de la Nueva Orán", "Metán", "Cerrillos", "Rosario de Lerma",
      "Tartagal", "Embarcación", "Gral. Güemes", "Cafayate"
    ],
    "Misiones": [
      "Posadas", "Eldorado", "Oberá", "Puerto Iguazú", "Leandro N. Alem",
      "Candelaria", "Montecarlo", "San Vicente", "San Pedro"
    ],
    "Chaco": [
      "Resistencia", "Presidencia Roque Sáenz Peña", "Castelli",
      "Villa Ángela", "Corzuela", "Las Breñas", "Charata"
    ],
    "Neuquén": [
      "Neuquén", "San Martín de los Andes", "Cutral Có", "Plottier", "Zapala",
      "Centenario", "Villa La Angostura"
    ],
    "Río Negro": [
      "Viedma", "General Roca", "San Carlos de Bariloche", "Cipolletti", "Allen",
      "Jacobacci", "El Bolsón"
    ],
    "La Pampa": [
      "Santa Rosa", "General Pico", "Guatraché", "Toay", "Winifreda"
    ],
    "Entre Ríos": [
      "Paraná", "Concordia", "Gualeguaychú", "Villaguay", "Concepción del Uruguay"
    ],
    "San Juan": [
      "San Juan", "Rawson", "Chimbas", "Pocito", "Albardón"
    ]
  },
  "Chile": {
    "Región Metropolitana": [
      "Santiago", "Puente Alto", "Maipú", "La Florida", "Las Condes",
      "Ñuñoa", "San Bernardo", "Peñalolén", "La Reina", "Huechuraba",
      "Lo Prado", "Renca", "Quilicura", "Pudahuel", "Cerrillos"
    ],
    "Valparaíso": [
      "Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana", "San Antonio",
      "Concón", "Limache", "Olmué", "Quintero", "Casablanca",
      "La Calera", "Quillota"
    ],
    "Biobío": [
      "Concepción", "Talcahuano", "Chillán", "Los Ángeles", "Coronel",
      "Hualpén", "Lebu", "Cañete", "Tomé", "Lota"
    ],
    "Araucanía": [
      "Temuco", "Villarrica", "Angol", "Pitrufquén", "Lautaro",
      "Carahue", "Padre Las Casas", "Melipeuco"
    ],
    "Antofagasta": [
      "Antofagasta", "Calama", "Tocopilla", "Mejillones", "San Pedro de Atacama",
      "María Elena"
    ],
    "Atacama": [
      "Copiapó", "Caldera", "Chañaral", "Vallenar", "Diego de Almagro"
    ],
    "Coquimbo": [
      "La Serena", "Coquimbo", "Ovalle", "Illapel", "Andacollo", "Los Vilos"
    ],
    "Los Lagos": [
      "Puerto Montt", "Puerto Varas", "Osorno", "Castro", "Ancud",
      "Calbuco", "Chaitén", "Fresia"
    ],
    "Magallanes": [
      "Punta Arenas", "Puerto Natales", "Porvenir", "Puerto Williams"
    ],
    "O'Higgins": [
      "Rancagua", "San Fernando", "Pichilemu", "Graneros"
    ],
    "Maule": [
      "Talca", "Curicó", "Linares", "Constitución"
    ]
  },
  "Uruguay": {
    "Montevideo": [
      "Montevideo", "Carrasco", "Pocitos", "Cordon", "Ciudad Vieja",
      "Punta Carretas", "Buceo", "Parque Rodó", "Sayago", "La Blanqueada"
    ],
    "Maldonado": [
      "Punta del Este", "Maldonado", "Piriápolis", "San Carlos", "Pan de Azúcar",
      "La Barra"
    ],
    "Canelones": [
      "Las Piedras", "Santa Lucía", "Ciudad de la Costa", "Canelones", "Progreso",
      "Pando", "La Paz"
    ],
    "Colonia": [
      "Colonia del Sacramento", "Nueva Helvecia", "Carmelo", "Tarariras", "Fray Bentos",
      "Juan Lacaze"
    ],
    "Salto": [
      "Salto", "Bella Unión", "Termas del Daymán", "Constitución"
    ],
    "Paysandú": [
      "Paysandú", "Quebracho", "Guichón"
    ],
    "Rivera": [
      "Rivera", "Mandubí"
    ],
    "Artigas": [
      "Artigas", "Bella Unión"
    ],
    "Rocha": [
      "Rocha", "Chuy", "Castillos", "La Paloma"
    ],
    "Tacuarembó": [
      "Tacuarembó", "Paso de los Toros", "San Gregorio de Polanco"
    ]
  }
};

const form = document.getElementById("form-usuario");
const selectPais = document.getElementById("pais");
const selectProvincia = document.getElementById("provincia");
const selectCiudad = document.getElementById("ciudad");
const camposEnvio = document.getElementById("campos-envio");
const radiosEntrega = document.querySelectorAll('input[name="metodoEntrega"]');

function cargarProvincias() {
  const pais = selectPais.value;
  selectProvincia.innerHTML = `<option value="">-- Seleccione una provincia --</option>`;
  selectProvincia.disabled = !pais;
  selectCiudad.innerHTML = `<option value="">-- Seleccione una ciudad --</option>`;
  selectCiudad.disabled = true;

  if (pais && data[pais]) {
    Object.keys(data[pais]).forEach(prov => {
      const option = document.createElement("option");
      option.value = prov;
      option.textContent = prov;
      selectProvincia.appendChild(option);
    });
  }
}

function cargarCiudades() {
  const pais = selectPais.value;
  const provincia = selectProvincia.value;
  selectCiudad.innerHTML = `<option value="">-- Seleccione una ciudad --</option>`;
  selectCiudad.disabled = !provincia;

  if (pais && provincia && data[pais] && data[pais][provincia]) {
    data[pais][provincia].forEach(ciudad => {
      const option = document.createElement("option");
      option.value = ciudad;
      option.textContent = ciudad;
      selectCiudad.appendChild(option);
    });
  }
}

function alternarCamposEnvio() {
  const metodo = document.querySelector('input[name="metodoEntrega"]:checked').value;
  camposEnvio.style.display = metodo === "envio" ? "block" : "none";

  const campos = camposEnvio.querySelectorAll("input, select");
  campos.forEach(campo => {
    campo.required = metodo === "envio";
  });
}

selectPais.addEventListener("change", cargarProvincias);
selectProvincia.addEventListener("change", cargarCiudades);
radiosEntrega.forEach(radio => radio.addEventListener("change", alternarCamposEnvio));

form.addEventListener("submit", e => {
  e.preventDefault();

  const nombre = form.nombre.value.trim();
  const telefono = form.telefono.value.trim();
  const metodo = document.querySelector('input[name="metodoEntrega"]:checked').value;

  if (!nombre || !telefono || telefono.length < 7 || !/^\d+$/.test(telefono)) {
    Swal.fire("Error", "Nombre y teléfono válidos son obligatorios.", "error");
    return;
  }

  let datos = { nombre, telefono, metodoEntrega: metodo };

  if (metodo === "envio") {
    const pais = selectPais.value;
    const provincia = selectProvincia.value;
    const ciudad = selectCiudad.value;
    const direccion = form.direccion.value.trim();

    if (!pais || !provincia || !ciudad || !direccion) {
      Swal.fire("Error", "Complete todos los datos de envío.", "error");
      return;
    }

    datos = { ...datos, pais, provincia, ciudad, direccion };
  }

  localStorage.setItem("datosUsuario", JSON.stringify(datos));

  Swal.fire({
    icon: "success",
    title: "¡Gracias por tu compra!",
    text: "Tu pedido ha sido recibido correctamente.",
    confirmButtonText: "Aceptar"
  }).then(() => {
    window.location.href = "resumen.html";
  });
});

window.addEventListener("DOMContentLoaded", alternarCamposEnvio);
