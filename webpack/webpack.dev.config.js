const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = merge(webpackConfig, {
  devtool: 'source-map',
  mode: process.env.NODE_ENV,
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:6090',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, '../src/index.tsx')
  ],
  optimization: {
    runtimeChunk: {
        name: "manifest"
    },
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendor",
                chunks: "all"
            }
        }
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    overlay: {
      errors: true
    },
    // 设置localhost端口
    port: 6090,
    publicPath: "/",
    inline: true, // 自动刷新
    hot: true, // 开启热模块替换
    open: true,
    quiet: true  // 不显示 devServer 的 Console 信息，让 FriendlyErrorsWebpackPlugin 取而代之
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new HtmlWebpackPlugin({
      title: 'Catalog',
      template: path.resolve(__dirname, '../index.html'),
      inject: true,
    }),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(), // 热替换插件
    new webpack.NamedModulesPlugin() // 执行热替换时打印模块名字
  ],
});