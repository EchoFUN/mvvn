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

	eval("'use strict';\n\nvar _logger = __webpack_require__(1);\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _logger2.default)('Hello, world !'); /**\n                                          * \n                                          * @fileOverview MVVN 框架执行入口文件，从这里开始加载其他的框架性质文件。\n                                          * @date 2016-11-07 星期一\n                                          * \n                                          * \n                                          * \n                                          * \n                                          * \n                                          */\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2FwcC5qcz8wMWVhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBV0E7Ozs7OztBQUVBLHNCQUFPLGdCQUFQLEUsQ0FiQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBcbiAqIEBmaWxlT3ZlcnZpZXcgTVZWTiDmoYbmnrbmiafooYzlhaXlj6Pmlofku7bvvIzku47ov5nph4zlvIDlp4vliqDovb3lhbbku5bnmoTmoYbmnrbmgKfotKjmlofku7bjgIJcbiAqIEBkYXRlIDIwMTYtMTEtMDcg5pif5pyf5LiAXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqIFxuICovXG5cbmltcG9ydCBsb2dnZXIgZnJvbSAnLi9sb2dnZXInO1xuXG5sb2dnZXIoJ0hlbGxvLCB3b3JsZCAhJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy94dWthaS9Eb2N1bWVudHMvd29ya3NwYWNlL212dm4vbGVnby9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = logger;\n/**\n * \n * \n * \n * \n * \n * \n * \n * \n */\n\nfunction logger(message) {\n\n  console.log(message);\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2xvZ2dlci5qcz9iNzY0Il0sIm5hbWVzIjpbImxvZ2dlciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFXd0JBLE07QUFYeEI7Ozs7Ozs7Ozs7O0FBV2UsU0FBU0EsTUFBVCxDQUFnQkMsT0FBaEIsRUFBeUI7O0FBRXRDQyxVQUFRQyxHQUFSLENBQVlGLE9BQVo7QUFDRCIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqIFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2dlcihtZXNzYWdlKSB7XG5cbiAgY29uc29sZS5sb2cobWVzc2FnZSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMveHVrYWkvRG9jdW1lbnRzL3dvcmtzcGFjZS9tdnZuL2xlZ28vbG9nZ2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);