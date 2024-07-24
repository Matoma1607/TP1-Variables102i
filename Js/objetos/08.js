// Ejercicios adicionales 
/* 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse"*/

class Persona{
    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    saludar(){
        document.write(`<p> Hola, me llamo ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}. </p>`);
    }

    despedirse(){
        document.write(`<p> Chao, ${this.nombre}. </p>`);
    }
}

const persona1 = new Persona("<p> Matias </p>", 27, "<p> Programador </p>");
const persona2 = new Persona("<p> Antonella </p>", 25, "<p> Farmaceutica </p>");

persona1.saludar();
persona1.despedirse();

persona2.saludar();
persona2.despedirse();
