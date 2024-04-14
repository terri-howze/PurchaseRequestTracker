import { app } from 'electron';
import { BrowserWindow } from "electron";
import { startExpressServer } from './server/server.js';
// import router from './server/routes/index.js';
// import express from 'express';
// import { resolve } from "path";
// import cors from "cors"

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadFile('index.html');
  startExpressServer();
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