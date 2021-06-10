const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './server/server.js',
    output: {
        path: path.resolve(__dirname, 'server-build'),
        filename: 'server.js',
        publicPath: ''
    },
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
    }
}
