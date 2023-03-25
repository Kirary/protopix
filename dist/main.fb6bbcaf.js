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
})({"node_modules/@vkontakte/vk-bridge/dist/index.umd.js":[function(require,module,exports) {
var define;
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).vkBridge={})}(this,function(e){"use strict";var a=function(){return(a=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)};function d(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var o=Array(e),r=0;for(n=0;n<t;n++)for(var p=arguments[n],i=0,a=p.length;i<a;i++,r++)o[r]=p[i];return o}function u(p,e){var o,r,i=(o={current:0,next:function(){return++this.current}},r={},{add:function(e,n){var t=null!=n?n:o.next();return r[t]=e,t},resolve:function(e,n,t){var o=r[e];o&&(t(n)?o.resolve(n):o.reject(n),r[e]=null)}});return e(function(e){if(e.detail&&e.detail.data&&"object"==typeof e.detail.data&&"request_id"in e.detail.data){var n=e.detail.data,t=n.request_id,o=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t}(n,["request_id"]);t&&i.resolve(t,o,function(e){return!("error_type"in e)})}}),function(o,r){return void 0===r&&(r={}),new Promise(function(e,n){var t=i.add({resolve:e,reject:n},r.request_id);p(o,a(a({},r),{request_id:t}))})}}var n="undefined"!=typeof window,l=Boolean(n&&window.AndroidBridge),b=Boolean(n&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),c=Boolean(n&&window.ReactNativeWebView&&"function"==typeof window.ReactNativeWebView.postMessage),f=n&&!l&&!b,t=f&&/(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),A=f?"message":"VKWebAppEvent",W=d(["VKWebAppInit","VKWebAppGetCommunityAuthToken","VKWebAppAddToCommunity","VKWebAppAddToHomeScreenInfo","VKWebAppClose","VKWebAppCopyText","VKWebAppCreateHash","VKWebAppGetUserInfo","VKWebAppSetLocation","VKWebAppSendToClient","VKWebAppGetClientVersion","VKWebAppGetPhoneNumber","VKWebAppGetEmail","VKWebAppGetGroupInfo","VKWebAppGetGeodata","VKWebAppGetCommunityToken","VKWebAppGetConfig","VKWebAppGetLaunchParams","VKWebAppSetTitle","VKWebAppGetAuthToken","VKWebAppCallAPIMethod","VKWebAppJoinGroup","VKWebAppLeaveGroup","VKWebAppAllowMessagesFromGroup","VKWebAppDenyNotifications","VKWebAppAllowNotifications","VKWebAppOpenPayForm","VKWebAppOpenApp","VKWebAppShare","VKWebAppShowWallPostBox","VKWebAppScroll","VKWebAppShowOrderBox","VKWebAppShowLeaderBoardBox","VKWebAppShowInviteBox","VKWebAppShowRequestBox","VKWebAppAddToFavorites","VKWebAppShowStoryBox","VKWebAppStorageGet","VKWebAppStorageGetKeys","VKWebAppStorageSet","VKWebAppFlashGetInfo","VKWebAppSubscribeStoryApp","VKWebAppOpenWallPost","VKWebAppCheckAllowedScopes","VKWebAppCheckNativeAds","VKWebAppShowNativeAds","VKWebAppRetargetingPixel","VKWebAppConversionHit","VKWebAppShowSubscriptionBox","VKWebAppCheckSurvey","VKWebAppShowSurvey","VKWebAppScrollTop","VKWebAppScrollTopStart","VKWebAppScrollTopStop"],f&&!t?["VKWebAppResizeWindow","VKWebAppAddToMenu","VKWebAppShowInstallPushBox","VKWebAppGetFriends","VKWebAppShowCommunityWidgetPreviewBox"]:["VKWebAppShowImages"]),V=n?window.AndroidBridge:void 0,K=b?window.webkit.messageHandlers:void 0,w=f?parent:void 0;var o,r,p,i,s;(o=e.EAdsFormats||(e.EAdsFormats={})).REWARD="reward",o.INTERSTITIAL="interstitial",(r=e.EGrantedPermission||(e.EGrantedPermission={})).CAMERA="camera",r.LOCATION="location",r.PHOTO="photo",(p=e.EGetLaunchParamsResponseLanguages||(e.EGetLaunchParamsResponseLanguages={})).RU="ru",p.UK="uk",p.UA="ua",p.EN="en",p.BE="be",p.KZ="kz",p.PT="pt",p.ES="es",(i=e.EGetLaunchParamsResponseGroupRole||(e.EGetLaunchParamsResponseGroupRole={})).ADMIN="admin",i.EDITOR="editor",i.MEMBER="member",i.MODER="moder",i.NONE="none",(s=e.EGetLaunchParamsResponsePlatforms||(e.EGetLaunchParamsResponsePlatforms={})).DESKTOP_WEB="desktop_web",s.MOBILE_WEB="mobile_web",s.MOBILE_ANDROID="mobile_android",s.MOBILE_ANDROID_MESSENGER="mobile_android_messenger",s.MOBILE_IPHONE="mobile_iphone",s.MOBILE_IPHONE_MESSENGER="mobile_iphone_messenger",s.MOBILE_IPAD="mobile_ipad";var m=function(t){var p=void 0,i=[];function e(e){i.push(e)}function n(){return b||l}function o(){return f&&window.parent!==window}function r(){return n()||o()}function a(n){if(b||l)return d(i).map(function(e){return e.call(null,n)});var e=null==n?void 0:n.data;if(f&&e){if(c&&"string"==typeof e)try{e=JSON.parse(e)}catch(e){}var t=e.type,o=e.data,r=e.frameId;t&&("SetSupportedHandlers"!==t?"VKWebAppSettings"!==t?d(i).map(function(e){return e({detail:{type:t,data:o}})}):p=r:o.supportedHandlers)}}c&&/(android)/i.test(navigator.userAgent)?document.addEventListener(A,a):"undefined"!=typeof window&&"addEventListener"in window&&window.addEventListener(A,a);var s=u(function(e,n){V&&V[e]?V[e](JSON.stringify(n)):K&&K[e]&&"function"==typeof K[e].postMessage?K[e].postMessage(n):c?window.ReactNativeWebView.postMessage(JSON.stringify({handler:e,params:n})):w&&"function"==typeof w.postMessage&&w.postMessage({handler:e,params:n,type:"vk-connect",webFrameId:p,connectVersion:t},"*")},e);return{send:s,sendPromise:s,subscribe:e,unsubscribe:function(e){var n=i.indexOf(e);-1<n&&i.splice(n,1)},supports:function(e){return l?!(!V||"function"!=typeof V[e]):b?!(!K||!K[e]||"function"!=typeof K[e].postMessage):f&&-1<W.indexOf(e)},isWebView:n,isIframe:o,isEmbedded:r,isStandalone:function(){return!r()}}}("2.7.2");e.applyMiddleware=function e(){for(var o=[],n=0;n<arguments.length;n++)o[n]=arguments[n];return o.includes(void 0)||o.includes(null)?e.apply(void 0,o.filter(function(e){return"function"==typeof e})):function(t){if(0===o.length)return t;var e,n={subscribe:t.subscribe,send:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.send.apply(t,e)}};return e=o.filter(function(e){return"function"==typeof e}).map(function(e){return e(n)}).reduce(function(n,t){return function(e){return n(t(e))}})(t.send),a(a({},t),{send:e})}},e.default=m,Object.defineProperty(e,"__esModule",{value:!0})});


},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _vkBridge = _interopRequireDefault(require("@vkontakte/vk-bridge"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
console.log("start");
_vkBridge.default.send("VKWebAppInit", {}).then(function (res) {
  console.log("VKWebAppInit:", res);
}).catch(function (reason) {
  console.log("VKWebAppInitCatch", reason);
});
console.log("after bridge");
},{"@vkontakte/vk-bridge":"node_modules/@vkontakte/vk-bridge/dist/index.umd.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "9337" + '/');
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
      });

      // Enable HMR for CSS by default.
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map