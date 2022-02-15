import { Tray, Menu, app, BrowserWindow } from 'electron';
import path from 'path';
import { resolveHtmlPath } from './util';

const iconPath = path.join(__dirname, '../renderer/assets/icons/24x24.png');

// if (process.env.NODE_ENV === 'production') {
//   iconPath = '';
// }

const iconTray = new Tray(iconPath);
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

      mainWindow.loadURL(resolveHtmlPath('about'));
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
