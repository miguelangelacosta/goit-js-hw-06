// Paso 1: Crear la variable y asignar valor inicial
let counterValue = 0;

// Paso 2: Seleccionar elementos del DOM y asignar manejadores de eventos
const counter = document.querySelector("#counter");
const incrementBtn = counter.querySelector("[data-action='increment']");
const decrementBtn = counter.querySelector("[data-action='decrement']");
const valueEl = counter.querySelector("#value");

incrementBtn.addEventListener("click", () => {
  counterValue++;
  valueEl.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue--;
  valueEl.textContent = counterValue;
});
