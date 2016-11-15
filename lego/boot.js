/**
 * 
 * @fileOverview 启动文件设置信息，用来启动整个 APP 项目；
 * @date 2016-11-14 星期一
 * 
 * 
 * 
 * 
 * 
 */

import Lego from './lego';

const instance = new Lego({
  element: '#app',

  template: `
    <div c-handler="handler">Hi, guys. {{ welcome }}</div>
  `,

  // The data needed for the template bind.
  data: {
    welcome: 'Hello, world ! I love you.'
  },

  methods: {
    handler: function () {
      this.data.welcome = 'Another MVVN Test.';
    }
  }
});



