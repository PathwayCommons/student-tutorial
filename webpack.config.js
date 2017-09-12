const pkg = require('./package.json');

let conf = {
  entry: pkg.main,

  output: {
    filename: 'bundle.js'
  }
};

module.exports = conf;
