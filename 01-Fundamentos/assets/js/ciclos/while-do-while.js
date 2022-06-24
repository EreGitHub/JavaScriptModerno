const carros = ['BMW', 'FORD', 'AUDI', 'CHEVETTE'];
let i = 0;
while (i < carros.length) {
    console.log(carros[i]);
    i++;
}
while (carros[i]) {
    if (i === 1) {
        //break;

        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}

console.log('do-while');
const carros1 = ['BMW', 'FORD', 'AUDI', 'CHEVETTE'];
let j = 0;
do {
    console.log(carros1[j]);
    j++;
} while (carros1[j]);
//NOTE ejecuta miestras carros1 en la posicion "j" tenga un valor