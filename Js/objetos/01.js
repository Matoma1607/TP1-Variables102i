/* Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.*/

const auto = {
    color: 'Negro',
    marca: 'Toyota',
    modelo: 'Corolla',
    estado: 'apagado',
    año: 2024,
    motor: ['Motor 2.4 D-4D', 'Propulsor diésel de cuatro cilindros', '150 CV de potencia máxima'],
    
    encender: function(){
        if (this.estado === 'apagado'){
            this.estado = "encendido";
            document.write("<p> El auto  " + this.marca + " " + this.modelo + " ha sido encendido. </p>");
        }else {
            document.write("<p> El auto ya está encendido </p>");
        }
    },
    apagar: function(){
        if (this.estado === 'encendido'){
            this.estado = "apagado";
            document.write("<p> El auto  " + this.marca + " " + this.modelo + " ha sido apagado. </p>");
        }else{
            document.write("<p> El auto ya está apagado </p>");
        }
    }
};
auto.encender();

auto.apagar();
