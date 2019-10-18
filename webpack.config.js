const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname + '/build'),
        publicPath: '/'
    },
	devtool: 'eval-source-map', 
    devServer: {
        historyApiFallback: true,
        publicPath: '/', // here's the change
        contentBase: path.resolve(__dirname + '/build'),
        index: 'index.html',
        port: 9000
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            compact: false
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        alias: {
            'Comp': path.resolve(__dirname, 'src/components/')
        }
    }
}