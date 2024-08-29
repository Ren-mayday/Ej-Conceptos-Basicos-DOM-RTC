//* Utiliza el array para crear dinamicamente una lista ul > li de elementos
//* en el div de html con el atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

//! Paso 1: Creo la lista de places con ul
const placesList = document.createElement("ul");
// Paso 2: Creo un for ...of para recorrer todo el array
for (place of places) {
  // Paso 3: Creo el elemento li de placesList
  const placeLi = document.createElement("li");
  // Paso 4: Ponerle texto, en este caso place que es la variable
  // donde almacenamos cada elemento del array places
  placeLi.innerText = place;
  // Paso 5: Insertar los elementos del listado (li placeLi) en el listado (placesList ul)
  placesList.appendChild(placeLi);
}
//! Paso 6: Insertar la lista (placeList ul) en el div con el atributo data-function="printHere"
// Cogemos el elemento con el atributo data-function="printHere"
targetDiv = document.querySelector('[data-function="printHere"]');
//Insertamos la lista (placeList) en el div ([data-function="printHere"])
targetDiv.appendChild(placesList);
