// seleccionar el elemento ul#categories
const categoriesList = document.querySelector('#categories');

// contar el número de elementos li.item dentro de ul#categories
const numCategories = categoriesList.children.length;

// enviar a la consola el número de categorías
console.log(`Number of categories: ${numCategories}`);

// iterar a través de cada elemento li.item y mostrar su título y el número de elementos en la categoría
for (let i = 0; i < numCategories; i++) {
  const category = categoriesList.children[i];
  const categoryName = category.querySelector('h2').textContent;
  const numElements = category.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${numElements}`);
}
