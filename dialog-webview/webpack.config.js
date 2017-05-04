var webpack = require('webpack');
var path = require('path');
// 分离css文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 动态加载html文件
var HtmlWebpackPlugin = require('html-webpack-plugin');


var config = {
  //页面入口文件配置
  entry: {
    dialog : [
      './js/dialog.js'
    ],
  },
  //入口文件输出配置
  output: {
      path: path.join(__dirname,'../webview/src/android/components/dialog/webview'),
      filename: 'js/[name].js',
      // publicPath
  },
  // 插件项
  plugins: [
      // new webpack.optimize.CommonsChunkPlugin({
      //     name: "common",
      //     filename:"common.js",
      //     minChunks: 2
      // }),
      new HtmlWebpackPlugin({
          filename: 'dialog.html',
          inject: 'body',
          chunks:['dialog'],
          template: 'html/dialog.html',
          chunksSortMode:'dependency',
          hash:true,
      }),
      // 代码压缩
      // new webpack.optimize.UglifyJsPlugin({
      //   compress: {
      //       warnings: false
      //   },
      //   output: {
      //     comments: false
      //   }
      // }),
      new ExtractTextPlugin("css/[name].css"),
  ],
  module: {
      //加载器配置
      loaders: [
          {
              test: /\.css$/,
              // loader: 'style-loader!css-loader'
              loader: ExtractTextPlugin.extract("style-loader", "css-loader")
          },
          {
              test: /\.js[x]?$/,
              loaders: ['jsx-loader','babel-loader?presets[]=react,presets[]=es2015'],
              exclude:/node_modules/
          },
          {
              test: /\.scss$/,
              // loaders: ["style-loader", "css-loader","sass-loader"]
              loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
          },
          {
              test: /\.(jpe?g|png|gif|eot|ttf|woff|svg)/i,
              loader: 'url-loader?limit=5120&name=/static/[name].[ext]'
          },
      ]
  },

  //其它解决方案配置
  resolve: {
      extensions: ['.js', '.jsx', '.json', '.scss', 'css', 'html',''],
      // alias:{
      //   "zepto":"./js/libs/zepto/zepto.min.js"
      // }
  }
};

module.exports = config;
