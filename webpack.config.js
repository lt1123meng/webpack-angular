/**
 * Created by LX on 2017/5/15.
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CompressionWebpackPlugin = require('compression-webpack-plugin')
var path = require('path');

// var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var devConfig = {
    context: path.join(__dirname),
    entry: {
        page1: ['./app/index.js']
        // page1: ['./app/index.js', hotMiddlewareScript]
    },
    output: {
        filename: '[hash].js',
        path: path.resolve('./dist'),
    },
    externals: {
        "angular": "angular",
        "ui-router": "ui-router",
        "oc.lazyLoad":"oc.lazyLoad"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: [
                    'babel-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    "raw-loader",
                ]
            }, {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            }, {
                test: /\.less/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ]
            }, {
                test: /\.(png|jpg|ttf)$/,
                use: [
                    "url-loader",
                    'image-webpack-loader'
                ]
            }]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     sourceMap: true
        // }),
        // new CompressionWebpackPlugin({
        //     asset: '[path].gz[query]',
        //     algorithm: 'gzip',
        //     test: new RegExp(
        //         '\\.(' + ['js', 'css'].join('|') + ')$'
        //     ),
        //     threshold: 10240,
        //     minRatio: 0.8
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'lt&lx',
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        }),
    ]
};

module.exports = devConfig;