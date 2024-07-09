// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let sumaTotal = 0;

while (true) {
  let input = prompt("Introducir un numero (o pulse cancelar para salir):");

  if (input === null) {
    break;
  }

  let numero = Number(input);
  if (isNaN(numero)) {
    alert("No se introdujo un numero valido. Intente nuevamente");
  } else {
    sumaTotal += numero;
  }
}

alert("La suma total de los numeros introducidos es: " + sumaTotal);
