const tictactoe = document.querySelectorAll('.tictactoe');
const endGameContainer = document.querySelector('#end-game-container');
const gameResult = document.querySelector('#result');
const resetBtn = document.querySelector('#reset-button');
let arrayX = 0;
let arrayY = 0;
let jogador = 'X';
let endGame = false;
const tictactoeArray = [[null,null,null],[null,null,null],[null,null,null]];

for (i of tictactoe) {
    i.dataset.coordenadaX = arrayX;
    i.dataset.coordenadaY = arrayY;
    const chosenSquare = i;
    i.addEventListener('click', () => { playTictactoe(chosenSquare) });
    if (arrayY === 2) {
        arrayY = 0;
        arrayX++;
    }
    else {
        arrayY++;
    };
};

function playTictactoe(target) {
    if (target.dataset.valor !== undefined) {
        return;
    };
    if (endGame) {
        return;
    };
    target.dataset.valor = jogador;
    target.textContent = jogador;
    tictactoeArray[target.dataset.coordenadaX][target.dataset.coordenadaY] = jogador;
    if (jogador === 'X') {
        jogador = 'O';
    }
    else {
        jogador = 'X';
    };
    checkWinner();
};

function checkWinner() {
    if (tictactoeArray[0][0] !== null) {
        if (tictactoeArray[0][0] === tictactoeArray[0][1] && tictactoeArray[0][0] === tictactoeArray[0][2] ||
            tictactoeArray[0][0] === tictactoeArray[1][0] && tictactoeArray[0][0] === tictactoeArray[2][0] ||
            tictactoeArray[0][0] === tictactoeArray[1][1] && tictactoeArray[0][0] === tictactoeArray[2][2]) {
            const winner = tictactoeArray[0][0];
            gameResult.textContent = `O jogador ${winner} venceu!`;
            endGameContainer.style.display = 'flex';
            endGame = true;
            return;
        };
    };
    if (tictactoeArray[0][1] !== null) {
        if (tictactoeArray[0][1] === tictactoeArray[1][1] && tictactoeArray[0][1] === tictactoeArray[2][1]) {
            const winner = tictactoeArray[0][1];
            gameResult.textContent = `O jogador ${winner} venceu!`;
            endGameContainer.style.display = 'flex';
            endGame = true;
            return;
        };
    };
    if (tictactoeArray[0][2] !== null) {
        if (tictactoeArray[0][2] === tictactoeArray[1][2] && tictactoeArray[0][2] === tictactoeArray[2][2] ||
            tictactoeArray[0][2] === tictactoeArray[1][1] && tictactoeArray[0][2] === tictactoeArray[2][0]) {
            const winner = tictactoeArray[0][2];
            gameResult.textContent = `O jogador ${winner} venceu!`;
            endGameContainer.style.display = 'flex';
            endGame = true;
            return;
        };
    };
    if (tictactoeArray[1][0] !== null) {
        if (tictactoeArray[1][0] === tictactoeArray[1][1] && tictactoeArray[1][0] === tictactoeArray[1][2]) {
            const winner = tictactoeArray[1][0];
            gameResult.textContent = `O jogador ${winner} venceu!`;
            endGameContainer.style.display = 'flex';
            endGame = true;
            return;
        };
    };
    if (tictactoeArray[2][0] !== null) {
        if (tictactoeArray[2][0] === tictactoeArray[2][1] && tictactoeArray[2][0] === tictactoeArray[2][2]) {
            const winner = tictactoeArray[2][0];
            gameResult.textContent = `O jogador ${winner} venceu!`;
            endGameContainer.style.display = 'flex';
            endGame = true;
            return;
        };
    };
    let continueGame = 9;
    for (i of tictactoeArray) {
        for (j of i) {
            if (j !== null) {
                continueGame--;
            };
        };
    };
    if (continueGame === 0) {
        gameResult.textContent = `O jogo empatou!`;
        endGameContainer.style.display = 'flex';
        endGame = true;
        return;
    };
};

function reset() {
    endGame = false;
    jogador = 'X';
    for (i of tictactoe) {
        i.removeAttribute('data-valor');
        i.textContent = '';
    };
    for (i = 0; i <= 2; i++) {
        for (j = 0; j <= 2; j++) {
            tictactoeArray[i][j] = null;
        };
    };
    gameResult.textContent = '';
    endGameContainer.style.display = 'none';
};

resetBtn.addEventListener('click', reset);