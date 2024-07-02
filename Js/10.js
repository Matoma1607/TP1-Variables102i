// Escriba un programa que pida un numero y nos diga si es divisible por 2, 3, 5 o 7

const numero = parseInt (prompt (`Introduzca un numero`));
const resultado = `El numero ${numero}`;

if (numero % 2 === 0){
    resultado += "es divisible por 2";
}else{
    resultado += "no es divisible por 2";
}

if (numero % 3 === 0){
    resultado += "es divisible por 3";
}else{
    resultado += "no es divisible por 3";
}

if (numero % 5 === 0){
    resultado += "es divisible por 5";
}else{
    resultado += "no es divisible por 5";
}

if (numero % 7 === 0){
    resultado += "es divisible por 7";
}else{
    resultado += "no es divisible por 7";
}

document.write(resultado);