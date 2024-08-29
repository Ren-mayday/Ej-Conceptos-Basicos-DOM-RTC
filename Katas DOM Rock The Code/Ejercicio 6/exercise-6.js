//* Dado el siguiente HTML: Elimina el elemento que tenga la clase .fn-remove-me.

//! Paso 1: Coger el elemento que queramos manipular, en este caso será eliminar
const myP = document.querySelector(".fn-remove-me");
//! Paso 2: Eliminarlo con el método remove()
myP.remove();
