const path = require('path');
const webpack = require('webpack');

const common = require('./webpack.common');

module.exports = {
  devtool: 'inline-source-map',
  target: 'web',
  entry: {
    'bundle': [
      'whatwg-fetch',
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './app/src/index.dev.tsx'
    ]
  },
  devServer: {
    hot: true,
    contentBase: path.join(process.cwd(), './app/src'),
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
    ...common.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  watchOptions: {
    poll: true
  },
  module: {
    rules: [
      ...common.loaders,
      {
        test: /\.ts(x?)$/,
        use: [
          'react-hot-loader/webpack',
          'awesome-typescript-loader'
        ],
        include: path.join(process.cwd(), './app/src'),
      },
    ]
  }
};


