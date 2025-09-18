import { contextBridge } from 'electron';

// expoe algo se precisar; por enquanto, vazio
contextBridge.exposeInMainWorld('k7', {});

