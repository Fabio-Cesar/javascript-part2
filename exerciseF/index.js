const startBtn = document.querySelector('#start');
const finishBtn = document.querySelector('#finish');
const minutes = document.querySelector('#minutes');
let minutesValue = undefined;
const seconds = document.querySelector('#seconds');
let secondsValue = undefined;
const counterMinutes = document.querySelector('#counter-minutes');
const counterSeconds = document.querySelector('#counter-seconds');
const alarmBeep = new Audio('./assets/audio/alarm.wav');
alarmBeep.loop = true;

function startAlarm() {
    startBtn.style.display = "none";
    finishBtn.style.display = "flex";
    minutesValue = parseInt(minutes.value);
    secondsValue = parseInt(seconds.value);
    counterMinutes.textContent = `${minutesValue}`;
    counterSeconds.textContent = `${secondsValue}`;
    const totalTime = minutesValue * 60000 + secondsValue * 1000;
    const alertTime = 0.95 * totalTime;
    intervalID = setInterval(countdown, 1000);
    timeoutID1 = setTimeout(notifyAlarm, alertTime);
    timeoutID2 = setTimeout(fireAlarm, totalTime);
}

function stopAlarm() {
    startBtn.style.display = "flex";
    finishBtn.style.display = "none";
    clearInterval(intervalID);
    clearTimeout(timeoutID1);
    clearTimeout(timeoutID2);
    counterMinutes.style.color = "";
    counterMinutes.style.fontSize = "";
    counterSeconds.style.color = "";
    counterSeconds.style.fontSize = "";
    alarmBeep.pause();
}

function notifyAlarm() {
    counterMinutes.style.color = "#ff0000";
    counterMinutes.style.fontSize = "120%";
    counterSeconds.style.color = "#ff0000";
    counterSeconds.style.fontSize = "120%";
}

function fireAlarm() {
    clearInterval(intervalID);
    alarmBeep.play();
}

function countdown() {
    if (secondsValue === 0) {
        minutesValue -= 1;
        secondsValue = 59;
    }
    else {
        secondsValue -= 1;
    }
    counterMinutes.textContent = `${minutesValue}`;
    counterSeconds.textContent = `${secondsValue}`;
}

startBtn.addEventListener('click', startAlarm)
finishBtn.addEventListener('click', stopAlarm)