// webpack.config.js
module.exports = {
  mode : 'production',
  entry : './index.js',
  output : {
    filename : './dist/bundle.js'
  },
  module: {
    rules : [
      {
        test : /\.js$/,
        exclude : [/node_modules/],
        use : {
          loader : 'babel-loader',
          options : {
            presets : ['env']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
};