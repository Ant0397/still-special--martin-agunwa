const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|pdf|mp4)$/i,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new FaviconsWebpackPlugin({
            logo: './src/assets/website-logo.jpg',
            inject: true,
            outputPath: './'
        })
    ]
}