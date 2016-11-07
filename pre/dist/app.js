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

	eval("'use strict';\n\n/**\n * \n * @fileOverview MVVN 框架执行入口文件，从这里开始加载其他的框架性质文件。\n * @date 2016-11-07 星期一\n * \n * \n * \n * \n * \n */\n\nvar component = __webpack_require__(1);\n\ncomponent.logger('Hello, world !');\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2FwcC5qcz8wMWVhIl0sIm5hbWVzIjpbImNvbXBvbmVudCIsInJlcXVpcmUiLCJsb2dnZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7O0FBV0EsSUFBTUEsWUFBWSxtQkFBQUMsQ0FBUyxDQUFULENBQWxCOztBQUVBRCxVQUFVRSxNQUFWLENBQWlCLGdCQUFqQiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBcbiAqIEBmaWxlT3ZlcnZpZXcgTVZWTiDmoYbmnrbmiafooYzlhaXlj6Pmlofku7bvvIzku47ov5nph4zlvIDlp4vliqDovb3lhbbku5bnmoTmoYbmnrbmgKfotKjmlofku7bjgIJcbiAqIEBkYXRlIDIwMTYtMTEtMDcg5pif5pyf5LiAXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqIFxuICovXG5cbmNvbnN0IGNvbXBvbmVudCA9IHJlcXVpcmUoICcuL2NvbXBvbmVudCcpO1xuXG5jb21wb25lbnQubG9nZ2VyKCdIZWxsbywgd29ybGQgIScpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMveHVrYWkvRG9jdW1lbnRzL3dvcmtzcGFjZS9tdnZuL2xlZ28vYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = logger;\n/**\n * \n * \n * \n * \n * \n * \n * \n * \n */\n\nfunction logger(message) {\n  console.log(message);\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2NvbXBvbmVudC5qcz80MDQ2Il0sIm5hbWVzIjpbImxvZ2dlciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFXd0JBLE07QUFYeEI7Ozs7Ozs7Ozs7O0FBV2UsU0FBU0EsTUFBVCxDQUFnQkMsT0FBaEIsRUFBeUI7QUFDdENDLFVBQVFDLEdBQVIsQ0FBWUYsT0FBWjtBQUNEIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFxuICogXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqIFxuICogXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nZ2VyKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5sb2cobWVzc2FnZSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMveHVrYWkvRG9jdW1lbnRzL3dvcmtzcGFjZS9tdnZuL2xlZ28vY29tcG9uZW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);