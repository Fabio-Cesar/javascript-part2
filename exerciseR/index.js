const inputNumber = document.querySelector("#number");
let inputValue = inputNumber.value;

function fatorial(num) {
    let result = BigInt(1);
    for (i=BigInt(2); i<=num; i += BigInt(1)) {
        result *= i;
        }
    return result;
}

function euler() {
    let result = BigInt(0);
    const precision = 1000n;
    for (j=0; j<=49; j += 1) {
        result += (1n * (10n ** precision)) / fatorial(j);
    }
    result = result.toString();
    numberInt = result.slice(0, 1);
    numberDec = result.slice(1, result.length);
    number = numberInt.concat(".", numberDec);
    return number;
}

function verificar(e) {
    const intNumbers = inputNumber.value;
    const keyPressed = parseInt(e.data);
    if (!isNaN(keyPressed) || e.data == null) {
        inputNumber.value = intNumbers;
        inputValue = intNumbers;
    }
    else {
        inputNumber.value = inputValue;
        alert('Digite somente números!');
    }
}

inputNumber.addEventListener('input', verificar);
inputNumber.addEventListener('change', () => {
    if (inputNumber.value == "") {
        alert('Não deixe o campo vazio!');
    }
    else {
        const number = BigInt(parseInt(inputNumber.value, 10));
        const fatoreie = fatorial(number);
        console.log(`Fatorial de ${number} = ${fatoreie}`);
        const eulereie = euler(number);
        console.log(`Número de Euler (50 termos e 1000 casas decimais) = ${eulereie}`);
    }
});