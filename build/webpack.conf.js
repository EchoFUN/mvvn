/**
 * 
 * @fileOverview WebPack 配置文件信息，用来描述文件的编译行为；
 * @date 2016-11-07 星期一
 * 
 * 
 * 
 * 
 * 
 */

const projectRoot = __dirname + '/../';

module.exports = {
  context: projectRoot,

  entry: './lego/app.js',

  output: {
    path: '../pre/dist',
    filename: 'app.js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: projectRoot + 'lego',
      query: {
        presets: ['es2015']
      }
    }]
  },

  resolve: {
    extensions: ['', '.js', '.vue'],
  },

  devtool: '#eval-source-map'
};