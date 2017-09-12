const webpack = require('webpack');
const { env } = require('process');
const isProd = env.NODE_ENV === 'production';
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const isNonNil = x => x != null;

let conf = {
  entry: './src/index.js',

  output: {
    filename: './build/bundle.js'
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },

  plugins: [
    isProd ? new UglifyJSPlugin() : null,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'deps',
      filename: './build/deps.js',
      minChunks( module ){
        let context = module.context || '';

        return context.indexOf('node_modules') >= 0;
      }
    })
  ].filter( isNonNil )
};

module.exports = conf;
