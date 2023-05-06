// Obtener los elementos del DOM
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Escuchar el evento 'input' en el input de nombre
nameInput.addEventListener('input', () => {
  // Obtener el valor actual del input
  const name = nameInput.value.trim();

  // Actualizar el contenido del span de salida según si el input está vacío o no
  nameOutput.textContent = name ? name : 'Anonymous';
});
