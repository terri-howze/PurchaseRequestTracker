import { app } from 'electron';
import { BrowserWindow } from "electron";
//import { startExpressServer } from './server/server.js';
import router from './server/routes/index.js';
import express from 'express';
import { resolve } from "path";
import cors from "cors"

let mainWindow;
const expressapp = express();
const port = process.env.PORT || 8080;
expressapp.use(express.json());
expressapp.use(cors());
expressapp.use(express.urlencoded({ extended: true }));
expressapp.use(router);


expressapp.get('/', (req, res) => {
    res.sendFile(resolve('./src/main.jsx'))
})

const startExpressServer = () => {
    expressapp.listen(port, () => {
        console.log(`server running on ${port}`);
    });
}

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