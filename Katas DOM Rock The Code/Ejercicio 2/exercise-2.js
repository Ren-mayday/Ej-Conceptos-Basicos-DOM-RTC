//* 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const myDiv = document.createElement("div");
document.body.appendChild(myDiv);

//* 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

//! Creo un div
const divWithText = document.createElement("div");
//! Inserto el div en el body
document.body.appendChild(divWithText);

//! Creo una p
const myP = document.createElement("p");
//! Inserto texto en myP
myP.innerText = "Añado texto para ver dónde se posiciona este tag p";
//! Inserto myP en el div que tiene que tener texto
divWithText.appendChild(myP);
//* 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
//*	loop con javascript.
/* <div> 
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
</div> */
//! Paso 1: Creo una variable para declarar un div
const divWithPs = document.createElement("div");
//! Paso 2: Inserto el div en el body
document.body.appendChild(divWithPs);

//! Paso 3, creo 6 p con un for loop

for (let index = 1; index <= 6; index++) {
  // Creo el elemento p
  const myParagraphs = document.createElement("p");
  // Agrego texto al párrafo
  myParagraphs.innerText = `Soy el párrafo número ${index}`;

  // Inserto los párrafos en el div
  divWithPs.appendChild(myParagraphs);
}

//* 1.4 Inserta dinamicamente con javascript en un html una p con el
//*	texto 'Soy dinámico!'.
//! Paso 1: Creo una variable para declararle una p tag
const dinamicP = document.createElement("p");
//! Paso 2: Inserto la p tag en el body del document
document.body.appendChild(dinamicP);
//! Paso 3: Inserto el texto requerido
dinamicP.innerText = "Soy dinámico";

//* 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
//! Paso 1: Coger el h2 con la clase correspondiente
const myH2 = document.querySelector("h2.fn-insert-here");
//!Paso 2: Ponerle el texto correspondiente
myH2.innerText = "Wubba Lubba dub dub";
//* 1.6 Basandote en el siguiente array crea una lista ul > li con
//* los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

//! Paso 1: Crear una variable para almacenar el tag ul
const appsList = document.createElement("ul");

//! Paso 2: Con un for... of recorrer todo el array
for (app of apps) {
  //! Paso 3: Crear los tag li
  const appLi = document.createElement("li");
  appLi.textContent = app;
  //! Paso 4: Insertar los li(appLi) en ul (appsList)
  appsList.append(appLi);
}
//! Paso 5: insertarlo en el body
document.body.append(appsList);

//* 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
//! Paso 1: Coger todos los nodos que tengan la clase .fn-remove-me
const elementsWithClassToRemove = document.querySelectorAll(".fn-remove-me");

for (let index = 0; index < elementsWithClassToRemove.length; index++) {
  elementsWithClassToRemove[index].remove();
}

//* 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//* Recuerda que no solo puedes insertar elementos con .appendChild.
//! Paso 1: Crear el p tag
const pInTheMiddle = document.createElement("p");
//! Paso 2: ponerle texto
pInTheMiddle.innerText = "Voy en medio";
//! Paso 3: Localizar los dos divs
const div1AlreadyInHtml = document.querySelector("div"); //! div 1
const div2AlreadyInHtml = div1AlreadyInHtml.nextElementSibling; //! div 2
//! Paso 4: Insertar pInTheMiddle antes de div2AlreadyInHtml
div2AlreadyInHtml.parentNode.insertBefore(pInTheMiddle, div2AlreadyInHtml);

//* 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
//*	.fn-insert-here
//! Paso 1: Crear el p tag
const pInsideDivs = document.createElement("p");
//! Paso 2: Ponerle texto
pInsideDivs.innerText = "¡Voy dentro!";
//! Paso 3: Localizar los divs con la clase .fn-insert-here
const divsWithClass = document.querySelectorAll(".fn-insert-here");

//! Paso 4: Insertar un pInsideDivs en cada div con la clase .fn-insert-here

for (let index = 0; index < divsWithClass.length; index++) {
  // Obtener el div actual
  const div = divsWithClass[index];
  console.log(div);
  // Crear una copia del <p> para cada div
  const pClone = pInsideDivs.cloneNode(true);
  // Insertar la copia del <p> en el div actual
  div.appendChild(pClone);
}

//parentNode, cloneNode
