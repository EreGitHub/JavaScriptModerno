let a = 5;
if (a >= 10)
    console.log('a es mayor o igual a 10');
else
    console.log('a es menor a 10');
console.log('fin de programa');

const hoy = new Date();
let dia = hoy.getDay();
console.log({ dia });
//solo evalua el valor 
if (dia == 0)
    console.log('Es domingo');
else
    console.log('No es domingo');
//evalua que el valor y el tipo de dato sean iguales
if (dia === 0)
    console.log('Es domingo');
else if (dia === 1)
    console.log('Es lunes');
else if (dia === 2)
    console.log('Es martes');
console.log('No es lunes, marte o domingo...');