const path = require('path');


module.exports = {
    entry: {
        app : './src/index.js',
        app2 : './src/index2.js' 
    }, //兩個進入點
    output : {
       path : path.resolve(__dirname , 'dist'), //產出資料夾
       filename : '[name].bundle.js' //產出檔案名稱
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              { loader: "style-loader" }, //順序二
              { loader: "css-loader" } // 順序一
            ]
          }
        ]
      }
  };