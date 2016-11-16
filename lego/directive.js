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

exports.handler = {

  bind: function(node) {
    var self = this;
    node.addEventListener('click', function() {

      self.config.data.welcome = 'Hi~';
    });
  }
};