const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: ['babel-polyfill', path.resolve(__dirname, '../src/index.tsx')],
        vendor: ['react', 'react-dom', 'babel-polyfill'],
    },
    output: {
        path: path.resolve(__dirname, '../dist'), // 输出的路径
        filename: 'app/[name]_[hash:8].js'  // 打包后文件
    },
    resolve: { // 指定第三方库目录，减少webpack寻找时间
        modules: [path.resolve(__dirname, '../node_modules')],
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }],
            },
            {
                test: /\.less$/,
                use: [{
                  loader: 'style-loader',
                }, {
                  loader: 'css-loader',
                }, {
                  loader: 'less-loader',
                  options: {
                    sourceMap: true,
                  },
                }],
            },
            {
                test: /\.scss$/,
                //loaders是依靠正则表达式来测试这个文件是不是这个loader来处理，所以test不能少
                loaders: ['style-loader','css-loader','sass-loader'],
                //"-loader"一定要写，不然会报错
                //loaders的处理顺序是从右向左，就是会先用sass-loader，其次css-loader，再次style-loader
            },
            {
                test: /\.(jpe?g|png|jpg|eot|woff|ttf|svg|gif)$/i,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: '[name].[hash].[ext]',
                },
            },
        ]
    }
}