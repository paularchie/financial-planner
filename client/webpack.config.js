const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loaders = require('./webpack-utils/loaders');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    module: {
        rules: [
            loaders.typescript,
            loaders.css,
            loaders.scss,
            loaders.file,
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".jsx", ".js"]
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        disableHostCheck: true,
        host: '0.0.0.0',
    },
    plugins: [
        new HtmlWebpackPlugin(
            { template: path.join(__dirname, '/public/index.html') }
        )
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
};