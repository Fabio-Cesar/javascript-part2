function calcimc() {
    const weight = parseFloat(document.getElementById('weight').value.replace(',', '.'), 10);
    const height = parseFloat(document.getElementById('height').value.replace(',', '.'), 10);
    document.querySelector("#result").innerText = '';
    if (isNaN(weight) || isNaN(height)) {
        alert("Algum dos valores inseridos é inválido! Insira somente números!")
    }
    else {
        const imc = weight / (height * height);
        document.querySelector("#result").innerText += "IMC = " + imc;
        if (imc < 18.5) {
            document.querySelector("#result").innerText += " (abaixo do peso)";
        }
        else if (imc < 25) {
            document.querySelector("#result").innerText += " (peso normal)";
        }
        else if (imc < 30) {
            document.querySelector("#result").innerText += " (acima do peso)";
        }
        else {
            document.querySelector("#result").innerText += " (obesidade)";
        }
    }
}

document.querySelector('#calc').addEventListener('click', function() { calcimc() });