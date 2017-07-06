/**
 * Created by LX on 2017/5/15.
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CompressionWebpackPlugin = require('compression-webpack-plugin')
var path = require('path');
// var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
// 单独打包
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 压缩css
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


var devConfig = {
    context: path.join(__dirname),
    entry: {
        app: ['./src/main.js'],
        // page1: ['./app/index.js', hotMiddlewareScript]
        // vendor: ['angular-ui-router', 'oclazyload']

    },
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve('./dist'),
    },
    externals: {
        "angular": "angular",
        "angular-ui-router": "angular",
        "oclazyload": "angular",
        "moment": "moment"
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
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }, {
                test: /\.less/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "postcss-loader",
                        "less-loader",
                    ]
                }),

            }, {
                test: /\.(png|jpg|jpegjpg|ttf)$/,
                use: [
                    "url-loader?limit=8192&name=img/[name].[ext]",
                    'image-webpack-loader'
                ]
            }]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
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
        // new webpack.optimize.CommonsChunkPlugin({
        // names: ['vendor'],
        // }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.less$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'lt&lx',
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            // chunks: ['app', 'vendor'],
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