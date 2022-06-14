const litBomb = document.querySelector('#lit-bomb');
const unlitBomb = document.querySelector('#unlit-bomb');
const explosionImage = document.querySelector('#explosion-image');
const explosionSound = document.querySelector('#explosion-sound');
litBomb.style.display = "flex";
const interval = setInterval(bombTimer, 1000);
let time = 59;
const timeText = document.querySelector('#timer');
const timeSound = document.querySelector('#tick');
const timeout = setTimeout(bombExplosion, 60000);

function bombExplosion() {
    explosionSound.play();
    litBomb.style.display = "none";
    explosionImage.style.display = "flex";
    clearInterval(interval);
};

function bombTimer() {
    timeText.textContent = time;
    timeSound.play();
    time -= 1;
};

function clearTimer() {
    clearInterval(interval);
    clearTimeout(timeout);
    litBomb.style.display = "none";
    unlitBomb.style.display = "flex";
};

litBomb.addEventListener('click', clearTimer);