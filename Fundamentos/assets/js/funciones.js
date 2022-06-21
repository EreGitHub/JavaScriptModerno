function saludar(nombre) {
    return 1;//[1,2]
    //esto nunca se ejecuta
    console.log('soy un codigo despues de return');
}
const retorno = saludar('pepe', 40, true, 'Bolivia');
console.log({ retorno });

function sumar(a, b) {
    return a + b;
}
console.log(sumar(1, 2));

const sumar2 = (a, b) => a + b;
console.log(sumar2(1, 2));

function getAleatorio() {
    return Math.random();
}
console.log(getAleatorio());

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());