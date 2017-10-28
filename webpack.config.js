module.exports = {
  entry: './index',
  output: {
    path: __dirname + 'dist',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['react','es2015'],
            plugins: [
              'babel-plugin-transform-async-to-generator',
              'transform-es2015-destructuring',
              'transform-object-rest-spread'
            ]
          }
        }
      }
    ]
  }
};
