'use strict';

process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

const Webpack = require('webpack');
const webpackConfig = require('../configs/webpack.config.js');

const config = webpackConfig({
  mode: 'production',
});

const build = () => {
  const compiler = Webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err?.message || err);
      }

      if (stats.hasErrors()) {
        console.error(stats);
        return reject(new Error('Build error'));
      }

      return resolve(stats);
    });
  });
};

const bootstrap = async () => {
  try {
    build();
  } catch (err) {
    console.error(`Build error: ${err}`);
    process.exit(1);
  }
};

bootstrap();
