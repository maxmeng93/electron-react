import { Tray, Menu, app, BrowserWindow } from 'electron';
import path from 'path';
import { resolveHtmlPath } from './util';

const iconTray = new Tray(path.join(__dirname, '../../assets/icons/24x24.png'));
// @ts-ignore
global.iconTray = iconTray;

iconTray.setToolTip('Electron应用');

const trayMenu = Menu.buildFromTemplate([
  {
    label: '关于',
    click() {
      const mainWindow = new BrowserWindow({
        show: false,
        width: 1024,
        height: 728,
        webPreferences: {
          preload: path.join(__dirname, 'preload.js'),
        },
      });

      mainWindow.loadURL('http://localhost:1212/#/about');
      mainWindow.show();
    },
  },
  {
    label: '退出',
    click() {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    },
  },
]);

iconTray.setContextMenu(trayMenu);

iconTray.on('double-click', function () {
  console.log('双击托盘');
});

console.log(iconTray);
