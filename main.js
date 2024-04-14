import { app } from 'electron';
import { BrowserWindow } from "electron";
import path from "path";
import isDev from 'electron-is-dev';

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
      },
    });
    const startURL = isDev
    ? 'http://localhost:5173'
    : `file://${path.join(__dirname, 'index.html')}`;

  //mainWindow.loadURL('/c/sherpatest/index.html');
  mainWindow.loadFile('index.html')
  mainWindow.on('closed', () => (mainWindow = null));
 
}
app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'win') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});