// Tipos globais do renderer/preload (Widget K7)
// Tentativa v1

export { }; // mantém como módulo para permitir `declare global`

declare global {
    interface ControlsAPI {
        minimize: () => Promise<void>;
        hideToTray: () => Promise<void>;
        close: () => Promise<void>;
        toggleMaximize: () => Promise<void>;
    }

    interface Window {
        /** API exposta pelo preload para controlar a janela */
        controls: ControlsAPI;
    }
}
