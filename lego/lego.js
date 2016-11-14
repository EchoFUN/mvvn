/**
 * 
 * @fileOverview MVVN 框架执行入口文件，从这里开始加载其他的框架性质文件。
 * @date 2016-11-07 星期一
 * 
 * 
 * 
 * 
 * 
 */

import utils from './utils'
import template from './template';

class Lego {

  /**
   * 
   * @param {Object} config 构造方法配置文件信息；
   * 
   * 
   * 
   */
  constructor(config) {

    // TODO 判断输入参数的是否为字符串或者一个DOM对象，以及输入参数的合法性（即是否存在）；
    let queryElement = document.querySelectorAll(config.element);

    // TODO 对 nodeList 对象进行封装处理，确保能够执行到 nodeList 中的每一个元素；
    queryElement[0].innerHTML = template.compile(config.template, {
      datasouce: config.data
    });

    debugger;
  }
}

export default Lego;