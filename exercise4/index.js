const today = new Date();
const todayyear = today.getFullYear();
const todaymonth = today.getMonth()+1;
const todaydate = today.getDate();
let gender = null;
let birth = [NaN, NaN, NaN];

function daysremaining(a, b, c, d, e) {
    let result = null;
    const year = a - d[0];
    const month = b - d[1];
    const date = c - d[2];
    const radiocheck = document.querySelector('input[name="gender"]:checked');
    if (radiocheck) {
        if (isNaN(d[0]) | isNaN(d[1]) | isNaN(d[2])) {
            alert('Informe sua idade!');
        }
        else {
            if (e == 'female') {
                const lifeexpectancy = 80.1 * 365;
                const age = year * 365 + month * 30 + date;
                if (age > lifeexpectancy) {
                    result = 'Parabéns, você já viveu mais do que a expectativa de morte para o seu gênero!'
                }
                else {
                    const daysremaining = lifeexpectancy - age;
                    result = 'Você tem ' + daysremaining + ' dias de vida restantes';
                }
            }
            if (e == 'male') {
                const lifeexpectancy = 73.1 * 365;
                const age = year * 365 + month * 30 + date;
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

document.querySelector('#birthday').onblur = function() {
    getvalues = document.querySelector('#birthday').value;
    birth = getvalues.split('-');
    birth[0] = parseInt(birth[0]);
    birth[1] = parseInt(birth[1]);
    birth[2] = parseInt(birth[2]);
}

document.querySelector('#female').onclick = function () {
    gender = document.querySelector('#female').value;
}

document.querySelector('#male').onclick = function () {
    gender = document.querySelector('#male').value;
}

document.querySelector('button[type="reset"]').onclick = function () {
    birth = [NaN, NaN, NaN];
}

document.querySelector('#discover').addEventListener ('click', function() { daysremaining(todayyear, todaymonth, todaydate, birth, gender) });