/* Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. */

let nombres = [];
let edades  =[];

for (let i = 1; i <= 3; i++){
    let nombre = prompt(`Ingrese el nombre ${i}:`);
    nombres.push(nombre);

    let edad = prompt(`Ingrese la edad de ${nombre}:`);
    edad = parseInt(edad);

    while(isNaN(edad) || edad <=0){
        alert('por favor, ingrese una edad valida mayor que cero');
        edad = prompt(`Ingrese la edad de ${nombre}:`);
        edad = parseInt(edad);
    }
    edades.push(edad);
}

let indiceMayor = 0;
for (let i = 1; i < edades.length; i++){
    if (edades[i] > edades[indiceMayor]){
        indiceMayor = i;
    }
}

let nombreMayor = nombres[indiceMayor];
alert (`El nombre del mayor es: ${nombreMayor}`);
