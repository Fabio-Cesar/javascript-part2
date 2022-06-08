function findnumbers() {
    const number = parseFloat(document.querySelector('#number').value.replace(',', '.'), 10);
    if (isNaN(number)) {
        alert('Você não digitou um número!');
    }
    else {
        if (number % 1 === 0) {
            alert('O número precisa ser não inteiro!');
        }
        else {
            const higherNumber = Math.ceil(number);
            const lowerNumber = Math.floor(number);
            document.querySelector("#result").innerText = `Número inteiro menor mais próximo: ${lowerNumber}.
            Número inteiro maior mais próximo: ${higherNumber}.`;
        }
    }
}

document.querySelector('#find').addEventListener('click', function() { findnumbers() });