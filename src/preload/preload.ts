// src/preload/preload.ts
import { contextBridge } from 'electron';

// Exemplo de API segura (pode ficar vazio por enquanto)
contextBridge.exposeInMainWorld('k7', {
    ping: () => 'pong'
});
