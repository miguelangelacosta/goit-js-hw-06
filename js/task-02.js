const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients"); // Seleccione la lista ul

// Itere a través de cada elemento del array de ingredientes
ingredients.forEach((ingredient) => {
  const li = document.createElement("li"); // Crea un nuevo elemento <li>
  li.textContent = ingredient; // Establece el contenido de texto del elemento <li> al nombre del ingrediente
  li.classList.add("item"); // Añade la clase 'item' al elemento <li>
  ul.appendChild(li); // Inserte el elemento <li> en la lista <ul>
});

