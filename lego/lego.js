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

import {h, diff, patch, createElement} from 'virtual-dom';

class Lego {

  /**
   * 
   * @param {Object} config 构造方法配置文件信息；
   * 
   * 
   * 
   */
  constructor(config) {
    this.config = config;

    this._render();
    
    this._bindData();
    this._bindEvents();
  }

  /**
   * 
   * 
   * 
   * 
   * 
   * 
   */
  _render() {

    // TODO 比较粗放型的直接改变，否则是需要进行计算 Virtual DOM 的 diff，并且进行相应的调整
    
    // TODO 判断输入参数的是否为字符串或者一个DOM对象，以及输入参数的合法性（即是否存在）；
    let config = this.config;
    let queryElement = document.querySelectorAll(config.element);

    // TODO 对 nodeList 对象进行封装处理，确保能够执行到 nodeList 中的每一个元素；
    queryElement[0].innerHTML = template.compile(config.template, {
      datasource: config.data
    });
  }

  /**
   * 
   * 对模板在模板上的事件进行一系列的方法绑定；
   * 
   * 
   * 
   */
  _bindEvents() {

    let self = this;
    setTimeout(() => {
      self.config.data.welcome = 'Fuck';
    }, 3000); 
  }

  /**
   * 
   * 对 config 中的 data 字段进行监听；
   * 
   * 
   * 
   * 
   */
  _bindData() {
    let data = this.config.data;
    
    let self = this;
    Object.keys(data).forEach((value, index) => {

      Object.defineProperty(data, value, {
        get: () => {
          return data[index];
        },

        set: (value) => {
          data[index] = value;
          self._render();
        }
      })
    });
  }
}

export default Lego;