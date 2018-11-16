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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(1);
var ctx = __webpack_require__(13);
var hide = __webpack_require__(15);
var has = __webpack_require__(22);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(2);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_number__ = __webpack_require__(9);
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

// import {methods} from './js/methods';

/* Reg Exp */
// import {regexp} from './js/regexp';

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_epsilon__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_epsilon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_epsilon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_is_safe_integer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_is_safe_integer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_is_safe_integer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_number_parse_int__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_number_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_number_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_nan__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_nan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_nan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_number_is_integer__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_number_is_integer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_number_is_integer__);





var n = 4.78;
var m = 4;
var s = 'Ok';
var t = '14.34';
var z = 23;
var b = 2;
var b2 = 5;
console.log('n=' + n + ', m=' + m + ' Number.isInteger(n)=' + __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_number_is_integer___default()(n) + ', Number.isInteger(m)=' + __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_number_is_integer___default()(m));
console.log('n=' + n + ', s=' + s + ',  metoda Number.isNaN() - n=' + __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_nan___default()(n) + ' - s*n=' + __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_nan___default()(s * n));
console.log('string: ' + t + ', Number.parseInt():' + __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_number_parse_int___default()(t));
console.log('Bezpieczny Integer - z:' + z + ' Number.isSafeInteger(z)=' + __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_is_safe_integer___default()(z) + ', null: ' + __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_is_safe_integer___default()(null));
console.log('Binarna reprezentacja liczby 0b010: ' + b + ', liczba 0b101: ' + b2);
console.log('metoda toExponential() zwraca liczb\u0119 w postaci wyk\u0142adniczej: ' + z.toExponential());
console.log('metoda toFixed() liczb\u0119 sta\u0142o przecinkow\u0105, zaaokr\u0105gla do g\xF3ry albo do do\u0142u: ' + n.toFixed());
console.log('' + b.toLocaleString());
console.log('' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_epsilon___default.a); // 2.220446049250313e-16
console.log(Number.constructor); // ƒ Function() { [native code] }
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.NaN); // NaN
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); //Infinity
console.log(Number.prototype);
console.log("==============================");
console.log(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_number_is_integer___default()(0)); // true
console.log(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_number_is_integer___default()(1)); // true
console.log(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_number_is_integer___default()(-100000)); // true
console.log(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_number_is_integer___default()(99999999999999999999999)); // true
console.log(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_number_is_integer___default()(0.1)); // false
console.log(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_number_is_integer___default()(Math.PI)); // false
console.log(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_number_is_integer___default()(NaN)); // false
console.log(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_number_is_integer___default()(Infinity)); // false
console.log(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_number_is_integer___default()(-Infinity)); // false
console.log(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_number_is_integer___default()('10')); // false
console.log(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_number_is_integer___default()(true)); // false
console.log(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_number_is_integer___default()(false)); // false
console.log(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_number_is_integer___default()([1])); // false
console.log("==============================");
console.log(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_nan___default()(NaN)); // true
console.log(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_nan___default()(Number.NaN)); // true
console.log(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_nan___default()(0 / 0)); // true
console.log(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_nan___default()('NaN')); // false
console.log(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_nan___default()(undefined)); // false
console.log(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_nan___default()({})); // false
console.log(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_nan___default()('blabla')); // false
console.log(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_nan___default()(true));
console.log(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_nan___default()(null));
console.log(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_nan___default()(37));
console.log(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_nan___default()('37'));
console.log(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_nan___default()('37.37'));
console.log(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_nan___default()(''));
console.log(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_number_is_nan___default()(' '));
console.log("==============================");
console.log(0 / 0);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(11), __esModule: true };

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
module.exports = __webpack_require__(1).Number.isSafeInteger;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(0);
var isInteger = __webpack_require__(6);
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(14);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(16);
var createDesc = __webpack_require__(21);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(18);
var toPrimitive = __webpack_require__(20);
var dP = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(5)(function () {
  return Object.defineProperty(__webpack_require__(19)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(2);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25);
module.exports = __webpack_require__(1).Number.parseInt;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseInt = __webpack_require__(26);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(3).parseInt;
var $trim = __webpack_require__(27).trim;
var ws = __webpack_require__(7);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var defined = __webpack_require__(28);
var fails = __webpack_require__(5);
var spaces = __webpack_require__(7);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31);
module.exports = __webpack_require__(1).Number.isNaN;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(33), __esModule: true };

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34);
module.exports = __webpack_require__(1).Number.isInteger;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', { isInteger: __webpack_require__(6) });


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(36), __esModule: true };

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37);
module.exports = Math.pow(2, -52);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(0);

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map