const cepInput = document.querySelector('#cep');
let InputContent = cepInput.value;

function verificar(e) {
    const cepNumbers = cepInput.value;
    const keyPressed = parseInt(e.data);
    if (!isNaN(keyPressed) || e.data == null) {
        cepInput.value = cepNumbers;
        InputContent = cepNumbers;
    }
    else {
        cepInput.value = InputContent;
        alert('Digite somente números!');
    }
}

function cephifen() {
    const cepCheck = cepInput.value.length;
    switch(cepCheck) {
        case(5):
        cepInput.value += '-';
    }
    if (cepCheck > 9) {
        cepInput.value = cepInput.value.slice(0, -1);
        alert('Um CEP contém 8 números!');
    }
}

function backspace(e) {
    const hifen = cepInput.value.length;
    switch(hifen) {
        case(6):
            if (e.key == 'Backspace') {
                cepInput.value = cepInput.value.replace('-', '');
            }
    }
}

cepInput.addEventListener('input', verificar);
cepInput.addEventListener('keyup', cephifen);
cepInput.addEventListener('keydown', backspace);