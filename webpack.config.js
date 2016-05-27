var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");

module.exports = {

    entry: {
        app: "./src/app.ts",
        vendor: "./src/vendor.ts"
    },
    output: {
        path: "./dist",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts"
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ],
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint'
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