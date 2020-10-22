const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: {
        app: './src/index.js',
        app2: './src/index2.js'
    }, //兩個進入點
    output: {
        path: path.resolve(__dirname, 'dist'), //產出資料夾
        filename: '[name].bundle.js' //產出檔案名稱
    },
    module: {
        rules: [{
            test: /\.(sass|scss|css)$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath : './dist'
                    }
                }, //順序三
                {
                    loader: "css-loader"
                },//順序二
                {
                    loader : "sass-loader"
                } //順序一
            ]
        }]
    },
    plugins: [
       new MiniCssExtractPlugin({
          filename : '[name].css' 
       }) 
    ]
};