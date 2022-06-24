let dia = 3;
const diasLetra = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
};
console.log(diasLetra[dia] || 'Día no encontrado');

const diasLetra2 = {
    0: () => 'Domingo - 0',
    1: () => 'Lunes - 1',
    2: () => 'Martes - 2',
    3: () => 'Miercoles - 3',
    4: () => 'Jueves - 4',
    5: () => 'Viernes - 5',
    6: () => 'Sabado - 6'
};
console.log(diasLetra2[dia]() || 'Día no encontrado');

const diasLetra3 = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
];
console.log(diasLetra3[dia] || 'Día no encontrado');
