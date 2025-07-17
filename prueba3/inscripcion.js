// 1. Cargar las materias desde materias.json
document.addEventListener('DOMContentLoaded', () => {
  fetch('materias.json')
    .then(res => res.json())
    .then(data => {
      const select = document.getElementById('materias');
      data.forEach(materia => {
        const option = document.createElement('option');
        option.value = materia;
        option.textContent = materia;
        select.appendChild(option);
      });
    })
    .catch(err => {
      mostrarMensaje('Error al cargar materias.', true);
      console.error(err);
    });
});

// 2. Manejo del formulario
document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault(); // evitar recarga

  const nombre = document.getElementById('nombre').value.trim();
  const select = document.getElementById('materias');
  const materiasSeleccionadas = Array.from(select.selectedOptions).map(opt => opt.value);

  // 3. Validación
  if (!nombre) {
    return mostrarMensaje('Por favor ingresa tu nombre.', true);
  }

  if (materiasSeleccionadas.length === 0) {
    return mostrarMensaje('Debes seleccionar al menos una materia.', true);
  }

  // 4. Enviar datos con fetch
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nombre,
      materias: materiasSeleccionadas
    })
  })
  .then(res => {
    if (res.status === 201) {
      mostrarMensaje('¡Inscripción exitosa!', false);
      document.getElementById('formulario').reset();
    } else {
      throw new Error('Falló el envío');
    }
  })
  .catch(err => {
    mostrarMensaje('Error en la inscripción.', true);
    console.error(err);
  });
});

// 5. Función para mostrar mensajes
function mostrarMensaje(texto, esError) {
  const mensaje = document.getElementById('mensaje');
  mensaje.textContent = texto;
  mensaje.style.color = esError ? 'red' : 'green';
}
