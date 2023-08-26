module.exports = {
    entry: ['./src/index.js'],
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js',
    },
    context: __dirname,
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      ],
    },
<<<<<<< HEAD
  };
=======
    plugins: [
        new HtmlWebpackPlugin({
        template: './index.html'
        })
    ],
    devServer: {
        static: {
        directory: path.join(__dirname, 'public'), // changed from public to build directory
        },
        compress: true,
        port: 9000,
        historyApiFallback: true
        }
    };
>>>>>>> cb32f7eaacacc3e33db859dee783c4ee13a55b63
