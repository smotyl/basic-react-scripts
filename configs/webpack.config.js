const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const currDir = process.cwd();

module.exports = (config) => {
  const { mode, typescript } = config;

  let babelLoader = {
    test: /\.(ts|js)x?$/,
    loader: require.resolve('babel-loader'),
    exclude: /node_modules/,
    options: {
      presets: [
        [
        "@babel/preset-env",
          {
            "useBuiltIns": "usage",
            "corejs": 3,
            "targets": "> 0.25%, not dead" 
          },
        ],
      "@babel/preset-react"],
    }
  };

  let tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  let entryFile = typescript ? 'index.tsx' : 'index.js'

  return {
    mode: mode,
    entry: path.resolve(currDir, 'src', entryFile),
    output: {
      path: path.resolve(currDir, 'dist'),
      filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
      extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(currDir, 'src', 'index.html'),
      })
    ],
    module: {
      rules: [
        typescript ? tsLoader : babelLoader,
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ]
    }
  }
}