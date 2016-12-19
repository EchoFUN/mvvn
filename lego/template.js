/**
 * 
 * @fileOverview 页面模板的分析引擎，可以用来组装数据，绑定方法等；
 * @date 2016-11-14 星期一
 * 
 * 
 * 
 * 
 * 
 */

'use strict';

class Template {

  /**
   * 
   * @param {String} input 需要待编译的字符串；
   * @param {Object} config 输入给模板的相应的配置文件；控制相应的编译行为；
   * 
   * 
   */
  static compile(input, config) {

    // TODO 这里仅仅处理作为不带逻辑符号（if, for）等等关键字的模板编译，否则不能用 replace 处理；    
    input = input.replace(/\{\{(.*)\}\}/ig, ($0, $1) => {
      return config.datasource[$1.trim()];
    });

    return input;
  }
}

export default Template;