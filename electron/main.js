const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
const path = require('path');
const waitOn = require('wait-on');

let nextProcess;
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    backgroundColor: '#f3f7fc',
    autoHideMenuBar: true,
    webPreferences: { nodeIntegration: false, contextIsolation: true },
  });
  const startUrl = process.env.KIOSK_URL || `http://localhost:${process.env.PORT || '3000'}`;
  mainWindow.loadURL(startUrl);
}

async function start() {
  const port = process.env.PORT || '3000';
  const isDev = !app.isPackaged;
  const appDir = path.join(__dirname, '..');
  if (isDev) {
    nextProcess = spawn('npm', ['run', 'dev'], {
      cwd: appDir,
      env: { ...process.env, PORT: port },
      stdio: 'inherit',
      shell: true,
    });
    await waitOn({ resources: [`http://localhost:${port}`], timeout: 60000 });
  } else {
    const nextBin = require.resolve('next/dist/bin/next');
    nextProcess = spawn(process.execPath, [nextBin, 'start', '-p', port], {
      cwd: appDir,
      env: { ...process.env, PORT: port },
      stdio: 'inherit',
    });
    await waitOn({ resources: [`http://localhost:${port}`], timeout: 60000 });
  }
  createWindow();
}

app.whenReady().then(start);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('before-quit', () => {
  if (nextProcess) nextProcess.kill('SIGTERM');
});


