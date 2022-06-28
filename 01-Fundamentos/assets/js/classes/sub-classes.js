class Persona {
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias.';
    }
    static mensaje() {
        console.log(this.nombre);//undefined
        console.log('soy un mensaje estatico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = ''
    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;//hace referencia a la clase, y no a la instancia
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita() {
        return `la comida favorita de ${this.nombre} es ${this.comida}`;
    }


    quienSoy() {
        console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }
    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}
class Heroe extends Persona {
    clan = 'sin clan';
    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);//primero se ejecuta el constructor de la clase padre
        history.clan = 'Los avengers';
    }

    quienSoy() {
        console.log(`soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}
const spiderman = new Heroe('Peter Parker', 'SPIDER', 'soy tu vecino');
// const spiderman = new Heroe();
console.log({ spiderman });
spiderman.quienSoy();