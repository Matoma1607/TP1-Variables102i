/*Desarrollar un sistema de cajero automático en JavaScript que permita al usuario realizar varias operaciones bancarias mediante un menú interactivo. El usuario podrá consultar el saldo, realizar ingresos y egresos de dinero, y otras operaciones adicionales. Al principio del programa declara una variable `saldo` inicial con un valor de $1000 (puedes elegir otro valor si prefieres). las opciones que se mostrarán al usuario son: 1. Ver saldo de la cuenta. 2. Ingresar dinero. 3. Retirar dinero. 4. Ver las últimas transacciones. 5. Salir. Importante, el usuario puede realizar varias veces las operaciones del cajero.*/

const saldo = 1000;
const transacciones = [];

function verSaldo() {
  alert("Su saldo actual es: " + saldo + " pesos");
}

function ingresoDinero() {
  const ingreso = parseFloat(
    prompt("Ingrese la cantidad de dinero a depositar:")
  );
  if (!isNaN(ingreso) && ingreso > 0) {
    saldo += ingreso;
    transacciones.push(`Ingresó: ${ingreso} pesos`);
    alert("Dinero ingresado correctamente");
  } else {
    alert("Cantidad no valida");
  }
}

function retirarDinero() {
  const retiro = parseFloat(prompt("Ingrese la cantidad de dinero a retirar:"));
  if (!isNaN(retiro) && retiro > 0 && retiro <= saldo) {
    saldo -= retiro;
    transacciones.push(`Retiró: ${retiro} pesos`);
    alert("Dinero retirado correctamente");
  } else {
    alert("Cantidad no valida o saldo insuficiente");
  }
}

function verTransacciones() {
  if (transacciones.length === 0) {
    alert("No hay transacciones recientes");
  } else {
    alert("Ultimas transacciones:\n" + transacciones.join("\n"));
  }
}

function mostrarMenú() {
  let opcion;
  do {
    opcion = parseInt(
      prompt(
        "Seleccione una opcion:\n" +
          "1. ver saldo de la cuenta\n" +
          "2. ingresar dinero\n" +
          "3. retirar dinero\n" +
          "4. Ver ultimas transacciones\n" +
          "5. Salir"
      )
    );
    switch (opcion) {
      case 1:
        verSaldo();
        break;
      case 2:
        ingresoDinero();
        break;
      case 3:
        retirarDinero();
        break;
      case 4:
        verTransacciones();
        break;
      case 5:
        alert("Gracias por usar el cajero automático");
        break;
      default:
        alert("opcion no valida. Por favor, seleccione una opcion de 1 al 5");
    }
  } while (opcion !== 5);
}

mostrarMenú();
