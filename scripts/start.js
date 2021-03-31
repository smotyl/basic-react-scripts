'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const choosePort = require('choose-port');
const open = require('open');

const webpackConfig = require('../configs/webpack.config.js');

const host =
  process.env.HOST ||
  (process.platform === 'win32' ? 'localhost' : '127.0.0.1');
const port = process.env.PORT || 8080;
const levelLog = process.env.LEVEL_LOG || 'none';

const start = (config, contentBase) => {
  const compiler = Webpack(config);
  const server = new WebpackDevServer(compiler, {
    host,
    contentBase,
    watchContentBase: true,
    hot: true,
    historyApiFallback: true,
    publicPath: '/',
    clientLogLevel: levelLog,
    compress: true,
    disableHostCheck: true
  });

  choosePort(port, host, validPort =>
    server.listen(validPort, host, () => open(`http://${host}:${validPort}`))
  );
};

const bootstrap = async () => {
  try {
    start(webpackConfig, paths.devPath);
  } catch (err) {
    console.error(`\x1b[31mError\x1b[0m: ${err}`);
    process.exit(1);
  }
};

bootstrap();
