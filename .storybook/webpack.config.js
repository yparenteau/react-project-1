const path = require('path');

const genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');

// TODO: Revisit ugly configuration
module.exports = function (config, env) {
  const webpackConfig = genDefaultConfig(config, env);
  webpackConfig.watchOptions = {
    poll: true
  };

  const loaders =[
    {
      test: /\.tsx?$/,
      loader: "awesome-typescript",
      exclude: /node_modules/
    },
    {
      test: /\.(css|scss)$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]!sass-loader',
    },
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff"
    },
    {
      test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    },
    {
      test: /\.(svg)?$/,
      loader: 'svg-inline-loader'
    },
    {
      test: /\.(png)$/,
      loader: 'url-loader?limit=200000'
    },
  ];

  webpackConfig.module.loaders = [...loaders, ...webpackConfig.module.loaders];

  webpackConfig.resolve.extensions.push(".tsx");
  webpackConfig.resolve.extensions.push(".ts");
  webpackConfig.resolve.extensions.push(".js");

  return webpackConfig;
};
