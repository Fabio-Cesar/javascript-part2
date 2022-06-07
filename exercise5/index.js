let operando1 = NaN;
let operando2 = NaN;
let operador = null;

function calculo(num1, num2, op) {
    let result = null;
    if (isNaN(num1) || isNaN(num2)) {
        alert('Escolha os operandos!');
    }
    else {
        if (op == "soma") {
            result = num1 + num2
            console.log(result);
            document.querySelector("#resultado").innerText = result;
        }
        else if (op == "subtração") {
            result = num1 - num2
            console.log(result);
            document.querySelector("#resultado").innerText = result;
        }
        else if (op == "multiplicação") {
            result = num1 * num2
            console.log(result);
            document.querySelector("#resultado").innerText = result;
        }
        else if (op == "divisão") {
            result = num1 / num2
            console.log(result);
            document.querySelector("#resultado").innerText = result;
        }
        else {
            alert("Escolha uma operação!")
        }
    }
    
}

document.querySelector('#operando1').onblur = function() {
    operando1 = parseFloat(document.querySelector('#operando1').value, 10);
}

document.querySelector('#operando2').onblur = function() {
    operando2 = parseFloat(document.querySelector('#operando2').value, 10);
}

document.querySelector('#operador').onblur = function() {
    operador = document.querySelector('#operador').value;
}

document.querySelector('button[type="reset"]').onclick = function() {
    operando1 = NaN;
    operando2 = NaN;
    operador = null;
    document.querySelector("#resultado").innerText = '';
}

document.querySelector('#calcular').addEventListener('click', function() { calculo(operando1, operando2, operador) });