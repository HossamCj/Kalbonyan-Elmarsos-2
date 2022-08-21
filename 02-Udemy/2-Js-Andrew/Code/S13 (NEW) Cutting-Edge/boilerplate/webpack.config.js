const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        index: './src/index.js',
        utilities: './src/utilities.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true
    },  
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // {
            //     test: /\.js$/,
            //     enforce: "pre",
            //     use: ["source-map-loader"]
            // },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    }
}