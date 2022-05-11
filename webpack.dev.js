const path = require('path')
const config = require('./webpack.config.js')
const { merge } = require('webpack-merge')
const HTMLWebpackPlugin = require('html-webpack-plugin')


module.exports = merge(config, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/[name].bundle.js',
        assetModuleFilename: 'imgs/[name].[hash:8].bundle.js'
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.scss$/,
    //             use: ['style-loader', 'css-loader', 'sass-loader']
    //         }
    //     ]
    // },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/template.html',
            favicon: "./public/favicon.ico",
            filename: 'index.html'

        })
    ]

})