const root = document.getElementById('k7');
const timeDisplay = document.getElementById('timeDisplay');
const statusEl = document.getElementById('status');
const playpauseBtn = document.getElementById('playpause');
const logoBtn = document.getElementById('logoBtn');
const volUpBtn = document.getElementById('volUp');
const volDownBtn = document.getElementById('volDown');

/* ---- LOGO via Vite ----
   Se o arquivo ainda se chama "tape logo.png", esta linha resolve ok.
   Se renomear para "tape-logo.png", troque o caminho. */
const logoImg = document.getElementById('logoImg');
logoImg.src = new URL('../assets/tape-logo.png', import.meta.url).href;
// logoImg.src = new URL('../assets/tape-logo.png', import.meta.url).href;

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

    playpauseBtn.title = playing ? 'Pausar' : 'Reproduzir';
    const sr = document.getElementById('playpauseText');
    if (sr) sr.textContent = playing ? 'Pausar' : 'Reproduzir';

    clearInterval(timer);
    if (playing) timer = setInterval(tick, 1000);
}

playpauseBtn.addEventListener('click', togglePlayPause);

logoBtn.addEventListener('click', () => {
    window.open('https://github.com/miltonmateus/k7-widget?tab=readme-ov-file', '_blank');
});

volUpBtn.addEventListener('click', () => {
    if (volume < 10) volume++;
    console.log('Volume:', volume);
});
volDownBtn.addEventListener('click', () => {
    if (volume > 0) volume--;
    console.log('Volume:', volume);
});
