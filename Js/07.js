// Escriba un programa que pida tres numeros y escriba en pantalla el mayor de los tres

const numero1 = parseInt(prompt(`Ingrese un numero`));
const numero2 = parseInt(prompt(`Ingrese un segundo numero`));
const numero3 = parseInt(prompt(`Ingrese un tercer numero`));

const mayor = Math.max(numero1, numero2, numero3);
document.write(`<p>El mayor es ${mayor} </p>`);