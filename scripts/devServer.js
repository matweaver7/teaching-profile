'use strict';

const Webpack = require('webpack');
const path = require("path");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require('../webpack.config');

const PORT = 9000;
const outPath = path.resolve(__dirname, "index.html");
const srcPath = path.resolve(__dirname, "..");

const devServerOptions = Object.assign({}, webpackConfig.devServer, {
    open: true,
    contentBase: outPath,
    historyApiFallback: true,

    // This html file should mimic the base page as much as possible
    index: outPath,
    port: PORT,
    stats: {
        color: true,
        children: false
    },
});
const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(PORT, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:' + PORT);
});