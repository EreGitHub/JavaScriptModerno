let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

//NOTE esta funcion crea un nuevo deck (barajas)
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo);
        }
    }

    // console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}
crearDeck();

//NOTE esta funcion me permite tomar una carta
const pedirCarta = () => {
    if (deck.length === 0)
        throw 'no hay cartas en el deck';

    const carta = deck.pop();
    console.log(carta);
    return carta;
}
// pedirCarta();

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    // let puntos = 0;
    // if (isNaN(valor))//NOTE evalua si es un numero
    //     puntos = (valor === 'A') ? 11 : 10;
    // else
    //     puntos = valor * 1;
    // console.log(puntos); 
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}

const valor = valorCarta(pedirCarta());
console.log({ valor });

