//indesx.js principal
import * as CRUD from './js/crud-provider'

CRUD.getUsuario(1).then(console.log);
CRUD.crearUsuario({
    name: 'Juan',
    job: 'Desarrollador'
}).then(console.log);