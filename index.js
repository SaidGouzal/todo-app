const path = require('path');

const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 600,
    height: 300,
    frame: false,
    alwaysOnTop: true,
    visibleOnAllWorkspaces: true,
    hasShadow: false,
  });

  // win.setAlwaysOnTop(true, "screen-saver")
  // win.isVisibleOnAllWorkspaces()

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL('http://localhost:3020');

  // Open the DevTools.
  //  if (isDev) {
  //   win.webContents.openDevTools({ mode: 'right' });
  //  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
