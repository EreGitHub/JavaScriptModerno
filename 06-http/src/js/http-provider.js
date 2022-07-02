//http-provider.js
const jokeUrl = 'https://api.chucknorris.io/jokes/random';

const obtenerChiste = async () => {
    try {
        const resp = await fetch(jokeUrl);
        if (!resp.ok) throw `No se pudo realizar la peticion`;
        const { icon_url, id, value } = await resp.json();
        return { icon_url, id, value };
    } catch (error) {
        throw Error(error);
    }
};

export {
    obtenerChiste
}