class Persona {
    nombre = '';
    codigo = '';
    frase = '';
    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {
        console.log('hola!')
        //codigo = 'ABC'//error por el modo estricto
        if (!nombre) throw Error('El nombre es obligatorio');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
}
const spiderman = new Persona('Peter Parker', 'SPIDER', 'soy tu vecino');
console.log(spiderman);
const iroman = new Persona('Tony stark', 'iroman', 'soy tu vecino');
console.log(iroman);