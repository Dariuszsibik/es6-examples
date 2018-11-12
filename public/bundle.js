/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_module_js__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_module_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__js_module_js__);
// /* setTimeOut problem z var, zamienić na let */
// import {SetTimeout} from './js/setTimeOut';

// /* zmienne i hoisting w ES6 */
// import {Variables} from './js/variables';

// /* łączenie łańcuchów znaków */
// import {templateString} from './js/templateString';

/* nowe metody String */
// import {stringMethods} from './js/stringMethods';

/* destructuring - wyciąganie wartośći z jakiegoś zestawu i przypisywanie do zmiennych*/
// import {destructuring} from './js/destructurng';

/* rozszerzenie destructuring czyli spread i rest parameters */
// import {spreadrest} from './js/spread&rest'

/* arrow function */
// import {arrowfunction} from './js/arrow-function';

/* iteratory */
// import {iteratory} from './js/iteracja';
// import {generatory} from './js/generatory';

/* Klasy */
// import {Klasy} from './js/klasy';
/* Symbole */
//import {Symbole} from './js/symbole';
/* literały obiektowe */
// import {literal} from './js/literaly-obiektowe';

/* Promise */
// import {promise} from './js/promise.js';

/* Modules */


/***/ }),

/***/ 73:
/***/ (function(module, exports) {



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map