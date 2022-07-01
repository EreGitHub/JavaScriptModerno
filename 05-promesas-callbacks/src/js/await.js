//await.js
import { buscarHeroeAsync } from "./promesas";

const heroesIds = ['capi', 'hulk', 'ironman'];
export const obtenerHeroesArr = async () => {
    const heroeArr = [];
    for (const id of heroesIds) {
        const heroe = await buscarHeroeAsync(id);
        heroeArr.push(heroe);
    }
    return heroeArr;
};