let juegos = ['Zelda', 'Mario', 'Metroid', 'Super Mario'];
console.log('Largo:', juegos.length);//NOTE cuantos elementos tiene el arreglo
console.log('Contiene:', juegos.includes('Super Mario'));//NOTE si contiene el elemento
let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];
console.log({ primero, ultimo });

juegos.forEach((item, index, arr) => {
    console.log({ item, index, arr });
});

//NOTE agrega un elemento al final del arreglo
let nuevaLongitud = juegos.push('Super Mario Bros');
console.log({ nuevaLongitud, juegos });

//NOTE agrega un elemento al inicio del arreglo
nuevaLongitud = juegos.unshift('Super Mario Bros');
console.log({ nuevaLongitud, juegos });

//NOTE elimina el ultimo elemento del arreglo
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

//NOTE elimina el elemento en la posicion indicada
let pos = 1;
//NOTE elimina 2 elementos en la posicion indicada
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

//NOTE obtiene la posicion index del elemento indicado
let metroidIndex = juegos.indexOf('Metroid');
//NOTE si no lo encuentra devuelve -1
console.log({ metroidIndex });