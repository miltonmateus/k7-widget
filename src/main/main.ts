import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow() {
    const win = new BrowserWindow({
        width: 480,
        height: 420,
        webPreferences: {
            preload: path.join(__dirname, '../preload/preload.js'),
        },
    });

    const devUrl =
        process.env.ELECTRON_RENDERER_URL || // definido pelo plugin do Forge
        process.env.VITE_DEV_SERVER_URL ||   // fallback
        'http://localhost:5173';             // último recurso (bate com seu log)

    if (!app.isPackaged) {
        win.loadURL(devUrl);
    } else {
        win.loadFile(path.join(__dirname, '../renderer/index.html'));
    }
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
