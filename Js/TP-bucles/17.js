// Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto = prompt("Ingresa texto aquí:");
let vocales = "aeiouAEIOU";
let posición = -1;

for (let i = 0; i < texto.length; i++){
    if (vocales.indexOf(texto.charAt(i)) !== -1){
        posición = i;
        break;
    }
}

if (posición !== -1){
    document.write(`La priemra vocal se encuentra en la posicion: ${posición}`);
}else {
    document.write("Vocales no encontradas en el texto ingresado");
}
