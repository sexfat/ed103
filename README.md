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












