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

export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];
    if (heroe)
        callback(null, heroe);
    else
        callback(`no existe un heros con el id ${id}`);
}