const path = require('path')
const config = require('./webpack.config.js')
const { merge } = require('webpack-merge')
const HTMLWebpackPlugin = require('html-webpack-plugin')


module.exports = merge(config, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/[name].[contenthash].bundle.js'
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
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            },
            favicon: "./public/favicon.ico",
            filename: 'index.html'

        })
    ]

})