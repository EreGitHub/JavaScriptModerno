let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
let puntosJugador = 0;
let puntosCpu = 0;

//NOTE referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-carta');
const divCartasCpu = document.querySelector('#computadora-carta');

const puntosHTML = document.querySelectorAll('small');

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
    return carta;
}

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}

//NOTE turno de la cpu
const turnoCpu = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        puntosCpu += valorCarta(carta);
        puntosHTML[1].innerText = puntosCpu;
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasCpu.append(imgCarta);
        //divCartasJugador.appendChild(cartaHTML);
        if (puntosMinimos > 21)
            break;
    } while ((puntosCpu < puntosMinimos) && (puntosMinimos <= 21));
    setTimeout(() => {
        if (puntosCpu === puntosMinimos) {
            alert('empate :(');
        } else if (puntosMinimos > 21) {
            alert('cpu gana :D');
        } else if (puntosCpu > 21) {
            alert('jugador gana')
        } else {
            alert('cpu gana :D');
        }
    }, 10);
}

//NOTE eventos
//el primer parametro es el nombre del evento y el segundo es la funcion callback
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoCpu(puntosJugador);
        console.log('perdites')
    } else if (puntosJugador === 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoCpu(puntosJugador);
        console.log('ganaste')
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoCpu(puntosJugador);
});

// btnNuevo.addEventListener('click', () => {
//     location.reload();//recarga la pagina
// }, false);
btnNuevo.addEventListener('click', () => {
    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosCpu = 0;
    puntosHTML[0].innerText = puntosJugador;
    puntosHTML[1].innerText = puntosCpu;
    divCartasJugador.innerHTML = '';
    divCartasCpu.innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false;
});