const drawBtn = document.querySelector('#draw-cards');
const resetBtn = document.querySelector('#reset-button');
const cardsDrawn = document.querySelector('#cards-drawn');
const gameResult = document.querySelector('#result');
const naipes = ['paus', 'copas', 'ouro', 'espada'];

let baralho = [];
criarBaralho();

function criarBaralho() {
    for (i of naipes) {
        for (j = 2; j <= 14; j++) {
            const carta = {
                'naipe': i,
                'valor': j
            }
            baralho.push(carta);
        }
    }
}

function drawCard() {
    drawBtn.style.display = "none";
    resetBtn.style.display = "inline";
    const fiveCards = [];
    for (i = 1; i < 4; i++) {
        baralho.sort(randomSort);
    };
    const firstCard = baralho.pop();
    const secondCard = baralho.pop();
    const thirdCard = baralho.pop();
    const fourthCard = baralho.pop();
    const fifthCard = baralho.pop();
    fiveCards.push(firstCard, secondCard, thirdCard, fourthCard, fifthCard);
    showCards(fiveCards);
    checkCards(fiveCards);
};

function randomSort() {
    const random = Math.random();
    if (random < 0.5) {
        return -1;
    }
    else {
        return 1;
    };
};

function showCards(cards) {
    for (i of cards) {
        cardsDrawn.innerHTML += `<img src="./assets/img/${i.valor}${i.naipe}.svg" height="200">`
    };
};

function checkCards(cards) {
    cards.sort(sortByValue);
    if (cards[0].naipe === cards[1].naipe &&
        cards[0].naipe === cards[2].naipe &&
        cards[0].naipe === cards[3].naipe &&
        cards[0].naipe === cards[4].naipe &&
        cards[0].valor === cards[1].valor - 1 &&
        cards[0].valor === cards[2].valor - 2 &&
        cards[0].valor === cards[3].valor - 3 &&
        cards[0].valor === cards[4].valor - 4) {
            gameResult.innerHTML = 'Você fez um Straight Flush! Parabéns!';
    }
    else if (cards[0].valor === cards[1].valor &&
            cards[0].valor === cards[2].valor &&
            cards[0].valor === cards[3].valor ||
            cards[1].valor === cards[2].valor &&
            cards[1].valor === cards[3].valor &&
            cards[1].valor === cards[4].valor) {
        gameResult.innerHTML = 'Você fez uma Quadra! Parabéns!';
    }
    else if (cards[0].valor === cards[1].valor &&
            cards[2].valor === cards[3].valor &&
            cards[2].valor === cards[4].valor ||
            cards[0].valor === cards[1].valor &&
            cards[0].valor === cards[2].valor &&
            cards[3].valor === cards[4].valor) {
        gameResult.innerHTML = 'Você fez um Full House! Parabéns!';
    }
    else if (cards[0].valor === cards[1].valor - 1 &&
            cards[0].valor === cards[2].valor - 2 &&
            cards[0].valor === cards[3].valor - 3 &&
            cards[0].valor === cards[4].valor - 4) {
        gameResult.innerHTML = 'Você fez uma Sequência! Parabéns!';
    }
    else if (cards[0].valor === cards[1].valor &&
            cards[0].valor === cards[2].valor ||
            cards[1].valor === cards[2].valor &&
            cards[1].valor === cards[3].valor ||
            cards[2].valor === cards[3].valor &&
            cards[2].valor === cards[4].valor) {
        gameResult.innerHTML = 'Você fez uma Trinca!';
    }
    else if (cards[0].valor === cards[1].valor &&
            cards[2].valor === cards[3].valor ||
            cards[0].valor === cards[1].valor &&
            cards[3].valor === cards[4].valor ||
            cards[1].valor === cards[2].valor &&
            cards[3].valor === cards[4].valor) {
        gameResult.innerHTML = 'Você fez Dois Pares!';
    }
    else if (cards[0].valor === cards[1].valor ||
            cards[1].valor === cards[2].valor ||
            cards[2].valor === cards[3].valor ||
            cards[3].valor === cards[4].valor) {
        gameResult.innerHTML = 'Você fez um Par!';
    }
    else {
        gameResult.innerHTML = 'Você não fez nada! Que pena!';
    }
};

function sortByValue(card1, card2) {
    return card1.valor - card2.valor;
}

function reset() {
    resetBtn.style.display = "none";
    drawBtn.style.display = "inline";
    baralho = [];
    criarBaralho();
    cardsDrawn.innerHTML = '';
    gameResult.innerHTML = '';
};

drawBtn.addEventListener('click', drawCard);
resetBtn.addEventListener('click', reset);