const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const autoprefixer = require('autoprefixer');

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
      test: /\.(css|scss|sass)$/,
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
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer('last 2 versions', 'ie 11')]
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
    },
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff'
          }
        }
      ]
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: [
        { loader: 'file-loader' }
      ]
    }
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
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
    new ExtractTextPlugin({ filename: '[name].css', disable: process.env.NODE_ENV !== 'production', allChunks: true }),
    new StyleLintPlugin()
  ]
};

