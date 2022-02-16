/* eslint import/prefer-default-export: off, import/no-mutable-exports: off */
import path from 'path';
import url from 'url';

export let resolveHtmlPath: (hash: string) => string;

if (process.env.NODE_ENV === 'development') {
  const port = process.env.PORT || 1212;
  resolveHtmlPath = (hash: string) => {
    return `http://localhost:${port}/#${hash}`;
  };
} else {
  resolveHtmlPath = (hash: string) => {
    return url.format({
      protocol: 'file',
      slashes: true,
      pathname: path.resolve(__dirname, '../renderer/', `index.html`),
      hash,
    });
  };
}
