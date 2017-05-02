const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  devtool: 'source-map',
  target: 'web',
  entry: {
    'bundle': './app/src/index.tsx'
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
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      },
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
    // TODO: Check what that does
    // new webpack.optimize.AggressiveMergingPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/src/index.html',
      chunksSortMode: 'dependency',
      baseUrl: '/'
    }),
    new webpack.DllReferencePlugin({
      manifest: require(path.join(process.cwd(), './dist/vendor.min/manifest.json')),
    }),
    new AddAssetHtmlPlugin({
      filepath: require.resolve(path.join(process.cwd(), './dist/vendor.min/vendor.min.js')),
      includeSourcemap: true
    }),
    new Visualizer({
      filename: './visualizer.html'
    }),
    new StatsPlugin('./stats.json')
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: '/node_modules/'
      },
      {
        enforce: 'pre',
        test: /\.ts(x?)$/,
        use: "source-map-loader",
        exclude: '/node_modules/'
      },
      {
        enforce: 'pre',
        test: /\.ts(x?)$/,
        loader: 'tslint-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          }
        ],
        include: path.join(process.cwd(), './app/src'),
      }
    ]
  }
};
