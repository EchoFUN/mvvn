/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _lego = __webpack_require__(36);\n\nvar _lego2 = _interopRequireDefault(_lego);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar instance = new _lego2.default({\n  element: '#app',\n\n  template: '\\n    <div c-handler=\"handler\">Hi, guys. {{ welcome }}</div>\\n  ',\n\n  // The data needed for the template bind.\n  data: {\n    welcome: 'Hello, world ! I love you.'\n  },\n\n  methods: {\n    handler: function handler() {\n      this.data.welcome = 'Another MVVN Test.';\n    }\n  }\n}); /**\n     * \n     * @fileOverview 启动文件设置信息，用来启动整个 APP 项目；\n     * @date 2016-11-14 星期一\n     * \n     * \n     * \n     * \n     * \n     */\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2Jvb3QuanM/OTNjOCJdLCJuYW1lcyI6WyJpbnN0YW5jZSIsImVsZW1lbnQiLCJ0ZW1wbGF0ZSIsImRhdGEiLCJ3ZWxjb21lIiwibWV0aG9kcyIsImhhbmRsZXIiXSwibWFwcGluZ3MiOiI7O0FBV0E7Ozs7OztBQUVBLElBQU1BLFdBQVcsbUJBQVM7QUFDeEJDLFdBQVMsTUFEZTs7QUFHeEJDLDhFQUh3Qjs7QUFPeEI7QUFDQUMsUUFBTTtBQUNKQyxhQUFTO0FBREwsR0FSa0I7O0FBWXhCQyxXQUFTO0FBQ1BDLGFBQVMsbUJBQVk7QUFDbkIsV0FBS0gsSUFBTCxDQUFVQyxPQUFWLEdBQW9CLG9CQUFwQjtBQUNEO0FBSE07QUFaZSxDQUFULENBQWpCLEMsQ0FiQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBcbiAqIEBmaWxlT3ZlcnZpZXcg5ZCv5Yqo5paH5Lu26K6+572u5L+h5oGv77yM55So5p2l5ZCv5Yqo5pW05LiqIEFQUCDpobnnm67vvJtcbiAqIEBkYXRlIDIwMTYtMTEtMTQg5pif5pyf5LiAXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqIFxuICovXG5cbmltcG9ydCBMZWdvIGZyb20gJy4vbGVnbyc7XG5cbmNvbnN0IGluc3RhbmNlID0gbmV3IExlZ28oe1xuICBlbGVtZW50OiAnI2FwcCcsXG5cbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGMtaGFuZGxlcj1cImhhbmRsZXJcIj5IaSwgZ3V5cy4ge3sgd2VsY29tZSB9fTwvZGl2PlxuICBgLFxuXG4gIC8vIFRoZSBkYXRhIG5lZWRlZCBmb3IgdGhlIHRlbXBsYXRlIGJpbmQuXG4gIGRhdGE6IHtcbiAgICB3ZWxjb21lOiAnSGVsbG8sIHdvcmxkICEgSSBsb3ZlIHlvdS4nXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZGF0YS53ZWxjb21lID0gJ0Fub3RoZXIgTVZWTiBUZXN0Lic7XG4gICAgfVxuICB9XG59KTtcblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMveHVrYWkvRG9jdW1lbnRzL3dvcmtzcGFjZS9tdnZuL2xlZ28vYm9vdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * \n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @fileOverview MVVN 框架执行入口文件，从这里开始加载其他的框架性质文件。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2016-11-07 星期一\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * \n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * \n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * \n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * \n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * \n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */\n\nvar _utils = __webpack_require__(37);\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nvar _template = __webpack_require__(38);\n\nvar _template2 = _interopRequireDefault(_template);\n\nvar _directive = __webpack_require__(39);\n\nvar _directive2 = _interopRequireDefault(_directive);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// import {h, diff, patch, createElement} from 'virtual-dom';\n\nvar Lego = function () {\n\n  /**\n   * \n   * @param {Object} config 构造方法配置文件信息；\n   * \n   * \n   * \n   */\n  function Lego(config) {\n    _classCallCheck(this, Lego);\n\n    this.config = config;\n\n    this._render();\n\n    this._bindData();\n    this._bindEvents();\n  }\n\n  /**\n   * \n   * \n   * \n   * \n   * \n   * \n   */\n\n\n  _createClass(Lego, [{\n    key: '_render',\n    value: function _render() {\n\n      // TODO 比较粗放型的直接改变，否则是需要进行计算 Virtual DOM 的 diff，并且进行相应的调整\n\n      // TODO 判断输入参数的是否为字符串或者一个DOM对象，以及输入参数的合法性（即是否存在）；\n      var config = this.config;\n      var queryElement = document.querySelector(config.element);\n\n      // TODO 对 nodeList 对象进行封装处理，确保能够执行到 nodeList 中的每一个元素；\n      queryElement.innerHTML = _template2.default.compile(config.template, {\n        datasource: config.data\n      });\n\n      // TODO 这里把DOM转换为虚拟 DOM 进行保存效率也许会更高，But, what ever !；\n      this.queryElement = queryElement;\n    }\n\n    /**\n     * \n     * 对模板在模板上的事件进行一系列的方法绑定；\n     * \n     * \n     * \n     */\n\n  }, {\n    key: '_bindEvents',\n    value: function _bindEvents() {\n      var _this = this;\n\n      this._transverse(this.queryElement, function (node) {\n        if (node.nodeType == 1) {\n          (function () {\n            // 普通元素节点\n            var attributes = node.attributes;\n\n            Object.keys(attributes).forEach(function (key) {\n              var direct = attributes[key].value;\n\n              console.log(_directive2.default);\n              _directive2.default[direct].bind.call(_this, node);\n            });\n          })();\n        }\n      });\n    }\n  }, {\n    key: '_transverse',\n    value: function _transverse(node, callback) {\n      if (node.hasChildNodes()) {\n        var children = node.childNodes,\n            childrenLen = children.length;\n        for (var i = 0; i < childrenLen; i++) {\n          var _child = children[i];\n          callback(_child);\n\n          // 递归深度遍历节点，进行相应的处理\n          this._transverse(_child, callback);\n        }\n      }\n    }\n\n    /**\n     * \n     * 对 config 中的 data 字段进行监听；\n     * \n     * \n     * \n     * \n     */\n\n  }, {\n    key: '_bindData',\n    value: function _bindData() {\n      var data = this.config.data;\n\n      var self = this;\n      Object.keys(data).forEach(function (keyVal) {\n\n        Object.defineProperty(data, keyVal, {\n          set: function set(value) {\n\n            debugger;\n            data[keyVal] = value;\n            self._render();\n          }\n        });\n      });\n    }\n  }]);\n\n  return Lego;\n}();\n\nexports.default = Lego;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2xlZ28uanM/MzExNSJdLCJuYW1lcyI6WyJMZWdvIiwiY29uZmlnIiwiX3JlbmRlciIsIl9iaW5kRGF0YSIsIl9iaW5kRXZlbnRzIiwicXVlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWxlbWVudCIsImlubmVySFRNTCIsImNvbXBpbGUiLCJ0ZW1wbGF0ZSIsImRhdGFzb3VyY2UiLCJkYXRhIiwiX3RyYW5zdmVyc2UiLCJub2RlIiwibm9kZVR5cGUiLCJhdHRyaWJ1dGVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJkaXJlY3QiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJiaW5kIiwiY2FsbCIsImNhbGxiYWNrIiwiaGFzQ2hpbGROb2RlcyIsImNoaWxkcmVuIiwiY2hpbGROb2RlcyIsImNoaWxkcmVuTGVuIiwibGVuZ3RoIiwiaSIsIl9jaGlsZCIsInNlbGYiLCJrZXlWYWwiLCJkZWZpbmVQcm9wZXJ0eSIsInNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O3FqQkFBQTs7Ozs7Ozs7Ozs7QUFXQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7O0lBRU1BLEk7O0FBRUo7Ozs7Ozs7QUFPQSxnQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsU0FBS0MsT0FBTDs7QUFFQSxTQUFLQyxTQUFMO0FBQ0EsU0FBS0MsV0FBTDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7OEJBUVU7O0FBRVI7O0FBRUE7QUFDQSxVQUFJSCxTQUFTLEtBQUtBLE1BQWxCO0FBQ0EsVUFBSUksZUFBZUMsU0FBU0MsYUFBVCxDQUF1Qk4sT0FBT08sT0FBOUIsQ0FBbkI7O0FBRUE7QUFDQUgsbUJBQWFJLFNBQWIsR0FBeUIsbUJBQVNDLE9BQVQsQ0FBaUJULE9BQU9VLFFBQXhCLEVBQWtDO0FBQ3pEQyxvQkFBWVgsT0FBT1k7QUFEc0MsT0FBbEMsQ0FBekI7O0FBSUE7QUFDQSxXQUFLUixZQUFMLEdBQW9CQSxZQUFwQjtBQUNEOztBQUVEOzs7Ozs7Ozs7O2tDQU9jO0FBQUE7O0FBQ1osV0FBS1MsV0FBTCxDQUFpQixLQUFLVCxZQUF0QixFQUFvQyxVQUFDVSxJQUFELEVBQVU7QUFDNUMsWUFBSUEsS0FBS0MsUUFBTCxJQUFpQixDQUFyQixFQUF3QjtBQUFBO0FBQUU7QUFDeEIsZ0JBQUlDLGFBQWFGLEtBQUtFLFVBQXRCOztBQUVBQyxtQkFBT0MsSUFBUCxDQUFZRixVQUFaLEVBQXdCRyxPQUF4QixDQUFnQyxVQUFDQyxHQUFELEVBQVM7QUFDdkMsa0JBQUlDLFNBQVNMLFdBQVdJLEdBQVgsRUFBZ0JFLEtBQTdCOztBQUVBQyxzQkFBUUMsR0FBUjtBQUNBLGtDQUFVSCxNQUFWLEVBQWtCSSxJQUFsQixDQUF1QkMsSUFBdkIsUUFBa0NaLElBQWxDO0FBQ0QsYUFMRDtBQUhzQjtBQVN2QjtBQUNGLE9BWEQ7QUFZRDs7O2dDQUVXQSxJLEVBQU1hLFEsRUFBVTtBQUMxQixVQUFJYixLQUFLYyxhQUFMLEVBQUosRUFBMEI7QUFDeEIsWUFBSUMsV0FBV2YsS0FBS2dCLFVBQXBCO0FBQUEsWUFBZ0NDLGNBQWNGLFNBQVNHLE1BQXZEO0FBQ0EsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLFdBQXBCLEVBQWlDRSxHQUFqQyxFQUFzQztBQUNwQyxjQUFJQyxTQUFTTCxTQUFTSSxDQUFULENBQWI7QUFDQU4sbUJBQVVPLE1BQVY7O0FBRUE7QUFDQSxlQUFLckIsV0FBTCxDQUFpQnFCLE1BQWpCLEVBQXlCUCxRQUF6QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs7Z0NBUVk7QUFDVixVQUFJZixPQUFPLEtBQUtaLE1BQUwsQ0FBWVksSUFBdkI7O0FBRUEsVUFBSXVCLE9BQU8sSUFBWDtBQUNBbEIsYUFBT0MsSUFBUCxDQUFZTixJQUFaLEVBQWtCTyxPQUFsQixDQUEwQixVQUFTaUIsTUFBVCxFQUFpQjs7QUFFekNuQixlQUFPb0IsY0FBUCxDQUFzQnpCLElBQXRCLEVBQTRCd0IsTUFBNUIsRUFBb0M7QUFDbENFLGVBQUssYUFBQ2hCLEtBQUQsRUFBVzs7QUFHZDtBQUNBVixpQkFBS3dCLE1BQUwsSUFBZWQsS0FBZjtBQUNBYSxpQkFBS2xDLE9BQUw7QUFDRDtBQVBpQyxTQUFwQztBQVNELE9BWEQ7QUFZRDs7Ozs7O2tCQUdZRixJIiwiZmlsZSI6IjM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBcbiAqIEBmaWxlT3ZlcnZpZXcgTVZWTiDmoYbmnrbmiafooYzlhaXlj6Pmlofku7bvvIzku47ov5nph4zlvIDlp4vliqDovb3lhbbku5bnmoTmoYbmnrbmgKfotKjmlofku7bjgIJcbiAqIEBkYXRlIDIwMTYtMTEtMDcg5pif5pyf5LiAXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqIFxuICovXG4gXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscydcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcbmltcG9ydCBkaXJlY3RpdmUgZnJvbSAnLi9kaXJlY3RpdmUnO1xuXG4vLyBpbXBvcnQge2gsIGRpZmYsIHBhdGNoLCBjcmVhdGVFbGVtZW50fSBmcm9tICd2aXJ0dWFsLWRvbSc7XG5cbmNsYXNzIExlZ28ge1xuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyDmnoTpgKDmlrnms5XphY3nva7mlofku7bkv6Hmga/vvJtcbiAgICogXG4gICAqIFxuICAgKiBcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuXG4gICAgdGhpcy5fcmVuZGVyKCk7XG5cbiAgICB0aGlzLl9iaW5kRGF0YSgpO1xuICAgIHRoaXMuX2JpbmRFdmVudHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogXG4gICAqIFxuICAgKiBcbiAgICogXG4gICAqIFxuICAgKi9cbiAgX3JlbmRlcigpIHtcblxuICAgIC8vIFRPRE8g5q+U6L6D57KX5pS+5Z6L55qE55u05o6l5pS55Y+Y77yM5ZCm5YiZ5piv6ZyA6KaB6L+b6KGM6K6h566XIFZpcnR1YWwgRE9NIOeahCBkaWZm77yM5bm25LiU6L+b6KGM55u45bqU55qE6LCD5pW0XG5cbiAgICAvLyBUT0RPIOWIpOaWrei+k+WFpeWPguaVsOeahOaYr+WQpuS4uuWtl+espuS4suaIluiAheS4gOS4qkRPTeWvueixoe+8jOS7peWPiui+k+WFpeWPguaVsOeahOWQiOazleaAp++8iOWNs+aYr+WQpuWtmOWcqO+8ie+8m1xuICAgIGxldCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICBsZXQgcXVlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuZWxlbWVudCk7XG5cbiAgICAvLyBUT0RPIOWvuSBub2RlTGlzdCDlr7nosaHov5vooYzlsIHoo4XlpITnkIbvvIznoa7kv53og73lpJ/miafooYzliLAgbm9kZUxpc3Qg5Lit55qE5q+P5LiA5Liq5YWD57Sg77ybXG4gICAgcXVlcnlFbGVtZW50LmlubmVySFRNTCA9IHRlbXBsYXRlLmNvbXBpbGUoY29uZmlnLnRlbXBsYXRlLCB7XG4gICAgICBkYXRhc291cmNlOiBjb25maWcuZGF0YVxuICAgIH0pO1xuXG4gICAgLy8gVE9ETyDov5nph4zmiopET03ovazmjaLkuLromZrmi58gRE9NIOi/m+ihjOS/neWtmOaViOeOh+S5n+iuuOS8muabtOmrmO+8jEJ1dCwgd2hhdCBldmVyICHvvJtcbiAgICB0aGlzLnF1ZXJ5RWxlbWVudCA9IHF1ZXJ5RWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICog5a+55qih5p2/5Zyo5qih5p2/5LiK55qE5LqL5Lu26L+b6KGM5LiA57O75YiX55qE5pa55rOV57uR5a6a77ybXG4gICAqIFxuICAgKiBcbiAgICogXG4gICAqL1xuICBfYmluZEV2ZW50cygpIHtcbiAgICB0aGlzLl90cmFuc3ZlcnNlKHRoaXMucXVlcnlFbGVtZW50LCAobm9kZSkgPT4ge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gMSkgeyAvLyDmma7pgJrlhYPntKDoioLngrlcbiAgICAgICAgbGV0IGF0dHJpYnV0ZXMgPSBub2RlLmF0dHJpYnV0ZXM7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgbGV0IGRpcmVjdCA9IGF0dHJpYnV0ZXNba2V5XS52YWx1ZTtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zb2xlLmxvZyhkaXJlY3RpdmUpO1xuICAgICAgICAgIGRpcmVjdGl2ZVtkaXJlY3RdLmJpbmQuY2FsbCh0aGlzLCBub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfdHJhbnN2ZXJzZShub2RlLCBjYWxsYmFjaykge1xuICAgIGlmIChub2RlLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgbGV0IGNoaWxkcmVuID0gbm9kZS5jaGlsZE5vZGVzLCBjaGlsZHJlbkxlbiA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5MZW47IGkrKykge1xuICAgICAgICBsZXQgX2NoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgIGNhbGxiYWNrKCBfY2hpbGQpO1xuXG4gICAgICAgIC8vIOmAkuW9kua3seW6pumBjeWOhuiKgueCue+8jOi/m+ihjOebuOW6lOeahOWkhOeQhlxuICAgICAgICB0aGlzLl90cmFuc3ZlcnNlKF9jaGlsZCwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICog5a+5IGNvbmZpZyDkuK3nmoQgZGF0YSDlrZfmrrXov5vooYznm5HlkKzvvJtcbiAgICogXG4gICAqIFxuICAgKiBcbiAgICogXG4gICAqL1xuICBfYmluZERhdGEoKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLmNvbmZpZy5kYXRhO1xuXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24oa2V5VmFsKSB7XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkYXRhLCBrZXlWYWwsIHtcbiAgICAgICAgc2V0OiAodmFsdWUpID0+IHtcblxuXG4gICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgZGF0YVtrZXlWYWxdID0gdmFsdWU7XG4gICAgICAgICAgc2VsZi5fcmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlZ287XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy94dWthaS9Eb2N1bWVudHMvd29ya3NwYWNlL212dm4vbGVnby9sZWdvLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 37:
/***/ function(module, exports) {

	eval("\"use strict\";\n\n/**\n * \n * Lego 通用工具包文件； \n * @date 2016-11-10 星期四\n * \n * \n * \n * \n * \n */\n\n/**\n * \n * 判断当前的输入是否为字符串；\n * @param {String} input 输入的变量\n * @return {Boolean} 是否为一个字符（串）\n * \n */\nexports.isCharacter = function (input) {};\n\n/**\n * \n * \n * \n * \n * \n * \n */\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL3V0aWxzLmpzPzA0OTYiXSwibmFtZXMiOlsiZXhwb3J0cyIsImlzQ2hhcmFjdGVyIiwiaW5wdXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7QUFPQUEsUUFBUUMsV0FBUixHQUFzQixVQUFDQyxLQUFELEVBQVcsQ0FHaEMsQ0FIRDs7QUFLQSIsImZpbGUiOiIzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogXG4gKiBMZWdvIOmAmueUqOW3peWFt+WMheaWh+S7tu+8myBcbiAqIEBkYXRlIDIwMTYtMTEtMTAg5pif5pyf5ZubXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqIFxuICovXG5cbi8qKlxuICogXG4gKiDliKTmlq3lvZPliY3nmoTovpPlhaXmmK/lkKbkuLrlrZfnrKbkuLLvvJtcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCDovpPlhaXnmoTlj5jph49cbiAqIEByZXR1cm4ge0Jvb2xlYW59IOaYr+WQpuS4uuS4gOS4quWtl+espu+8iOS4su+8iVxuICogXG4gKi9cbmV4cG9ydHMuaXNDaGFyYWN0ZXIgPSAoaW5wdXQpID0+IHtcblxuXG59XG5cbi8qKlxuICogXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqIFxuICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL3V0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 38:
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * \n * @fileOverview 页面模板的分析引擎，可以用来组装数据，绑定方法等；\n * @date 2016-11-14 星期一\n * \n * \n * \n * \n * \n */\n\nvar Template = function () {\n  function Template() {\n    _classCallCheck(this, Template);\n  }\n\n  _createClass(Template, null, [{\n    key: \"compile\",\n\n\n    /**\n     * \n     * @param {String} input 需要待编译的字符串；\n     * @param {Object} config 输入给模板的相应的配置文件；控制相应的编译行为；\n     * \n     * \n     */\n    value: function compile(input, config) {\n\n      // TODO 这里仅仅处理作为不带逻辑符号（if, for）等等关键字的模板编译，否则不能用 replace 处理；    \n      input = input.replace(/\\{\\{(.*)\\}\\}/ig, function ($0, $1) {\n        return config.datasource[$1.trim()];\n      });\n\n      return input;\n    }\n  }]);\n\n  return Template;\n}();\n\nexports.default = Template;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL3RlbXBsYXRlLmpzP2NhZDgiXSwibmFtZXMiOlsiVGVtcGxhdGUiLCJpbnB1dCIsImNvbmZpZyIsInJlcGxhY2UiLCIkMCIsIiQxIiwiZGF0YXNvdXJjZSIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7SUFXTUEsUTs7Ozs7Ozs7O0FBRUo7Ozs7Ozs7NEJBT2dCQyxLLEVBQU9DLE0sRUFBUTs7QUFFN0I7QUFDQUQsY0FBUUEsTUFBTUUsT0FBTixDQUFjLGdCQUFkLEVBQWdDLFVBQUNDLEVBQUQsRUFBS0MsRUFBTCxFQUFZO0FBQ2xELGVBQU9ILE9BQU9JLFVBQVAsQ0FBa0JELEdBQUdFLElBQUgsRUFBbEIsQ0FBUDtBQUNELE9BRk8sQ0FBUjs7QUFJQSxhQUFPTixLQUFQO0FBQ0Q7Ozs7OztrQkFHWUQsUSIsImZpbGUiOiIzOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogXG4gKiBAZmlsZU92ZXJ2aWV3IOmhtemdouaooeadv+eahOWIhuaekOW8leaTju+8jOWPr+S7peeUqOadpee7hOijheaVsOaNru+8jOe7keWumuaWueazleetie+8m1xuICogQGRhdGUgMjAxNi0xMS0xNCDmmJ/mnJ/kuIBcbiAqIFxuICogXG4gKiBcbiAqIFxuICogXG4gKi9cblxuY2xhc3MgVGVtcGxhdGUge1xuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IOmcgOimgeW+hee8luivkeeahOWtl+espuS4su+8m1xuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIOi+k+WFpee7meaooeadv+eahOebuOW6lOeahOmFjee9ruaWh+S7tu+8m+aOp+WItuebuOW6lOeahOe8luivkeihjOS4uu+8m1xuICAgKiBcbiAgICogXG4gICAqL1xuICBzdGF0aWMgY29tcGlsZSAoaW5wdXQsIGNvbmZpZykge1xuXG4gICAgLy8gVE9ETyDov5nph4zku4Xku4XlpITnkIbkvZzkuLrkuI3luKbpgLvovpHnrKblj7fvvIhpZiwgZm9y77yJ562J562J5YWz6ZSu5a2X55qE5qih5p2/57yW6K+R77yM5ZCm5YiZ5LiN6IO955SoIHJlcGxhY2Ug5aSE55CG77ybICAgIFxuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvXFx7XFx7KC4qKVxcfVxcfS9pZywgKCQwLCAkMSkgPT4ge1xuICAgICAgcmV0dXJuIGNvbmZpZy5kYXRhc291cmNlWyQxLnRyaW0oKV07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVtcGxhdGU7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMveHVrYWkvRG9jdW1lbnRzL3dvcmtzcGFjZS9tdnZuL2xlZ28vdGVtcGxhdGUuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 39:
/***/ function(module, exports) {

	eval("'use strict';\n\n/**\n * \n * @fileOverview 绑定在 DOM 结构对象上的指令集\n * @date 2016-11-16 星期三\n * \n * \n * \n * \n * \n */\n\nexports.handler = {\n\n  bind: function bind(node) {\n    var self = this;\n    node.addEventListener('click', function () {\n\n      self.config.data.welcome = 'Hi~';\n    });\n  }\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2RpcmVjdGl2ZS5qcz9kMDFkIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJoYW5kbGVyIiwiYmluZCIsIm5vZGUiLCJzZWxmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbmZpZyIsImRhdGEiLCJ3ZWxjb21lIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7OztBQVdBQSxRQUFRQyxPQUFSLEdBQWtCOztBQUVoQkMsUUFBTSxjQUFTQyxJQUFULEVBQWU7QUFDbkIsUUFBSUMsT0FBTyxJQUFYO0FBQ0FELFNBQUtFLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVc7O0FBRXhDRCxXQUFLRSxNQUFMLENBQVlDLElBQVosQ0FBaUJDLE9BQWpCLEdBQTJCLEtBQTNCO0FBQ0QsS0FIRDtBQUlEO0FBUmUsQ0FBbEIiLCJmaWxlIjoiMzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFxuICogQGZpbGVPdmVydmlldyDnu5HlrprlnKggRE9NIOe7k+aehOWvueixoeS4iueahOaMh+S7pOmbhlxuICogQGRhdGUgMjAxNi0xMS0xNiDmmJ/mnJ/kuIlcbiAqIFxuICogXG4gKiBcbiAqIFxuICogXG4gKi9cblxuZXhwb3J0cy5oYW5kbGVyID0ge1xuXG4gIGJpbmQ6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICBzZWxmLmNvbmZpZy5kYXRhLndlbGNvbWUgPSAnSGl+JztcbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2RpcmVjdGl2ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });