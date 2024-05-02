// Get references to the timer elements
const timerDisplay = document.getElementById('timer');
const timerMode = document.getElementById('mode');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

const timer = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
    sessions: 0,
};

let interval;

function getRemainingTime(endTime) {
    const currentTime = Date.parse(new Date());
    const difference = endTime - currentTime;

    const total = Number.parseInt(difference / 1000, 10);
    const minutes = Number.parseInt((total / 60) % 60, 10)
    const seconds = Number.parseInt(total % 60, 10);

    return {
        total,
        minutes,
        seconds
    };
}

function startTimer() {
    let { total } = timer.remainingTime;
    const endTime = Date.parse(new Date()) + total * 1000;

    if (timer.mode === "pomodoro") timer.sessions++;

    interval = setInterval(() => {
        timer.remainingTime = getRemainingTime(endTime);
        updateClock();

        total = timer.remainingTime.total;
        if (total <= 0) {
            clearInterval(interval);

            switch (timer.mode) {
                case 'pomodoro':
                    if (timer.sessions % timer.longBreakInterval === 0) {
                        switchMode('longBreak')
                    }
                    else {
                        switchMode('shortBreak');
                    }
                    break;
                default:
                    switchMode('pomodoro');
            }

            startTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function updateClock() {
    const { remainingTime } = timer;
    const minutes = `${remainingTime.minutes}`.padStart(2, '0');
    const seconds = `${remainingTime.seconds}`.padStart(2, '0');

    const min = document.getElementById('min');   
    const sec = document.getElementById('sec');
    min.textContent = minutes;
    sec.textContent = seconds;
}

function switchMode(mode) {
    timer.mode = mode;
    timer.remainingTime = {
        total: timer[mode] * 60,
        minutes: timer[mode],
        seconds: 0,
    };

    if (mode === 'shortBreak') {
        timerMode.textContent = 'Short Break';
    }
    else if (mode === 'longBreak') {
        timerMode.textContent = 'Long Break';
    }
    else timerMode.textContent = mode.charAt(0).toUpperCase() + mode.slice(1);

    updateClock();
}

switchMode('pomodoro');
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);