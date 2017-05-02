const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  target: 'web',
  entry: {
    'bundle': [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './app/src/index.dev.tsx'
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
      baseUrl: '/',
      hash: true
    }),
    new webpack.DllReferencePlugin({
      manifest: require(path.join(process.cwd(), './dist/vendor/manifest.json')),
      hash: true
    }),
    new AddAssetHtmlPlugin({
      filepath: require.resolve(path.join(process.cwd(), './dist/vendor/vendor.js')),
      includeSourcemap: false
    })
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
         'react-hot-loader/webpack',
         'awesome-typescript-loader'
        ],
        include: path.join(process.cwd(), './app/src'),
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              camelCase: 'dashes',
              localIdentName: '[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            query: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=15000'
      }
    ]
  }
};


