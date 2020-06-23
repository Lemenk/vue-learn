// 导入node的path模块
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  //输出路径应该分开写
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  //loader配置
  module: {
    rules: [
      //配置css
      {
        test: /\.css$/,
        use: ["style-loader", 'css-loader']
      },
      //配置vue
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  //配置vue构建版本
  resolve: {
    // alias: 别名
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  //配置插件
  plugins: [
    //添加版权声明
    new webpack.BannerPlugin('最终版权归Lemenk所有'),
    //打包html文件
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new UglifyjWebpackPlugin()
  ],
  //配置本地服务器
  devServer: {
    contentBase: './dist',
    inline: true
  }

}
