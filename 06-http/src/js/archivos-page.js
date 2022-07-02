const body = document.body;
let inputFile, imgFoto;
const crearInputFileHtml = () => {
    const html = `
    <h1>subir archivos</h1>
    <hr>
    <label for="file">Seleccionar archivo:</label>   
    <input type="file" accept="image/png, image/jpeg"> 
    <br>
    <img id="id="foto" class="img-thumbnail" src="">
    `;
    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);
    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');
}
const eventos = () => {
    //se dispara cuando existe un cambio en el input file
    inputFile.addEventListener('change', (event) => {
        const file = event.target.files[0];
    });
}

export const init = () => {
    crearInputFileHtml();
    eventos();
}