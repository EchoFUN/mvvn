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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _lego = __webpack_require__(1);\n\nvar _lego2 = _interopRequireDefault(_lego);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar instance = new _lego2.default({\n  element: '#app',\n\n  template: '\\n    <div @onclick=\"handler\">Hi, guys. {{ welcome }}</div>\\n  ',\n\n  // The data needed for the template bind.\n  data: {\n    welcome: 'Hello, world ! I love you.'\n  },\n\n  methods: {\n    handler: function handler() {\n      this.data.welcome = 'Another MVVN Test.';\n    }\n  }\n}); /**\n     * \n     * @fileOverview 启动文件设置信息，用来启动整个 APP 项目；\n     * @date 2016-11-14 星期一\n     * \n     * \n     * \n     * \n     * \n     */\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2Jvb3QuanM/OTNjOCJdLCJuYW1lcyI6WyJpbnN0YW5jZSIsImVsZW1lbnQiLCJ0ZW1wbGF0ZSIsImRhdGEiLCJ3ZWxjb21lIiwibWV0aG9kcyIsImhhbmRsZXIiXSwibWFwcGluZ3MiOiI7O0FBV0E7Ozs7OztBQUVBLElBQU1BLFdBQVcsbUJBQVM7QUFDeEJDLFdBQVMsTUFEZTs7QUFHeEJDLDZFQUh3Qjs7QUFPeEI7QUFDQUMsUUFBTTtBQUNKQyxhQUFTO0FBREwsR0FSa0I7O0FBWXhCQyxXQUFTO0FBQ1BDLGFBQVMsbUJBQVk7QUFDbkIsV0FBS0gsSUFBTCxDQUFVQyxPQUFWLEdBQW9CLG9CQUFwQjtBQUNEO0FBSE07QUFaZSxDQUFULENBQWpCLEMsQ0FiQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBcbiAqIEBmaWxlT3ZlcnZpZXcg5ZCv5Yqo5paH5Lu26K6+572u5L+h5oGv77yM55So5p2l5ZCv5Yqo5pW05LiqIEFQUCDpobnnm67vvJtcbiAqIEBkYXRlIDIwMTYtMTEtMTQg5pif5pyf5LiAXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqIFxuICovXG5cbmltcG9ydCBMZWdvIGZyb20gJy4vbGVnbyc7XG5cbmNvbnN0IGluc3RhbmNlID0gbmV3IExlZ28oe1xuICBlbGVtZW50OiAnI2FwcCcsXG5cbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IEBvbmNsaWNrPVwiaGFuZGxlclwiPkhpLCBndXlzLiB7eyB3ZWxjb21lIH19PC9kaXY+XG4gIGAsXG5cbiAgLy8gVGhlIGRhdGEgbmVlZGVkIGZvciB0aGUgdGVtcGxhdGUgYmluZC5cbiAgZGF0YToge1xuICAgIHdlbGNvbWU6ICdIZWxsbywgd29ybGQgISBJIGxvdmUgeW91LidcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlcjogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kYXRhLndlbGNvbWUgPSAnQW5vdGhlciBNVlZOIFRlc3QuJztcbiAgICB9XG4gIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMveHVrYWkvRG9jdW1lbnRzL3dvcmtzcGFjZS9tdnZuL2xlZ28vYm9vdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * \n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @fileOverview MVVN 框架执行入口文件，从这里开始加载其他的框架性质文件。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2016-11-07 星期一\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * \n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * \n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * \n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * \n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * \n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */\n\nvar _utils = __webpack_require__(2);\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nvar _template = __webpack_require__(3);\n\nvar _template2 = _interopRequireDefault(_template);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Lego = function () {\n\n  /**\n   * \n   * @param {Object} config 构造方法配置文件信息；\n   * \n   * \n   * \n   */\n  function Lego(config) {\n    _classCallCheck(this, Lego);\n\n    // TODO 判断输入参数的是否为字符串或者一个DOM对象，以及输入参数的合法性（即是否存在）；\n    var queryElement = document.querySelectorAll(config.element);\n\n    // TODO 对 nodeList 对象进行封装处理，确保能够执行到 nodeList 中的每一个元素；\n    queryElement[0].innerHTML = _template2.default.compile(config.template, {\n      datasouce: config.data\n    });\n\n    this._bindData(config);\n    this._bindEvents();\n  }\n\n  /**\n   * \n   * \n   * \n   * \n   * \n   * \n   */\n\n\n  _createClass(Lego, [{\n    key: '_render',\n    value: function _render() {}\n\n    // TODO 比较粗放型的直接改变，否则是需要进行计算 Virtual DOM 的 diff，并且进行相应的调整\n\n    /**\n     * \n     * 对模板在模板上的事件进行一系列的方法绑定；\n     * \n     * \n     * \n     */\n\n  }, {\n    key: '_bindEvents',\n    value: function _bindEvents() {}\n\n    /**\n     * \n     * 对 config 中的 data 字段进行监听；\n     * \n     * \n     * \n     * \n     */\n\n  }, {\n    key: '_bindData',\n    value: function _bindData(config) {\n      var data = config.data;\n\n      var self = this;\n      Object.keys(data).forEach(function (value, index) {\n\n        Object.defineProperty(data, value, {\n          get: function get() {\n            return data[index];\n          },\n\n          set: function set(value) {\n            data[index] = value;\n\n            debugger;\n            self.render();\n          }\n        });\n      });\n    }\n  }]);\n\n  return Lego;\n}();\n\nexports.default = Lego;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2xlZ28uanM/MzExNSJdLCJuYW1lcyI6WyJMZWdvIiwiY29uZmlnIiwicXVlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsImlubmVySFRNTCIsImNvbXBpbGUiLCJ0ZW1wbGF0ZSIsImRhdGFzb3VjZSIsImRhdGEiLCJfYmluZERhdGEiLCJfYmluZEV2ZW50cyIsInNlbGYiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInZhbHVlIiwiaW5kZXgiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInNldCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O3FqQkFBQTs7Ozs7Ozs7Ozs7QUFXQTs7OztBQUNBOzs7Ozs7OztJQUVNQSxJOztBQUVKOzs7Ozs7O0FBT0EsZ0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFFbEI7QUFDQSxRQUFJQyxlQUFlQyxTQUFTQyxnQkFBVCxDQUEwQkgsT0FBT0ksT0FBakMsQ0FBbkI7O0FBRUE7QUFDQUgsaUJBQWEsQ0FBYixFQUFnQkksU0FBaEIsR0FBNEIsbUJBQVNDLE9BQVQsQ0FBaUJOLE9BQU9PLFFBQXhCLEVBQWtDO0FBQzVEQyxpQkFBV1IsT0FBT1M7QUFEMEMsS0FBbEMsQ0FBNUI7O0FBSUEsU0FBS0MsU0FBTCxDQUFlVixNQUFmO0FBQ0EsU0FBS1csV0FBTDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7OEJBUVUsQ0FJVDs7QUFGQzs7QUFJRjs7Ozs7Ozs7OztrQ0FPYyxDQUViOztBQUVEOzs7Ozs7Ozs7Ozs4QkFRVVgsTSxFQUFRO0FBQ2hCLFVBQUlTLE9BQU9ULE9BQU9TLElBQWxCOztBQUVBLFVBQUlHLE9BQU8sSUFBWDtBQUNBQyxhQUFPQyxJQUFQLENBQVlMLElBQVosRUFBa0JNLE9BQWxCLENBQTBCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjs7QUFFMUNKLGVBQU9LLGNBQVAsQ0FBc0JULElBQXRCLEVBQTRCTyxLQUE1QixFQUFtQztBQUNqQ0csZUFBSyxlQUFNO0FBQ1QsbUJBQU9WLEtBQUtRLEtBQUwsQ0FBUDtBQUNELFdBSGdDOztBQUtqQ0csZUFBSyxhQUFDSixLQUFELEVBQVc7QUFDZFAsaUJBQUtRLEtBQUwsSUFBY0QsS0FBZDs7QUFFQTtBQUNBSixpQkFBS1MsTUFBTDtBQUNEO0FBVmdDLFNBQW5DO0FBWUQsT0FkRDtBQWVEOzs7Ozs7a0JBR1l0QixJIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFxuICogQGZpbGVPdmVydmlldyBNVlZOIOahhuaetuaJp+ihjOWFpeWPo+aWh+S7tu+8jOS7jui/memHjOW8gOWni+WKoOi9veWFtuS7lueahOahhuaetuaAp+i0qOaWh+S7tuOAglxuICogQGRhdGUgMjAxNi0xMS0wNyDmmJ/mnJ/kuIBcbiAqIFxuICogXG4gKiBcbiAqIFxuICogXG4gKi9cblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZSc7XG5cbmNsYXNzIExlZ28ge1xuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyDmnoTpgKDmlrnms5XphY3nva7mlofku7bkv6Hmga/vvJtcbiAgICogXG4gICAqIFxuICAgKiBcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuXG4gICAgLy8gVE9ETyDliKTmlq3ovpPlhaXlj4LmlbDnmoTmmK/lkKbkuLrlrZfnrKbkuLLmiJbogIXkuIDkuKpET03lr7nosaHvvIzku6Xlj4rovpPlhaXlj4LmlbDnmoTlkIjms5XmgKfvvIjljbPmmK/lkKblrZjlnKjvvInvvJtcbiAgICBsZXQgcXVlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjb25maWcuZWxlbWVudCk7XG5cbiAgICAvLyBUT0RPIOWvuSBub2RlTGlzdCDlr7nosaHov5vooYzlsIHoo4XlpITnkIbvvIznoa7kv53og73lpJ/miafooYzliLAgbm9kZUxpc3Qg5Lit55qE5q+P5LiA5Liq5YWD57Sg77ybXG4gICAgcXVlcnlFbGVtZW50WzBdLmlubmVySFRNTCA9IHRlbXBsYXRlLmNvbXBpbGUoY29uZmlnLnRlbXBsYXRlLCB7XG4gICAgICBkYXRhc291Y2U6IGNvbmZpZy5kYXRhXG4gICAgfSk7XG5cbiAgICB0aGlzLl9iaW5kRGF0YShjb25maWcpO1xuICAgIHRoaXMuX2JpbmRFdmVudHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogXG4gICAqIFxuICAgKiBcbiAgICogXG4gICAqIFxuICAgKi9cbiAgX3JlbmRlcigpIHtcblxuICAgIC8vIFRPRE8g5q+U6L6D57KX5pS+5Z6L55qE55u05o6l5pS55Y+Y77yM5ZCm5YiZ5piv6ZyA6KaB6L+b6KGM6K6h566XIFZpcnR1YWwgRE9NIOeahCBkaWZm77yM5bm25LiU6L+b6KGM55u45bqU55qE6LCD5pW0XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICog5a+55qih5p2/5Zyo5qih5p2/5LiK55qE5LqL5Lu26L+b6KGM5LiA57O75YiX55qE5pa55rOV57uR5a6a77ybXG4gICAqIFxuICAgKiBcbiAgICogXG4gICAqL1xuICBfYmluZEV2ZW50cygpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiDlr7kgY29uZmlnIOS4reeahCBkYXRhIOWtl+autei/m+ihjOebkeWQrO+8m1xuICAgKiBcbiAgICogXG4gICAqIFxuICAgKiBcbiAgICovXG4gIF9iaW5kRGF0YShjb25maWcpIHtcbiAgICBsZXQgZGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIFxuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRhdGEsIHZhbHVlLCB7XG4gICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBkYXRhW2luZGV4XTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIGRhdGFbaW5kZXhdID0gdmFsdWU7XG5cbiAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICBzZWxmLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlZ287XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy94dWthaS9Eb2N1bWVudHMvd29ya3NwYWNlL212dm4vbGVnby9sZWdvLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\n/**\n * \n * Lego 通用工具包文件； \n * @date 2016-11-10 星期四\n * \n * \n * \n * \n * \n */\n\n/**\n * \n * 判断当前的输入是否为字符串；\n * @param {String} input 输入的变量\n * @return {Boolean} 是否为一个字符（串）\n * \n */\nexports.isCharacter = function (input) {};\n\n/**\n * \n * \n * \n * \n * \n * \n */\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL3V0aWxzLmpzPzA0OTYiXSwibmFtZXMiOlsiZXhwb3J0cyIsImlzQ2hhcmFjdGVyIiwiaW5wdXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7QUFPQUEsUUFBUUMsV0FBUixHQUFzQixVQUFDQyxLQUFELEVBQVcsQ0FHaEMsQ0FIRDs7QUFLQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBcbiAqIExlZ28g6YCa55So5bel5YW35YyF5paH5Lu277ybIFxuICogQGRhdGUgMjAxNi0xMS0xMCDmmJ/mnJ/lm5tcbiAqIFxuICogXG4gKiBcbiAqIFxuICogXG4gKi9cblxuLyoqXG4gKiBcbiAqIOWIpOaWreW9k+WJjeeahOi+k+WFpeaYr+WQpuS4uuWtl+espuS4su+8m1xuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IOi+k+WFpeeahOWPmOmHj1xuICogQHJldHVybiB7Qm9vbGVhbn0g5piv5ZCm5Li65LiA5Liq5a2X56ym77yI5Liy77yJXG4gKiBcbiAqL1xuZXhwb3J0cy5pc0NoYXJhY3RlciA9IChpbnB1dCkgPT4ge1xuXG5cbn1cblxuLyoqXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqIFxuICogXG4gKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMveHVrYWkvRG9jdW1lbnRzL3dvcmtzcGFjZS9tdnZuL2xlZ28vdXRpbHMuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * \n * @fileOverview 页面模板的分析引擎，可以用来组装数据，绑定方法等；\n * @date 2016-11-14 星期一\n * \n * \n * \n * \n * \n */\n\nvar Template = function () {\n  function Template() {\n    _classCallCheck(this, Template);\n  }\n\n  _createClass(Template, null, [{\n    key: \"compile\",\n\n\n    /**\n     * \n     * @param {String} input 需要待编译的字符串；\n     * @param {Object} config 输入给模板的相应的配置文件；控制相应的编译行为；\n     * \n     * \n     */\n    value: function compile(input, config) {\n\n      // TODO 这里仅仅处理作为不带逻辑符号（if, for）等等关键字的模板编译，否则不能用 replace 处理；    \n      input = input.replace(/1/, function () {});\n\n      return input;\n    }\n  }]);\n\n  return Template;\n}();\n\nexports.default = Template;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL3RlbXBsYXRlLmpzP2NhZDgiXSwibmFtZXMiOlsiVGVtcGxhdGUiLCJpbnB1dCIsImNvbmZpZyIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7SUFXTUEsUTs7Ozs7Ozs7O0FBRUo7Ozs7Ozs7NEJBT2dCQyxLLEVBQU9DLE0sRUFBUTs7QUFFN0I7QUFDQUQsY0FBUUEsTUFBTUUsT0FBTixDQUFjLEdBQWQsRUFBbUIsWUFBTSxDQUVoQyxDQUZPLENBQVI7O0FBSUEsYUFBT0YsS0FBUDtBQUNEOzs7Ozs7a0JBR1lELFEiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogXG4gKiBAZmlsZU92ZXJ2aWV3IOmhtemdouaooeadv+eahOWIhuaekOW8leaTju+8jOWPr+S7peeUqOadpee7hOijheaVsOaNru+8jOe7keWumuaWueazleetie+8m1xuICogQGRhdGUgMjAxNi0xMS0xNCDmmJ/mnJ/kuIBcbiAqIFxuICogXG4gKiBcbiAqIFxuICogXG4gKi9cblxuY2xhc3MgVGVtcGxhdGUge1xuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IOmcgOimgeW+hee8luivkeeahOWtl+espuS4su+8m1xuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIOi+k+WFpee7meaooeadv+eahOebuOW6lOeahOmFjee9ruaWh+S7tu+8m+aOp+WItuebuOW6lOeahOe8luivkeihjOS4uu+8m1xuICAgKiBcbiAgICogXG4gICAqL1xuICBzdGF0aWMgY29tcGlsZSAoaW5wdXQsIGNvbmZpZykge1xuXG4gICAgLy8gVE9ETyDov5nph4zku4Xku4XlpITnkIbkvZzkuLrkuI3luKbpgLvovpHnrKblj7fvvIhpZiwgZm9y77yJ562J562J5YWz6ZSu5a2X55qE5qih5p2/57yW6K+R77yM5ZCm5YiZ5LiN6IO955SoIHJlcGxhY2Ug5aSE55CG77ybICAgIFxuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvMS8sICgpID0+IHtcbiAgICAgIFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL3RlbXBsYXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);