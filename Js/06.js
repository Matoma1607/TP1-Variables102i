// Escriba un programa que pida dos numeros y escriba en pantalla cual es el mayor

const numero1 = parseInt (prompt (`Ingrese un numero`));
const numero2 = parseInt (prompt (`Ingrese un segundo numero`));
if (numero1 > numero2){
    document.write(`<p> El mayor es ${numero1}</p>`);
}else if (numero2 > numero1){
    document.write(`<p> El mayor es ${numero2}</p>`);
}