const path = require("path")

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,  './public/scripts'),
        filename: 'index.bundle.js',
        clean: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        compress: true,
        port: 9000
    }
}