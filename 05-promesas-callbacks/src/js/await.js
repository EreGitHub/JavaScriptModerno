//await.js
import { buscarHeroeAsync } from "./promesas";

const heroesIds = ['capi', 'hulk', 'ironman'];
export const obtenerHeroesArr = async () => {
    const heroeArr = [];
    for (const id of heroesIds) {
        heroeArr.push(buscarHeroeAsync(id));
    }
    return await Promise.all(heroeArr);
};

export const obtenerHeroesArr1 = async () =>
    await Promise.all(heroesIds.map(buscarHeroeAsync));

export const obtenerHeroeAwait = async (id) => {
    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (error) {
        console.warn(error);
        return {
            nombre: 'sin nombre',
            poder: 'sin poder'
        }
    }
}