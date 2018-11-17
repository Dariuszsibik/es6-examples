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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_string__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__js_string__);
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
//import {module} from './js/module.js';

/* Proxies */
// import {proxies} from './js/proxies&reflection.js';

/* Unicode */
// import {Unicode} from './js/unicode';

/* Arrays, TypedArrays, Math, Number, New Methods  */
// import {TypedArrays} from './js/typedArray&Array';
// import {Math} from './js/math';
// import {number} from './js/number';
// import {assign} from './js/assign';

/* Reg Exp */
//import {regexp} from './js/regexp';

/* async / await */
// import {asyncAwait} from './js/await-async';

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

console.log("-------includes()--------");
var str = 'To be, or not to be, that is the question.';
console.log(str.includes('To be')); // true
console.log(str.includes('To be', 0)); // false
console.log(str.includes('TO BE')); // false

console.log("-------includes()--------");
var str = 'to jest testowy string';
console.log(str.split(" "));

console.log("-------slice()--------");
var str = 'The quick red fox jumped over the lazy dog\'s back.';
console.log(str.slice(30)); // the lazy dogs back
console.log(str.slice(4, 17)); //quick red fox
console.log(str.slice(-5)); // back.

console.log("-------search()--------");
var str = "hey JudE";
var re = /[A-Z]/g;
var re2 = /[.]/g;
console.log(str.search(re)); // returns 4, to jest indeks pierwszej dużej litery J
console.log(str.search(re2)); // returns -1 nie znalazło .

console.log("-------repeat()--------");
//'abc'.repeat(-1);   // RangeError
console.log('abc'.repeat(0)); // ''
console.log('abc'.repeat(1)); // 'abc'
console.log('abc'.repeat(2)); // 'abcabc'
console.log('abc'.repeat(3.5)); // 'abcabcabc' (konwertuje do Integer)
//'abc'.repeat(1/0);  // RangeError

console.log("-------replace()--------");
var p = 'test replace() metoda test zwraca nowy string test?';
var regex = /test/gi;
console.log(p.replace(regex, 'Dariusz')); // Dariusz replace() metoda Dariusz zwraca nowy string Dariusz?

console.log("-------indexOf()--------");
console.log('Dariusz Sibik'.indexOf('Dariusz')); // returns  0
console.log('Dariusz Sibik'.indexOf('Sibika')); // returns -1
console.log('Dariusz Sibik'.indexOf('Sibik', 0)); // returns 8
console.log('Dariusz Sibik'.indexOf('Sibik', 5)); // returns 8

console.log("-------substring()--------");
console.log("test metody substring".substring(1, 3)); // es
console.log("test metody substring".substring(2)); // st metod substring

console.log("-------match()--------");
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
console.log(str.match(regexp)); // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map