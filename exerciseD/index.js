const litBomb = document.querySelector('#lit-bomb');
const unlitBomb = document.querySelector('#unlit-bomb');
const explosionImage = document.querySelector('#explosion-image');
const explosionSound = document.querySelector('#explosion-sound');
litBomb.style.display = "flex";
const timeoutID = setTimeout(bombTimeout, 10000);

function bombTimeout() {
    explosionSound.play();
    litBomb.style.display = "none";
    explosionImage.style.display = "flex";
};

function bombClear() {
    clearTimeout(timeoutID);
    litBomb.style.display = "none";
    unlitBomb.style.display = "flex";
};

litBomb.addEventListener('click', bombClear);