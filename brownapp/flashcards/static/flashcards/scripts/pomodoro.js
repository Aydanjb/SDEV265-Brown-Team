// DOM Element Variables
const timerDisplay = document.getElementById('timer');
const timerMode = document.getElementById('mode');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

// Creates a timer object that contains the time for each mode
const timer = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
    sessions: 0,
};

let interval;

// Gets the remaining time of the timer
function getRemainingTime(endTime) {
    // Parses the current time
    const currentTime = Date.parse(new Date());

    // Calculates the difference between the end time and the current time
    const difference = endTime - currentTime;

    // Converts the difference from milliseconds to seconds
    const total = Number.parseInt(difference / 1000, 10);

    // Gets the remaining minutes
    const minutes = Number.parseInt((total / 60) % 60, 10);

    // Gets the remaining seconds
    const seconds = Number.parseInt(total % 60, 10);

    // Returns the remaining time
    return {
        total,
        minutes,
        seconds
    };
}

// Starts the timer
function startTimer() {
    // Gets the total time remaining
    let { total } = timer.remainingTime;

    // Gets the end time
    const endTime = Date.parse(new Date()) + total * 1000;

    // Increments the number of sessions
    if (timer.mode === "pomodoro") timer.sessions++;

    // Updates the timer display
    interval = setInterval(() => {
        // Updates the remaining time and updates the clock
        timer.remainingTime = getRemainingTime(endTime);
        updateClock();

        // Checks if the timer has ended
        // If the timer has ended, switch the mode and start the timer
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

// Stops the timer
function stopTimer() {
    clearInterval(interval);
}

// Updates the timer display
function updateClock() {
    // Gets the remaining time
    const { remainingTime } = timer;

    // Formats the remaining time
    const minutes = `${remainingTime.minutes}`.padStart(2, '0');
    const seconds = `${remainingTime.seconds}`.padStart(2, '0');

    // Updates the timer display
    const min = document.getElementById('min');   
    const sec = document.getElementById('sec');
    min.textContent = minutes;
    sec.textContent = seconds;
}

// Sets the timer's mode
function switchMode(mode) {
    // Sets the timer's mode and time
    timer.mode = mode;
    timer.remainingTime = {
        total: timer[mode] * 60,
        minutes: timer[mode],
        seconds: 0,
    };

    // Updates the timer mode display
    if (mode === 'shortBreak') {
        timerMode.textContent = 'Short Break';
    }
    else if (mode === 'longBreak') {
        timerMode.textContent = 'Long Break';
    }
    else timerMode.textContent = mode.charAt(0).toUpperCase() + mode.slice(1);

    // Updates the timer display
    updateClock();
}

// Initializes the timer
switchMode('pomodoro');

// Adds event listeners to start and stop the timer
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);