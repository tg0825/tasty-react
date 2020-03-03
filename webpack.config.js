const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, options) => {
    console.log(`This is the Webpack 4 'mode': ${options.mode}`);
    return {
        entry: './src/index',
        devtool: 'eval-source-map',
        devServer: {
            hot: true,
            historyApiFallback: true,
            port: 9000,
            index: 'index.html',
            publicPath: '/',
            contentBase: path.join(__dirname, '/public'),
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(`${__dirname}/build/`),
            publicPath: '/',
        },
        mode: 'none',
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                {
                    test: /\.scss$/,
                    use: [
                        process.env.NODE_ENV !== 'production'
                            ? 'style-loader'
                            : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: '/node_modules',
                    use: [
                        {
                            loader: 'babel-loader',
                            query: {
                                compact: false,
                            },
                        },
                    ],
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                                minimize: true,
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: './public/index.html',
                filename: 'index.html',
            }),
            new MiniCssExtractPlugin({
                filename: 'style.css',
            }),
            new CleanWebpackPlugin(),
        ],
        resolve: {
            alias: {
                Src: path.resolve(__dirname, 'src/'),
                Ui: path.resolve(__dirname, 'src/ui/'),
                Pages: path.resolve(__dirname, 'src/pages/'),
                Comp: path.resolve(__dirname, 'src/components/'),
                Modules: path.resolve(__dirname, 'src/modules/'),
            },
            extensions: ['.js', '.jsx'],
        },
    };
};
