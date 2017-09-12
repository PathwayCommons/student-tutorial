let conf = {
  entry: './src/index.js',

  output: {
    filename: './build/bundle.js'
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};

module.exports = conf;
