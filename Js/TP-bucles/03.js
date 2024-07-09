//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let fraseCompleta = "";

do {
  const palabraIngresada = prompt("ingrese una frase ");
  if (fraseCompleta === "") {
    fraseCompleta = palabraIngresada;
  } else {
    fraseCompleta = fraseCompleta + "-" + palabraIngresada;
  }
  console.log(fraseCompleta);
} while (confirm("¿Desea continuar?"));

console.log(fraseCompleta);
document.write(`Frase ingresada : ${fraseCompleta}`);
