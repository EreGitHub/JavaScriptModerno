//promesas.js
const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'aguartar inyecciones sin morir'
    },
    hulk: {
        nombre: 'Hulk',
        poder: 'su poder es destruir cosas'
    },
    ironman: {
        nombre: 'Ironman',
        poder: 'su poder es hacer cosas'
    }
}
export const buscarHeroe = (id) => {
    const heroe = heroes[id];
    return new Promise((resolve, reject) => {
        if (heroe)
            //lo que queremos regresar a la funcion
            //que esta llamando a esta promesa
            resolve(heroe);
        else
            reject(`no existe un heros con el id ${id}`);
    });
}

export const buscarHeroeAsync = async (id) => {
    const heroe = heroes[id];
    if (heroe)
        return heroe;
    else
        throw `no existe un heros con el id ${id}`;
    //throw Error(`no existe un heros con el id ${id}`);
}

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promesa lenta'), 2000);
});
const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promesa media'), 1500);
    //setTimeout(() => reject('promesa media'), 1500);
});
const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promesa rapida'), 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}