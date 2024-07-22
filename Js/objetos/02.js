//Crea un objeto persona que contenga las propiedades nombre, edad y hobbies (un array de strings). Luego, escribe una función que reciba un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies de la persona. Finalmente, imprime los hobbies de la persona usando un bucle. Usa prompt para ingresar los datos de la persona y el nuevo hobby.

class Persona {
  constructor(nombre, edad, hobbies) {
    this.nombre = "Antonella";
    this.edad = 25;
    this.hobbies = [" leer ", " entrenar ", " fotografia "];
  }
}

function agregarHobby(persona, nuevoHobby) {
  persona.hobbies.push(" ciclismo ");
}

function imprimirHobbies(persona) {
  document.write(`${persona.nombre} tiene los siguientes hobbies:`);
  for (const hobby of persona.hobbies) {
    document.write(hobby);
  }
}

const nombre = prompt(" Ingrese su nombre: ");
const edad = parseInt(prompt(" Ingrese su edad: "));
const hobbiesIniciales = prompt(" Ingrese sus hobbies iniciales separados por comas: ").split(",");

const persona = new Persona(nombre, parseInt(edad), hobbiesIniciales);
const nuevoHobby = prompt("Ingrese un nuevo hobby para añadir a la persona:");

if (nuevoHobby.trim() === "") {
  agregarHobby(persona);
} else {
  agregarHobby(persona, nuevoHobby);
}

imprimirHobbies(persona);

