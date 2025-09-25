// Widget K7 — Renderer logic (TypeScript)
// Tentativa v3

// Utilitário tipado para pegar elementos por id
const $ = <T extends HTMLElement>(id: string) =>
    document.getElementById(id) as T | null;

// Raiz do widget
const root = $('k7') as HTMLDivElement | null;

// Displays e botões principais
const timeDisplay = $('timeDisplay') as HTMLSpanElement | null;
const statusEl = $('status') as HTMLSpanElement | null;
const playpauseBtn = $('playpause') as HTMLButtonElement | null;
const logoBtn = $('logoBtn') as HTMLButtonElement | null;
const volUpBtn = $('volUp') as HTMLButtonElement | null;
const volDownBtn = $('volDown') as HTMLButtonElement | null;

// (opcional) botões da barra personalizada do widget
const minBtn = $('min-btn') as HTMLButtonElement | null;
const closeBtn = $('close-btn') as HTMLButtonElement | null;

// Logo (img)
const logoImg = $('logoImg') as HTMLImageElement | null;

// --- Resolver logo via Vite/ESM ---
// Observação: mantenha o arquivo como "tape-logo.png" em ../assets
if (logoImg) {
    logoImg.src = new URL('../assets/tape-logo.png', import.meta.url).href;
}

// ===== Estado do player (mock) =====
let playing = false;
let seconds = 0;
let volume = 5;
let timerHandle: number | undefined;

// mm:ss
const fmt = (s: number) =>
    Math.floor(s / 60).toString().padStart(2, '0') +
    ':' +
    (s % 60).toString().padStart(2, '0');

function tick(): void {
    seconds++;
    if (timeDisplay) timeDisplay.textContent = fmt(seconds);
}

function togglePlayPause(): void {
    playing = !playing;

    root?.classList.toggle('playing', playing);
    if (statusEl) statusEl.textContent = playing ? 'Reproduzindo' : 'Pausado';
    playpauseBtn?.setAttribute('aria-pressed', playing ? 'true' : 'false');
    if (playpauseBtn) playpauseBtn.title = playing ? 'Pausar' : 'Reproduzir';

    const sr = $('playpauseText') as HTMLElement | null;
    if (sr) sr.textContent = playing ? 'Pausar' : 'Reproduzir';

    if (timerHandle) window.clearInterval(timerHandle);
    if (playing) timerHandle = window.setInterval(tick, 1000);
}

// ===== Listeners =====
playpauseBtn?.addEventListener('click', togglePlayPause);

logoBtn?.addEventListener('click', () => {
    window.open(
        'https://github.com/miltonmateus/k7-widget?tab=readme-ov-file',
        '_blank'
    );
});

volUpBtn?.addEventListener('click', () => {
    if (volume < 10) volume++;
    console.log('Volume:', volume);
});

volDownBtn?.addEventListener('click', () => {
    if (volume > 0) volume--;
    console.log('Volume:', volume);
});

// ===== Botões de janela (se o preload expôs controls) =====
minBtn?.addEventListener('click', () => {
    if (window.controls?.hideToTray) window.controls.hideToTray();
    else window.controls?.minimize?.();
});

closeBtn?.addEventListener('click', () => {
    window.controls?.close?.();
});

export { }; // mantém como módulo ES
