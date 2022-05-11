const path = require('path');
const config = require('./webpack.config.js');
const { merge } = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(config, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/[name].[contenthash].bundle.js'
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            '...'
        ]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
        
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: './public/template.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            },
            favicon: "./public/favicon.ico",
            filename: 'index.html'

        }),
        new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].css' })
    ]

})