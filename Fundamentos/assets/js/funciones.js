//NOTE funcion convencional
function saludar(nombre) { //si no le paso valor es igual undefined
    //NOTE esto solo funciona en funciones tradiciones (arguments)
    console.log(arguments);
    console.log('Hola mundo ' + nombre);
}

//NOTE funcion anonima
const saludar2 = function (nombre) {
    console.log('Hola mundo ' + nombre);
}

//NOTE funcion flecha
//const saludarFlecha = (nombre) => {
const saludarFlecha = nombre => {
    console.log('Hola mundo ' + nombre);
}

saludar('pepe', 40, true, 'Bolivia');
saludar2('pepe');
saludarFlecha('pepe');