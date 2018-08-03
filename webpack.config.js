var slsw = require('serverless-webpack');
var nodeExternals = require('webpack-node-externals');


module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  externals: [nodeExternals()],
  mode:"development"
};