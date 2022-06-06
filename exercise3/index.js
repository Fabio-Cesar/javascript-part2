let years = NaN;
let months = NaN;
let days = NaN;
let gender = null;

function daysremaining(a, b, c, d) {
    let result = null;
    const radiocheck = document.querySelector('input[name="gender"]:checked');
    if (radiocheck) {
        if (isNaN(a) | isNaN(b) | isNaN(c)) {
            alert('Informe sua idade!');
        }
        else {
            if (d == 'female') {
                const lifeexpectancy = 80.1 * 365;
                const age = a * 365 + b * 30 + c;
                if (age > lifeexpectancy) {
                    result = 'Parabéns, você já viveu mais do que a expectativa de morte para o seu gênero!'
                }
                else {
                    const daysremaining = lifeexpectancy - age;
                    result = 'Você tem ' + daysremaining + ' dias de vida restantes';
                }
            }
            if (d == 'male') {
                const lifeexpectancy = 73.1 * 365;
                const age = a * 365 + b * 30 + c;
                if (age > lifeexpectancy) {
                    result = 'Parabéns, você já viveu mais do que a expectativa de morte para o seu gênero!'
                }
                else {
                    const daysremaining = lifeexpectancy - age
                    result = 'Você tem ' + daysremaining + ' dias de vida restantes';
                }
            }
            document.querySelector("#result").innerText = result
        }
    }
    else {
        alert('Escolha um gênero!');
    }
} 

document.querySelector('#female').onclick = function () {
    gender = document.querySelector('#female').value;
}

document.querySelector('#male').onclick = function () {
    gender = document.querySelector('#male').value;
}

document.querySelector('#years').onblur = function () {
    years = parseInt(document.querySelector("#years").value);
}

document.querySelector('#months').onblur = function () {
    months = parseInt(document.querySelector("#months").value);
}

document.querySelector('#days').onblur = function () {
    days = parseInt(document.querySelector("#days").value);
}

document.querySelector('button[type="reset"]').onclick = function () {
    years = NaN;
    months = NaN;
    days = NaN;
}

document.querySelector('#discover').addEventListener ('click', function() { daysremaining(years, months, days, gender) });