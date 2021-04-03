#!/usr/bin/env node
'use strict';

const handleScript = require('./utils/handleScript');

const args = process.argv.slice(2);
const script = args[0];

process.on('unhandledRejection', err => {
  throw err;
});

handleScript(script);
