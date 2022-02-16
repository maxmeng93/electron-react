import { Tray, Menu, app } from 'electron';
import path from 'path';
import { createWindow } from './main';

const iconPath = path.join(__dirname, '../renderer/assets/icons/24x24.png');

const tray = new Tray(iconPath);
global.tray = tray;

tray.setToolTip('Electron应用');

const trayMenu = Menu.buildFromTemplate([
  {
    label: '关于',
    click() {
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
