var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack  = require("webpack");

module.exports = {
    
    entry: {
        app: "./src/app.js",
        vendor: "./src/vendor.js"
    },
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
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
};