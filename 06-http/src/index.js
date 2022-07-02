//indesx.js principal
import * as CRUD from './js/crud-provider'

CRUD.getUsuario(1).then(console.log);
CRUD.crearUsuario({
    name: 'Juan',
    job: 'Desarrollador'
}).then(console.log);
CRUD.actualizarUsuario(1, {
    name: 'Juan123',
    job: 'Desarrollador123'
}).then(console.log);