const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Habilita la integración de Node.js en la ventana del navegador
    },
  });

  mainWindow.loadURL('http://localhost:3000'); // Carga en modo dev

  mainWindow.webContents.openDevTools(); // Opcional: abrir las herramientas de desarrollo de Chrome

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

