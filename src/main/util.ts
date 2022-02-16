/* eslint import/prefer-default-export: off, import/no-mutable-exports: off */
import path from 'path';

export let resolveHtmlPath: (hash: string) => string;

if (process.env.NODE_ENV === 'development') {
  const port = process.env.PORT || 1212;
  resolveHtmlPath = (hash: string) => {
    return `http://localhost:${port}/#${hash}`;
  };
} else {
  resolveHtmlPath = (hash: string) => {
    return `file://${path.resolve(
      __dirname,
      '../renderer/',
      `index.html#${hash}`
    )}`;
  };
}
