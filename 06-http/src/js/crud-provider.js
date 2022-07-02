//crud-provider.js
const urlCrud = 'https://reqres.in/api/users'

const getUsuario = async (id) => {
    const resp = await fetch(`${urlCrud}/${id}`);
    const { data } = await resp.json();
    return data;
}
const crearUsuario = async (usuario) => {
    const resp = await fetch(urlCrud, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getUsuario,
    crearUsuario
}