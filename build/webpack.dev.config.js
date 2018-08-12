const webpack = require('webpack');
const path    = require('path');
const glob    = require('glob');
const Entry   = require('./webpack.entry');
const Loader  = require('./webpack.loader');
const HTML    = require('./webpack.html');
const ClearWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context:path.resolve(__dirname, '../'),
    entry:Entry.config,
    output:{
        path:path.resolve(__dirname, '../dist/'),
        filename:'static/js/[name]-bundle.js',
        publicPath:'http://localhost:8050/'
    },
    module:{
        rules:Loader.config
    },
    plugins:[
        ...HTML.config,
        // new ClearWebpackPlugin(['../dist/static']),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('static/css/[name].css'),
        new CopyWebpackPlugin([
            {
                from:'./src/json',
                to:'./static/json'
            }
        ]),
        new webpack.ProvidePlugin({
            $:'jquery'
        })
    ],
    resolve: {
        // 路径解析/创建别名
        alias: {
            'Router': path.resolve(__dirname, '../src/js/router.js'),
            'Swiper': path.resolve(__dirname, '../src/js/swiper.min.js')
        }
    },
    devServer:{
        // 设置服务器访问的基本目录
        contentBase:path.resolve(__dirname,'./dist'), // 最好设置成绝对路径
        // 设置服务器的ip地址,可以是localhost
        host:'localhost',
        // 设置端口
        port:8050,
        // 设置自动拉起浏览器
        open:true,
        // 自动刷新
        inline: true,
        // 模块热替换
        hot: true
    }
}