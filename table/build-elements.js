const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/table/runtime.js',
    './dist/table/polyfills.js',
    './dist/table/main.js',
    './dist/table/es2015-polyfills.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/table.js');
  await fs.copyFile(
    './dist/table/styles.css',
    'elements/styles.css'
  );
})();