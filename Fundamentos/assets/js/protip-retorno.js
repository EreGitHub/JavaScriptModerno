function crearPersona(nombre, apellido) {
    return { nombre, apellido };
}
const persona = crearPersona('Juan', 'Perez');
console.log(persona);

const crearPersona2 = (nombre, apellido) => ({ nombre, apellido, });
const persona2 = crearPersona2('Juan', 'Perez', 40);
console.log(persona);

function imprimirArgumentos() {
    console.log(arguments);
}
imprimirArgumentos(1, 2, 3, 'hola');

const imprimirArgumentos2 = (edad, ...arg) => {
    console.log({ edad, arg });
    return arg;
}
const argumentos = imprimirArgumentos2(1, 2, 3, 'hola');
console.log({ argumentos });
//NOTE Desestructuracion de un array
const [v1, v2, v3] = imprimirArgumentos2(1, 2, 3, 'hola');
console.log({ v1, v2, v3 });
//NOTE Desestructuracion de un objeto
const { apellido: Ap, nombre } = crearPersona('Juan', 'Perez');
console.log({ Ap, nombre });
//NOTE desestructuracion de argumentos
let tony = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};
//const imprimePropiedades = ({ nombre, codeName, vivo, edad, trajes }) => {
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    console.log({ nombre, codeName, vivo, edad, trajes });
    // console.log(Object.keys(personajes));
    // console.log(Object.values(personajes));
    // console.log(Object.entries(personajes));
}