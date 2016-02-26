var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
require('es6-promise').polyfill();

module.exports = {
    entry: './main.ts',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Todolist Redux-Angular',
            template: './index.html',
            inject: 'body'
        }),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.css']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.html$/, loader: 'html' },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    }
}