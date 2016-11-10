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

class Component {

  constructor(config) {
    config = utils.assign(config, {

    });

    config = this._preprocess(config);
  }

  // Pre Process the data for the whole app configration.
  _preprocess(config) {

  }
}

export default Component;



