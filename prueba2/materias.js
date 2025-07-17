const materias =[
    {
        nombre: "Cálculo Diferencial", calificacionFinal: 8.5, parciales:{"parcial 1":8,"parcial 2":9,"proyecto final": 8.5} },

    {
        nombre: "razonamiento", calificacionFinal: 7.5, parciales:{"parcial 1":8,"parcial 2":7.5,"proyecto final": 6.5} },

   {
        nombre: "comunicacion", calificacionFinal: 7.8, parciales:{"parcial 1":7,"parcial 2":8,"proyecto final": 8.2} }
];

const contenedor = document.getElementById('contenedor-materias');

materias.forEach((materia, index) => {
  const divMateria = document.createElement('div');
  divMateria.classList.add('materia');

  const titulo = document.createElement('div');
  titulo.classList.add('titulo');
  titulo.innerHTML = `<span>${materia.nombre}</span><span>${materia.calificacionFinal}</span>`;

  const detalles = document.createElement('div');
  detalles.classList.add('detalles');

  for (const [nombre, nota] of Object.entries(materia.parciales)) {
    const p = document.createElement('p');
    p.textContent = `${nombre}: ${nota}`;
    detalles.appendChild(p);
  }

  divMateria.appendChild(titulo);
  divMateria.appendChild(detalles);
  contenedor.appendChild(divMateria);

 titulo.addEventListener('click', () => {
    
    document.querySelectorAll('.materia').forEach((m) => {
      if (m !== divMateria) m.classList.remove('activa');
    });

    divMateria.classList.toggle('activa');
  });
});