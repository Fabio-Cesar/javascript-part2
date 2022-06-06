let text1 = '';
let text2 = '';

function comparestrings(a,b) {
    let result = null;
    if (a.length < b.length) {
        result = 'Primeiro texto é menor do que o segundo';
    }
    else if (a.length > b.length) {
        result = 'Primeiro texto é maior do que o segundo';
    }
    else {
        result = 'Os textos possuem o mesmo tamanho';
    }
    document.querySelector("#result").innerText = result;
}

document.querySelector('#text1').onblur = function () {
    text1 = document.querySelector("#text1").value;
}

document.querySelector('#text2').onblur = function () {
    text2 = document.querySelector("#text2").value;
}

document.querySelector('button[type="reset"').onclick = function () {
    text1 = '';
    text2 = '';
}

document.querySelector("#compare").addEventListener('click', function(){ comparestrings(text1, text2) });