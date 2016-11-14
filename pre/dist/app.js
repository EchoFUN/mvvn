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

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _utils = __webpack_require__(2);\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nvar _template = __webpack_require__(3);\n\nvar _template2 = _interopRequireDefault(_template);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } } /**\n                                                                                                                                                           * \n                                                                                                                                                           * @fileOverview MVVN 框架执行入口文件，从这里开始加载其他的框架性质文件。\n                                                                                                                                                           * @date 2016-11-07 星期一\n                                                                                                                                                           * \n                                                                                                                                                           * \n                                                                                                                                                           * \n                                                                                                                                                           * \n                                                                                                                                                           * \n                                                                                                                                                           */\n\nvar Lego =\n\n/**\n * \n * @param {Object} config 构造方法配置文件信息；\n * \n * \n * \n */\nfunction Lego(config) {\n  _classCallCheck(this, Lego);\n\n  // TODO 判断输入参数的是否为字符串或者一个DOM对象，以及输入参数的合法性（即是否存在）；\n  var queryElement = document.querySelectorAll(config.element);\n\n  // TODO 对 nodeList 对象进行封装处理，确保能够执行到 nodeList 中的每一个元素；\n  queryElement[0].innerHTML = _template2.default.compile(config.template, {\n    datasouce: config.data\n  });\n\n  debugger;\n};\n\nexports.default = Lego;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2xlZ28uanM/MzExNSJdLCJuYW1lcyI6WyJMZWdvIiwiY29uZmlnIiwicXVlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsImlubmVySFRNTCIsImNvbXBpbGUiLCJ0ZW1wbGF0ZSIsImRhdGFzb3VjZSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQVdBOzs7O0FBQ0E7Ozs7OzswSkFaQTs7Ozs7Ozs7Ozs7SUFjTUEsSTs7QUFFSjs7Ozs7OztBQU9BLGNBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFFbEI7QUFDQSxNQUFJQyxlQUFlQyxTQUFTQyxnQkFBVCxDQUEwQkgsT0FBT0ksT0FBakMsQ0FBbkI7O0FBRUE7QUFDQUgsZUFBYSxDQUFiLEVBQWdCSSxTQUFoQixHQUE0QixtQkFBU0MsT0FBVCxDQUFpQk4sT0FBT08sUUFBeEIsRUFBa0M7QUFDNURDLGVBQVdSLE9BQU9TO0FBRDBDLEdBQWxDLENBQTVCOztBQUlBO0FBQ0QsQzs7a0JBR1lWLEkiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogXG4gKiBAZmlsZU92ZXJ2aWV3IE1WVk4g5qGG5p625omn6KGM5YWl5Y+j5paH5Lu277yM5LuO6L+Z6YeM5byA5aeL5Yqg6L295YW25LuW55qE5qGG5p625oCn6LSo5paH5Lu244CCXG4gKiBAZGF0ZSAyMDE2LTExLTA3IOaYn+acn+S4gFxuICogXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqL1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscydcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcblxuY2xhc3MgTGVnbyB7XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIOaehOmAoOaWueazlemFjee9ruaWh+S7tuS/oeaBr++8m1xuICAgKiBcbiAgICogXG4gICAqIFxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG5cbiAgICAvLyBUT0RPIOWIpOaWrei+k+WFpeWPguaVsOeahOaYr+WQpuS4uuWtl+espuS4suaIluiAheS4gOS4qkRPTeWvueixoe+8jOS7peWPiui+k+WFpeWPguaVsOeahOWQiOazleaAp++8iOWNs+aYr+WQpuWtmOWcqO+8ie+8m1xuICAgIGxldCBxdWVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy5lbGVtZW50KTtcblxuICAgIC8vIFRPRE8g5a+5IG5vZGVMaXN0IOWvueixoei/m+ihjOWwgeijheWkhOeQhu+8jOehruS/neiDveWkn+aJp+ihjOWIsCBub2RlTGlzdCDkuK3nmoTmr4/kuIDkuKrlhYPntKDvvJtcbiAgICBxdWVyeUVsZW1lbnRbMF0uaW5uZXJIVE1MID0gdGVtcGxhdGUuY29tcGlsZShjb25maWcudGVtcGxhdGUsIHtcbiAgICAgIGRhdGFzb3VjZTogY29uZmlnLmRhdGFcbiAgICB9KTtcblxuICAgIGRlYnVnZ2VyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlZ287XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy94dWthaS9Eb2N1bWVudHMvd29ya3NwYWNlL212dm4vbGVnby9sZWdvLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\n/**\n * \n * Lego 通用工具包文件； \n * @date 2016-11-10 星期四\n * \n * \n * \n * \n * \n */\n\n/**\n * \n * 判断当前的输入是否为字符串；\n * @param {String} input 输入的变量\n * @return {Boolean} 是否为一个字符（串）\n * \n */\nexports.isCharacter = function (input) {};\n\n/**\n * \n * \n * \n * \n * \n * \n */\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL3V0aWxzLmpzPzA0OTYiXSwibmFtZXMiOlsiZXhwb3J0cyIsImlzQ2hhcmFjdGVyIiwiaW5wdXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7QUFPQUEsUUFBUUMsV0FBUixHQUFzQixVQUFVQyxLQUFWLEVBQWlCLENBR3RDLENBSEQ7O0FBS0EiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogXG4gKiBMZWdvIOmAmueUqOW3peWFt+WMheaWh+S7tu+8myBcbiAqIEBkYXRlIDIwMTYtMTEtMTAg5pif5pyf5ZubXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqIFxuICovXG5cbi8qKlxuICogXG4gKiDliKTmlq3lvZPliY3nmoTovpPlhaXmmK/lkKbkuLrlrZfnrKbkuLLvvJtcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCDovpPlhaXnmoTlj5jph49cbiAqIEByZXR1cm4ge0Jvb2xlYW59IOaYr+WQpuS4uuS4gOS4quWtl+espu+8iOS4su+8iVxuICogXG4gKi9cbmV4cG9ydHMuaXNDaGFyYWN0ZXIgPSBmdW5jdGlvbiAoaW5wdXQpIHtcblxuXG59XG5cbi8qKlxuICogXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqIFxuICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL3V0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * \n * @fileOverview 页面模板的分析引擎，可以用来组装数据，绑定方法等；\n * @date 2016-11-14 星期一\n * \n * \n * \n * \n * \n */\n\nvar Template = function () {\n  function Template() {\n    _classCallCheck(this, Template);\n  }\n\n  _createClass(Template, null, [{\n    key: \"compile\",\n\n\n    /**\n     * \n     * @param {String} input 需要待编译的字符串；\n     * @param {Object} config 输入给模板的相应的配置文件；控制相应的编译行为；\n     * \n     * \n     */\n    value: function compile(input, config) {\n\n      // TODO 这里仅仅处理作为不带逻辑符号（if, for）等等关键字的模板编译，否则不能用 replace 处理；    \n      input = input.replace(/1/, function () {});\n\n      return input;\n    }\n  }]);\n\n  return Template;\n}();\n\nexports.default = Template;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL3RlbXBsYXRlLmpzP2NhZDgiXSwibmFtZXMiOlsiVGVtcGxhdGUiLCJpbnB1dCIsImNvbmZpZyIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7SUFXTUEsUTs7Ozs7Ozs7O0FBRUo7Ozs7Ozs7NEJBT2dCQyxLLEVBQU9DLE0sRUFBUTs7QUFFN0I7QUFDQUQsY0FBUUEsTUFBTUUsT0FBTixDQUFjLEdBQWQsRUFBbUIsWUFBVyxDQUVyQyxDQUZPLENBQVI7O0FBSUEsYUFBT0YsS0FBUDtBQUNEOzs7Ozs7a0JBR1lELFEiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogXG4gKiBAZmlsZU92ZXJ2aWV3IOmhtemdouaooeadv+eahOWIhuaekOW8leaTju+8jOWPr+S7peeUqOadpee7hOijheaVsOaNru+8jOe7keWumuaWueazleetie+8m1xuICogQGRhdGUgMjAxNi0xMS0xNCDmmJ/mnJ/kuIBcbiAqIFxuICogXG4gKiBcbiAqIFxuICogXG4gKi9cblxuY2xhc3MgVGVtcGxhdGUge1xuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IOmcgOimgeW+hee8luivkeeahOWtl+espuS4su+8m1xuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIOi+k+WFpee7meaooeadv+eahOebuOW6lOeahOmFjee9ruaWh+S7tu+8m+aOp+WItuebuOW6lOeahOe8luivkeihjOS4uu+8m1xuICAgKiBcbiAgICogXG4gICAqL1xuICBzdGF0aWMgY29tcGlsZSAoaW5wdXQsIGNvbmZpZykge1xuXG4gICAgLy8gVE9ETyDov5nph4zku4Xku4XlpITnkIbkvZzkuLrkuI3luKbpgLvovpHnrKblj7fvvIhpZiwgZm9y77yJ562J562J5YWz6ZSu5a2X55qE5qih5p2/57yW6K+R77yM5ZCm5YiZ5LiN6IO955SoIHJlcGxhY2Ug5aSE55CG77ybICAgIFxuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvMS8sIGZ1bmN0aW9uKCkge1xuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVtcGxhdGU7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMveHVrYWkvRG9jdW1lbnRzL3dvcmtzcGFjZS9tdnZuL2xlZ28vdGVtcGxhdGUuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);