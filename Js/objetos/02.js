//Crea un objeto persona que contenga las propiedades nombre, edad y hobbies (un array de strings). Luego, escribe una función que reciba un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies de la persona. Finalmente, imprime los hobbies de la persona usando un bucle. Usa prompt para ingresar los datos de la persona y el nuevo hobby.

function crearPersona(nombre, edad, hobbies) {
    return{
        nombre: "Antonella",
        edad: 25,
        hobbies: "leer" || [],
    };
}

function nuevoHobby(persona, nuevoHobby) {
  persona.hobbies.push(nuevoHobby);
}

function imprimirHobbies(persona) {
    document.write(`${persona.nombre} tiene los siguientes hobbies:`);
    for (const hobby of persona.hobbies) {
        document.write(hobby);
      }
  } 

const nombre = prompt(" Ingrese su nombre: ");
const edad = parseInt(prompt(" Ingrese su edad: "));
const hobbies = prompt(" Ingrese sus hobbies separados por comas: ")
  .split(",")
  .map((hobby) => hobby.trim());

  const persona = crearPersona(nombre, edad, hobbies);
  //const nuevoHobby = prompt("Ingrese un nuevo hobby para añadir a la persona:");

  nuevoHobby(persona, nuevoHobby);
  imprimirHobbies(persona);


