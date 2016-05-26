var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/app.js",
    output: {
        path: "./dist",
        filename: "[name].js"
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject : "body"
        })
    ]
};