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

//NOTE elimina la propiedad edad
delete personaje.edad;
console.log(personaje);
//NOTE convierte un obj en un array
const entriesPares = Object.entries(personaje);
console.log(entriesPares);
//NOTE crear una nueva propiedad en el obj
personaje.casado = true;
//NOTE bloquear las propiedades del obj
Object.freeze(personaje);
personaje.dinero = 105400;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';//NOTE si me permite cabiar el valor
//NOTE obtenemos un arreglo de las propiedades del obj
const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);
//NOTE obtenemos los valores de las propiedades del obj
const valores = Object.values(personaje);
console.log(valores);
