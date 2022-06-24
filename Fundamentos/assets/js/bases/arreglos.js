//NOTE forma 1 de declarar un arreglo
const arr = new Array(10);//NOTE 10 elementos vacios
console.log(arr);
//NOTE forma 2 de declarar un arreglo
const arr1 = [];
//NOTE forma 3 de declarar un arreglo
let videoJuegos = ['Mario 3', 'Mario 4', 'Mario 5'];
console.log({ videoJuegos });
console.log(videoJuegos[0]);//NOTE primera posicion"Mario 3"

//NOTE js no te restringe los tipos de datos
let arrCosas = [
    true,
    123,
    'pepe',
    1 + 2,
    function () { },
    () => { },//NOTE funciones flecha
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light']
];
console.log({ arrCosas });
console.log(arrCosas[0]);//NOTE true
console.log(arrCosas[7][3]);//NOTE Dr. Light
