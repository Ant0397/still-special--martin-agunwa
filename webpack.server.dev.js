const path = require('path')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')


module.exports = {
    entry: './server-src/server.js',
    output: {
        path: path.resolve(__dirname, 'server-dev'),
        filename: 'server.js',
        publicPath: ''
    },
    mode: "development",
    externalsPresets: { node: true },
    externals: [nodeExternals()],
    node: {
        __dirname: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|pdf|mp4)$/i,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: false 
        }),
        new Dotenv({
            path: './server-src/config/local.env'
        })
    ]
}
