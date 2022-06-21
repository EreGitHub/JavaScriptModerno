const regresaTrue = () => {
    console.log('regresa true');
    return true;
}
const regresaFalse = () => {
    console.log('regresa false');
    return false;
}

console.log('not o la negacion');
console.log(true);//true
console.log(!true);//false
console.log(!false);//true

console.log(!regresaFalse());//true
console.log('AND')
console.log(true && true);//true
console.log(true && false);//false
console.log(true && !false);//true
console.log(regresaFalse() && regresaTrue());//false
console.log(regresaTrue() && regresaFalse());//false
//NOTE ejecutancion de funciones
//NOTE aqui va ejecutar la primera funcion y luego la segunda
regresaTrue() && regresaFalse()
//NOTE aqui va ejecutar solo la primera funcion
regresaFalse() && regresaTrue()
console.log('OR')
console.log(true || false);//true
console.log(false || false);//false
//NOTE aqui solo ejecuta la primera funcion
console.log(regresaTrue() || regresaFalse());//true
console.log(regresaFalse() || regresaTrue());//true
