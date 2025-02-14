const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:'./src/js/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
        clean:true
    },
    module:{
        rules:[
            {
                test:/\.(sa|sc|c)ss$/,
                use:[
                'style-loader',
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
            template:'./src/index.html'
        })
    ],
    mode:'production',
};