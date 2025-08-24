const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
const path = require('path');
const waitOn = require('wait-on');

let nextProcess;
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    backgroundColor: '#001166',
    autoHideMenuBar: true,
    webPreferences: { 
      nodeIntegration: false, 
      contextIsolation: true,
      zoomFactor: 1.0,
      webSecurity: true,
      allowRunningInsecureContent: false,
      experimentalFeatures: false
    },
    resizable: true,
    minWidth: 800,
    minHeight: 600,
    show: false,
    titleBarStyle: 'hidden'
  });
  
  const startUrl = process.env.KIOSK_URL || `http://localhost:${process.env.PORT || '3001'}`;
  mainWindow.loadURL(startUrl);
  
  // Prevent zooming
  mainWindow.webContents.setZoomFactor(1.0);
  mainWindow.webContents.setVisualZoomLevelLimits(1, 1);
  
  // Security: Disable new window creation
  mainWindow.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  
  // Show window when ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
}

async function start() {
  const port = process.env.PORT || '3001';
  const appDir = path.join(__dirname, '..');
  
  // Start Next.js dev server
  nextProcess = spawn('npm', ['run', 'dev'], {
    cwd: appDir,
    env: { ...process.env, PORT: port },
    stdio: 'inherit',
    shell: true,
  });
  
  // Wait for dev server to be ready
  await waitOn({ resources: [`http://localhost:${port}`], timeout: 60000 });
  
  createWindow();
}

app.whenReady().then(start);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('before-quit', () => {
  if (nextProcess) nextProcess.kill('SIGTERM');
});
