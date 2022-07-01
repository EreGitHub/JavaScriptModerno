//index.js principal
import { obtenerHeroesArr, obtenerHeroeAwait } from './js/await'

console.time('await')
obtenerHeroeAwait('capi1')
    .then(heroes => {
        console.log(heroes);
        console.timeEnd('await')
    })
    .catch(err => console.warn(err));