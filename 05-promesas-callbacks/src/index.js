//index.js principal
import { obtenerHeroesArr } from './js/await'

obtenerHeroesArr().then(heroes => console.table(heroes));