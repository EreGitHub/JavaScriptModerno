const elMayor = (a, b) => (a > b) ? a : b;
console.log(elMayor(10, 20));

const tieneMembresia = (miembro) => (miembro) ? '2 Dolares' : '10 Dolares';
console.log(tieneMembresia(true));

const amigo = true;
amigosArr = [
    'pepe',
    'juan',
    'maria',
    amigo ? 'jose' : 'pedro',
    (() => 'Loki')(),
    elMayor(10, 20),
]
console.log(amigosArr);

const nota = 65;
const grado =
    nota >= 95 ? 'A+' :
        nota >= 90 ? 'A' :
            nota >= 85 ? 'B+' :
                nota >= 80 ? 'B' :
                    nota >= 75 ? 'C+' :
                        nota >= 70 ? 'c' : 'F';
console.log(grado);