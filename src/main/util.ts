/* eslint import/prefer-default-export: off, import/no-mutable-exports: off */
import { URL } from 'url';
import path from 'path';

export let resolveHtmlPath: (htmlFileName: string) => string;

// if (process.env.NODE_ENV === 'development') {
//   const port = process.env.PORT || 1212;
//   resolveHtmlPath = (htmlFileName: string) => {
//     const url = new URL(`http://localhost:${port}`);
//     url.pathname = htmlFileName;
//     return url.href;
//   };
// } else {
//   resolveHtmlPath = (htmlFileName: string) => {
//     return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
//   };
// }

if (process.env.NODE_ENV === 'development') {
  const port = process.env.PORT || 1212;
  // resolveHtmlPath = (htmlFileName: string) => {
  //   const url = new URL(`http://localhost:${port}`);
  //   url.pathname = htmlFileName;
  //   return url.href;
  // };
  resolveHtmlPath = (hash: string) => {
    return `http://localhost:${port}/#/`;
  };
} else {
  resolveHtmlPath = (hash: string) => {
    return `file://${path.resolve(
      __dirname,
      '../renderer/index.html/#/',
      hash
    )}`;
  };
}

// prod
// mainWindow.loadURL(url.format({
//   pathname: path.join(__dirname, '/dist/index.html'),
//   protocol: 'file:',
//   slashes: true,
//   hash: "settings"
// }))
