//* 1.1 Basandote en el array siguiente, crea una lista ul > li
//* dinámicamente en el html que imprima cada uno de los paises.
/* const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

//! Paso 1: Crear el ul
const countriesList = document.createElement("ul");
//! Paso 2: Con un for ... of recorrer todo el array
for (country of countries) {
  //! Paso 3: Crear los li tag
  const countryLi = document.createElement("li");
  //! Paso 4: Ponerle texto en los li, en este caso será country
  //! porque country es la variable que almacena cada elemento del array
  countryLi.innerText = country;
  //! Paso 5: Insertar los li (countryLi) en el ul (countriesList)
  countriesList.appendChild(countryLi);
}

//! Paso 6: insertarlo en el body
document.body.appendChild(countriesList);

*/

//* 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
//! Paso 1: Coger (situar) el elemento que tenga la clase .fn-remove-me
const pWithClass = document.querySelector(".fn-remove-me");
pWithClass.remove();

//* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
//* en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

//! Paso 1: Crear el ul, lista de coches
const carsList = document.createElement("ul");
//! Paso 2: Crear un for... of para recorrer todo el array
for (car of cars) {
  //! Paso 3: Crear los tag li
  const carLi = document.createElement("li");
  //! Paso 4: Ponerle texto en los li, en este caso será car
  //! porque car es la variable que almacena cada elemento del array
  carLi.innerText = car;
  //! Paso 5: Insertar los li (carLi) en el ul (carsList)
  carsList.appendChild(carLi);
}

//! Paso 6: Insertar el ul (carsList) en el div con el atributo data-function="printHere"
// Localizar el div
const targetDiv = document.querySelector('[data-function="printHere"]');
// Insertar nuestra lista ul (carsList) en el div con atributo data-function="printHere
targetDiv.appendChild(carsList);

//* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
//* h4 para el titulo y otro elemento img para la imagen.
const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

//! Paso 0: Creo el div con el id container
const container = document.createElement("div");
container.id = "container";

//! Inserto el container en el documento
document.body.appendChild(container);

//! Paso 1: Creo un for loop para recorrer todos los países del array
for (let index = 0; index < countries.length; index++) {
  //! Paso 2: Creo el div para cada elemento country
  const divWithH4 = document.createElement("div");
  divWithH4.className = "randomTitle";

  //! Paso 3: Creo el elemento h4 y lo configuro
  const title = document.createElement("h4");
  title.innerHTML = countries[index].title; // coger los títulos del array

  //! Paso 4: Creo el elemento img y lo configuro
  const countriesImgs = document.createElement("img");
  countriesImgs.src = countries[index].imgUrl; // coger las imágenes del array

  //! Paso 5: Inserto title y countriesImgs en divWithH4
  divWithH4.appendChild(title);
  divWithH4.appendChild(countriesImgs);

  //! Paso 6: Insertar el divWithH4 en el container
  container.appendChild(divWithH4);
}

//* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
//* elemento de la serie de divs.
//! Paso 1: Crear un botón que elimine el último elemento
const deleteLastElementBtn = document.createElement("button");
//! Paso 2: le pongo texto y le añado una clase
deleteLastElementBtn.innerText = "Delete Last Picture";
deleteLastElementBtn.className = "deleteLastElement";
//! Paso: 3 colocarlo en el body
document.body.appendChild(deleteLastElementBtn);
//Del paso 1 al 3 solamente he creado el botón y lo he colocado en el body, no tiene ninguna funcionalidad
//! Paso 4: Añadir un eventListener, en este caso sería un click que eliminara el último elemento del array
deleteLastElementBtn.addEventListener("click", () => {
  countries.pop(); // Elimina el último elemento del array
  const lastDivOfCOntainer = container.querySelector("div:last-child");
  // Selecciona/coge el último div .randoTitle del div container
  container.removeChild(lastDivOfCOntainer); // quita el último div
});

//* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
//* divs que elimine ese mismo elemento del html.
//!Paso 1: selecciona todos los elementos div con la clase .randomTitle
const divsWithButtons = container.querySelectorAll(".randomTitle");

//! Paso 2: Dentro de un for creo el botón para cada div con la clase .randomTitle
for (let index = 0; index < divsWithButtons.length; index++) {
  const div = divsWithButtons[index]; // Accede a los divs con index 0, 1, 2, 3

  const deleteBtn = document.createElement("button"); // Creo una variable para almacenar el botón
  deleteBtn.innerText = "Delete this image"; // le pongo texto al botón
  deleteBtn.className = "deleteThisImage"; // le asigno una clase al botón
  //añado un addEventListener para que cuando se haga click se borre la imagen concreta
  deleteBtn.addEventListener("click", () => {
    //Elimina el div específico dentro del conteneder
    container.removeChild(div);
  });
  //Insertar el botón al div
  div.appendChild(deleteBtn);
}
