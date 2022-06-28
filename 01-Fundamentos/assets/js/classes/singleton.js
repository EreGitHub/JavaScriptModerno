class Singleton {
    static instancia;
    nombre = '';
    constructor(nombre = '') {
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
    }
}
const instancia1 = new Singleton('Iroman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanther');
console.log(`nombre en la instancia1 es: ${instancia1.nombre}`)
console.log(`nombre en la instancia1 es: ${instancia2.nombre}`)
console.log(`nombre en la instancia1 es: ${instancia3.nombre}`)