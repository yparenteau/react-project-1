const resolve = require('path').resolve;
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  devtool: 'source-map',
  target: 'web',
  entry: {
    'bundle': './app/src/index.tsx'
  },
  context: resolve(__dirname, '../'),
  output: {
    path: resolve(__dirname, './../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      },
      // TODO: Is that have any effect
      'DEBUG': false,
      '__DEVTOOLS__': false
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
    // Included by default in webpack 2
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          '/node_modules/'
        ]
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  }
};
