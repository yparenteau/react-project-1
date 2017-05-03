const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

let vendorName = 'vendor';

if (process.env.NODE_ENV === 'production') {
  vendorName = 'vendor.min'
}

module.exports = {
  loaders: [
    {
      enforce: 'pre',
      test: /\.ts(x?)$/,
      use: "source-map-loader",
      exclude: [/node_modules/]
    },
    {
      enforce: 'pre',
      test: /\.ts(x?)$/,
      loader: 'tslint-loader',
      exclude: [/node_modules/]
    },
    {
      test: /\.scss/,
      exclude: [/node_modules/],
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
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
      })
    },
    {
      test: /\.(png|jpg)$/,
      use: 'url-loader?limit=15000',
      exclude: [/node_modules/]
    }
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/src/index.html',
      chunksSortMode: 'dependency',
      baseUrl: '/',
      hash: true
    }),
    new webpack.DllReferencePlugin({
      manifest: require(path.join(process.cwd(), `./dist/${vendorName}/manifest.json`)),
      hash: true
    }),
    new AddAssetHtmlPlugin({
      filepath: require.resolve(path.join(process.cwd(), `./dist/${vendorName}/${vendorName}.js`)),
      includeSourcemap: false
    }),
    new ExtractTextPlugin({ filename: 'style.css', disable: process.env.NODE_ENV !== 'production', allChunks: true })
  ]
};

