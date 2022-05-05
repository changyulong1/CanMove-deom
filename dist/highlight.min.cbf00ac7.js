// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"highlight/highlight.min.js":[function(require,module,exports) {
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
  Highlight.js v11.5.1 (git: b8f233c8e2)
  (c) 2006-2022 Ivan Sagalaev and other contributors
  License: BSD-3-Clause
 */
var hljs = function () {
  "use strict";

  var e = {
    exports: {}
  };

  function t(e) {
    return e instanceof Map ? e.clear = e.delete = e.set = function () {
      throw Error("map is read-only");
    } : e instanceof Set && (e.add = e.clear = e.delete = function () {
      throw Error("set is read-only");
    }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach(function (n) {
      var i = e[n];
      "object" != _typeof(i) || Object.isFrozen(i) || t(i);
    }), e;
  }

  e.exports = t, e.exports.default = t;
  var n = e.exports;

  var i = /*#__PURE__*/function () {
    function i(e) {
      _classCallCheck(this, i);

      void 0 === e.data && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1;
    }

    _createClass(i, [{
      key: "ignoreMatch",
      value: function ignoreMatch() {
        this.isMatchIgnored = !0;
      }
    }]);

    return i;
  }();

  function r(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }

  function s(e) {
    var n = Object.create(null);

    for (var _t in e) {
      n[_t] = e[_t];
    }

    for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      t[_key - 1] = arguments[_key];
    }

    return t.forEach(function (e) {
      for (var _t2 in e) {
        n[_t2] = e[_t2];
      }
    }), n;
  }

  var o = function o(e) {
    return !!e.kind;
  };

  var a = /*#__PURE__*/function () {
    function a(e, t) {
      _classCallCheck(this, a);

      this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this);
    }

    _createClass(a, [{
      key: "addText",
      value: function addText(e) {
        this.buffer += r(e);
      }
    }, {
      key: "openNode",
      value: function openNode(e) {
        if (!o(e)) return;
        var t = e.kind;
        t = e.sublanguage ? "language-" + t : function (e, _ref) {
          var t = _ref.prefix;

          if (e.includes(".")) {
            var _n = e.split(".");

            return ["".concat(t).concat(_n.shift())].concat(_toConsumableArray(_n.map(function (e, t) {
              return "".concat(e).concat("_".repeat(t + 1));
            }))).join(" ");
          }

          return "".concat(t).concat(e);
        }(t, {
          prefix: this.classPrefix
        }), this.span(t);
      }
    }, {
      key: "closeNode",
      value: function closeNode(e) {
        o(e) && (this.buffer += "</span>");
      }
    }, {
      key: "value",
      value: function value() {
        return this.buffer;
      }
    }, {
      key: "span",
      value: function span(e) {
        this.buffer += "<span class=\"".concat(e, "\">");
      }
    }]);

    return a;
  }();

  var c = /*#__PURE__*/function () {
    function c() {
      _classCallCheck(this, c);

      this.rootNode = {
        children: []
      }, this.stack = [this.rootNode];
    }

    _createClass(c, [{
      key: "top",
      get: function get() {
        return this.stack[this.stack.length - 1];
      }
    }, {
      key: "root",
      get: function get() {
        return this.rootNode;
      }
    }, {
      key: "add",
      value: function add(e) {
        this.top.children.push(e);
      }
    }, {
      key: "openNode",
      value: function openNode(e) {
        var t = {
          kind: e,
          children: []
        };
        this.add(t), this.stack.push(t);
      }
    }, {
      key: "closeNode",
      value: function closeNode() {
        if (this.stack.length > 1) return this.stack.pop();
      }
    }, {
      key: "closeAllNodes",
      value: function closeAllNodes() {
        for (; this.closeNode();) {
          ;
        }
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return JSON.stringify(this.rootNode, null, 4);
      }
    }, {
      key: "walk",
      value: function walk(e) {
        return this.constructor._walk(e, this.rootNode);
      }
    }], [{
      key: "_walk",
      value: function _walk(e, t) {
        var _this = this;

        return "string" == typeof t ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach(function (t) {
          return _this._walk(e, t);
        }), e.closeNode(t)), e;
      }
    }, {
      key: "_collapse",
      value: function _collapse(e) {
        "string" != typeof e && e.children && (e.children.every(function (e) {
          return "string" == typeof e;
        }) ? e.children = [e.children.join("")] : e.children.forEach(function (e) {
          c._collapse(e);
        }));
      }
    }]);

    return c;
  }();

  var l = /*#__PURE__*/function (_c) {
    _inherits(l, _c);

    var _super = _createSuper(l);

    function l(e) {
      var _this2;

      _classCallCheck(this, l);

      _this2 = _super.call(this), _this2.options = e;
      return _this2;
    }

    _createClass(l, [{
      key: "addKeyword",
      value: function addKeyword(e, t) {
        "" !== e && (this.openNode(t), this.addText(e), this.closeNode());
      }
    }, {
      key: "addText",
      value: function addText(e) {
        "" !== e && this.add(e);
      }
    }, {
      key: "addSublanguage",
      value: function addSublanguage(e, t) {
        var n = e.root;
        n.kind = t, n.sublanguage = !0, this.add(n);
      }
    }, {
      key: "toHTML",
      value: function toHTML() {
        return new a(this, this.options).value();
      }
    }, {
      key: "finalize",
      value: function finalize() {
        return !0;
      }
    }]);

    return l;
  }(c);

  function g(e) {
    return e ? "string" == typeof e ? e : e.source : null;
  }

  function d(e) {
    return f("(?=", e, ")");
  }

  function u(e) {
    return f("(?:", e, ")*");
  }

  function h(e) {
    return f("(?:", e, ")?");
  }

  function f() {
    for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      e[_key2] = arguments[_key2];
    }

    return e.map(function (e) {
      return g(e);
    }).join("");
  }

  function p() {
    for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      e[_key3] = arguments[_key3];
    }

    var t = function (e) {
      var t = e[e.length - 1];
      return "object" == _typeof(t) && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
    }(e);

    return "(" + (t.capture ? "" : "?:") + e.map(function (e) {
      return g(e);
    }).join("|") + ")";
  }

  function b(e) {
    return RegExp(e.toString() + "|").exec("").length - 1;
  }

  var m = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

  function E(e, _ref2) {
    var t = _ref2.joinWith;
    var n = 0;
    return e.map(function (e) {
      n += 1;
      var t = n;
      var i = g(e),
          r = "";

      for (; i.length > 0;) {
        var _e = m.exec(i);

        if (!_e) {
          r += i;
          break;
        }

        r += i.substring(0, _e.index), i = i.substring(_e.index + _e[0].length), "\\" === _e[0][0] && _e[1] ? r += "\\" + (Number(_e[1]) + t) : (r += _e[0], "(" === _e[0] && n++);
      }

      return r;
    }).map(function (e) {
      return "(".concat(e, ")");
    }).join(t);
  }

  var x = "[a-zA-Z]\\w*",
      w = "[a-zA-Z_]\\w*",
      y = "\\b\\d+(\\.\\d+)?",
      _ = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      k = "\\b(0b[01]+)",
      v = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  },
      O = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [v]
  },
      N = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [v]
  },
      M = function M(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var i = s({
      scope: "comment",
      begin: e,
      end: t,
      contains: []
    }, n);
    i.contains.push({
      scope: "doctag",
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    var r = p("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
    return i.contains.push({
      begin: f(/[ ]+/, "(", r, /[.]?[:]?([.][ ]|[ ])/, "){3}")
    }), i;
  },
      S = M("//", "$"),
      R = M("/\\*", "\\*/"),
      j = M("#", "$");

  var A = Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: /\b\B/,
    IDENT_RE: x,
    UNDERSCORE_IDENT_RE: w,
    NUMBER_RE: y,
    C_NUMBER_RE: _,
    BINARY_NUMBER_RE: k,
    RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    SHEBANG: function SHEBANG() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = /^#![ ]*\//;
      return e.binary && (e.begin = f(t, /.*\b/, e.binary, /\b.*/)), s({
        scope: "meta",
        begin: t,
        end: /$/,
        relevance: 0,
        "on:begin": function onBegin(e, t) {
          0 !== e.index && t.ignoreMatch();
        }
      }, e);
    },
    BACKSLASH_ESCAPE: v,
    APOS_STRING_MODE: O,
    QUOTE_STRING_MODE: N,
    PHRASAL_WORDS_MODE: {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    },
    COMMENT: M,
    C_LINE_COMMENT_MODE: S,
    C_BLOCK_COMMENT_MODE: R,
    HASH_COMMENT_MODE: j,
    NUMBER_MODE: {
      scope: "number",
      begin: y,
      relevance: 0
    },
    C_NUMBER_MODE: {
      scope: "number",
      begin: _,
      relevance: 0
    },
    BINARY_NUMBER_MODE: {
      scope: "number",
      begin: k,
      relevance: 0
    },
    REGEXP_MODE: {
      begin: /(?=\/[^/\n]*\/)/,
      contains: [{
        scope: "regexp",
        begin: /\//,
        end: /\/[gimuy]*/,
        illegal: /\n/,
        contains: [v, {
          begin: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [v]
        }]
      }]
    },
    TITLE_MODE: {
      scope: "title",
      begin: x,
      relevance: 0
    },
    UNDERSCORE_TITLE_MODE: {
      scope: "title",
      begin: w,
      relevance: 0
    },
    METHOD_GUARD: {
      begin: "\\.\\s*[a-zA-Z_]\\w*",
      relevance: 0
    },
    END_SAME_AS_BEGIN: function END_SAME_AS_BEGIN(e) {
      return Object.assign(e, {
        "on:begin": function onBegin(e, t) {
          t.data._beginMatch = e[1];
        },
        "on:end": function onEnd(e, t) {
          t.data._beginMatch !== e[1] && t.ignoreMatch();
        }
      });
    }
  });

  function I(e, t) {
    "." === e.input[e.index - 1] && t.ignoreMatch();
  }

  function T(e, t) {
    void 0 !== e.className && (e.scope = e.className, delete e.className);
  }

  function L(e, t) {
    t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = I, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0));
  }

  function B(e, t) {
    Array.isArray(e.illegal) && (e.illegal = p.apply(void 0, _toConsumableArray(e.illegal)));
  }

  function D(e, t) {
    if (e.match) {
      if (e.begin || e.end) throw Error("begin & end are not supported with match");
      e.begin = e.match, delete e.match;
    }
  }

  function H(e, t) {
    void 0 === e.relevance && (e.relevance = 1);
  }

  var P = function P(e, t) {
    if (!e.beforeMatch) return;
    if (e.starts) throw Error("beforeMatch cannot be used with starts");
    var n = Object.assign({}, e);
    Object.keys(e).forEach(function (t) {
      delete e[t];
    }), e.keywords = n.keywords, e.begin = f(n.beforeMatch, d(n.begin)), e.starts = {
      relevance: 0,
      contains: [Object.assign(n, {
        endsParent: !0
      })]
    }, e.relevance = 0, delete n.beforeMatch;
  },
      C = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

  function $(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "keyword";
    var i = Object.create(null);
    return "string" == typeof e ? r(n, e.split(" ")) : Array.isArray(e) ? r(n, e) : Object.keys(e).forEach(function (n) {
      Object.assign(i, $(e[n], t, n));
    }), i;

    function r(e, n) {
      t && (n = n.map(function (e) {
        return e.toLowerCase();
      })), n.forEach(function (t) {
        var n = t.split("|");
        i[n[0]] = [e, U(n[0], n[1])];
      });
    }
  }

  function U(e, t) {
    return t ? Number(t) : function (e) {
      return C.includes(e.toLowerCase());
    }(e) ? 0 : 1;
  }

  var z = {},
      K = function K(e) {
    console.error(e);
  },
      W = function W(e) {
    var _console;

    for (var _len4 = arguments.length, t = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      t[_key4 - 1] = arguments[_key4];
    }

    (_console = console).log.apply(_console, ["WARN: " + e].concat(t));
  },
      X = function X(e, t) {
    z["".concat(e, "/").concat(t)] || (console.log("Deprecated as of ".concat(e, ". ").concat(t)), z["".concat(e, "/").concat(t)] = !0);
  },
      G = Error();

  function Z(e, t, _ref3) {
    var n = _ref3.key;
    var i = 0;
    var r = e[n],
        s = {},
        o = {};

    for (var _e2 = 1; _e2 <= t.length; _e2++) {
      o[_e2 + i] = r[_e2], s[_e2 + i] = !0, i += b(t[_e2 - 1]);
    }

    e[n] = o, e[n]._emit = s, e[n]._multi = !0;
  }

  function F(e) {
    (function (e) {
      e.scope && "object" == _typeof(e.scope) && null !== e.scope && (e.beginScope = e.scope, delete e.scope);
    })(e), "string" == typeof e.beginScope && (e.beginScope = {
      _wrap: e.beginScope
    }), "string" == typeof e.endScope && (e.endScope = {
      _wrap: e.endScope
    }), function (e) {
      if (Array.isArray(e.begin)) {
        if (e.skip || e.excludeBegin || e.returnBegin) throw K("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), G;
        if ("object" != _typeof(e.beginScope) || null === e.beginScope) throw K("beginScope must be object"), G;
        Z(e, e.begin, {
          key: "beginScope"
        }), e.begin = E(e.begin, {
          joinWith: ""
        });
      }
    }(e), function (e) {
      if (Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd) throw K("skip, excludeEnd, returnEnd not compatible with endScope: {}"), G;
        if ("object" != _typeof(e.endScope) || null === e.endScope) throw K("endScope must be object"), G;
        Z(e, e.end, {
          key: "endScope"
        }), e.end = E(e.end, {
          joinWith: ""
        });
      }
    }(e);
  }

  function V(e) {
    function t(t, n) {
      return RegExp(g(t), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (n ? "g" : ""));
    }

    var n = /*#__PURE__*/function () {
      function n() {
        _classCallCheck(this, n);

        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }

      _createClass(n, [{
        key: "addRule",
        value: function addRule(e, t) {
          t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]), this.matchAt += b(e) + 1;
        }
      }, {
        key: "compile",
        value: function compile() {
          0 === this.regexes.length && (this.exec = function () {
            return null;
          });
          var e = this.regexes.map(function (e) {
            return e[1];
          });
          this.matcherRe = t(E(e, {
            joinWith: "|"
          }), !0), this.lastIndex = 0;
        }
      }, {
        key: "exec",
        value: function exec(e) {
          this.matcherRe.lastIndex = this.lastIndex;
          var t = this.matcherRe.exec(e);
          if (!t) return null;

          var _n2 = t.findIndex(function (e, t) {
            return t > 0 && void 0 !== e;
          }),
              i = this.matchIndexes[_n2];

          return t.splice(0, _n2), Object.assign(t, i);
        }
      }]);

      return n;
    }();

    var i = /*#__PURE__*/function () {
      function i() {
        _classCallCheck(this, i);

        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }

      _createClass(i, [{
        key: "getMatcher",
        value: function getMatcher(e) {
          if (this.multiRegexes[e]) return this.multiRegexes[e];
          var t = new n();
          return this.rules.slice(e).forEach(function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 2),
                e = _ref5[0],
                n = _ref5[1];

            return t.addRule(e, n);
          }), t.compile(), this.multiRegexes[e] = t, t;
        }
      }, {
        key: "resumingScanAtSamePosition",
        value: function resumingScanAtSamePosition() {
          return 0 !== this.regexIndex;
        }
      }, {
        key: "considerAll",
        value: function considerAll() {
          this.regexIndex = 0;
        }
      }, {
        key: "addRule",
        value: function addRule(e, t) {
          this.rules.push([e, t]), "begin" === t.type && this.count++;
        }
      }, {
        key: "exec",
        value: function exec(e) {
          var t = this.getMatcher(this.regexIndex);
          t.lastIndex = this.lastIndex;
          var n = t.exec(e);
          if (this.resumingScanAtSamePosition()) if (n && n.index === this.lastIndex) ;else {
            var _t3 = this.getMatcher(0);

            _t3.lastIndex = this.lastIndex + 1, n = _t3.exec(e);
          }
          return n && (this.regexIndex += n.position + 1, this.regexIndex === this.count && this.considerAll()), n;
        }
      }]);

      return i;
    }();

    if (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return e.classNameAliases = s(e.classNameAliases || {}), function n(r, o) {
      var _ref6;

      var a = r;
      if (r.isCompiled) return a;
      [T, D, F, P].forEach(function (e) {
        return e(r, o);
      }), e.compilerExtensions.forEach(function (e) {
        return e(r, o);
      }), r.__beforeBegin = null, [L, B, H].forEach(function (e) {
        return e(r, o);
      }), r.isCompiled = !0;
      var c = null;
      return "object" == _typeof(r.keywords) && r.keywords.$pattern && (r.keywords = Object.assign({}, r.keywords), c = r.keywords.$pattern, delete r.keywords.$pattern), c = c || /\w+/, r.keywords && (r.keywords = $(r.keywords, e.case_insensitive)), a.keywordPatternRe = t(c, !0), o && (r.begin || (r.begin = /\B|\b/), a.beginRe = t(a.begin), r.end || r.endsWithParent || (r.end = /\B|\b/), r.end && (a.endRe = t(a.end)), a.terminatorEnd = g(a.end) || "", r.endsWithParent && o.terminatorEnd && (a.terminatorEnd += (r.end ? "|" : "") + o.terminatorEnd)), r.illegal && (a.illegalRe = t(r.illegal)), r.contains || (r.contains = []), r.contains = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(r.contains.map(function (e) {
        return function (e) {
          return e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(function (t) {
            return s(e, {
              variants: null
            }, t);
          })), e.cachedVariants ? e.cachedVariants : q(e) ? s(e, {
            starts: e.starts ? s(e.starts) : null
          }) : Object.isFrozen(e) ? s(e) : e;
        }("self" === e ? r : e);
      }))), r.contains.forEach(function (e) {
        n(e, a);
      }), r.starts && n(r.starts, o), a.matcher = function (e) {
        var t = new i();
        return e.contains.forEach(function (e) {
          return t.addRule(e.begin, {
            rule: e,
            type: "begin"
          });
        }), e.terminatorEnd && t.addRule(e.terminatorEnd, {
          type: "end"
        }), e.illegal && t.addRule(e.illegal, {
          type: "illegal"
        }), t;
      }(a), a;
    }(e);
  }

  function q(e) {
    return !!e && (e.endsWithParent || q(e.starts));
  }

  var J = /*#__PURE__*/function (_Error) {
    _inherits(J, _Error);

    var _super2 = _createSuper(J);

    function J(e, t) {
      var _this3;

      _classCallCheck(this, J);

      _this3 = _super2.call(this, e), _this3.name = "HTMLInjectionError", _this3.html = t;
      return _this3;
    }

    return _createClass(J);
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var Y = r,
      Q = s,
      ee = Symbol("nomatch");

  var te = function (e) {
    var t = Object.create(null),
        r = Object.create(null),
        s = [];
    var o = !0;
    var a = "Could not find the language '{}', did you forget to load/include a language module?",
        c = {
      disableAutodetect: !0,
      name: "Plain text",
      contains: []
    };
    var g = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      __emitter: l
    };

    function b(e) {
      return g.noHighlightRe.test(e);
    }

    function m(e, t, n) {
      var i = "",
          r = "";
      "object" == _typeof(t) ? (i = e, n = t.ignoreIllegals, r = t.language) : (X("10.7.0", "highlight(lang, code, ...args) has been deprecated."), X("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), r = e, i = t), void 0 === n && (n = !0);
      var s = {
        code: i,
        language: r
      };
      N("before:highlight", s);
      var o = s.result ? s.result : E(s.language, s.code, n);
      return o.code = s.code, N("after:highlight", o), o;
    }

    function E(e, n, r, s) {
      var c = Object.create(null);

      function l() {
        if (!O.keywords) return void M.addText(S);
        var e = 0;
        O.keywordPatternRe.lastIndex = 0;
        var t = O.keywordPatternRe.exec(S),
            n = "";

        for (; t;) {
          n += S.substring(e, t.index);

          var _r = y.case_insensitive ? t[0].toLowerCase() : t[0],
              _s2 = (i = _r, O.keywords[i]);

          if (_s2) {
            var _s3 = _slicedToArray(_s2, 2),
                _e3 = _s3[0],
                _i2 = _s3[1];

            if (M.addText(n), n = "", c[_r] = (c[_r] || 0) + 1, c[_r] <= 7 && (R += _i2), _e3.startsWith("_")) n += t[0];else {
              var _n3 = y.classNameAliases[_e3] || _e3;

              M.addKeyword(t[0], _n3);
            }
          } else n += t[0];

          e = O.keywordPatternRe.lastIndex, t = O.keywordPatternRe.exec(S);
        }

        var i;
        n += S.substr(e), M.addText(n);
      }

      function d() {
        null != O.subLanguage ? function () {
          if ("" === S) return;
          var e = null;

          if ("string" == typeof O.subLanguage) {
            if (!t[O.subLanguage]) return void M.addText(S);
            e = E(O.subLanguage, S, !0, N[O.subLanguage]), N[O.subLanguage] = e._top;
          } else e = x(S, O.subLanguage.length ? O.subLanguage : null);

          O.relevance > 0 && (R += e.relevance), M.addSublanguage(e._emitter, e.language);
        }() : l(), S = "";
      }

      function u(e, t) {
        var n = 1;
        var i = t.length - 1;

        for (; n <= i;) {
          if (!e._emit[n]) {
            n++;
            continue;
          }

          var _i3 = y.classNameAliases[e[n]] || e[n],
              _r2 = t[n];

          _i3 ? M.addKeyword(_r2, _i3) : (S = _r2, l(), S = ""), n++;
        }
      }

      function h(e, t) {
        return e.scope && "string" == typeof e.scope && M.openNode(y.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (M.addKeyword(S, y.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), S = "") : e.beginScope._multi && (u(e.beginScope, t), S = "")), O = Object.create(e, {
          parent: {
            value: O
          }
        }), O;
      }

      function f(e, t, n) {
        var r = function (e, t) {
          var n = e && e.exec(t);
          return n && 0 === n.index;
        }(e.endRe, n);

        if (r) {
          if (e["on:end"]) {
            var _n4 = new i(e);

            e["on:end"](t, _n4), _n4.isMatchIgnored && (r = !1);
          }

          if (r) {
            for (; e.endsParent && e.parent;) {
              e = e.parent;
            }

            return e;
          }
        }

        if (e.endsWithParent) return f(e.parent, t, n);
      }

      function p(e) {
        return 0 === O.matcher.regexIndex ? (S += e[0], 1) : (I = !0, 0);
      }

      function b(e) {
        var t = e[0],
            i = n.substr(e.index),
            r = f(O, e, i);
        if (!r) return ee;
        var s = O;
        O.endScope && O.endScope._wrap ? (d(), M.addKeyword(t, O.endScope._wrap)) : O.endScope && O.endScope._multi ? (d(), u(O.endScope, e)) : s.skip ? S += t : (s.returnEnd || s.excludeEnd || (S += t), d(), s.excludeEnd && (S = t));

        do {
          O.scope && M.closeNode(), O.skip || O.subLanguage || (R += O.relevance), O = O.parent;
        } while (O !== r.parent);

        return r.starts && h(r.starts, e), s.returnEnd ? 0 : t.length;
      }

      var m = {};

      function w(t, s) {
        var a = s && s[0];
        if (S += t, null == a) return d(), 0;

        if ("begin" === m.type && "end" === s.type && m.index === s.index && "" === a) {
          if (S += n.slice(s.index, s.index + 1), !o) {
            var _t4 = Error("0 width match regex (".concat(e, ")"));

            throw _t4.languageName = e, _t4.badRule = m.rule, _t4;
          }

          return 1;
        }

        if (m = s, "begin" === s.type) return function (e) {
          var t = e[0],
              n = e.rule,
              r = new i(n),
              s = [n.__beforeBegin, n["on:begin"]];

          for (var _i4 = 0, _s4 = s; _i4 < _s4.length; _i4++) {
            var _n5 = _s4[_i4];
            if (_n5 && (_n5(e, r), r.isMatchIgnored)) return p(t);
          }

          return n.skip ? S += t : (n.excludeBegin && (S += t), d(), n.returnBegin || n.excludeBegin || (S = t)), h(n, e), n.returnBegin ? 0 : t.length;
        }(s);

        if ("illegal" === s.type && !r) {
          var _e4 = Error('Illegal lexeme "' + a + '" for mode "' + (O.scope || "<unnamed>") + '"');

          throw _e4.mode = O, _e4;
        }

        if ("end" === s.type) {
          var _e5 = b(s);

          if (_e5 !== ee) return _e5;
        }

        if ("illegal" === s.type && "" === a) return 1;
        if (A > 1e5 && A > 3 * s.index) throw Error("potential infinite loop, way more iterations than matches");
        return S += a, a.length;
      }

      var y = k(e);
      if (!y) throw K(a.replace("{}", e)), Error('Unknown language: "' + e + '"');

      var _ = V(y);

      var v = "",
          O = s || _;
      var N = {},
          M = new g.__emitter(g);

      (function () {
        var e = [];

        for (var _t5 = O; _t5 !== y; _t5 = _t5.parent) {
          _t5.scope && e.unshift(_t5.scope);
        }

        e.forEach(function (e) {
          return M.openNode(e);
        });
      })();

      var S = "",
          R = 0,
          j = 0,
          A = 0,
          I = !1;

      try {
        for (O.matcher.considerAll();;) {
          A++, I ? I = !1 : O.matcher.considerAll(), O.matcher.lastIndex = j;

          var _e6 = O.matcher.exec(n);

          if (!_e6) break;

          var _t6 = w(n.substring(j, _e6.index), _e6);

          j = _e6.index + _t6;
        }

        return w(n.substr(j)), M.closeAllNodes(), M.finalize(), v = M.toHTML(), {
          language: e,
          value: v,
          relevance: R,
          illegal: !1,
          _emitter: M,
          _top: O
        };
      } catch (t) {
        if (t.message && t.message.includes("Illegal")) return {
          language: e,
          value: Y(n),
          illegal: !0,
          relevance: 0,
          _illegalBy: {
            message: t.message,
            index: j,
            context: n.slice(j - 100, j + 100),
            mode: t.mode,
            resultSoFar: v
          },
          _emitter: M
        };
        if (o) return {
          language: e,
          value: Y(n),
          illegal: !1,
          relevance: 0,
          errorRaised: t,
          _emitter: M,
          _top: O
        };
        throw t;
      }
    }

    function x(e, n) {
      n = n || g.languages || Object.keys(t);

      var i = function (e) {
        var t = {
          value: Y(e),
          illegal: !1,
          relevance: 0,
          _top: c,
          _emitter: new g.__emitter(g)
        };
        return t._emitter.addText(e), t;
      }(e),
          r = n.filter(k).filter(O).map(function (t) {
        return E(t, e, !1);
      });

      r.unshift(i);

      var s = r.sort(function (e, t) {
        if (e.relevance !== t.relevance) return t.relevance - e.relevance;

        if (e.language && t.language) {
          if (k(e.language).supersetOf === t.language) return 1;
          if (k(t.language).supersetOf === e.language) return -1;
        }

        return 0;
      }),
          _s5 = _slicedToArray(s, 2),
          o = _s5[0],
          a = _s5[1],
          l = o;

      return l.secondBest = a, l;
    }

    function w(e) {
      var t = null;

      var n = function (e) {
        var t = e.className + " ";
        t += e.parentNode ? e.parentNode.className : "";
        var n = g.languageDetectRe.exec(t);

        if (n) {
          var _t7 = k(n[1]);

          return _t7 || (W(a.replace("{}", n[1])), W("Falling back to no-highlight mode for this block.", e)), _t7 ? n[1] : "no-highlight";
        }

        return t.split(/\s+/).find(function (e) {
          return b(e) || k(e);
        });
      }(e);

      if (b(n)) return;
      if (N("before:highlightElement", {
        el: e,
        language: n
      }), e.children.length > 0 && (g.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(e)), g.throwUnescapedHTML)) throw new J("One of your code blocks includes unescaped HTML.", e.innerHTML);
      t = e;
      var i = t.textContent,
          s = n ? m(i, {
        language: n,
        ignoreIllegals: !0
      }) : x(i);
      e.innerHTML = s.value, function (e, t, n) {
        var i = t && r[t] || n;
        e.classList.add("hljs"), e.classList.add("language-" + i);
      }(e, n, s.language), e.result = {
        language: s.language,
        re: s.relevance,
        relevance: s.relevance
      }, s.secondBest && (e.secondBest = {
        language: s.secondBest.language,
        relevance: s.secondBest.relevance
      }), N("after:highlightElement", {
        el: e,
        result: s,
        text: i
      });
    }

    var y = !1;

    function _() {
      "loading" !== document.readyState ? document.querySelectorAll(g.cssSelector).forEach(w) : y = !0;
    }

    function k(e) {
      return e = (e || "").toLowerCase(), t[e] || t[r[e]];
    }

    function v(e, _ref7) {
      var t = _ref7.languageName;
      "string" == typeof e && (e = [e]), e.forEach(function (e) {
        r[e.toLowerCase()] = t;
      });
    }

    function O(e) {
      var t = k(e);
      return t && !t.disableAutodetect;
    }

    function N(e, t) {
      var n = e;
      s.forEach(function (e) {
        e[n] && e[n](t);
      });
    }

    "undefined" != typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", function () {
      y && _();
    }, !1), Object.assign(e, {
      highlight: m,
      highlightAuto: x,
      highlightAll: _,
      highlightElement: w,
      highlightBlock: function highlightBlock(e) {
        return X("10.7.0", "highlightBlock will be removed entirely in v12.0"), X("10.7.0", "Please use highlightElement now."), w(e);
      },
      configure: function configure(e) {
        g = Q(g, e);
      },
      initHighlighting: function initHighlighting() {
        _(), X("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
      },
      initHighlightingOnLoad: function initHighlightingOnLoad() {
        _(), X("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
      },
      registerLanguage: function registerLanguage(n, i) {
        var r = null;

        try {
          r = i(e);
        } catch (e) {
          if (K("Language definition for '{}' could not be registered.".replace("{}", n)), !o) throw e;
          K(e), r = c;
        }

        r.name || (r.name = n), t[n] = r, r.rawDefinition = i.bind(null, e), r.aliases && v(r.aliases, {
          languageName: n
        });
      },
      unregisterLanguage: function unregisterLanguage(e) {
        delete t[e];

        for (var _i5 = 0, _Object$keys = Object.keys(r); _i5 < _Object$keys.length; _i5++) {
          var _t8 = _Object$keys[_i5];
          r[_t8] === e && delete r[_t8];
        }
      },
      listLanguages: function listLanguages() {
        return Object.keys(t);
      },
      getLanguage: k,
      registerAliases: v,
      autoDetection: O,
      inherit: Q,
      addPlugin: function addPlugin(e) {
        (function (e) {
          e["before:highlightBlock"] && !e["before:highlightElement"] && (e["before:highlightElement"] = function (t) {
            e["before:highlightBlock"](Object.assign({
              block: t.el
            }, t));
          }), e["after:highlightBlock"] && !e["after:highlightElement"] && (e["after:highlightElement"] = function (t) {
            e["after:highlightBlock"](Object.assign({
              block: t.el
            }, t));
          });
        })(e), s.push(e);
      }
    }), e.debugMode = function () {
      o = !1;
    }, e.safeMode = function () {
      o = !0;
    }, e.versionString = "11.5.1", e.regex = {
      concat: f,
      lookahead: d,
      either: p,
      optional: h,
      anyNumberOfTimes: u
    };

    for (var _e7 in A) {
      "object" == _typeof(A[_e7]) && n(A[_e7]);
    }

    return Object.assign(e, A), e;
  }({});

  return te;
}();

"object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module && (module.exports = hljs);
/*! `bash` grammar compiled for Highlight.js 11.5.1 */

(function () {
  var e = function () {
    "use strict";

    return function (e) {
      var s = e.regex,
          t = {},
          n = {
        begin: /\$\{/,
        end: /\}/,
        contains: ["self", {
          begin: /:-/,
          contains: [t]
        }]
      };
      Object.assign(t, {
        className: "variable",
        variants: [{
          begin: s.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])")
        }, n]
      });
      var a = {
        className: "subst",
        begin: /\$\(/,
        end: /\)/,
        contains: [e.BACKSLASH_ESCAPE]
      },
          i = {
        begin: /<<-?\s*(?=\w+)/,
        starts: {
          contains: [e.END_SAME_AS_BEGIN({
            begin: /(\w+)/,
            end: /(\w+)/,
            className: "string"
          })]
        }
      },
          c = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [e.BACKSLASH_ESCAPE, t, a]
      };
      a.contains.push(c);
      var o = {
        begin: /\$\(\(/,
        end: /\)\)/,
        contains: [{
          begin: /\d+#[0-9a-f]+/,
          className: "number"
        }, e.NUMBER_MODE, t]
      },
          r = e.SHEBANG({
        binary: "(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",
        relevance: 10
      }),
          l = {
        className: "function",
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: !0,
        contains: [e.inherit(e.TITLE_MODE, {
          begin: /\w[\w\d_]*/
        })],
        relevance: 0
      };
      return {
        name: "Bash",
        aliases: ["sh"],
        keywords: {
          $pattern: /\b[a-z][a-z0-9._-]+\b/,
          keyword: ["if", "then", "else", "elif", "fi", "for", "while", "in", "do", "done", "case", "esac", "function"],
          literal: ["true", "false"],
          built_in: ["break", "cd", "continue", "eval", "exec", "exit", "export", "getopts", "hash", "pwd", "readonly", "return", "shift", "test", "times", "trap", "umask", "unset", "alias", "bind", "builtin", "caller", "command", "declare", "echo", "enable", "help", "let", "local", "logout", "mapfile", "printf", "read", "readarray", "source", "type", "typeset", "ulimit", "unalias", "set", "shopt", "autoload", "bg", "bindkey", "bye", "cap", "chdir", "clone", "comparguments", "compcall", "compctl", "compdescribe", "compfiles", "compgroups", "compquote", "comptags", "comptry", "compvalues", "dirs", "disable", "disown", "echotc", "echoti", "emulate", "fc", "fg", "float", "functions", "getcap", "getln", "history", "integer", "jobs", "kill", "limit", "log", "noglob", "popd", "print", "pushd", "pushln", "rehash", "sched", "setcap", "setopt", "stat", "suspend", "ttyctl", "unfunction", "unhash", "unlimit", "unsetopt", "vared", "wait", "whence", "where", "which", "zcompile", "zformat", "zftp", "zle", "zmodload", "zparseopts", "zprof", "zpty", "zregexparse", "zsocket", "zstyle", "ztcp", "chcon", "chgrp", "chown", "chmod", "cp", "dd", "df", "dir", "dircolors", "ln", "ls", "mkdir", "mkfifo", "mknod", "mktemp", "mv", "realpath", "rm", "rmdir", "shred", "sync", "touch", "truncate", "vdir", "b2sum", "base32", "base64", "cat", "cksum", "comm", "csplit", "cut", "expand", "fmt", "fold", "head", "join", "md5sum", "nl", "numfmt", "od", "paste", "ptx", "pr", "sha1sum", "sha224sum", "sha256sum", "sha384sum", "sha512sum", "shuf", "sort", "split", "sum", "tac", "tail", "tr", "tsort", "unexpand", "uniq", "wc", "arch", "basename", "chroot", "date", "dirname", "du", "echo", "env", "expr", "factor", "groups", "hostid", "id", "link", "logname", "nice", "nohup", "nproc", "pathchk", "pinky", "printenv", "printf", "pwd", "readlink", "runcon", "seq", "sleep", "stat", "stdbuf", "stty", "tee", "test", "timeout", "tty", "uname", "unlink", "uptime", "users", "who", "whoami", "yes"]
        },
        contains: [r, e.SHEBANG(), l, o, e.HASH_COMMENT_MODE, i, {
          match: /(\/[a-z._-]+)+/
        }, c, {
          className: "",
          begin: /\\"/
        }, {
          className: "string",
          begin: /'/,
          end: /'/
        }, t]
      };
    };
  }();

  hljs.registerLanguage("bash", e);
})();
/*! `scss` grammar compiled for Highlight.js 11.5.1 */


(function () {
  var e = function () {
    "use strict";

    var e = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
        r = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
        i = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
        t = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
        o = ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "block-size", "border", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "content-visibility", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-block", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "scrollbar-color", "scrollbar-gutter", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "speak", "speak-as", "src", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"].reverse();
    return function (n) {
      var a = function (e) {
        return {
          IMPORTANT: {
            scope: "meta",
            begin: "!important"
          },
          BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
          HEXCOLOR: {
            scope: "number",
            begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
          },
          FUNCTION_DISPATCH: {
            className: "built_in",
            begin: /[\w-]+(?=\()/
          },
          ATTRIBUTE_SELECTOR_MODE: {
            scope: "selector-attr",
            begin: /\[/,
            end: /\]/,
            illegal: "$",
            contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
          },
          CSS_NUMBER_MODE: {
            scope: "number",
            begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0
          },
          CSS_VARIABLE: {
            className: "attr",
            begin: /--[A-Za-z][A-Za-z0-9_-]*/
          }
        };
      }(n),
          l = t,
          s = i,
          d = "@[a-z-]+",
          c = {
        className: "variable",
        begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b",
        relevance: 0
      };

      return {
        name: "SCSS",
        case_insensitive: !0,
        illegal: "[=/|']",
        contains: [n.C_LINE_COMMENT_MODE, n.C_BLOCK_COMMENT_MODE, a.CSS_NUMBER_MODE, {
          className: "selector-id",
          begin: "#[A-Za-z0-9_-]+",
          relevance: 0
        }, {
          className: "selector-class",
          begin: "\\.[A-Za-z0-9_-]+",
          relevance: 0
        }, a.ATTRIBUTE_SELECTOR_MODE, {
          className: "selector-tag",
          begin: "\\b(" + e.join("|") + ")\\b",
          relevance: 0
        }, {
          className: "selector-pseudo",
          begin: ":(" + s.join("|") + ")"
        }, {
          className: "selector-pseudo",
          begin: ":(:)?(" + l.join("|") + ")"
        }, c, {
          begin: /\(/,
          end: /\)/,
          contains: [a.CSS_NUMBER_MODE]
        }, a.CSS_VARIABLE, {
          className: "attribute",
          begin: "\\b(" + o.join("|") + ")\\b"
        }, {
          begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
        }, {
          begin: /:/,
          end: /[;}{]/,
          contains: [a.BLOCK_COMMENT, c, a.HEXCOLOR, a.CSS_NUMBER_MODE, n.QUOTE_STRING_MODE, n.APOS_STRING_MODE, a.IMPORTANT]
        }, {
          begin: "@(page|font-face)",
          keywords: {
            $pattern: d,
            keyword: "@page @font-face"
          }
        }, {
          begin: "@",
          end: "[{;]",
          returnBegin: !0,
          keywords: {
            $pattern: /[a-z-]+/,
            keyword: "and or not only",
            attribute: r.join(" ")
          },
          contains: [{
            begin: d,
            className: "keyword"
          }, {
            begin: /[a-z-]+(?=:)/,
            className: "attribute"
          }, c, n.QUOTE_STRING_MODE, n.APOS_STRING_MODE, a.HEXCOLOR, a.CSS_NUMBER_MODE]
        }, a.FUNCTION_DISPATCH]
      };
    };
  }();

  hljs.registerLanguage("scss", e);
})();
/*! `javascript` grammar compiled for Highlight.js 11.5.1 */


(function () {
  var e = function () {
    "use strict";

    var e = "[A-Za-z$_][0-9A-Za-z$_]*",
        n = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
        a = ["true", "false", "null", "undefined", "NaN", "Infinity"],
        t = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
        s = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
        r = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
        c = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
        i = [].concat(r, t, s);
    return function (o) {
      var l = o.regex,
          b = e,
          d = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: function isTrulyOpeningTag(e, n) {
          var a = e[0].length + e.index,
              t = e.input[a];
          if ("<" === t || "," === t) return void n.ignoreMatch();
          var s;
          ">" === t && (function (e, _ref8) {
            var n = _ref8.after;
            var a = "</" + e[0].slice(1);
            return -1 !== e.input.indexOf(a, n);
          }(e, {
            after: a
          }) || n.ignoreMatch()), (s = e.input.substr(a).match(/^\s+extends\s+/)) && 0 === s.index && n.ignoreMatch();
        }
      },
          g = {
        $pattern: e,
        keyword: n,
        literal: a,
        built_in: i,
        "variable.language": c
      },
          u = "\\.([0-9](_?[0-9])*)",
          m = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
          E = {
        className: "number",
        variants: [{
          begin: "(\\b(".concat(m, ")((").concat(u, ")|\\.)?|(").concat(u, "))[eE][+-]?([0-9](_?[0-9])*)\\b")
        }, {
          begin: "\\b(".concat(m, ")\\b((").concat(u, ")\\b|\\.)?|(").concat(u, ")\\b")
        }, {
          begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
        }, {
          begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
        }, {
          begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
        }, {
          begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
        }, {
          begin: "\\b0[0-7]+n?\\b"
        }],
        relevance: 0
      },
          A = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: g,
        contains: []
      },
          y = {
        begin: "html`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [o.BACKSLASH_ESCAPE, A],
          subLanguage: "xml"
        }
      },
          N = {
        begin: "css`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [o.BACKSLASH_ESCAPE, A],
          subLanguage: "css"
        }
      },
          _ = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [o.BACKSLASH_ESCAPE, A]
      },
          f = {
        className: "comment",
        variants: [o.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
          relevance: 0,
          contains: [{
            begin: "(?=@[A-Za-z]+)",
            relevance: 0,
            contains: [{
              className: "doctag",
              begin: "@[A-Za-z]+"
            }, {
              className: "type",
              begin: "\\{",
              end: "\\}",
              excludeEnd: !0,
              excludeBegin: !0,
              relevance: 0
            }, {
              className: "variable",
              begin: b + "(?=\\s*(-)|$)",
              endsParent: !0,
              relevance: 0
            }, {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }]
          }]
        }), o.C_BLOCK_COMMENT_MODE, o.C_LINE_COMMENT_MODE]
      },
          h = [o.APOS_STRING_MODE, o.QUOTE_STRING_MODE, y, N, _, E];
      A.contains = h.concat({
        begin: /\{/,
        end: /\}/,
        keywords: g,
        contains: ["self"].concat(h)
      });
      var v = [].concat(f, A.contains),
          p = v.concat([{
        begin: /\(/,
        end: /\)/,
        keywords: g,
        contains: ["self"].concat(v)
      }]),
          S = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: g,
        contains: p
      },
          w = {
        variants: [{
          match: [/class/, /\s+/, b, /\s+/, /extends/, /\s+/, l.concat(b, "(", l.concat(/\./, b), ")*")],
          scope: {
            1: "keyword",
            3: "title.class",
            5: "keyword",
            7: "title.class.inherited"
          }
        }, {
          match: [/class/, /\s+/, b],
          scope: {
            1: "keyword",
            3: "title.class"
          }
        }]
      },
          R = {
        relevance: 0,
        match: l.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
        className: "title.class",
        keywords: {
          _: [].concat(t, s)
        }
      },
          O = {
        variants: [{
          match: [/function/, /\s+/, b, /(?=\s*\()/]
        }, {
          match: [/function/, /\s*(?=\()/]
        }],
        className: {
          1: "keyword",
          3: "title.function"
        },
        label: "func.def",
        contains: [S],
        illegal: /%/
      },
          k = {
        match: l.concat(/\b/, (I = [].concat(r, ["super"]), l.concat("(?!", I.join("|"), ")")), b, l.lookahead(/\(/)),
        className: "title.function",
        relevance: 0
      };
      var I;
      var x = {
        begin: l.concat(/\./, l.lookahead(l.concat(b, /(?![0-9A-Za-z$_(])/))),
        end: b,
        excludeBegin: !0,
        keywords: "prototype",
        className: "property",
        relevance: 0
      },
          T = {
        match: [/get|set/, /\s+/, b, /(?=\()/],
        className: {
          1: "keyword",
          3: "title.function"
        },
        contains: [{
          begin: /\(\)/
        }, S]
      },
          C = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + o.UNDERSCORE_IDENT_RE + ")\\s*=>",
          M = {
        match: [/const|var|let/, /\s+/, b, /\s*/, /=\s*/, /(async\s*)?/, l.lookahead(C)],
        keywords: "async",
        className: {
          1: "keyword",
          3: "title.function"
        },
        contains: [S]
      };
      return {
        name: "Javascript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: g,
        exports: {
          PARAMS_CONTAINS: p,
          CLASS_REFERENCE: R
        },
        illegal: /#(?![$_A-z])/,
        contains: [o.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          begin: /^\s*['"]use (strict|asm)['"]/
        }, o.APOS_STRING_MODE, o.QUOTE_STRING_MODE, y, N, _, f, E, R, {
          className: "attr",
          begin: b + l.lookahead(":"),
          relevance: 0
        }, M, {
          begin: "(" + o.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [f, o.REGEXP_MODE, {
            className: "function",
            begin: C,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                begin: o.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                begin: /\(\s*\)/,
                skip: !0
              }, {
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: g,
                contains: p
              }]
            }]
          }, {
            begin: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              begin: "<>",
              end: "</>"
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              begin: d.begin,
              "on:begin": d.isTrulyOpeningTag,
              end: d.end
            }],
            subLanguage: "xml",
            contains: [{
              begin: d.begin,
              end: d.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, O, {
          beginKeywords: "while if switch catch for"
        }, {
          begin: "\\b(?!function)" + o.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [S, o.inherit(o.TITLE_MODE, {
            begin: b,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, x, {
          match: "\\$" + b,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [S]
        }, k, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, w, T, {
          match: /\$[(.]/
        }]
      };
    };
  }();

  hljs.registerLanguage("javascript", e);
})();
/*! `css` grammar compiled for Highlight.js 11.5.1 */


(function () {
  var e = function () {
    "use strict";

    var e = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
        i = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
        r = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
        t = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
        o = ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "block-size", "border", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "content-visibility", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-block", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "scrollbar-color", "scrollbar-gutter", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "speak", "speak-as", "src", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"].reverse();
    return function (n) {
      var a = n.regex,
          l = function (e) {
        return {
          IMPORTANT: {
            scope: "meta",
            begin: "!important"
          },
          BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
          HEXCOLOR: {
            scope: "number",
            begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
          },
          FUNCTION_DISPATCH: {
            className: "built_in",
            begin: /[\w-]+(?=\()/
          },
          ATTRIBUTE_SELECTOR_MODE: {
            scope: "selector-attr",
            begin: /\[/,
            end: /\]/,
            illegal: "$",
            contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
          },
          CSS_NUMBER_MODE: {
            scope: "number",
            begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0
          },
          CSS_VARIABLE: {
            className: "attr",
            begin: /--[A-Za-z][A-Za-z0-9_-]*/
          }
        };
      }(n),
          s = [n.APOS_STRING_MODE, n.QUOTE_STRING_MODE];

      return {
        name: "CSS",
        case_insensitive: !0,
        illegal: /[=|'\$]/,
        keywords: {
          keyframePosition: "from to"
        },
        classNameAliases: {
          keyframePosition: "selector-tag"
        },
        contains: [l.BLOCK_COMMENT, {
          begin: /-(webkit|moz|ms|o)-(?=[a-z])/
        }, l.CSS_NUMBER_MODE, {
          className: "selector-id",
          begin: /#[A-Za-z0-9_-]+/,
          relevance: 0
        }, {
          className: "selector-class",
          begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
          relevance: 0
        }, l.ATTRIBUTE_SELECTOR_MODE, {
          className: "selector-pseudo",
          variants: [{
            begin: ":(" + r.join("|") + ")"
          }, {
            begin: ":(:)?(" + t.join("|") + ")"
          }]
        }, l.CSS_VARIABLE, {
          className: "attribute",
          begin: "\\b(" + o.join("|") + ")\\b"
        }, {
          begin: /:/,
          end: /[;}{]/,
          contains: [l.BLOCK_COMMENT, l.HEXCOLOR, l.IMPORTANT, l.CSS_NUMBER_MODE].concat(s, [{
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            keywords: {
              built_in: "url data-uri"
            },
            contains: [{
              className: "string",
              begin: /[^)]/,
              endsWithParent: !0,
              excludeEnd: !0
            }]
          }, l.FUNCTION_DISPATCH])
        }, {
          begin: a.lookahead(/@/),
          end: "[{;]",
          relevance: 0,
          illegal: /:/,
          contains: [{
            className: "keyword",
            begin: /@-?\w[\w]*(-\w+)*/
          }, {
            begin: /\s/,
            endsWithParent: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: "and or not only",
              attribute: i.join(" ")
            },
            contains: [{
              begin: /[a-z-]+(?=:)/,
              className: "attribute"
            }].concat(s, [l.CSS_NUMBER_MODE])
          }]
        }, {
          className: "selector-tag",
          begin: "\\b(" + e.join("|") + ")\\b"
        }]
      };
    };
  }();

  hljs.registerLanguage("css", e);
})();
/*! `xml` grammar compiled for Highlight.js 11.5.1 */


(function () {
  var e = function () {
    "use strict";

    return function (e) {
      var a = e.regex,
          n = a.concat(/[A-Z_]/, a.optional(/[A-Z0-9_.-]*:/), /[A-Z0-9_.-]*/),
          s = {
        className: "symbol",
        begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
      },
          t = {
        begin: /\s/,
        contains: [{
          className: "keyword",
          begin: /#?[a-z_][a-z1-9_-]+/,
          illegal: /\n/
        }]
      },
          i = e.inherit(t, {
        begin: /\(/,
        end: /\)/
      }),
          c = e.inherit(e.APOS_STRING_MODE, {
        className: "string"
      }),
          l = e.inherit(e.QUOTE_STRING_MODE, {
        className: "string"
      }),
          r = {
        endsWithParent: !0,
        illegal: /</,
        relevance: 0,
        contains: [{
          className: "attr",
          begin: /[A-Za-z0-9._:-]+/,
          relevance: 0
        }, {
          begin: /=\s*/,
          relevance: 0,
          contains: [{
            className: "string",
            endsParent: !0,
            variants: [{
              begin: /"/,
              end: /"/,
              contains: [s]
            }, {
              begin: /'/,
              end: /'/,
              contains: [s]
            }, {
              begin: /[^\s"'=<>`]+/
            }]
          }]
        }]
      };
      return {
        name: "HTML, XML",
        aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
        case_insensitive: !0,
        contains: [{
          className: "meta",
          begin: /<![a-z]/,
          end: />/,
          relevance: 10,
          contains: [t, l, c, i, {
            begin: /\[/,
            end: /\]/,
            contains: [{
              className: "meta",
              begin: /<![a-z]/,
              end: />/,
              contains: [t, i, l, c]
            }]
          }]
        }, e.COMMENT(/<!--/, /-->/, {
          relevance: 10
        }), {
          begin: /<!\[CDATA\[/,
          end: /\]\]>/,
          relevance: 10
        }, s, {
          className: "meta",
          end: /\?>/,
          variants: [{
            begin: /<\?xml/,
            relevance: 10,
            contains: [l]
          }, {
            begin: /<\?[a-z][a-z0-9]+/
          }]
        }, {
          className: "tag",
          begin: /<style(?=\s|>)/,
          end: />/,
          keywords: {
            name: "style"
          },
          contains: [r],
          starts: {
            end: /<\/style>/,
            returnEnd: !0,
            subLanguage: ["css", "xml"]
          }
        }, {
          className: "tag",
          begin: /<script(?=\s|>)/,
          end: />/,
          keywords: {
            name: "script"
          },
          contains: [r],
          starts: {
            end: /<\/script>/,
            returnEnd: !0,
            subLanguage: ["javascript", "handlebars", "xml"]
          }
        }, {
          className: "tag",
          begin: /<>|<\/>/
        }, {
          className: "tag",
          begin: a.concat(/</, a.lookahead(a.concat(n, a.either(/\/>/, />/, /\s/)))),
          end: /\/?>/,
          contains: [{
            className: "name",
            begin: n,
            relevance: 0,
            starts: r
          }]
        }, {
          className: "tag",
          begin: a.concat(/<\//, a.lookahead(a.concat(n, />/))),
          contains: [{
            className: "name",
            begin: n,
            relevance: 0
          }, {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }]
        }]
      };
    };
  }();

  hljs.registerLanguage("xml", e);
})();
/*! `less` grammar compiled for Highlight.js 11.5.1 */


(function () {
  var e = function () {
    "use strict";

    var e = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
        t = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
        r = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
        i = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
        o = ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "block-size", "border", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "content-visibility", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-block", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "scrollbar-color", "scrollbar-gutter", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "speak", "speak-as", "src", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"].reverse(),
        n = r.concat(i);
    return function (a) {
      var l = function (e) {
        return {
          IMPORTANT: {
            scope: "meta",
            begin: "!important"
          },
          BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
          HEXCOLOR: {
            scope: "number",
            begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
          },
          FUNCTION_DISPATCH: {
            className: "built_in",
            begin: /[\w-]+(?=\()/
          },
          ATTRIBUTE_SELECTOR_MODE: {
            scope: "selector-attr",
            begin: /\[/,
            end: /\]/,
            illegal: "$",
            contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
          },
          CSS_NUMBER_MODE: {
            scope: "number",
            begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0
          },
          CSS_VARIABLE: {
            className: "attr",
            begin: /--[A-Za-z][A-Za-z0-9_-]*/
          }
        };
      }(a),
          s = n,
          d = "([\\w-]+|@\\{[\\w-]+\\})",
          c = [],
          g = [],
          b = function b(e) {
        return {
          className: "string",
          begin: "~?" + e + ".*?" + e
        };
      },
          m = function m(e, t, r) {
        return {
          className: e,
          begin: t,
          relevance: r
        };
      },
          p = {
        $pattern: /[a-z-]+/,
        keyword: "and or not only",
        attribute: t.join(" ")
      },
          u = {
        begin: "\\(",
        end: "\\)",
        contains: g,
        keywords: p,
        relevance: 0
      };

      g.push(a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, b("'"), b('"'), l.CSS_NUMBER_MODE, {
        begin: "(url|data-uri)\\(",
        starts: {
          className: "string",
          end: "[\\)\\n]",
          excludeEnd: !0
        }
      }, l.HEXCOLOR, u, m("variable", "@@?[\\w-]+", 10), m("variable", "@\\{[\\w-]+\\}"), m("built_in", "~?`[^`]*?`"), {
        className: "attribute",
        begin: "[\\w-]+\\s*:",
        end: ":",
        returnBegin: !0,
        excludeEnd: !0
      }, l.IMPORTANT);
      var h = g.concat({
        begin: /\{/,
        end: /\}/,
        contains: c
      }),
          f = {
        beginKeywords: "when",
        endsWithParent: !0,
        contains: [{
          beginKeywords: "and not"
        }].concat(g)
      },
          k = {
        begin: d + "\\s*:",
        returnBegin: !0,
        end: /[;}]/,
        relevance: 0,
        contains: [{
          begin: /-(webkit|moz|ms|o)-/
        }, l.CSS_VARIABLE, {
          className: "attribute",
          begin: "\\b(" + o.join("|") + ")\\b",
          end: /(?=:)/,
          starts: {
            endsWithParent: !0,
            illegal: "[<=$]",
            relevance: 0,
            contains: g
          }
        }]
      },
          w = {
        className: "keyword",
        begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
        starts: {
          end: "[;{}]",
          keywords: p,
          returnEnd: !0,
          contains: g,
          relevance: 0
        }
      },
          v = {
        className: "variable",
        variants: [{
          begin: "@[\\w-]+\\s*:",
          relevance: 15
        }, {
          begin: "@[\\w-]+"
        }],
        starts: {
          end: "[;}]",
          returnEnd: !0,
          contains: h
        }
      },
          y = {
        variants: [{
          begin: "[\\.#:&\\[>]",
          end: "[;{}]"
        }, {
          begin: d,
          end: /\{/
        }],
        returnBegin: !0,
        returnEnd: !0,
        illegal: "[<='$\"]",
        relevance: 0,
        contains: [a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, f, m("keyword", "all\\b"), m("variable", "@\\{[\\w-]+\\}"), {
          begin: "\\b(" + e.join("|") + ")\\b",
          className: "selector-tag"
        }, l.CSS_NUMBER_MODE, m("selector-tag", d, 0), m("selector-id", "#" + d), m("selector-class", "\\." + d, 0), m("selector-tag", "&", 0), l.ATTRIBUTE_SELECTOR_MODE, {
          className: "selector-pseudo",
          begin: ":(" + r.join("|") + ")"
        }, {
          className: "selector-pseudo",
          begin: ":(:)?(" + i.join("|") + ")"
        }, {
          begin: /\(/,
          end: /\)/,
          relevance: 0,
          contains: h
        }, {
          begin: "!important"
        }, l.FUNCTION_DISPATCH]
      },
          x = {
        begin: "[\\w-]+:(:)?(".concat(s.join("|"), ")"),
        returnBegin: !0,
        contains: [y]
      };
      return c.push(a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, w, v, x, k, y), {
        name: "Less",
        case_insensitive: !0,
        illegal: "[=>'/<($\"]",
        contains: c
      };
    };
  }();

  hljs.registerLanguage("less", e);
})();
/*! `markdown` grammar compiled for Highlight.js 11.5.1 */


(function () {
  var e = function () {
    "use strict";

    return function (e) {
      var n = {
        begin: /<\/?[A-Za-z_]/,
        end: ">",
        subLanguage: "xml",
        relevance: 0
      },
          a = {
        variants: [{
          begin: /\[.+?\]\[.*?\]/,
          relevance: 0
        }, {
          begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
          relevance: 2
        }, {
          begin: e.regex.concat(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
          relevance: 2
        }, {
          begin: /\[.+?\]\([./?&#].*?\)/,
          relevance: 1
        }, {
          begin: /\[.*?\]\(.*?\)/,
          relevance: 0
        }],
        returnBegin: !0,
        contains: [{
          match: /\[(?=\])/
        }, {
          className: "string",
          relevance: 0,
          begin: "\\[",
          end: "\\]",
          excludeBegin: !0,
          returnEnd: !0
        }, {
          className: "link",
          relevance: 0,
          begin: "\\]\\(",
          end: "\\)",
          excludeBegin: !0,
          excludeEnd: !0
        }, {
          className: "symbol",
          relevance: 0,
          begin: "\\]\\[",
          end: "\\]",
          excludeBegin: !0,
          excludeEnd: !0
        }]
      },
          i = {
        className: "strong",
        contains: [],
        variants: [{
          begin: /_{2}/,
          end: /_{2}/
        }, {
          begin: /\*{2}/,
          end: /\*{2}/
        }]
      },
          s = {
        className: "emphasis",
        contains: [],
        variants: [{
          begin: /\*(?!\*)/,
          end: /\*/
        }, {
          begin: /_(?!_)/,
          end: /_/,
          relevance: 0
        }]
      },
          c = e.inherit(i, {
        contains: []
      }),
          t = e.inherit(s, {
        contains: []
      });
      i.contains.push(t), s.contains.push(c);
      var g = [n, a];
      return [i, s, c, t].forEach(function (e) {
        e.contains = e.contains.concat(g);
      }), g = g.concat(i, s), {
        name: "Markdown",
        aliases: ["md", "mkdown", "mkd"],
        contains: [{
          className: "section",
          variants: [{
            begin: "^#{1,6}",
            end: "$",
            contains: g
          }, {
            begin: "(?=^.+?\\n[=-]{2,}$)",
            contains: [{
              begin: "^[=-]*$"
            }, {
              begin: "^",
              end: "\\n",
              contains: g
            }]
          }]
        }, n, {
          className: "bullet",
          begin: "^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
          end: "\\s+",
          excludeEnd: !0
        }, i, s, {
          className: "quote",
          begin: "^>\\s+",
          contains: g,
          end: "$"
        }, {
          className: "code",
          variants: [{
            begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"
          }, {
            begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
          }, {
            begin: "```",
            end: "```+[ ]*$"
          }, {
            begin: "~~~",
            end: "~~~+[ ]*$"
          }, {
            begin: "`.+?`"
          }, {
            begin: "(?=^( {4}|\\t))",
            contains: [{
              begin: "^( {4}|\\t)",
              end: "(\\n)$"
            }],
            relevance: 0
          }]
        }, {
          begin: "^[-\\*]{3,}",
          end: "$"
        }, a, {
          begin: /^\[[^\n]+\]:/,
          returnBegin: !0,
          contains: [{
            className: "symbol",
            begin: /\[/,
            end: /\]/,
            excludeBegin: !0,
            excludeEnd: !0
          }, {
            className: "link",
            begin: /:\s*/,
            end: /$/,
            excludeBegin: !0
          }]
        }]
      };
    };
  }();

  hljs.registerLanguage("markdown", e);
})();
/*! `json` grammar compiled for Highlight.js 11.5.1 */


(function () {
  var e = function () {
    "use strict";

    return function (e) {
      return {
        name: "JSON",
        contains: [{
          className: "attr",
          begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
          relevance: 1.01
        }, {
          match: /[{}[\],:]/,
          className: "punctuation",
          relevance: 0
        }, e.QUOTE_STRING_MODE, {
          beginKeywords: "true false null"
        }, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
        illegal: "\\S"
      };
    };
  }();

  hljs.registerLanguage("json", e);
})();
},{}],"C:/Users/admin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51497" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/admin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","highlight/highlight.min.js"], null)
//# sourceMappingURL=/highlight.min.cbf00ac7.js.map