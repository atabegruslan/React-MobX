var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

var common = {
  //devtool: debug ? "inline-sourcemap" : null,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },  
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};

var mobxConfig = Object.assign({}, common,{
  name: "Mobx",
  entry: `${__dirname}/src/mobx/js/scripts.js`,
  output: {
    path: __dirname + "/public/mobx/js",
    filename: "scripts.min.js"
  },
});

// Return Array of Configurations
module.exports = [
  mobxConfig, 
];
