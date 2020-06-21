// 导入node的path模块
const path = require('path')

module.exports = {
  entry: './src/main.js',
  //输出路径应该分开写
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  //loader配置
  module: {
    rules: [{
        test: /\.css$/,
        use: ["style-loader", 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            /* 文件大小限制：
              若是文件小于该大小，则使用url-loader。若是大于该文件，则使用file-loader
            */
            limit: 300000,
            //配置打包后文件的路径与名称
            name: 'img/[name].[hash:8].[ext]'
          }
        }]
      },
      //配置babel
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}