to get started using this boilerplate 

1. create the folder for the project 
2. cd into the folder
3. run npm init -y to create a package.json file
4. install the required dependencies with the following commands: 
    npm install --save react react-dom react-router-dom
    npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin @babel/core babel-loader @babel/preset-react
5. create a '.babelrc' file in the root of the project and add the following code to it: 
    {
        "presets": ["@babel/preset-react"]
    }
6. create a 'webpack.config.js' file in the root of the project and add the following code to it:
    const mode = process.env.NODE_ENV || 'development';
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const path = require('path');

    module.exports = {
    mode: mode,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './index.html'
        })
    ],
    devServer: {
        static: {
        directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        historyApiFallback: true
        }
    };
7. create an 'index.html' file in the project rool with the following content:
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Website Title Here</title>
        <link rel="stylesheet" href="/styles.css" />
    </head>
    <body id="body">
        <div id="root"></div>
    </body>
    </html>

8. create a 'src' folder in the project root, and insite it, create an 'index.js' file with the following code:
    import React from 'react';
    import { createRoot } from 'react-dom/client';
    import { BrowserRouter as Router } from 'react-router-dom';
    import Main from './components/Main'; // import the main component of the app

    const container = document.getElementById('root'); // get the root element from the index.html file
    const root = createRoot(container); // create a root element for the react app

    root.render(
    <Router>
        <Main />
    </Router>,
    );

9. add the following scripts to the 'package.json' file: 
    "scripts": {
    "start": "NODE_ENV=development webpack serve",
    "build": "NODE_ENV=production webpack"
    }
