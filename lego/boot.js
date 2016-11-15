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

import {
  h,
  diff,
  patch
} from 'virtual-dom';

let createEle = require('virtual-dom/create-element');

let render = (count) => {
  return h('div', {

    style: {
      textAlign: 'center',
      lineHeight: (100 + count) + 'px',
      border: '1px solid red',
      width: (100 + count) + 'px',
      height: (100 + count) + 'px'
    }
  }, [String(count)]);
};

let count = 0;
let tree = render(count);
let rootNode = createEle(tree);

document.body.appendChild(rootNode);

// 3: Wire up the update logic 
setInterval(function () {
  count++;

  var newTree = render(count);
  var patches = diff(tree, newTree);
  
  rootNode = patch(rootNode, patches);
  tree = newTree;
}, 1000);

/** 
import Lego from './lego';

const instance = new Lego({
  element: '#app',

  template: `
    <div @onclick="handler">Hi, guys. {{ welcome }}</div>
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
**/