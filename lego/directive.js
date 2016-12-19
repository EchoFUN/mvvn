/**
 * 
 * @fileOverview 绑定在 DOM 结构对象上的指令集
 * @date 2016-11-16 星期三
 * 
 * 
 * 
 * 
 * 
 */

'use strict';

exports.click = {

  bind: function (node, value) {
    var self = this,
      conf = self.config;

    node.addEventListener('click', function () {

      let func = conf.methods[value];
      if (typeof func === 'function') {
        func.call(conf);
      }
    });
  }
};