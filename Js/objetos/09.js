/* 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. */

class Animal{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    emitirSonido(){
        document.write(`<p> ${this.nombre} hace un sonido </p>`);
    }
}

class Perro extends Animal {
    emitirSonido(){
        document.write(`<p> ${this.nombre} dice: ¡Guau, guau! </p>`);
    }
}

class Gato extends Animal{
    emitirSonido(){
        document.write(`<p> ${this.nombre} dice: ¡Miau, miau! </p>`);
    }
}

const miPerro = new Perro("<p> Blaqui </p>", 5);
const miGato = new Gato("<p> Luna </p>", 3);

miPerro.emitirSonido();
miGato.emitirSonido();

