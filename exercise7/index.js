function sortnumber() {
    let min = document.getElementById('min-number').value;
    let max = document.getElementById('max-number').value;
    if (parseInt(min) == min && parseInt(max) == max) {
        min = parseInt(min, 10);
        max = parseInt(max, 10);
        if (min < max) {
            const random = Math.random() * (max - min) + min;
            document.querySelector("#result").innerText = random.toFixed(3);
        }
        else {
            alert('O número mínimo não pode ser maior do que o máximo!');
        }
    }
    else {
        alert('Algum dos valores digitados não é inteiro!');
    }
}

document.querySelector('#sort').addEventListener('click', function() { sortnumber() });