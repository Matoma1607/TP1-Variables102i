//RECTANGULO: Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área.

class Rectangulo {
  constructor(alto, ancho) {
    this._alto = alto;
    this._ancho = ancho;
  }

  setAlto(nuevoAlto) {
    if (nuevoAlto < 0){
        this._alto = nuevoAlto;
    }else{
        console.error("El alto debe ser un numero positivo.");
    }
    
  }

  setAncho(nuevoAncho) {
    if (nuevoAncho > 0){
        this._ancho = nuevoAncho;
    }else{
        console.error("El ancho debe ser un numero positivo.");
    }
  }

  getAlto() {
    return this._alto;
  }

  getAncho() {
    return this._ancho;
  }

  mostrarPropiedades() {
    return `<p> Alto: ${this._alto}, Ancho: ${this._ancho} </p>`;
  }

  calcularPerimetro() {
    return 2 * (this._alto + this._ancho);
  }

  calcularArea() {
    return this._alto * this._ancho;
  }
}

const miRectangulo = new Rectangulo(10, 5);
document.write(miRectangulo.mostrarPropiedades());

miRectangulo.setAlto = 20;
miRectangulo.setAncho = 10;

document.write("<p> Propiedades actualizadas: </p>");
document.write(miRectangulo.mostrarPropiedades());

document.write(`<p> Perimetro: ${miRectangulo.calcularPerimetro()} </p>`);
document.write(`<p> Area: ${miRectangulo.calcularArea()} </p>`);
