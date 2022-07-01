import { buscarHeroe } from './js/promesas'
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'hulk';
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then(([heroe]) => console.log(heroe))
    .catch(console.error)
    .finally(() => console.log('finalizado el promise.all'));
console.log('fin de programa');