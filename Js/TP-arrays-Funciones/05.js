/* Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

function cadenaTexto(cadena) {
  if (cadena === cadena.toUpperCase()) {
    return "La cadena está formada por mayúsculas.";
  } else if (cadena === cadena.toLowerCase()) {
    return "La cadena está formada por minúsculas";
  } else {
    return "La cadena está formada por una mezcla de ambas";
  }
}
document.write(cadenaTexto("Hola"));
