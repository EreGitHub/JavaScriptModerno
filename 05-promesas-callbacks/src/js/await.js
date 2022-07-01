//await.js
import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = ['capi', 'hulk', 'ironman'];
//const heroesPromesas = heroesIds.map(id => buscarHeroe(id));
const heroesPromesas = heroesIds.map(buscarHeroe);

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

export const heroesCiclo = async () => {
    console.time('heroesCiclo')
    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.log(heroe));

    for await (const heroe of heroesPromesas)
        console.log(heroe);

    //hacer de esta manera no es la corecta 
    //por que ejecuta todo el codigo de la funcion y llega al forEach
    //crear promesas y dentro de esas promesas espera la resolucion 
    //mientras hace eso el codigo de mi programa termino la funcion
    //heroesPromesas.forEach(async (heroe) => console.log(await heroe));

    console.timeEnd('heroesCiclo')
}

export const heroeIfAwait = async (id) => {
    if ((await buscarHeroeAsync(id)).nombre === 'Ironman') {
        console.log('es el mejor de todos');
    } else {
        console.log('no es el mejor de todos');
    }
}