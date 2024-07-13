/* Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona' */

const ciudades = [];
do {
  let input = prompt("Ingresar nombre de una ciudad:");
  if (input !== null) ciudades.push(input);
  else break;
} while (true);

document.write(`<p> El arreglo tiene ${ciudades.length} ciudades </p>`);
document.write(`<ul>`);
document.write(`<li> ${ciudades[0]} </li>`);
document.write(`<li> ${ciudades[2]} </li>`);
document.write(`<li> ${ciudades[ciudades.length - 1]} </li>`);
document.write(`</ul>`);

ciudades.push("paris");
document.write(`<p>${ciudades[1]}</p>`);

ciudades[1] = "Barcelona";

let texto = ``;
for (let i = 0; i < ciudades.length; i++) {
  texto += `<li>${ciudades[i]}</li>`;
}
texto = `<h2> Arreglo de ciudades </h2> <ol> ${texto} </ol>`;
document.write(texto);
