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

	eval("'use strict';\n\nvar _lego = __webpack_require__(1);\n\nvar _lego2 = _interopRequireDefault(_lego);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nnew _lego2.default({\n  name: 'Ken'\n}); /**\n     * \n     * @fileOverview 启动文件设置；\n     * \n     * \n     * \n     * \n     * \n     * \n     */\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2Jvb3QuanM/OTNjOCJdLCJuYW1lcyI6WyJuYW1lIl0sIm1hcHBpbmdzIjoiOztBQVdBOzs7Ozs7QUFFQSxtQkFBUztBQUNQQSxRQUFNO0FBREMsQ0FBVCxFLENBYkEiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogXG4gKiBAZmlsZU92ZXJ2aWV3IOWQr+WKqOaWh+S7tuiuvue9ru+8m1xuICogXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqIFxuICovXG5cbmltcG9ydCBMZWdvIGZyb20gJy4vbGVnbyc7XG5cbm5ldyBMZWdvKHtcbiAgbmFtZTogJ0tlbidcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMveHVrYWkvRG9jdW1lbnRzL3dvcmtzcGFjZS9tdnZuL2xlZ28vYm9vdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _logger = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./logger\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } } /**\n                                                                                                                                                           * \n                                                                                                                                                           * @fileOverview MVVN 框架执行入口文件，从这里开始加载其他的框架性质文件。\n                                                                                                                                                           * @date 2016-11-07 星期一\n                                                                                                                                                           * \n                                                                                                                                                           * \n                                                                                                                                                           * \n                                                                                                                                                           * \n                                                                                                                                                           * \n                                                                                                                                                           */\n\nvar Lego = function Lego() {\n  _classCallCheck(this, Lego);\n\n  var args = arguments;\n\n  debugger;\n};\n\nexports.default = Lego;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2xlZ28uanM/MzExNSJdLCJuYW1lcyI6WyJMZWdvIiwiYXJncyIsImFyZ3VtZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBV0E7Ozs7OzswSkFYQTs7Ozs7Ozs7Ozs7SUFhTUEsSSxHQUNKLGdCQUFjO0FBQUE7O0FBQ1osTUFBSUMsT0FBT0MsU0FBWDs7QUFFQTtBQUNELEM7O2tCQUdZRixJIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFxuICogQGZpbGVPdmVydmlldyBNVlZOIOahhuaetuaJp+ihjOWFpeWPo+aWh+S7tu+8jOS7jui/memHjOW8gOWni+WKoOi9veWFtuS7lueahOahhuaetuaAp+i0qOaWh+S7tuOAglxuICogQGRhdGUgMjAxNi0xMS0wNyDmmJ/mnJ/kuIBcbiAqIFxuICogXG4gKiBcbiAqIFxuICogXG4gKi9cblxuaW1wb3J0IGxvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5cbmNsYXNzIExlZ28ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIGRlYnVnZ2VyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlZ287XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy94dWthaS9Eb2N1bWVudHMvd29ya3NwYWNlL212dm4vbGVnby9sZWdvLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);