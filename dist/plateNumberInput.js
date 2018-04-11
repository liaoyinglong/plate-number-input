/*!
 * 
 *   plateNumberInput.js v1.0.6
 *   (c) 2018 - 2018 liaoyinglong
 *   https://github.com/liaoyinglong/plate-number-input
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["plateNumberInput"] = factory();
	else
		root["plateNumberInput"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.5.5'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);

var core = __webpack_require__(0);

var hide = __webpack_require__(9);

var redefine = __webpack_require__(51);

var ctx = __webpack_require__(50);

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

    if (target) redefine(target, key, out, type & $export.U); // export

    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

global.core = core; // type bitmap

$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(15)('wks');

var uid = __webpack_require__(6);

var _Symbol = __webpack_require__(1).Symbol;

var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(7)(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(57);

var createDesc = __webpack_require__(52);

module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);

module.exports = function (CONSTRUCTOR) {
  var C = core[CONSTRUCTOR];
  return C.virtual || C.prototype;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(14);

var toLength = __webpack_require__(17);

var toAbsoluteIndex = __webpack_require__(19);

module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(12); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(13);

var defined = __webpack_require__(5);

module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

module.exports = function (key) {
  return store[key] || (store[key] = {});
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(4)('unscopables');

var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(9)(ArrayProto, UNSCOPABLES, {});

module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(18);

var min = Math.min;

module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(18);

var max = Math.max;
var min = Math.min;

module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(5);

module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utils/dom.js
/* harmony default export */ var dom = ({
  on: function on(element, eventType, selector, fn) {
    element.addEventListener(eventType, function (e) {
      var el = e.target;

      while (!el.matches(selector)) {
        if (element === el) {
          el = null;
          break;
        }

        el = el.parentNode;
      }

      el && fn.call(el, e, el);
    });
    return element;
  },
  // http://stackoverflow.com/a/35385518/1262580
  create: function create(htmlStr) {
    var template = document.createElement('template');
    template.innerHTML = htmlStr.trim();
    return template.content.firstChild;
  }
});
// CONCATENATED MODULE: ./src/utils/index.js
function throttle(fn) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var timer;
  return function () {
    if (timer == null) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      fn.apply(this, args);
      timer = setTimeout(function () {
        timer = null;
      }, time);
    }
  };
}
function once(fn) {
  return function () {
    if (fn) {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var ret = fn.apply(this, args);
      fn = null;
      return ret;
    }
  };
}
// CONCATENATED MODULE: ./src/config/layout.js
__webpack_require__(59);

var input = new Array(8).fill(undefined).map(function (item, index) {
  return "<span data-index='".concat(index, "'></span>");
});
var layout_inputbox = "\n <div>\n  <div id='inputboxWrapper' class=\"container-top\">\n  <div class='container-info'>\u5B9D\u7ACB\u65B9\u521B\u610F\u4EA7\u4E1A\u56ED(\u5730\u5E93)</div>\n  <div class=\"container-input\">\n      ".concat(input.join(''), "\n  </div>\n  <div class=\"container-save-button\">\n    <span id=\"btnSave\" class=\"btnbind\">{{btnSaveText}}</span>\n  </div>\n  <div  class=\"container-switch-button\">\n    &nbsp;&nbsp;{{switchText}}\n  </div>\n  </div>\n  <span class='bar_bindcarnum'></span>\n </div>\n");
var keyboard = [[['确定'], ['粤', '川', '津', '沪', '渝', '蒙', '新', '藏', '宁', '桂'], ['陕', '浙', '晋', '冀', '青', '鲁', '豫', '苏', '皖', '辽'], ['贵', '闽', '赣', '湘', '鄂', '京', '琼', '甘', '云', '黑'], ['吉', '', '', '', '', '', '', '', '', 'delete']], [['确定'], ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'P', '港', '澳'], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '学'], ['', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '', 'delete']]];
/* harmony default export */ var layout = ({
  keyboard: keyboard,
  inputbox: layout_inputbox
});
// CONCATENATED MODULE: ./src/config/rule.js
/**
 * disable input key rule
 * array
 */
/* harmony default export */ var rule = ([[], ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '港', '澳', '学'], ['港', '澳', '学'], ['港', '澳', '学'], ['港', '澳', '学'], ['港', '澳', '学'], [], []]);
// CONCATENATED MODULE: ./src/config/defaultOptions.js
/* harmony default export */ var defaultOptions = ({
  el: 'body',
  defaultNumber: '粤B',
  isNewpower: false,
  btnSaveText: '保存',
  switchText: ['切换为新能源绿车牌', '点击切换为普通蓝牌车'],
  onBtnSaveClick: function onBtnSaveClick() {
    console.log('点击了btnSave按钮');
  }
});
// CONCATENATED MODULE: ./src/log/index.js
function error() {
  for (var _len = arguments.length, thing = new Array(_len), _key = 0; _key < _len; _key++) {
    thing[_key] = arguments[_key];
  }

  throw new (Function.prototype.bind.apply(Error, [null].concat(thing)))();
}
function warn() {
  for (var _len2 = arguments.length, thing = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    thing[_key2] = arguments[_key2];
  }

  console.log(['WARING:'].concat(thing).join(' '));
}
function note() {
  for (var _len3 = arguments.length, thing = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    thing[_key3] = arguments[_key3];
  }

  console.log(['NOTE:'].concat(thing).join(' '));
}
// EXTERNAL MODULE: ./src/stylus/index.styl
var stylus = __webpack_require__(47);

// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return src_plateNumberInput; });
function src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function src_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function src_createClass(Constructor, protoProps, staticProps) { if (protoProps) src_defineProperties(Constructor.prototype, protoProps); if (staticProps) src_defineProperties(Constructor, staticProps); return Constructor; }










__webpack_require__(38);

__webpack_require__(29);

__webpack_require__(27);

var src_plateNumberInput =
/*#__PURE__*/
function () {
  /**
   * 配置项
   * @param {object} options 配置项
   * @param {string} options.el 挂载对应元素里面，传选择器字符串  必填
   * @param {string} options.defaultNumber 初始化时默认的车牌号  非必填
   * @param {boolean} options.isNewpower 车牌类型true:新能源车牌 false:普通车牌 非必填 一般不传
   * @param {string} options.btnSaveText 自定义保存按钮的文字内容  非必填
   * @param {string[]} options.switchText 自定义切换按钮的文字内容  非必填
   * @param {Function} options.onBtnSaveClick 点击保存按钮回调 非必填
   */
  function plateNumberInput(options) {
    src_classCallCheck(this, plateNumberInput);

    this.options = Object.assign(defaultOptions, options);
    this.el = document.querySelector(this.options.el);
    this.currentIndex = 0;
    this.containerInput = null;
    this.spareSpan = null;
    this.isNewpower = this.options.isNewpower;

    this._generateLayout();

    this.setInputFocus();
    this.setNumberType(this.isNewpower);
    this.bindEvents();
    this.setDefaultNumber(this.options.defaultNumber);
  }
  /**
   * get 当前输入的车牌号码
   * @returns {string}
   */


  src_createClass(plateNumberInput, [{
    key: "getNumber",
    value: function getNumber() {
      return this.containerInput.textContent.replace(/\s+/g, '');
    }
    /**
     * get 当前的车牌类型
     * @returns {boolean} true:新能源车牌 false:普通车牌
     */

  }, {
    key: "getNumberType",
    value: function getNumberType() {
      return this.isNewpower;
    }
    /**
     * 设置默认车牌号
     * @param {string} plateNumber 车牌号
     */

  }, {
    key: "setDefaultNumber",
    value: function setDefaultNumber(plateNumber) {
      var _this = this;

      // TODO: 设置默认车牌号
      plateNumber = plateNumber.trim();
      var onceSetInputFocus = once(function (index) {
        return _this.setInputFocus(index);
      });

      for (var index = 0; index < this.inputSpans.length; index++) {
        var span = this.inputSpans[index];
        span.innerText = plateNumber[index] || '';
        if (plateNumber[index] === undefined) return onceSetInputFocus(index);
        if (index === this.inputSpans.length - 1) return onceSetInputFocus(index);
      }
    }
    /**
     * 设置车牌类型
     * @param {boolean} isNewpower true:新能源车牌 false:普通车牌
     */

  }, {
    key: "setNumberType",
    value: function setNumberType() {
      var isNewpower = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.isNewpower = isNewpower;
      var lastIndex = this.inputSpans.length - 1;
      this.spareSpan.innerText = '';

      if (!this.spareSpan.parentNode && isNewpower) {
        this.containerInput.appendChild(this.spareSpan);
      }

      if (this.spareSpan.parentNode && !isNewpower) {
        this.containerInput.removeChild(this.spareSpan);
      }

      var index = this.currentIndex === lastIndex ? this.inputSpans.length - 1 : this.currentIndex;
      this.setInputFocus(index);
      this.setBtnSaveActive();
    }
    /**
     * 设置输入框上面的站位信息
     * @param {string} info
     */

  }, {
    key: "setInfo",
    value: function setInfo(info) {
      this.containerInfo.innerHTML = info;
    }
    /**初始化绑定各种事件 */

  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      // 绑定输入框按钮事件
      dom.on(this.containerInput, 'click', 'span', function (e) {
        var index = e.target.dataset.index;

        _this2.setInputFocus(Number(index));
      }); // 模拟键盘 点击事件

      dom.on(this.keyboardWrapper, 'click', 'span', function (e) {
        var el = e.target;
        var text = el.innerText;

        if (el.className.includes(_this2.disableKeyItemClassName)) {
          return note('点击的是 已被禁用的键');
        }

        if (el.className.includes(_this2.placeholderClassName)) {
          return note('点击的是 无效键');
        } // 点击的是确定键


        if (text === '确定') {
          _this2.keyboardWrapper.classList.add('hide');

          return note('点击的是 确定 键');
        }

        if (el.className.includes(_this2.deleteKeyItemClassName)) {
          _this2.del();

          return note('点击的是 删除 键');
        } // 点击的是普通键


        _this2.inputSpans[_this2.currentIndex].innerText = text;

        _this2.next();
      }); // 点击切换车牌按钮

      dom.on(this.inputboxWrapper, 'click', '.container-switch-button', function (e) {
        var el = e.target;
        var text = el.innerText.trim();

        _this2.options.switchText.forEach(function (item) {
          if (item === text) return;
          el.innerText = el.innerText.replace(text, item);
        });

        _this2.setNumberType(!_this2.isNewpower);

        note('点击的是 切换车牌 按钮');
      }); // 点击保存按钮

      dom.on(this.inputboxWrapper, 'click', '.btnbind', function (e) {
        _this2.options.onBtnSaveClick && _this2.options.onBtnSaveClick(e);
        note('点击的是 保存 按钮');
      });
    }
    /** 每输入一个字符后调用 */

  }, {
    key: "next",
    value: function next() {
      var nextIndex = this.currentIndex === this.inputSpans.length - 1 ? this.currentIndex : this.currentIndex + 1;
      this.setInputFocus(nextIndex);
    }
    /** 点击删除按钮后调用 */

  }, {
    key: "del",
    value: function del() {
      var prev = this.currentIndex === 0 ? 0 : this.currentIndex - 1;
      this.inputSpans[this.currentIndex].innerText = '';
      this.setInputFocus(prev);
    }
    /**
     * 生成布局
     */

  }, {
    key: "_generateLayout",
    value: function _generateLayout() {
      // TODO: 获取生成好的html字符串  不包括键盘
      var inputbox = layout.inputbox.replace(/{{btnSaveText}}/, this.options.btnSaveText).replace(/{{switchText}}/, this.options.switchText[0]);
      var inputboxEl = dom.create(inputbox);
      this.containerInput = inputboxEl.querySelector('.container-input');
      this.spareSpan = this.containerInput.lastElementChild;
      this.el.appendChild(inputboxEl);
      this.el.appendChild(dom.create("<div id=\"keyboardWrapper\"></div>"));

      this._generateKeyboard();
    }
    /**
     * 获取键盘容器
     * @returns {Element}
     */

  }, {
    key: "setInputFocus",

    /**
     * 设置指定位置输入框active
     * @param {number} index 第几个span
     */
    value: function setInputFocus() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.keyboardWrapper.classList.remove('hide');

      for (var i = 0; i < this.inputSpans.length; i++) {
        this.inputSpans[i].classList.remove('focus');
      }

      this.currentIndex = index;
      this.inputSpans[index].classList.add('focus');

      this._generateKeyboard();

      this.setBtnSaveActive();
    }
    /**
     * 设置保存按钮的高亮效果
     */

  }, {
    key: "setBtnSaveActive",
    value: function setBtnSaveActive() {
      var _inputboxWrapper$quer = this.inputboxWrapper.querySelector('#btnSave'),
          classList = _inputboxWrapper$quer.classList;

      if (this.getNumber().length === this.inputSpans.length) {
        classList.add('active');
      } else {
        classList.remove('active');
      }
    }
    /**
     * 生成键盘
     */

  }, {
    key: "_generateKeyboard",
    value: function _generateKeyboard() {
      var _this3 = this;

      var currentKeyboardIndex = this.currentIndex && 1;
      var currentKeyboard = layout.keyboard[currentKeyboardIndex];

      var generatekey = function generatekey(arr) {
        return arr.map(function (item) {
          var classList = _this3.disableRule.includes(item) ? _this3.disableKeyItemClassName : ''; // 占位符设置

          if (item === '') {
            classList += _this3.placeholderClassName;
          }

          if (item === 'delete') classList += _this3.deleteKeyItemClassName;
          return "<span class=\"".concat(_this3._prefix('item') + classList, "\" >").concat(item === 'delete' ? '' : item, "</span>");
        });
      };

      var combinationRow = function combinationRow(arr) {
        return arr.map(function (items) {
          var row = generatekey(items).join('');
          return "<div class=\"".concat(_this3._prefix('row'), "\">").concat(row, "</div>");
        });
      };

      this.keyboardWrapper.innerHTML = combinationRow(currentKeyboard).join('');
    }
  }, {
    key: "_prefix",
    value: function _prefix(str) {
      return " keyboard-".concat(str, " ");
    }
  }, {
    key: "keyboardWrapper",
    get: function get() {
      return this.el.querySelector('#keyboardWrapper');
    }
    /**
     * 上方输入框容器
     * @returns {Element}
     */

  }, {
    key: "inputboxWrapper",
    get: function get() {
      return this.el.querySelector('#inputboxWrapper');
    }
    /**
     * 输入框span的数组
     * @returns {HTMLCollection}
     */

  }, {
    key: "inputSpans",
    get: function get() {
      return this.containerInput.children;
    }
    /**
     * @returns {Element}
     */

  }, {
    key: "containerInfo",
    get: function get() {
      return this.inputboxWrapper.querySelector('.container-info');
    }
    /**
     * 获取禁用规则
     * @returns {string[]}
     */

  }, {
    key: "disableRule",
    get: function get() {
      return rule[this.currentIndex];
    }
  }, {
    key: "disableKeyItemClassName",
    get: function get() {
      return this._prefix('disable');
    }
  }, {
    key: "placeholderClassName",
    get: function get() {
      return this._prefix('placeholder');
    }
  }, {
    key: "deleteKeyItemClassName",
    get: function get() {
      return this._prefix('delete');
    }
  }]);

  return plateNumberInput;
}();



/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(4)('match');

module.exports = function (KEY) {
  var re = /./;

  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) {
      /* empty */
    }
  }

  return true;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(2);

var cof = __webpack_require__(12);

var MATCH = __webpack_require__(4)('match');

module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(24);

var defined = __webpack_require__(5);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)


var $export = __webpack_require__(3);

var context = __webpack_require__(25);

var INCLUDES = 'includes';
$export($export.P + $export.F * __webpack_require__(23)(INCLUDES), 'String', {
  includes: function includes(searchString
  /* , position = 0 */
  ) {
    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26);

module.exports = __webpack_require__(10)('String').includes;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/tc39/Array.prototype.includes

var $export = __webpack_require__(3);

var $includes = __webpack_require__(11)(true);

$export($export.P, 'Array', {
  includes: function includes(el
  /* , fromIndex = 0 */
  ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(16)('includes');

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28);

module.exports = __webpack_require__(10)('Array').includes;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(15)('keys');

var uid = __webpack_require__(6);

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(21);

var toIObject = __webpack_require__(14);

var arrayIndexOf = __webpack_require__(11)(false);

var IE_PROTO = __webpack_require__(33)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(34);

var enumBugKeys = __webpack_require__(32);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.2.1 Object.assign(target, source, ...)

var getKeys = __webpack_require__(35);

var gOPS = __webpack_require__(31);

var pIE = __webpack_require__(30);

var toObject = __webpack_require__(20);

var IObject = __webpack_require__(13);

var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

module.exports = !$assign || __webpack_require__(7)(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;

  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }

  return T;
} : $assign;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(3);

$export($export.S + $export.F, 'Object', {
  assign: __webpack_require__(36)
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37);

module.exports = __webpack_require__(0).Object.assign;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(39);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAeCAYAAABqpJ3BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZEQjdDMkFGRDkzOTExRTU4MkRGODY2MzhDQzNDQzg5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZEQjdDMkIwRDkzOTExRTU4MkRGODY2MzhDQzNDQzg5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkRCN0MyQUREOTM5MTFFNTgyREY4NjYzOENDM0NDODkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkRCN0MyQUVEOTM5MTFFNTgyREY4NjYzOENDM0NDODkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6oThcDAAABWUlEQVR42tSYMQ6CMBSGoYOa6MEcxJiQMBhddDSOjgYTj6BewclDeBmjR1Ac6qsppmkKtoXC60v+hZbH/wVeX2lIKQ0sIgXtgnbjDlqGFgAYzP8gTAEwmf8G8dm8CQBK87oAaM3rAKA2/w8AvfkyAC/MFwHUbX4D6oFmoEwx/gIlfE5qnJ31AUEprT+6Qv4x6CWMPUFDYbxvmty1eRZT6Tk5hGyeaWkL4Mo85WYjBYRsPpbejjbAhLoPFURl8yxYEY8bWCw6oAsoUozFoDOfY7UKXRta8diu8a24nlXLSinbkR4df0KqghUV2X5CeQKXEM+Cgh3VARE0AJEUFKyqsOdVAFxBdCTzWcnqNKgK4AJiyzvsQjIvQsy4+b1p8qJfyhB0AK183Y0yqjXo5CuANxBEo/mghiCaHRQtBDHYBqCEMDkXwgjxIIY3YIK42Z6N5n0iB2o1PgIMANIRkt+nZp8xAAAAAElFTkSuQmCC"

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAGCAYAAABThMdSAAAAhUlEQVQ4jWP8don7PwMJYMEWfobWecKkaCEaJPh8ZKhOeku0eiZSLdhwgIdULUSDAIcvJKknyfF3HrMxXL3HTpIFxAIV2V8M2ko/SdJDkuM3HKRhqNuTFuoMDCQ4/t9/BoZNh2jjeCZGBgY/Oxo6/uQVTobnb1hItoAYYK7znUFS5A/J+gBp7x/ey4gCcAAAAABJRU5ErkJggg=="

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTAxNTg5M0UwMjRDMTFFN0EwNThBQjREREUzOEQ0NDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTAxNTg5M0YwMjRDMTFFN0EwNThBQjREREUzOEQ0NDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMDE1ODkzQzAyNEMxMUU3QTA1OEFCNERERTM4RDQ0NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMDE1ODkzRDAyNEMxMUU3QTA1OEFCNERERTM4RDQ0NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjMOcVgAAAQKSURBVHja1JpbiE1hFMe/c4Y8GF5cxlA07neSMMm4lyiXByMMkSJlRGYolFJDSISaMp4YhBeR+2QYppAZ5DJug5TBOFIuLyT+f+e/a3cyZ86+zDn7rPo9zGXvb6299vq+ddmhyJsy44N0BhPBGNAf5IBOoK3+/gN8Aq/BU3ALVIJGrwu38nBtB7AYLAC9wA1QBc6Dt1Luh/63rYzsDoaC+aAU1INj4DD47EaJkAsPZIMisARcAOXgCvjt8D4ZYApYBKaDo2A7aHByk7BDbxWDB/qZT7IAXHShvNE1l3SPweAnuK81WvttQB9wR+95LlgH3hn/pEH3zNUaXGugXwbMAjdBmVxdb1pO6rXGQXAdzPYaxMvBFjAD3DXJEwb4bXBWwX/QjQErFazjwUuTfKnV2pcV8KVODJgJNoAJ4I1JnfDBTQLXFHNnEjFggN73aSlW3hLqMEe73QtQFy+IuX0dB5vBPRMcoS6bpFvreAaskavKTPDkkHRb29Qr1BWsVz4TVCnU7lRundh2D2wER1p4n/cqr6TjpthcqKMCZJDTXCQFwlzsMegLIpYHmI+cS7LyJ3RIOZX3yngL7K9QgVyTTMkHD8FcF9dS14WWAXwKPUFFCl4Hrn1SOPFGhWqQrmGddFUuU2K/ZK5Db/yWzhO5jY5WtulV/vjkjVCC/88KcGRYNWydST+hzv3ogd7aQr1KKMkGMNHrQw9kgQ9p6IEIdacB7cDXNDTgO3UPm/SWn4yBb6C9Ay/88WlxrzGTSd3pgY+gSxo+feZvX8JWNDu4cJ75f0sw5BCv8m/3pAFPdRYkKjxshoBTKfYAS99nYRUI4xxe3KhkLN/40KB1KdS5hgawS5yn1oVTOZUib2TIgKtWELPSmeLyZpY3kimTTbRV32CdA6wxF6XRDkRdj9kLGhowXeVa0IU6stV52G5ARD2X4jQwoEi6RmLbKiUm2vs/oJgIorBy5FRomPULey7Egn4n2B/gp78P7LI3H2KTub16x5YFUPmlJtp822P/ZWxz95dSBdabNSY68gmCDDfR+VmedDRNecCoOlsBToMeAVC+h3ThsOV57B+bmg+wD9+NJx2YmsKgZtByArrD/Gc2EM8ASqmtfcGBR22SlR8hpbeaOCOm5ioyXrjKROfBy5OoPF9hjmAL4ynfnAcs4fvHZip7mZxYrjYt18HupW2cuw3nY0+auyDRmpiBzblBtYnOcHf7nHZk6553tMaoRJR3YsC/AhpsM9EJPSuqR8qhprpMxTN0bbk83EYnbInWSqyw9vC1SkdlhewS5yjYq/XkXilN/24rwLO0q3ACP1Z7OlNifiNxxMptHHcGfPrchsrxE4HRKvWsz20ybT0c63ObOlWBlTLSk/wVYABaauVRAFIt5wAAAABJRU5ErkJggg=="

/***/ }),
/* 44 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media " + item[2] + "{" + content + "}";
      } else {
        return content;
      }
    }).join("");
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === "string") modules = [[null, modules, ""]];
    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];
      if (typeof id === "number") alreadyImportedModules[id] = true;
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      //  when a module is imported multiple times with different media queries.
      //  I hope this will never occur (Hey this way we have smaller bundles)

      if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url)) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(45);
exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, "html {\n  -webkit-tap-highlight-color: transparent;\n}\nhtml body {\n  margin: 0;\n  padding: 0;\n}\n#inputboxWrapper {\n  background-color: #000;\n  background-image: linear-gradient(#273542, #1b242d);\n  box-sizing: border-box;\n  padding: 1.866667rem 0;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: normal;\n  align-items: center;\n}\n#inputboxWrapper .container-info {\n  font-family: 'PingFang-SC-Medium';\n  font-size: 0.853333rem /* 16/18.75 */;\n  color: #fff;\n  text-align: center;\n}\n#inputboxWrapper .container-input {\n  margin-top: 1.28rem /* 24/18.75 */;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  height: 2.7rem;\n  width: 86%;\n}\n#inputboxWrapper .container-input span {\n  display: block;\n  text-align: center;\n  line-height: 2.7rem;\n  font-size: 1.068rem;\n  color: #dee5eb;\n  height: 100%;\n  flex: 1;\n  border: 1px solid #afafaf;\n  border-right: 0;\n  box-sizing: border-box;\n}\n#inputboxWrapper .container-input span.focus {\n  border-color: #f6d20b;\n}\n#inputboxWrapper .container-input span.focus + span {\n  border-left-color: #f6d20b;\n}\n#inputboxWrapper .container-input span:first-child {\n  border-radius: 6px 0 0 6px;\n}\n#inputboxWrapper .container-input span:last-child {\n  border-radius: 0px 6px 6px 0px;\n  border-right: 1px solid #afafaf;\n}\n#inputboxWrapper .container-input span:last-child.focus {\n  border-right-color: #f6d20b;\n}\n#inputboxWrapper .container-save-button {\n  width: 90%;\n  height: 2.56rem;\n  margin-top: 2.56rem;\n}\n#inputboxWrapper .container-save-button .btnbind {\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  line-height: 2.56rem;\n  border-radius: 6px;\n  background-color: #f0e6ac;\n  color: #5c5426;\n  font-size: 0.91rem;\n}\n#inputboxWrapper .container-save-button .btnbind.active {\n  background-color: #f6cf07;\n}\n#inputboxWrapper .container-switch-button {\n  margin-top: 1.92rem;\n  font-size: 0.747rem;\n  line-height: 1.28rem /* 24/18.75 */;\n  color: #ece09b;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n#inputboxWrapper .container-switch-button::before {\n  content: ' ';\n  width: 1.28rem /* 24/18.75 */;\n  height: 1.28rem /* 24/18.75 */;\n  background-image: url(" + escape(__webpack_require__(43)) + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.bar_bindcarnum {\n  display: block;\n  width: 100%;\n  height: 3px;\n  background-image: url(" + escape(__webpack_require__(42)) + ");\n  background-repeat: repeat-x;\n}\n#keyboardWrapper {\n  position: fixed;\n  bottom: 0;\n  background-color: #e0e0e0;\n}\n#keyboardWrapper.hide {\n  display: none;\n}\n#keyboardWrapper .keyboard-row {\n  width: 100vw;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 0.426667rem /* 8/18.75 */;\n}\n#keyboardWrapper .keyboard-row:first-child {\n  justify-content: flex-end;\n  background-color: #fff;\n  margin-top: 0.053333rem /* 1/18.75 */;\n}\n#keyboardWrapper .keyboard-row:first-child span.keyboard-item {\n  margin-right: 15px;\n  color: #f6cf07;\n  font-size: 17px;\n  line-height: 33px;\n}\n#keyboardWrapper .keyboard-row:not(:first-child) .keyboard-item {\n  height: 2.133333rem /* 40/18.75 */;\n  border-radius: 5px;\n  color: #2e2e2e;\n  font-size: 0.853333rem /* 16/18.75 */;\n  background-color: #fff;\n  flex: 1;\n  margin-right: 0.213333rem /* 4/18.75 */;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#keyboardWrapper .keyboard-row:not(:first-child) .keyboard-item:first-child {\n  margin-left: 0.213333rem /* 4/18.75 */;\n}\n#keyboardWrapper .keyboard-row:not(:first-child) .keyboard-item.keyboard-placeholder {\n  background-color: transparent;\n}\n#keyboardWrapper .keyboard-row:not(:first-child) .keyboard-item.keyboard-disable {\n  background-color: #d0d0d0;\n}\n#keyboardWrapper .keyboard-row:not(:first-child) .keyboard-item.keyboard-delete {\n  background-color: #aab2bc;\n  background-image: url(" + escape(__webpack_require__(41)) + ");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 20px 13px;\n}\n", ""]);

// exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(46);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(40)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)


var toObject = __webpack_require__(20);

var toAbsoluteIndex = __webpack_require__(19);

var toLength = __webpack_require__(17);

module.exports = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

  while (endPos > index) {
    O[index++] = value;
  }

  return O;
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(49);

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);

var hide = __webpack_require__(9);

var has = __webpack_require__(21);

var SRC = __webpack_require__(6)('src');

var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(0).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 52 */
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(2); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

var document = __webpack_require__(1).document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(7)(function () {
  return Object.defineProperty(__webpack_require__(54)('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(56);

var IE8_DOM_DEFINE = __webpack_require__(55);

var toPrimitive = __webpack_require__(53);

var dP = Object.defineProperty;
exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(3);

$export($export.P, 'Array', {
  fill: __webpack_require__(48)
});

__webpack_require__(16)('fill');

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);

module.exports = __webpack_require__(0).Array.fill;

/***/ })
/******/ ])["default"];
});