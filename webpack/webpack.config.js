const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: ['babel-polyfill', path.resolve(__dirname, '../src/index.tsx')],
        vendor: ['react', 'react-dom', 'babel-polyfill'],
    },
    output: {
        path: path.resolve(__dirname, '../dist'), // 输出的路径
        filename: 'app/[name]_[hash:8].js' // 打包后文件
    },
    resolve: { // 指定第三方库目录，减少webpack寻找时间
        modules: [path.resolve(__dirname, '../node_modules')],
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
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
                    loader: 'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]',
                }],
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]',
                }, {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true,
                    },
                }],
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]',
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                }],
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