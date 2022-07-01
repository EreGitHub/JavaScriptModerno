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