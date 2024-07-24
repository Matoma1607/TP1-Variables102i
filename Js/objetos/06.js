/* PRODUCTO: Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/

class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimeDatos(){
        document.write(`<p> Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: $${this.precio} </p>`);
    }
}

const producto1 = new Producto(1, "Producto A", 10.5);
const producto2= new Producto(2, "Producto B", 20.0);
const producto3 = new Producto(3, "Producto C", 15.75);

const productos = [producto1, producto2, producto3];

productos.forEach(producto => producto.imprimeDatos());
