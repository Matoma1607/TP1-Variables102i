/* Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456 */

let numero;

do {
    numero = prompt("ingresa un numero entre 1 y 50:");
    numero =parseInt(numero);
}while (isNaN (numero) || numero < 1 || numero > 50);

for (let i = 1; i <= numero; i++){
    let linea = '';
    for (let j = 1; j <= i; j++){
        linea += j;
        if (j < i){
            linea += '-';
        }
    }
    console.log(linea);
}