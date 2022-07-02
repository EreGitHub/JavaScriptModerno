//http-provider.js
const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuario = 'https://reqres.in/api/users?page=2';
//clouddinary
const cloudPreset = 'ml_default';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dcbzlvdfk/upload';

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

const obtenerUsuario = async () => {
    const resp = await fetch(urlUsuario);
    const { data: usuarios } = await resp.json();
    return usuarios
}

const subirImagen = async (archivoSubir) => {
    //crea un resultado de un formulario
    //html pero creado en js
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);
    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })
        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}
export {
    obtenerChiste,
    obtenerUsuario,
    subirImagen
}