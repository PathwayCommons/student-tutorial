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
    isProd ? new UglifyJSPlugin() : null
  ].filter( isNonNil )
};

module.exports = conf;
