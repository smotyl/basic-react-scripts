#!/usr/bin/env node

'use strict';

const { spawnSync } = require('child_process');

const scriptNames = [ 'start' ];

const args = process.argv.slice(2);
const script = args[0];

process.on('unhandledRejection', err => {
  throw err;
});

if (scriptNames.includes(script)) {
  const result = spawnSync(
    'node',
    [`${__dirname}/scripts/${script}.js`, ...process.argv.slice(3)],
    { stdio: 'inherit' }
  );
  process.exit(result.status);
} else {
  console.log(`Unknown script ${script}.`);
  process.exit(1);
}
