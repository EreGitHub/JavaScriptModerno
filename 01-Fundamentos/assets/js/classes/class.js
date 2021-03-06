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
}
const spiderman = new Persona('Peter Parker', 'SPIDER', 'soy tu vecino');
const iroman = new Persona('Tony stark', 'iroman', 'soy tu vecino');
spiderman.setComidaFavorita = 'pizza';
console.log({ spiderman });
//Persona._conteo = 2;
console.log('conteo estatico', Persona._conteo);
console.log('conteo estatico', Persona.conteo);
Persona.mensaje();