const herores = ['Batman', 'Superman', 'Flash', 'Mujer Maravilla'];
console.warn('--------For tradicional--------')
for (let i = 0; i < herores.length; i++) {
    //NOTE el "i" solo funciona en este scope
    console.log(herores[i]);
}
console.warn('--------For in--------')
for (let i in herores) {
    console.log(herores[i]);
}
console.warn('--------For of--------')
for (let heroe of herores) {
    console.log(heroe);
}   