const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  target: 'web',
  entry: {
    'bundle': [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './app/src/index.tsx'
    ]
  },
  devServer: {
    hot: true,
    contentBase: path.join(process.cwd(), './app/src'),
    publicPath: '/',
    port: 3000,
    historyApiFallback: true,
    stats: {
      colors: true,
      chunks: false,
      'errors-only': true
    }
  },

  context: process.cwd(),
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/src/index.html',
      chunksSortMode: 'dependency',
      baseUrl: '/'
    }),
  ],
  watchOptions: {
    poll: true
  },
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
          {loader: 'react-hot-loader/webpack'},
          {loader: 'ts-loader'}
        ],
        include: path.join(process.cwd(), './app/src'),
      }
    ]
  }
};
