let num1 = NaN;
let num2 = NaN;

function comparenumbers(a, b) {
    let result = null;
    if (a < b) {
        result = 'O primeiro número é menor do que o segundo';
    }
    else if (a > b) {
        result = 'O primeiro número é maior do que o segundo';
    }
    else if (isNaN(a) | isNaN(b)) {
        result = "Informe os dois números";
    }
    else {
        result = 'Os dois números são iguais';
    }
    document.querySelector("#result").innerText = result;
}

document.querySelector('#number1').onblur = function () {
    num1 = parseFloat(document.querySelector("#number1").value);
}

document.querySelector('#number2').onblur = function () {
    num2 = parseFloat(document.querySelector("#number2").value);
}

document.querySelector('button[type="reset"]').onclick = function () {
    num1 = NaN;
    num2 = NaN;
}

document.querySelector("#compare").addEventListener('click', function(){ comparenumbers(num1, num2) });