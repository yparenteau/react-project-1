const path = require('path');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const WebpackWriteStatsPlugin = require('webpack-write-stats-plugin');
const Moment = require('moment');

let vendorName = 'vendor';

if (process.env.NODE_ENV === 'production') {
  vendorName = 'vendor.min'
}

const dateString = Moment().format('YYYYMMDD-hhMMss');

const config = {
  entry: {
    [vendorName]: [path.join(process.cwd(), './app/vendor.ts')]
  },
  output: {
    path: path.join(process.cwd(), './dist/' + vendorName),
    filename: '[name].js',
    library: 'vendor'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DllPlugin({
      path: path.join(process.cwd(), './dist/' + vendorName + '/manifest.json'),
      name: 'vendor'
    }),
    new Visualizer({
      filename: '../../../dist/' + vendorName + '/visualizer.html'
    }),
    new WebpackWriteStatsPlugin(path.join(process.cwd(), './dist/' + vendorName + '/' + dateString + '.stats.json'),  {
      timings: true,
      source: false
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  profile: true
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
      drop_console: true,
      drop_debugger: true,
      global_defs: {
        __REACT_HOT_LOADER__: undefined
      }
    },
    minimize: true,
    debug: false,
    sourceMap: true,
    output: {
      comments: false
    }
  }))
}


module.exports = config;
