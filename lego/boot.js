/**
 * 
 * @fileOverview 启动文件设置信息，用来启动整个 APP 项目；
 * 
 * 
 * 
 * 
 * 
 * 
 */

import Lego from './lego';

const instance = new Lego({
  element: '#app',

  template: '<div>{{welcome}}</div>',

  // The data needed for the template bind.
  data: {
    welcome: 'Hello, world ! I love you.'
  }
});