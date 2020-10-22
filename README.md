# 安裝方式

全域安裝
`npm i webpack@4.43.0 -g`
`npm i webpack-cli@3.3.12 -g`

1. 要裝在 c 槽
2. 安裝4.43.0 版本  npm i webpack@4.43.0 -g
3. 查詢版本 webpack -v
4. node 升級到 12.19.0 版本( current目前的版本 )


```bash
webpack-cli 4.1.0

webpack 4.43.0

```
# 產生 package.json

`npm init`


# 安裝在專案裡
`npm install webpack@4.43.0 --save-dev`
`npm install webpack-cli@3.3.12 --save-dev`


webpack-demo
|- package.json
|- index.js
|- index.html

# 指令
webpack xxx.js -d //開發者模式
webpack xxx.js -p //上線模式


## 安裝jquery

`npm i jquery`

- index.js

```js
 import $ from "jquery"; //載入模組
 console.log('webpack ok');
```

## 配置文件

- webpack.config.js

```js
const path = require('path');

module.exports = {
    entry: './src/index.js', //進入點
    output : {
       path : path.resolve(__dirname , 'dist'), //產出資料夾
       filename : 'bundle.js' //產出檔案名稱
    }
  };
```


# 配置文件指令

`webpack -w //監看`
`webpack -d -w //監看開發者模式`



```js
module.exports = {
    entry: {
        app : './src/index.js',
        app2 : './src/index2.js' 
    }, //兩個進入點
    output : {
       path : path.resolve(__dirname , 'dist'), //產出資料夾
       filename : '[name].bundle.js' //產出檔案名稱 去抓進入點 key 值名稱
    }
  };
```


# 讓webpack 讀懂 css

安裝loader

- css-loader   `npm install --save-dev css-loader`
- style.loader  `npm install style-loader --save-dev`

```js
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
```

#  讓 webpack 分離css

https://webpack.js.org/plugins/mini-css-extract-plugin/

#### 使用 mini-css-extract-plugin

`npm install --save-dev mini-css-extract-plugin`



```js

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
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader, //使用分離 loader
                    options: {
                        publicPath : './dist'
                    }
                }, //順序二
                {
                    loader: "css-loader"
                } // 順序一
            ]
        }]
    },
    // plugins
    plugins: [
       new MiniCssExtractPlugin({
          filename : 'main.css' 
       }) 
    ]
};

```


# 使用sass-loader來撰寫scss
https://www.webpackjs.com/loaders/sass-loader/

`npm install sass-loader node-sass  --save-dev`





