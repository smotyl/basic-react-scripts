const { spawnSync } = require('child_process');
const { AVAIBLE_SCRIPTS } = require('./constants');

const executeScript = (script) => spawnSync(
  'node',
  [`${__dirname}/scripts/${script}.js`, ...process.argv.slice(3)],
  { stdio: 'inherit' }
);

const handleScript = (script) => {
  if (AVAIBLE_SCRIPTS.includes(script)) {
    const childProcess = executeScript(script);
    process.exit(childProcess.status);
  } else {
    console.log(`Unknown script ${script}`);
    process.exit(1);
  }
}

module.exports = handleScript;