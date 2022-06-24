//NOTE tipos de datos string
let nombre = 'pepe';
console.log(nombre);
//let nombre = 'rios'//NOTE error de inicializacion
nombre = 'rios';
console.log(nombre);
nombre = "Tia may";
nombre = `nombre custom`;
//NOTE typeof es el tipo de dato que tiene la variable
console.log(typeof nombre);//NOTE string
nombre = 123;
console.log(typeof nombre); //NOTE number
//NOTE tipo de datos boolean
let esMarvel = true;
console.log(typeof esMarvel);
//NOTE tipo de datos number
let edad = 20;
console.log(typeof edad);
edad = 33.02;
console.log(typeof edad);
//NOTE tipo de dato undefined
let superPoderDeSpiderman;
console.log(typeof superPoderDeSpiderman);//NOTE el tipo es undefined
//NOTE tipo de dato null
let soyNull = null;
console.log(typeof soyNull);//NOTE el tipo es object
//NOTE tipo de dato symbol  
let simbolo1 = Symbol('simbolo');
let simbolo2 = Symbol('simbolo');
console.log(typeof simbolo1);//NOTE el tipo es symbol
console.log(simbolo1 === simbolo2);//NOTE resultado es false