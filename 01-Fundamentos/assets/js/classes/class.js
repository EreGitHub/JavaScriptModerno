class Persona {
    nombre = '';
    codigo = '';
    frase = '';
    comida = ''
    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
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
//spiderman.memesis = 'duende verde';//mala practica definir propiedades de esta manera
console.log({ spiderman });
console.log(spiderman.getComidaFavorita);