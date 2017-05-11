const path = require('path');
const webpack = require('webpack');

const common = require('./webpack.common');

module.exports = {
  devtool: 'inline-source-map',
  target: 'web',
  entry: {
    'chailly': [
      'whatwg-fetch',
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server',
      './src/index.dev.tsx'
    ]
  },
  devServer: {
    hot: true,
    contentBase: path.join(process.cwd(), './src'),
    port: process.env.npm_config_port || 3000,
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
        include: path.join(process.cwd(), './src'),
      },
    ]
  }
};


