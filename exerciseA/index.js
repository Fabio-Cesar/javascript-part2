function numberInWords() {
    const number = parseFloat(document.querySelector('#number').value, 10);
    let result = '';
    document.querySelector('#result').innerText = result;
    if (isNaN(number)) {
        alert('Digite um número!');
    }
    else if (number % 1 === 0) {
        if ((number >= 0) && (number <= 10)) {
            switch(number) {
                case 0:
                    result += "Zero";
                    break;
                case 1:
                    result += "Um";
                    break;
                case 2:
                    result += "Dois";
                    break;
                case 3:
                    result += "Três";
                    break;
                case 4:
                    result += "Quatro";
                    break;
                case 5:
                    result += "Cinco";
                    break;
                case 6:
                    result += "Seis";
                    break;
                case 7:
                    result += "Sete";
                    break;
                case 8:
                    result += "Oito";
                    break;
                case 9:
                    result += "Nove";
                    break;
                case 10:
                    result += "Dez";
            }
            document.querySelector('#result').innerText = result;
        }
        else {
            alert('O número deve ser de 0 a 10!');
        }
    }
    else {
        alert('O número deve ser inteiro!')
    }
}

document.querySelector('#inwords').addEventListener('click', numberInWords);