//* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
//* que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Creamos el la lista de albums ul
const albumList = document.createElement("ul");

for (let index = 0; index < albums.length; index++) {
  // Creamos los li de la lista
  const albumLi = document.createElement("li");
  // Insertamos texto en los li
  albumLi.innerText = albums[index];
  //Insertar los li en nuestra lista de albums ul (albumsList)
  albumList.appendChild(albumLi);
}
// Insertar la lista en el body del documento
document.body.appendChild(albumList);
