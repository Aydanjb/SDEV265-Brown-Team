// Get references to the timer elements
const timerDisplay = document.querySelector('#timer p');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

// Set initial timer value (in seconds)
const pomodoroDuration = 25 * 60; // 25 minutes

// Initialize timer state
let timer;
let remainingTime = pomodoroDuration;
let mode = 'pomodoro'; // Initial mode

// Function to update the timer display
function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Event listeners for buttons
startButton.addEventListener('click', () => {
    clearInterval(timer); // Clear any existing timers
    timer = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--;
            updateTimerDisplay();
        } else {
            // Switch to the next mode
            if (mode === 'pomodoro') {
                switchMode('shortBreak');
            } else if (mode === 'shortBreak') {
                switchMode('pomodoro');
            }
        }
    }, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(timer);
    updateTimerDisplay();
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    switchMode('pomodoro');
    updateTimerDisplay();
});

// Initial setup
updateTimerDisplay();
switchMode('pomodoro');