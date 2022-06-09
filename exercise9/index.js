function sortBrazil() {
    const randomNumber = Math.random() * 100;
    document.querySelector("#result-gender").textContent = 'Gênero: '
    document.querySelector("#result-age").textContent = 'Idoso (S/N)? ';
    if (randomNumber <= 48.3) {
        document.querySelector("#result-gender").textContent += 'Homem';
        if(randomNumber <= (48.3 * 0.167)) {
            document.querySelector("#result-age").textContent += 'S';
        }
        else {
            document.querySelector("#result-age").textContent += 'N';
        }
    }
    else {
        document.querySelector("#result-gender").textContent += 'Mulher';
        if(randomNumber <= (51.7 * 0.167 + 48.3)) {
            document.querySelector("#result-age").textContent += 'S';
        }
        else {
            document.querySelector("#result-age").textContent += 'N';
        }
    }
}

document.querySelector('#sort').addEventListener('click', function() { sortBrazil() });