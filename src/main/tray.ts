import { Tray, Menu, app } from 'electron';
import path from 'path';

const iconTray = new Tray(path.join(__dirname, '../../assets/icons/24x24.png'));
// @ts-ignore
global.iconTray = iconTray;

iconTray.setToolTip('Electron应用');

const trayMenu = Menu.buildFromTemplate([
  {
    label: '设置',
    click() {
      console.log('设置');
    },
  },
  {
    label: '退出',
    click() {
      if (process.platform !== 'darwin') {
        console.log('退出');
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
