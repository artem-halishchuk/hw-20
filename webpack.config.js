const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/js/index.js'),
        script: path.resolve(__dirname, 'src/js/script.js'),
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    //mode: 'development',
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin( {
            template: path.resolve(__dirname, './src/index.html')
        }),
        new CleanWebpackPlugin()
    ]
}