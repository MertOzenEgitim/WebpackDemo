const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const webpack  = require('webpack');

module.exports={
    entry:{main:'./src/js/main.js',
        admin:'./src/js/admin.js'
    },
    output:{
        filename:'[name].[hash:7].js',
        path:path.resolve(__dirname,'dist'),
        chunkFilename:'[name].chunk.js'
    },
    optimization:{
        splitChunks:{
            chunks:'all',
            minSize:20000,
            maxSize:40000,
            minChunks:1,
            automaticNameDelimiter:'-',
            cacheGroups:{
                vendor:{
                    test:/[\\/]node_modules[\\/]/,
                    name:'vendor',
                    chunks:'all'
                },
                common:{
                    test:/[\\/]components[\\/]/,
                    name:'common',
                    chunks:'all'
                }
            }
        },
        usedExports:true
    },
    module:{
        rules:[
            {
                test:/\.(sa|sc|c)ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader' 
                ]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.(png|jpe?g|gif|svg)/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8192 // 8KB altındakileri inline yapar, büyükleri dosya olarak bırakır
                    }
                },
                generator: {
                    filename: 'assets/images/[name].[hash:7][ext]'
                }
            },
            {
                test:/\.(woff|woff2|ttf|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name].[hash:7][ext]'
                }
            },
            {
                test:/\.html$/,
                use:{
                    loader:'html-loader',
                    options:{
                        minimize:true
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename:'[name].[hash:7].css'}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('development')
        })
    ],
    devtool:'source-map',
    mode:'development',
    devServer:{
        static:'./dist',
        port:3000,
        open:true,
        hot:true,
        historyApiFallback:true
    }
};