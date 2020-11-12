const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        filename: 'bundle.js',
        publicPath: "/",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
          images: path.resolve(__dirname, 'src/assets/'),
        },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[name].[ext]',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, "dist"),
    }
}