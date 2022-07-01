//index.js principal
import { buscarHeroe, buscarHeroeAsync } from './js/promesas'
buscarHeroe('capi').then(console.log).catch(console.error);
buscarHeroeAsync('capi').then(console.log).catch(console.error);
