import { Tray, Menu, app, BrowserWindow } from 'electron';
import path from 'path';
// import { resolveHtmlPath } from './util';
import { createWindow } from './main';

const iconPath = path.join(__dirname, '../renderer/assets/icons/24x24.png');

const tray = new Tray(iconPath);
global.tray = tray;

tray.setToolTip('Electron应用');

const trayMenu = Menu.buildFromTemplate([
  {
    label: '关于',
    click() {
      // const mainWindow = new BrowserWindow({
      //   show: false,
      //   width: 1024,
      //   height: 728,
      //   webPreferences: {
      //     preload: path.join(__dirname, 'preload.js'),
      //   },
      // });

      // mainWindow.loadURL(resolveHtmlPath('/about'));
      // mainWindow.show();
      createWindow('/about');
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

tray.setContextMenu(trayMenu);

tray.on('double-click', () => {
  console.log('双击托盘');
});

console.log(tray);
