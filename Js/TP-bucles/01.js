/* Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje*/

let edad= prompt("Ingrese su edad por favor");
if (isNaN (edad)){
    alert("La edad que ingresaste no es un numero valido");
}else{
    edad=Number(edad);
    if (edad >= 18){
        alert("Felicidades, ya puedes conducir");
    }else{
        alert("Sera en otro momento, no puedes conducir");
    }
}
