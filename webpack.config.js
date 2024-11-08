const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource' // Use Webpack 5's asset modules for images
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    static: path.join(__dirname, 'public'), // Serve public folder statically
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'), // Correct path to src/index.html
      filename: 'index.html', // This will output the file in the dist folder
      favicon: path.resolve(__dirname, 'public', 'favicon.ico')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  }
};