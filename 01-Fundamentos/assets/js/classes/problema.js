const fher = {
    nombre: 'pepe',
    edad: 30,
    imprimir() {
        console.log(`nombre : ${this.nombre} - ${this.edad}`)
    }
};

const pedro = {
    nombre: 'pedro',
    edad: 30,
    imprimir() {
        console.log(`nombre : ${this.nombre} - ${this.edad}`)
    }
};

const melissa = {
    nombre: 'melissa',
    edad: 30
};

fher.imprimir();

//crea obj que tengan el mismo tipado 
//es un generador de instancias forma antigua
//no es recomendable usarlo, solo si se usa para navegadores antiguos
//navegadores desde hace 8 años atras
function Persona(nombre, edad = 10) {
    console.log('se ejecuto esta linea');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function () {
        console.log(`nombre : ${this.nombre} - ${this.edad}`)
    }
}
const maria = new Persona('maria', 18);
console.log(maria);
maria.imprimir();
const melissa1 = new Persona('melissa', 18);
console.log(melissa1);
melissa1.imprimir();