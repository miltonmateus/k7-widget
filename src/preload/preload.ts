// Widget K7 — Preload (TypeScript)
// Tentativa v3
import { contextBridge, ipcRenderer } from 'electron';

// Usa os tipos globais definidos em src/types/globals.d.ts
const controls: ControlsAPI = {
    minimize: () => ipcRenderer.invoke('window:minimize'),
    hideToTray: () => ipcRenderer.invoke('window:hideToTray'),
    close: () => ipcRenderer.invoke('window:close'),
    toggleMaximize: () => ipcRenderer.invoke('window:toggleMaximize'),
};

// Expõe API segura no contexto da página (renderer)
contextBridge.exposeInMainWorld('controls', controls);

export { }; // mantém como módulo ES
