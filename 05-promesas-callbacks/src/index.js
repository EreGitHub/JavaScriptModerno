import { buscarHeroe } from './js/promesas'
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'hulk';
Promise.all([true, 'hola', 123]).then(console.log);
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then(([heroe]) => console.log(heroe));
console.log('fin de programa');