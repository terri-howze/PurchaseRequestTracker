import { app } from 'electron';
import { BrowserWindow } from "electron";
//import { startExpressServer } from './server/server.js';
import router from './server/routes/index.js';
import express from 'express';
import { resolve } from "path";
import cors from "cors"
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

//*****************************************************************************************************************
if (require('electron-squirrel-startup')) app.quit()
// if first time install on windows, do not run application, rather
// let squirrel installer do its work
import handleSquirrelEvent from './installers/setup-events.js';
if (handleSquirrelEvent()) {
  process.exit()
}
//*****************************************************************************************************************

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
  //startExpressServer();
  mainWindow.on('closed', () => (mainWindow = null));

}
app.on('ready',createWindow)
app.on('ready', startExpressServer)
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

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