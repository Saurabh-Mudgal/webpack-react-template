const path = require('path')

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: "./src/vendor.js"
    },
    module: {
        rules: [
            // {
            //     // For transpiling scss to css and correctly loading it to the DOM. Moved to dev, substituted bu MinifyCSS in prod.
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader']
            // },
            {
                // for linking assets like images correctly to the html.
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                // For loading images/ files. Using webpack asset module.
                oneOf: [
                    {
                        test: /\.svg$/,
                        type: 'asset/inline',
                        resourceQuery: /inline/,
                        generator: {
                            dataUrl: content => {
                              content = content.toString();
                              return svgToMiniDataURI(content);
                            }
                        }
                    },
                    {
                        test: /\.(svg|png|jpg|gif|webp)$/,
                        type: 'asset/resource',
                        generator: {
                            filename: 'imgs/[name].[hash:8].[ext]',
                        }
                    }
                ]
            }
        ]
    }
}
