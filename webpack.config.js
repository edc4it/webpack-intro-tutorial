var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/app.js",
    output: {
        path: "./dist",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body"
        })
    ]
};