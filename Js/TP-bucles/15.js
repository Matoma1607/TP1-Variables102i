// Realiza un script que cuente el número de vocales que tiene un texto

let texto = prompt("Ingresa un texto:");
let numVocales = 0;
let vocales = "aeiouAEIOU";

for (let i = 0; i < texto.length; i++){
    if (vocales.indexOf(texto.charAt(i)) !== -1){
        numVocales++;
    }
}

document.write(`El numero de vocales en el texto es: ${numVocales}`);