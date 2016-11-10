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

	eval("'use strict';\n\nvar _lego = __webpack_require__(1);\n\nvar _lego2 = _interopRequireDefault(_lego);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar instance = new _lego2.default({\n  element: '#app',\n\n  template: '<div>{{welcome}}</div>',\n\n  // The data needed for the template bind.\n  data: {\n    welcome: 'Hello, world ! I love you.'\n  }\n}); /**\n     * \n     * @fileOverview 启动文件设置信息，用来启动整个 APP 项目；\n     * \n     * \n     * \n     * \n     * \n     * \n     */\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2Jvb3QuanM/OTNjOCJdLCJuYW1lcyI6WyJpbnN0YW5jZSIsImVsZW1lbnQiLCJ0ZW1wbGF0ZSIsImRhdGEiLCJ3ZWxjb21lIl0sIm1hcHBpbmdzIjoiOztBQVdBOzs7Ozs7QUFFQSxJQUFNQSxXQUFXLG1CQUFTO0FBQ3hCQyxXQUFTLE1BRGU7O0FBR3hCQyxZQUFVLHdCQUhjOztBQUt4QjtBQUNBQyxRQUFNO0FBQ0pDLGFBQVM7QUFETDtBQU5rQixDQUFULENBQWpCLEMsQ0FiQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBcbiAqIEBmaWxlT3ZlcnZpZXcg5ZCv5Yqo5paH5Lu26K6+572u5L+h5oGv77yM55So5p2l5ZCv5Yqo5pW05LiqIEFQUCDpobnnm67vvJtcbiAqIFxuICogXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqL1xuXG5pbXBvcnQgTGVnbyBmcm9tICcuL2xlZ28nO1xuXG5jb25zdCBpbnN0YW5jZSA9IG5ldyBMZWdvKHtcbiAgZWxlbWVudDogJyNhcHAnLFxuXG4gIHRlbXBsYXRlOiAnPGRpdj57e3dlbGNvbWV9fTwvZGl2PicsXG5cbiAgLy8gVGhlIGRhdGEgbmVlZGVkIGZvciB0aGUgdGVtcGxhdGUgYmluZC5cbiAgZGF0YToge1xuICAgIHdlbGNvbWU6ICdIZWxsbywgd29ybGQgISBJIGxvdmUgeW91LidcbiAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy94dWthaS9Eb2N1bWVudHMvd29ya3NwYWNlL212dm4vbGVnby9ib290LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * \n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @fileOverview MVVN 框架执行入口文件，从这里开始加载其他的框架性质文件。\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2016-11-07 星期一\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * \n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * \n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * \n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * \n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * \n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */\n\nvar _utils = __webpack_require__(2);\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Component = function () {\n  function Component(config) {\n    _classCallCheck(this, Component);\n\n    config = _utils2.default.assign(config, {});\n\n    config = this._preprocess(config);\n  }\n\n  // Pre Process the data for the whole app configration.\n\n\n  _createClass(Component, [{\n    key: '_preprocess',\n    value: function _preprocess(config) {}\n  }]);\n\n  return Component;\n}();\n\nexports.default = Component;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2xlZ28uanM/MzExNSJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJjb25maWciLCJhc3NpZ24iLCJfcHJlcHJvY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O3FqQkFBQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7SUFFTUEsUztBQUVKLHFCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCQSxhQUFTLGdCQUFNQyxNQUFOLENBQWFELE1BQWIsRUFBcUIsRUFBckIsQ0FBVDs7QUFJQUEsYUFBUyxLQUFLRSxXQUFMLENBQWlCRixNQUFqQixDQUFUO0FBQ0Q7O0FBRUQ7Ozs7O2dDQUNZQSxNLEVBQVEsQ0FFbkI7Ozs7OztrQkFHWUQsUyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBcbiAqIEBmaWxlT3ZlcnZpZXcgTVZWTiDmoYbmnrbmiafooYzlhaXlj6Pmlofku7bvvIzku47ov5nph4zlvIDlp4vliqDovb3lhbbku5bnmoTmoYbmnrbmgKfotKjmlofku7bjgIJcbiAqIEBkYXRlIDIwMTYtMTEtMDcg5pif5pyf5LiAXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqIFxuICovXG5cbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJ1xuXG5jbGFzcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHV0aWxzLmFzc2lnbihjb25maWcsIHtcblxuICAgIH0pO1xuXG4gICAgY29uZmlnID0gdGhpcy5fcHJlcHJvY2Vzcyhjb25maWcpO1xuICB9XG5cbiAgLy8gUHJlIFByb2Nlc3MgdGhlIGRhdGEgZm9yIHRoZSB3aG9sZSBhcHAgY29uZmlncmF0aW9uLlxuICBfcHJlcHJvY2Vzcyhjb25maWcpIHtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMveHVrYWkvRG9jdW1lbnRzL3dvcmtzcGFjZS9tdnZuL2xlZ28vbGVnby5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\n/**\n * \n * Lego 通用工具包文件； \n * @date 2016-11-10 星期四\n * \n * \n * \n * \n * \n */\n\nfunction assign() {}\n\nexports.assign = assign;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL3V0aWxzLmpzPzA0OTYiXSwibmFtZXMiOlsiYXNzaWduIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7QUFXQSxTQUFTQSxNQUFULEdBQW1CLENBRWxCOztBQUVEQyxRQUFTRCxNQUFULEdBQWtCQSxNQUFsQiIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBcbiAqIExlZ28g6YCa55So5bel5YW35YyF5paH5Lu277ybIFxuICogQGRhdGUgMjAxNi0xMS0xMCDmmJ/mnJ/lm5tcbiAqIFxuICogXG4gKiBcbiAqIFxuICogXG4gKi9cblxuZnVuY3Rpb24gYXNzaWduICgpIHtcbiAgXG59XG5cbmV4cG9ydHMuIGFzc2lnbiA9IGFzc2lnbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL3V0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);