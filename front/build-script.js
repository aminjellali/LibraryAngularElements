const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/front/runtime.js',
    './dist/front/polyfills.js',
    './dist/front/main.js',
     './dist/front/es2015-polyfills.js',
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/bar-chart.js');
  await fs.copyFile(
    './dist/front/styles.css',
    'elements/styles.css'
  );
})();