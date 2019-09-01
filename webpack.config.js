module.exports = {
  entry: __dirname + '/client/src/App.jsx',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {

  rules: [
    {
      test: [/\.jsx$/],
      // include: '/spec/test.js',
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }
  ]
 },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
}
