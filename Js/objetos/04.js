// EJERCICIO CUENTA BANCARIA
/*Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.*/

class Cuenta {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  ingresar(cantidad) {
    if (cantidad > 0){
        this.saldo += cantidad;
        document.write(`<p> ${cantidad} ingresados a la cuenta de ${this.titular} </p>`);
    }else{
        document.write(" <p> La cantidad a retirar tiene que ser mayor a 0 </p> ");
    }
  }

  extraer(cantidad) {
    if (cantidad > 0 && cantidad <= this.saldo) {
      this.saldo -= cantidad;
      document.write(" <p> La cantidad a retirar tiene que ser mayor a 0 y menor o igual al saldo disponible. </p> ");
    } else {
      document.write(" <p> Saldo insuficiente </p> ");
    }
  }

  informar() {
    document.write(`--- Estado de la cuenta de ${this.titular} ---`);
    document.write(`Titular: ${this.titular} `);
    document.write(`Saldo: $${this.saldo.toFixed(2)} `);
  }
}

const cuentaAlex = new Cuenta(" Alex ", 0);

cuentaAlex.informar();

cuentaAlex.ingresar(500);

cuentaAlex.extraer(200);

cuentaAlex.informar();