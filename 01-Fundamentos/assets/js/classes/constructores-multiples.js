class Persona {

    static porObjeto({ nombre, apellido, pais }) {
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}
const
    nombre1 = 'Iroman',
    apellido1 = 'Perez',
    pais1 = 'Mexico';
const fher = {
    nombre: 'pepe',
    apellido: 'perez',
    pais: 'mexico'
};
const persona1 = new Persona(nombre1, apellido1, pais1);
persona1.getInfo();
const persona2 = Persona.porObjeto(fher);
persona2.getInfo();