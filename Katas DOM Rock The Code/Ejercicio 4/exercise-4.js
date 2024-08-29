//* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
//* evento click que ejecute un console log con la información del evento del click
//! Paso 1: cojo/identifico el botón con el id btnToClick
const myBtn = document.createElement("button");
myBtn.id = "btnToClick";

//! Paso 2: Añadirle un texto al botón
myBtn.innerText = "Soy un botón que imprime la información del evento click";
//! Paso 3: Añadirle un eventListener click al botón
myBtn.addEventListener("click", (event) => {
  console.log(event);
});
//! Paso 4: Agregar/Insertar el botón en el DOM

document.body.appendChild(myBtn);

//* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
//! Paso 1: Identifico el input con clase focus
const myInputFocus = document.querySelector(".focus");
//!Paso 2:
myInputFocus.addEventListener("focus", (event) => {
  console.log(event.target.value);
});
//* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
//!Paso 1 Identifico el input con la clase valor
const myInputValue = document.querySelector(".value");
myInputValue.addEventListener("input", (event) => {
  console.log(event.target.value);
});
