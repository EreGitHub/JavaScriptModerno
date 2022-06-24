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
pedirCarta();
console.log(deck);
