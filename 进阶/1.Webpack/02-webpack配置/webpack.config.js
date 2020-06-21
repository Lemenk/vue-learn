// 导入node的path模块
const path = require('path')

module.exports = {
    entry: './src/main.js',
    //输出路径应该分开写
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['css-loader' ]
          }
        ]
      }
}