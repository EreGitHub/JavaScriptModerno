//NOTE con valores primitivos
let a = 10;
let b = a;
a = 30;
console.log({ a, b });

//NOTE con objetos
//NOTE pasando valores por referencia
let juan = { nombre: 'Juan' };
// let ana = juan;
// console.log({ juan, ana });//juan y ana tienen el mismo valor
//NOTE operador spread
let ana = { ...juan };//NOTE cambiando el valor de la referencia
ana.nombre = 'Ana';
console.log({ juan, ana });

//const cambiaNombre = (persona) => {
const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony'
    return persona;
}
let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);
console.log({ peter, tony });//peter y tony tienen el mismo valor

//en arreglos
const frutas = ['manzana', 'pera', 'uva'];

console.time('slice');
const otrasFrutas = frutas.slice();//otra manera de romper la relacion
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];//rompo la relacion
console.timeEnd('spread');

otrasFrutas.push('naranja');
console.table({ frutas, otrasFrutas2 })