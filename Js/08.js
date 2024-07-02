// Escriba un programa que pida un numero y diga si es divisible por 2

const numero = parseInt (prompt (`Introduzca un numero`));
if (numero % 2 === 0){
    document.write (`<p> El numero ${numero} es divisible por 2 </p>`);
}else{
    document.write (`<p> El numero ${numero} no es divisible por 2 </p>`);
}