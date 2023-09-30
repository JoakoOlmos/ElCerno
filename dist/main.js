"use strict";
let count = 0;
function updateCounter() {
    const counterElement = document.getElementById('count');
    if (counterElement) {
        counterElement.textContent = count.toString();
    }
}
function incrementCounter() {
    count++;
    updateCounter();
}
// Asignar el manejador de clic al botón
const incrementButton = document.getElementById('incrementBtn');
if (incrementButton) {
    incrementButton.addEventListener('click', incrementCounter);
}
// Actualizar el contador inicial
updateCounter();
