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
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n#deom1 *{padding: 0;margin: 0; box-sizing: border-box;}\n#deom1 *::after,#deom1 *::before{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n.Pickup{\n    position: relative;\n    width:100%;\n    height:100%;\n    background: #FFE600;\n}\n\n.Pickup .mose{\n    border: 8px solid #000;\n    border-color: #000 transparent transparent;\n    border-bottom: none;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -5px;\n    margin-top: -4px;\n}\n.Pickup .mose::before{\n    content: \" \";\n    display: block;\n    width: 16px;\n    height: 6px;\n    position: absolute;\n    top: -14px;\n    left: -8px;\n    border-radius: 50% 50% 0 0;\n    background: #000;\n}\n.Pickup .eye{\n    border: 1px solid black;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -32px;\n    margin-top: -32px;\n    border-radius: 50%;\n    background: #2e2e2e;\n}\n.Pickup >  .eye.left{\n    transform: translateX(-100PX);\n}\n.Pickup > .eye.right{\n    transform: translateX(100PX);\n}\n.Pickup .eye::before{\n    content: \" \";\n    display: block;\n    border: 1px solid #000;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    position: absolute;\n    top: 0;\n    left: 10px;\n    background: #fff;\n}\n.Pickup .mouth{\n    width: 200px;\n    height: 150px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -100px;\n    margin-top: 30px;\n}\n.Pickup .mouth .lipsTop .yuan{\n    border: 3px solid #000;\n    border-color: transparent transparent #000 #000;\n    width: 80px;\n    height: 20px;\n    position: absolute;\n    border-radius: 0 0 50% 50%;\n    left: 50%;\n    background: #FFE600;\n    z-index: 10;\n}\n.Pickup .mouth .lipsTop .left{\n  margin-left: -72px;\n  transform: rotate(-20deg);\n\n}\n.Pickup .mouth .lipsTop .right{\n    border-color: transparent  #000  #000 transparent;\n    transform: rotate(20deg);\n    margin-left: -6px;\n}\n.Pickup .mouth .lipsTop .yuan::before{\n    content: \" \";\n    display: block;\n    width: 80px;\n    height: 20px;\n    position: absolute;\n    top: -20px;\n    background: #FFE600;\n}\n.Pickup .mouth .wlipsBot{\n    height: 150px;\n    width: 140px;\n    position: absolute;\n    left: 50%;\n    bottom: 0;\n    margin-left: -70px;\n    overflow: hidden;\n}\n.Pickup .mouth  .lipsBot{\n    width: 140px;\n    height: 300px;\n    border: 2px solid #000;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -70px;\n    border-radius: 72px / 150px;\n    background:  #9b000a;\n    overflow: hidden;\n}\n.Pickup .mouth  .lipsBot::after{\n    content: \" \";\n    display: block;\n    width: 140px;\n    height: 100px;\n    position: absolute;\n    bottom: 0;\n    border-radius: 50% 50% 0 0;\n    background: #FF485F;\n} \n.Pickup .ball{\n    width: 80px;\n    height: 80px;\n    border: 2px solid #000;\n    position: absolute;\n    left:  50%;\n    top: 50%;\n    margin-left: -40px;\n    margin-top: 60px;\n    border-radius: 50%;\n    background: #F00;\n}\n.Pickup .ball.left{\n    transform: translateX(-150px);\n\n}\n.Pickup .ball.right{\n    transform: translateX(150px);\n\n}";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(marked.marked);
var bofang = {
  id: undefined,
  timt: 100,
  ul: {
    deom1: document.querySelector("#deom1 pre code"),
    deom2: document.querySelector("#deom2"),
    deom3: document.querySelector("#deom1")
  },
  n: 1,
  init: function init() {
    bofang.ul.deom1.innerHTML = _css.default.substring(0, bofang.n);
    bofang.ul.deom2.innerHTML = _css.default.substring(0, bofang.n);
    bofang.play1();
    bofang.onc();
  },
  bo: function bo() {
    bofang.n += 1;

    if (bofang.n > _css.default.length) {
      clearInterval(bofang.id);
      return;
    }

    console.log(_css.default.substring(0, bofang.n));
    bofang.ul.deom1.innerHTML = _css.default.substring(0, bofang.n);
    bofang.ul.deom2.innerHTML = _css.default.substring(0, bofang.n);
    hljs.highlightAll();
    bofang.ul.deom3.scrollTop = 9999;
  },
  play1: function play1() {
    bofang.id = setInterval(bofang.bo, bofang.time);
  },
  evens: {
    "#tsop": "rm",
    "#play": "play1",
    "#Slow": "m",
    "#speed": "z",
    "#fast": "k"
  },
  onc: function onc() {
    for (var key in bofang.evens) {
      if (bofang.evens.hasOwnProperty(key)) {
        var value = bofang.evens[key];
        document.querySelector(key).onclick = bofang[value];
      }
    }
  },
  rm: function rm() {
    window.clearInterval(bofang.id);
  },
  m: function m() {
    bofang.rm();
    bofang.time = 200;
    bofang.play1();
  },
  z: function z() {
    bofang.rm();
    bofang.time = 100;
    bofang.play1();
  },
  k: function k() {
    bofang.rm();
    bofang.time = 0;
    bofang.play1();
  }
};
bofang.init();
},{"./css":"css.js"}],"C:/Users/admin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["C:/Users/admin/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map