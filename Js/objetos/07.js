/* Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/

class Libro {
  #ISBN;
  #titulo;
  #autor;
  #numPaginas;

  constructor(ISBN, titulo, autor, numPaginas) {
    this.#ISBN = ISBN;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#numPaginas = numPaginas;
  }

  get ISBN() {
    return this.#ISBN;
  }
  set ISBN(ISBN) {
    this.#ISBN = ISBN;
  }
  get titulo() {
    return this.#titulo;
  }
  set titulo(titulo) {
    this.#titulo = titulo;
  }
  get autor() {
    return this.#autor;
  }
  set autor(autor) {
    this.#autor = autor;
  }
  get numPaginas() {
    return this.#numPaginas;
  }
  set numPaginas(numPaginas) {
    this.#numPaginas = numPaginas;
  }

  mostrarLibro() {
    document.write(
      `<p> El libro "${this.titulo}" con ISBN ${
        this.ISBN
      } creado por el autor ${this.#autor} tiene ${
        this.numPaginas
      } páginas. </p>`
    );
  }
}

const libro1 = new Libro(
  "<p> 123456",
  "Cuando te encontre",
  "Nicholas Sparks </p>",
  180
);
const libro2 = new Libro(
  "<p> 678910",
  "La Felicidad",
  "Gabriel Rolon </p>",
  417
);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.numPaginas > libro2.numPaginas) {
  document.write(
    `<p> El libro "${libro1.titulo}" tiene mas paginas (${libro1.numPaginas}) que el libro "${libro2.titulo}" (${libro2.numPaginas}).`
  );
} else if (libro1.numPaginas < libro2.numPaginas) {
  document.write(
    `<p> El libro "${libro2.titulo}" tiene mas paginas (${libro2.numPaginas}) que el libro "${libro1.titulo}" (${libro1.numPaginas}).`
  );
} else {
  document.write(
    `<p> Ambos libros tienen el mismo numero de pag (${libro1.numPaginas}).`
  );
}
