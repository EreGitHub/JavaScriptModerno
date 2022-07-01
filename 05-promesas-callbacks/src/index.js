import { buscarHeroe as buscarHereoCallback } from './js/callbacks'
import { buscarHeroe } from './js/promesas'
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'hulk';
buscarHeroe(heroeId1)
    .then(hereo => {
        console.log(`enviando a la mision a ${hereo.nombre}`);
    });
console.log('fin de programa');

// buscarHeroe(heroeId1, (err, heroe1) => {
//     if (err) return console.error(err);
//     buscarHeroe(heroeId2, (err, heroe2) => {
//         if (err) return console.error(err);
//         buscarHeroe(heroeId2, (err, heroe3) => {
//             if (err) return console.error(err);
//             console.log(`enviando a ${heroe1.nombre} y ${heroe2.nombre}`);
//         });
//     });
// });