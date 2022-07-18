import { cepInput, cepSearch } from "../index.js";

export function verificarcep(e) {
    let InputContent = cepInput.value.slice(0, -1);
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

export function cephifen() {
    const cepCheck = cepInput.value.length;
    switch(cepCheck) {
        case(5):
        cepInput.value += '-';
    }
    if (cepCheck === 9) {
        cepSearch.style.display = 'inline';
    }
    else {
        cepSearch.style.display = "none";
    }
    if (cepCheck > 9) {
        cepInput.value = cepInput.value.slice(0, -1);
        alert('Um CEP contém 8 números!');
        cepSearch.style.display = 'inline';
    }
}

export function backspacecep(e) {
    const hifen = cepInput.value.length;
    switch(hifen) {
        case(6):
            if (e.key == 'Backspace') {
                cepInput.value = cepInput.value.replace('-', '');
            }
    }
}