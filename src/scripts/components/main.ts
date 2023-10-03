
// <reference path="../utils/wines.d.ts" /> 
import { Wines } from "../utils/wines.js";

let count = 0;

function updateCounter() {
  const counterElement = document.getElementById('count');
  if (counterElement) {
    counterElement.textContent = count.toString();
  }

  if ( count % 2 == 0 ){
    document.write ( Wines.CORAZON_DE_ROBLE_CABERNET )
 }


  if ( count % 3 == 0 ){
   document.write ( Wines.CORAZON_DE_ROBLE_MALBEC )
  }


  if ( count % 4 == 0 ){
    document.write ( Wines.WAYNA_CABERNET )
  }

  if ( count % 5 == 0 ){
    document.write ( Wines.WAYNA_MALBEC )
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

