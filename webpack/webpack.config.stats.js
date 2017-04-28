const Visualizer = require('webpack-visualizer-plugin');
const statisticsFileName = '../../reports/statistics.html';
const prodConfig = require('./webpack.config.prod.js');

prodConfig.plugins = prodConfig.plugins.concat(
  new Visualizer({
    filename: statisticsFileName
  }));
module.exports = prodConfig;
