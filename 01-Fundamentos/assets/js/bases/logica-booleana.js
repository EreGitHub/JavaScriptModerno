const regresaTrue = () => {
    console.log('regresa true');
    return true;
}

console.log('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

//pregunta si la primera evaluacion tiene valor
//pasa a la siguiente preguntando si tiene valor 
//si la tercera tiene valor
//entonces toma ese valor
//en conclusion toma el ultimo valor
const a1 = true && 'hola mundo' && 150;
console.log({ a1 });//150
//aqui no evalua las demas condiciones
//nada porque la primera me arroja false
const a2 = false && 'hola mundo' && 150;
console.log({ a2 });//false
const a3 = 'hola' && 'mundo';
console.log({ a3 });//mundo
const a4 = soyFalso || 'Ya no soy falso';
console.log({ a4 });//Ya no soy falso
const a5 = soyFalso || soyUndefined || soyNull || 'Ya no soy false de nuevo' || true;
console.log({ a5 });//Ya no soy false de nuevo
const a6 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy false de nuevo' || true;
console.log({ a6 });//true

