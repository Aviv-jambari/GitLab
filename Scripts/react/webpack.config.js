const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {

        rules: [
            {
                test: /\.(js)$/,
                use: "babel-loader"
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'],
            }
        ]
    }, plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
 
        port: 3000,
        historyApiFallback: true,
    }


}