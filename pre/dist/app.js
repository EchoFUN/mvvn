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

	eval("'use strict';\n\nvar _logger = __webpack_require__(1);\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.write('Hello, world ! <br /><br />'); /**\n                                                * \n                                                * @fileOverview MVVN 框架执行入口文件，从这里开始加载其他的框架性质文件。\n                                                * @date 2016-11-07 星期一\n                                                * \n                                                * \n                                                * \n                                                * \n                                                * \n                                                */\n\ndocument.write('<pre>' + _logger2.default.toString() + '</pre>');\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2FwcC5qcz8wMWVhIl0sIm5hbWVzIjpbImRvY3VtZW50Iiwid3JpdGUiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7QUFXQTs7Ozs7O0FBR0FBLFNBQVNDLEtBQVQsQ0FBZSw2QkFBZixFLENBZEE7Ozs7Ozs7Ozs7O0FBZ0JBRCxTQUFTQyxLQUFULENBQWUsVUFBVSxpQkFBT0MsUUFBUCxFQUFWLEdBQThCLFFBQTdDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFxuICogQGZpbGVPdmVydmlldyBNVlZOIOahhuaetuaJp+ihjOWFpeWPo+aWh+S7tu+8jOS7jui/memHjOW8gOWni+WKoOi9veWFtuS7lueahOahhuaetuaAp+i0qOaWh+S7tuOAglxuICogQGRhdGUgMjAxNi0xMS0wNyDmmJ/mnJ/kuIBcbiAqIFxuICogXG4gKiBcbiAqIFxuICogXG4gKi9cblxuaW1wb3J0IGxvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5cblxuZG9jdW1lbnQud3JpdGUoJ0hlbGxvLCB3b3JsZCAhIDxiciAvPjxiciAvPicpO1xuXG5kb2N1bWVudC53cml0ZSgnPHByZT4nICsgbG9nZ2VyLnRvU3RyaW5nKCkgKyAnPC9wcmU+Jyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy94dWthaS9Eb2N1bWVudHMvd29ya3NwYWNlL212dm4vbGVnby9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = logger;\n/**\n * \n * \n * \n * \n * \n * \n * \n * \n */\n\nfunction logger(message) {\n  console.log(message);\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2xvZ2dlci5qcz9iNzY0Il0sIm5hbWVzIjpbImxvZ2dlciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFXd0JBLE07QUFYeEI7Ozs7Ozs7Ozs7O0FBV2UsU0FBU0EsTUFBVCxDQUFnQkMsT0FBaEIsRUFBeUI7QUFDdENDLFVBQVFDLEdBQVIsQ0FBWUYsT0FBWjtBQUNEIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFxuICogXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqIFxuICogXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nZ2VyKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5sb2cobWVzc2FnZSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMveHVrYWkvRG9jdW1lbnRzL3dvcmtzcGFjZS9tdnZuL2xlZ28vbG9nZ2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);