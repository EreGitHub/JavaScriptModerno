class Persona {
    nombre = '';
    codigo = '';
    frase = '';
    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    quienSoy() {
        console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }
    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}
const spiderman = new Persona('Peter Parker', 'SPIDER', 'soy tu vecino');
const iroman = new Persona('Tony stark', 'iroman', 'soy tu vecino');

spiderman.quienSoy();
iroman.quienSoy();
spiderman.miFrase();
iroman.miFrase();