let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: true,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.2437
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War',//NOTE Propiedad con espacios
};
console.log('nombre', personaje.nombre);
console.log(personaje)
console.log(personaje.nombre) //repuesta Tony Stark
console.log(personaje['nombre']) //repuesta Tony Stark
console.log(personaje.edad) //repuesta 40
console.log(personaje.coords.lat) //repuesta 34.034
console.log('Nº de trajes', personaje.trajes.length)//repuesta 3
console.log('Ultimo trajes', personaje.trajes[personaje.trajes.length - 1])//repuesta Hulkbuster

//NOTE trabajar de manera dinamica con objetos
const x = 'vivo';
console.log('vivo', personaje[x]) //repuesta true
console.log('ultima pelicula', personaje['ultima-pelicula']) //repuesta Infinity War



