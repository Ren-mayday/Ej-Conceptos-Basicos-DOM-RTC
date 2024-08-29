//! 1 Usa querySelector para mostrar por consola el botón con la clase .showme
const myBtn = document.querySelector(".showme");
console.log(myBtn);

//?1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const myH1 = document.querySelector("#pillado");
console.log(myH1);

//* 1.3 Usa querySelector para mostrar por consola todos los p
const powerRangers = document.querySelectorAll("p");

powerRangers.forEach((rangers) => {
  console.log(rangers);
});
//! 1.4 Usa querySelector para mostrar por consola todos los elementos con
//!la clase.pokemon
const pokemons = document.querySelectorAll(".pokemon");

pokemons.forEach((pokemon) => {
  console.log(pokemon);
});

//? 1.5 Usa querySelector para mostrar por consola todos los elementos con
//? el atributo data-function="testMe".
const randomCartoonCharacters = document.querySelectorAll("[data-function]");
randomCartoonCharacters.forEach((randomCharacter) => {
  console.log(randomCharacter);
});
//* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
//*data-function="testMe". */

console.log(document.querySelectorAll("[data-function='testMe']")[2]);
