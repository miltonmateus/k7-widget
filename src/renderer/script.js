const root = document.getElementById('k7');
const timeDisplay = document.getElementById('timeDisplay');
const statusEl = document.getElementById('status');
const playpauseBtn = document.getElementById('playpause');
const stopBtn = document.getElementById('stop');
const logoBtn = document.getElementById('logoBtn');
const volUpBtn = document.getElementById('volUp');
const volDownBtn = document.getElementById('volDown');

let playing = false;
let timer = null;
let seconds = 0;
let volume = 5;

const fmt = (s) =>
    (s / 60 | 0).toString().padStart(2, '0') + ":" + (s % 60).toString().padStart(2, '0');

function tick() {
    seconds++;
    timeDisplay.textContent = fmt(seconds);
}

function togglePlayPause() {
    playing = !playing;
    root.classList.toggle('playing', playing);
    statusEl.textContent = playing ? 'Reproduzindo' : 'Pausado';
    playpauseBtn.setAttribute('aria-pressed', playing ? 'true' : 'false');
    clearInterval(timer);
    if (playing) timer = setInterval(tick, 1000);
}

playpauseBtn.addEventListener('click', togglePlayPause);

stopBtn.addEventListener('click', () => {
    playing = false;
    root.classList.remove('playing');
    seconds = 0;
    timeDisplay.textContent = '00:00';
    statusEl.textContent = 'Parado';
    clearInterval(timer);
    playpauseBtn.setAttribute('aria-pressed', 'false');
});

logoBtn.addEventListener('click', () => {
    window.open('https://example.com', '_blank');
});

volUpBtn.addEventListener('click', () => {
    if (volume < 10) volume++;
    console.log('Volume:', volume);
});
volDownBtn.addEventListener('click', () => {
    if (volume > 0) volume--;
    console.log('Volume:', volume);
});
