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
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-Black.woff2":[["Poppins-Black.675d4225.woff2","assets/fonts/Poppins-Black.woff2"],"assets/fonts/Poppins-Black.woff2"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-Black.woff":[["Poppins-Black.a57609f1.woff","assets/fonts/Poppins-Black.woff"],"assets/fonts/Poppins-Black.woff"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-BlackItalic.woff2":[["Poppins-BlackItalic.6017185a.woff2","assets/fonts/Poppins-BlackItalic.woff2"],"assets/fonts/Poppins-BlackItalic.woff2"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-BlackItalic.woff":[["Poppins-BlackItalic.1d529b06.woff","assets/fonts/Poppins-BlackItalic.woff"],"assets/fonts/Poppins-BlackItalic.woff"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-Bold.woff2":[["Poppins-Bold.15cfa799.woff2","assets/fonts/Poppins-Bold.woff2"],"assets/fonts/Poppins-Bold.woff2"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-Bold.woff":[["Poppins-Bold.c7576daf.woff","assets/fonts/Poppins-Bold.woff"],"assets/fonts/Poppins-Bold.woff"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-ExtraLightItalic.woff2":[["Poppins-ExtraLightItalic.4f8dd754.woff2","assets/fonts/Poppins-ExtraLightItalic.woff2"],"assets/fonts/Poppins-ExtraLightItalic.woff2"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-ExtraLightItalic.woff":[["Poppins-ExtraLightItalic.626dea30.woff","assets/fonts/Poppins-ExtraLightItalic.woff"],"assets/fonts/Poppins-ExtraLightItalic.woff"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-BoldItalic.woff2":[["Poppins-BoldItalic.9873d68b.woff2","assets/fonts/Poppins-BoldItalic.woff2"],"assets/fonts/Poppins-BoldItalic.woff2"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-BoldItalic.woff":[["Poppins-BoldItalic.b70cab82.woff","assets/fonts/Poppins-BoldItalic.woff"],"assets/fonts/Poppins-BoldItalic.woff"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-ExtraBoldItalic.woff2":[["Poppins-ExtraBoldItalic.0dea5aac.woff2","assets/fonts/Poppins-ExtraBoldItalic.woff2"],"assets/fonts/Poppins-ExtraBoldItalic.woff2"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-ExtraBoldItalic.woff":[["Poppins-ExtraBoldItalic.217cb6c8.woff","assets/fonts/Poppins-ExtraBoldItalic.woff"],"assets/fonts/Poppins-ExtraBoldItalic.woff"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-ExtraBold.woff2":[["Poppins-ExtraBold.2c6170aa.woff2","assets/fonts/Poppins-ExtraBold.woff2"],"assets/fonts/Poppins-ExtraBold.woff2"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-ExtraBold.woff":[["Poppins-ExtraBold.fa6715c1.woff","assets/fonts/Poppins-ExtraBold.woff"],"assets/fonts/Poppins-ExtraBold.woff"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-Italic.woff2":[["Poppins-Italic.2243f62c.woff2","assets/fonts/Poppins-Italic.woff2"],"assets/fonts/Poppins-Italic.woff2"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-Italic.woff":[["Poppins-Italic.9fd56ab5.woff","assets/fonts/Poppins-Italic.woff"],"assets/fonts/Poppins-Italic.woff"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-ExtraLight.woff2":[["Poppins-ExtraLight.6d22688d.woff2","assets/fonts/Poppins-ExtraLight.woff2"],"assets/fonts/Poppins-ExtraLight.woff2"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-ExtraLight.woff":[["Poppins-ExtraLight.2d3d6899.woff","assets/fonts/Poppins-ExtraLight.woff"],"assets/fonts/Poppins-ExtraLight.woff"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-LightItalic.woff2":[["Poppins-LightItalic.24d5d3a0.woff2","assets/fonts/Poppins-LightItalic.woff2"],"assets/fonts/Poppins-LightItalic.woff2"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-LightItalic.woff":[["Poppins-LightItalic.5b2557f3.woff","assets/fonts/Poppins-LightItalic.woff"],"assets/fonts/Poppins-LightItalic.woff"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-Medium.woff2":[["Poppins-Medium.e80e4ead.woff2","assets/fonts/Poppins-Medium.woff2"],"assets/fonts/Poppins-Medium.woff2"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-Medium.woff":[["Poppins-Medium.3429d1c1.woff","assets/fonts/Poppins-Medium.woff"],"assets/fonts/Poppins-Medium.woff"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-Regular.woff2":[["Poppins-Regular.8d22ceaf.woff2","assets/fonts/Poppins-Regular.woff2"],"assets/fonts/Poppins-Regular.woff2"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-Regular.woff":[["Poppins-Regular.38583d08.woff","assets/fonts/Poppins-Regular.woff"],"assets/fonts/Poppins-Regular.woff"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-SemiBold.woff2":[["Poppins-SemiBold.9a68dc7e.woff2","assets/fonts/Poppins-SemiBold.woff2"],"assets/fonts/Poppins-SemiBold.woff2"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-SemiBold.woff":[["Poppins-SemiBold.cb048442.woff","assets/fonts/Poppins-SemiBold.woff"],"assets/fonts/Poppins-SemiBold.woff"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-Light.woff2":[["Poppins-Light.9e6a7a85.woff2","assets/fonts/Poppins-Light.woff2"],"assets/fonts/Poppins-Light.woff2"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-Light.woff":[["Poppins-Light.88a0b39d.woff","assets/fonts/Poppins-Light.woff"],"assets/fonts/Poppins-Light.woff"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-MediumItalic.woff2":[["Poppins-MediumItalic.6794f99f.woff2","assets/fonts/Poppins-MediumItalic.woff2"],"assets/fonts/Poppins-MediumItalic.woff2"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-MediumItalic.woff":[["Poppins-MediumItalic.be5dc01a.woff","assets/fonts/Poppins-MediumItalic.woff"],"assets/fonts/Poppins-MediumItalic.woff"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-ThinItalic.woff2":[["Poppins-ThinItalic.784eda51.woff2","assets/fonts/Poppins-ThinItalic.woff2"],"assets/fonts/Poppins-ThinItalic.woff2"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-ThinItalic.woff":[["Poppins-ThinItalic.f98bacfa.woff","assets/fonts/Poppins-ThinItalic.woff"],"assets/fonts/Poppins-ThinItalic.woff"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-Thin.woff2":[["Poppins-Thin.20842fb2.woff2","assets/fonts/Poppins-Thin.woff2"],"assets/fonts/Poppins-Thin.woff2"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-Thin.woff":[["Poppins-Thin.caa80919.woff","assets/fonts/Poppins-Thin.woff"],"assets/fonts/Poppins-Thin.woff"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-SemiBoldItalic.woff2":[["Poppins-SemiBoldItalic.78fa5fff.woff2","assets/fonts/Poppins-SemiBoldItalic.woff2"],"assets/fonts/Poppins-SemiBoldItalic.woff2"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\fonts\\Poppins-SemiBoldItalic.woff":[["Poppins-SemiBoldItalic.c2958d24.woff","assets/fonts/Poppins-SemiBoldItalic.woff"],"assets/fonts/Poppins-SemiBoldItalic.woff"],"C:\\Users\\Jan\\Documents\\Web Design\\WEB PROJECTS\\Weather v2\\src\\assets\\img\\default.jpg":[["default.33eaceea.jpg","assets/img/default.jpg"],"assets/img/default.jpg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/main.js":[function(require,module,exports) {
"use strict";

require("./../scss/main.scss");
},{"./../scss/main.scss":"scss/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59574" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map