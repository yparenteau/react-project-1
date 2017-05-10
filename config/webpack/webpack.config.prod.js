const path = require('path');
const webpack = require('webpack');
const WebpackWriteStatsPlugin = require('webpack-write-stats-plugin');
const Moment = require('moment');
const Visualizer = require('webpack-visualizer-plugin');

const common = require('./webpack.common');
const dateString = Moment().format('YYYYMMDD-hhMMss');

module.exports = {
  devtool: 'source-map',
  target: 'web',
  entry: {
    'chailly':  ['whatwg-fetch', './app/src/index.tsx']
  },
  output: {
    path: path.join(process.cwd(), './dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    ...common.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
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
      },

    }),
    new Visualizer({
      filename: './visualizer.html'
    }),
    new WebpackWriteStatsPlugin(path.join(process.cwd(), './dist/' + dateString + '.stats.json'), {
      timings: true,
      source: false
    })
  ],
  module: {
    rules: [
      ...common.loaders,
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          }
        ],
        include: path.join(process.cwd(), './app/src')
      }
    ]
  }
};
