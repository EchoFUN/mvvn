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

	eval("/**\n * \n * @fileOverview MVVN 框架执行入口文件，从这里开始加载其他的框架性质文件。\n * @date 2016-11-07 星期一\n * \n * \n * \n * \n * \n */\n\nconst component = __webpack_require__( 1);\n\ncomponent.logger('Hello, world !');\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2FwcC5qcz8wMWVhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFxuICogQGZpbGVPdmVydmlldyBNVlZOIOahhuaetuaJp+ihjOWFpeWPo+aWh+S7tu+8jOS7jui/memHjOW8gOWni+WKoOi9veWFtuS7lueahOahhuaetuaAp+i0qOaWh+S7tuOAglxuICogQGRhdGUgMjAxNi0xMS0wNyDmmJ/mnJ/kuIBcbiAqIFxuICogXG4gKiBcbiAqIFxuICogXG4gKi9cblxuY29uc3QgY29tcG9uZW50ID0gcmVxdWlyZSggJy4vY29tcG9uZW50Jyk7XG5cbmNvbXBvbmVudC5sb2dnZXIoJ0hlbGxvLCB3b3JsZCAhJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("/**\n * \n * \n * \n * \n * \n * \n * \n * \n */\n\nexport default function logger(message) {\n  console.log(message);\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3h1a2FpL0RvY3VtZW50cy93b3Jrc3BhY2UvbXZ2bi9sZWdvL2NvbXBvbmVudC5qcz80MDQ2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqIFxuICogXG4gKiBcbiAqIFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2dlcihtZXNzYWdlKSB7XG4gIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMveHVrYWkvRG9jdW1lbnRzL3dvcmtzcGFjZS9tdnZuL2xlZ28vY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);