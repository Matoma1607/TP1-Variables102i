// ESTOS EJERCICIOS "COMENZANDO DEL 2° SON LOS OPCIONALES DE TAIGA"
// Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades nombre y nota. Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes. Usa un bucle para recorrer el array. Usa prompt para ingresar los datos de los estudiantes.

const estudiantes = [];

function calcularNotaMedia(estudiantes) {
  let sumaNotas = 0;
  for (let estudiante of estudiantes) {
    sumaNotas += estudiante.nota;
  }
  let media = sumaNotas / estudiantes.length;
  return media;
}

const numeroEstudiantes = parseInt(prompt("Ingrese el numero de estudiantes:"));

for (let i = 0; i < numeroEstudiantes; i++){
    const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
    const nota = parseFloat(prompt(`Ingrese la nota del estudiante ${i + 1}:`));
    estudiantes.push({ nombre: nombre, nota: nota });
}

const notaMedia = calcularNotaMedia(estudiantes);

document.write(` La nota media de los estudiantes es: ${notaMedia} `);
