'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const choosePort = require('choose-port');
const open = require('open');

const host =
  process.env.HOST ||
  (process.platform === 'win32' ? 'localhost' : '127.0.0.1');
const port = process.env.PORT || 8080;
const levelLog = process.env.LEVEL_LOG || 'none';

const bootstrap = (config, contentBase) => {
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

module.exports = bootstrap;
