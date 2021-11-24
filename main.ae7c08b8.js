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
})({"xMOE":[function(require,module,exports) {
module.exports = "/stay.83bee543.png";
},{}],"LU2R":[function(require,module,exports) {
module.exports = "/0.c9db0d9f.png";
},{}],"Gmbh":[function(require,module,exports) {
module.exports = "/1.6b91264e.png";
},{}],"XNnF":[function(require,module,exports) {
module.exports = "/2.0c34fc70.png";
},{}],"Xxn6":[function(require,module,exports) {
module.exports = "/robot-stay.331f772c.png";
},{}],"Qntg":[function(require,module,exports) {
module.exports = "/stone.2ff7e249.png";
},{}],"KP9j":[function(require,module,exports) {
module.exports = "/stony-ground.acbbc003.png";
},{}],"EsJD":[function(require,module,exports) {
module.exports = "/basalt.4d5e1160.png";
},{}],"m5Mc":[function(require,module,exports) {
module.exports = "/deep-stone.1a0cea32.png";
},{}],"yhR6":[function(require,module,exports) {
module.exports = "/burnt-basalt.e556a07f.png";
},{}],"zgKj":[function(require,module,exports) {
module.exports = "/destrony.447daaed.png";
},{}],"pf9J":[function(require,module,exports) {
module.exports = "/manty.1308789e.png";
},{}],"y0PF":[function(require,module,exports) {
module.exports = "/cracked-stone.bdc7e15a.png";
},{}],"FU7E":[function(require,module,exports) {
module.exports = "/cidium.8f5094f6.png";
},{}],"Zvcg":[function(require,module,exports) {
module.exports = "/osmy.522ecac7.png";
},{}],"balx":[function(require,module,exports) {
module.exports = "/antin.f3461fe6.png";
},{}],"DTH9":[function(require,module,exports) {
module.exports = "/rady.cccaf8d0.png";
},{}],"jfHw":[function(require,module,exports) {
module.exports = "/nerius.94508fe9.png";
},{}],"DgoW":[function(require,module,exports) {
module.exports = "/raw-cidium.ee0ee85b.png";
},{}],"DJ58":[function(require,module,exports) {
module.exports = "/raw-grade-cidium.cf6253b5.png";
},{}],"mpJt":[function(require,module,exports) {
module.exports = "/raw-osmy.0f93e6fc.png";
},{}],"ZWGs":[function(require,module,exports) {
module.exports = "/raw-antin.289b1625.png";
},{}],"SrSE":[function(require,module,exports) {
module.exports = "/raw-rady.6464a5a4.png";
},{}],"ceSm":[function(require,module,exports) {
module.exports = "/raw-nerius.489775a7.png";
},{}],"h5i8":[function(require,module,exports) {
module.exports = "/raw-manty.8df5e986.png";
},{}],"aLvf":[function(require,module,exports) {
module.exports = "/ground.2cd66609.png";
},{}],"Q6m3":[function(require,module,exports) {
module.exports = "/dome.a3a288e1.png";
},{}],"G9tz":[function(require,module,exports) {
module.exports = "/gear-storage-1.aa0bd2ce.png";
},{}],"FBe0":[function(require,module,exports) {
module.exports = "/gear-recycler-1.76952c71.png";
},{}],"j56s":[function(require,module,exports) {
module.exports = "/gear-storage-1-outline.366ec21b.png";
},{}],"fxXd":[function(require,module,exports) {
module.exports = "/gear-recycler-1-outline.8cabe033.png";
},{}],"y1NG":[function(require,module,exports) {
module.exports = "/interact.31e5b69d.png";
},{}],"rLvC":[function(require,module,exports) {
module.exports = "/close.31e3f28b.png";
},{}],"R1BN":[function(require,module,exports) {
module.exports = "/button.0edde46a.png";
},{}],"omch":[function(require,module,exports) {
module.exports = "/tools.4c5ff619.png";
},{}],"arpR":[function(require,module,exports) {
module.exports = "/bottle.c341300c.png";
},{}],"nxFT":[function(require,module,exports) {
module.exports = "/damage.fda04f1c.png";
},{}],"L4Si":[function(require,module,exports) {
module.exports = "/level-up.5e70abd7.png";
},{}],"l1xg":[function(require,module,exports) {
module.exports = "/storage-ui.dc7165ba.png";
},{}],"noxU":[function(require,module,exports) {
module.exports = "/recycler-ui.4401c491.png";
},{}],"rqZe":[function(require,module,exports) {
module.exports = "/description-ui.84d164ee.png";
},{}],"mhX9":[function(require,module,exports) {
module.exports = "/stone-hit.0ffe4d73.mp3";
},{}],"mlWp":[function(require,module,exports) {
module.exports = "/stone-break.7fa1015f.mp3";
},{}],"Js59":[function(require,module,exports) {
module.exports = "/1.c194776b.mp3";
},{}],"z5Ql":[function(require,module,exports) {
module.exports = "/2.edf8b100.mp3";
},{}],"Y3GC":[function(require,module,exports) {
module.exports = "/3.7a188545.mp3";
},{}],"xygE":[function(require,module,exports) {
module.exports = "/storage.b5dfc3de.mp3";
},{}],"d4NI":[function(require,module,exports) {
module.exports = "/store.605eab52.mp3";
},{}],"JxEU":[function(require,module,exports) {
module.exports = "/craft.a5e086cb.mp3";
},{}],"ibCN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAssets = initAssets;

var _stay = _interopRequireDefault(require("../../images/player/stay.png"));

var _ = _interopRequireDefault(require("../../images/player/walk/0.png"));

var _2 = _interopRequireDefault(require("../../images/player/walk/1.png"));

var _3 = _interopRequireDefault(require("../../images/player/walk/2.png"));

var _robotStay = _interopRequireDefault(require("../../images/entities/robot/robot-stay.png"));

var _stone = _interopRequireDefault(require("../../images/ores/stone.png"));

var _stonyGround = _interopRequireDefault(require("../../images/ores/stony-ground.png"));

var _basalt = _interopRequireDefault(require("../../images/ores/basalt.png"));

var _deepStone = _interopRequireDefault(require("../../images/ores/deep-stone.png"));

var _burntBasalt = _interopRequireDefault(require("../../images/ores/burnt-basalt.png"));

var _destrony = _interopRequireDefault(require("../../images/ores/destrony.png"));

var _manty = _interopRequireDefault(require("../../images/ores/manty.png"));

var _crackedStone = _interopRequireDefault(require("../../images/ores/cracked-stone.png"));

var _cidium = _interopRequireDefault(require("../../images/ores/cidium.png"));

var _osmy = _interopRequireDefault(require("../../images/ores/osmy.png"));

var _antin = _interopRequireDefault(require("../../images/ores/antin.png"));

var _rady = _interopRequireDefault(require("../../images/ores/rady.png"));

var _nerius = _interopRequireDefault(require("../../images/ores/nerius.png"));

var _rawCidium = _interopRequireDefault(require("../../images/raw/raw-cidium.png"));

var _rawGradeCidium = _interopRequireDefault(require("../../images/raw/raw-grade-cidium.png"));

var _rawOsmy = _interopRequireDefault(require("../../images/raw/raw-osmy.png"));

var _rawAntin = _interopRequireDefault(require("../../images/raw/raw-antin.png"));

var _rawRady = _interopRequireDefault(require("../../images/raw/raw-rady.png"));

var _rawNerius = _interopRequireDefault(require("../../images/raw/raw-nerius.png"));

var _rawManty = _interopRequireDefault(require("../../images/raw/raw-manty.png"));

var _ground = _interopRequireDefault(require("../../images/environment/ground.png"));

var _dome = _interopRequireDefault(require("../../images/environment/dome.png"));

var _gearStorage = _interopRequireDefault(require("../../images/gear/gear-storage-1.png"));

var _gearRecycler = _interopRequireDefault(require("../../images/gear/gear-recycler-1.png"));

var _gearStorage1Outline = _interopRequireDefault(require("../../images/gear/gear-storage-1-outline.png"));

var _gearRecycler1Outline = _interopRequireDefault(require("../../images/gear/gear-recycler-1-outline.png"));

var _interact = _interopRequireDefault(require("../../images/ui/interact.png"));

var _close = _interopRequireDefault(require("../../images/ui/close.png"));

var _button = _interopRequireDefault(require("../../images/ui/button.png"));

var _tools = _interopRequireDefault(require("../../images/ui/tools.png"));

var _bottle = _interopRequireDefault(require("../../images/ui/bottle.png"));

var _damage = _interopRequireDefault(require("../../images/ui/damage.png"));

var _levelUp = _interopRequireDefault(require("../../images/ui/level-up.png"));

var _storageUi = _interopRequireDefault(require("../../images/ui/storage-ui.png"));

var _recyclerUi = _interopRequireDefault(require("../../images/ui/recycler-ui.png"));

var _descriptionUi = _interopRequireDefault(require("../../images/ui/description-ui.png"));

var _stoneHit = _interopRequireDefault(require("../../audio/stone-hit.mp3"));

var _stoneBreak = _interopRequireDefault(require("../../audio/stone-break.mp3"));

var _4 = _interopRequireDefault(require("../../audio/steps/1.mp3"));

var _5 = _interopRequireDefault(require("../../audio/steps/2.mp3"));

var _6 = _interopRequireDefault(require("../../audio/steps/3.mp3"));

var _storage = _interopRequireDefault(require("../../audio/storage.mp3"));

var _store = _interopRequireDefault(require("../../audio/store.mp3"));

var _craft = _interopRequireDefault(require("../../audio/craft.mp3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// I can't setup declare module :(
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// import stone_1_img from "../../images/ores/stone-1.png"; // @ts-ignore
// import stone_2_img from "../../images/ores/stone-2.png"; // @ts-ignore
// import stone_3_img from "../../images/ores/stone-3.png"; // @ts-ignore
// import stone_4_img from "../../images/ores/stone-4.png"; // @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// > Audio
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
function initAssets(game) {
  // > Player
  game.loadAsset("player-stay", [_stay.default]);
  game.loadAsset("player-walk", [_.default, _2.default, _3.default, _stay.default]); // > Entities

  game.loadAsset("robot-stay", [_robotStay.default]); // > Ores

  game.loadAsset("stone", [_stone.default]);
  game.loadAsset("stony-ground", [_stonyGround.default]);
  game.loadAsset("basalt", [_basalt.default]);
  game.loadAsset("deep-stone", [_deepStone.default]);
  game.loadAsset("burnt-basalt", [_burntBasalt.default]);
  game.loadAsset("destrony", [_destrony.default]);
  game.loadAsset("manty", [_manty.default]); // game.loadAsset("stone-1", [stone_1_img]);
  // game.loadAsset("stone-2", [stone_2_img]);
  // game.loadAsset("stone-3", [stone_3_img]);
  // game.loadAsset("stone-4", [stone_4_img]);

  game.loadAsset("cracked-stone", [_crackedStone.default]);
  game.loadAsset("cidium", [_cidium.default]);
  game.loadAsset("osmy", [_osmy.default]);
  game.loadAsset("antin", [_antin.default]);
  game.loadAsset("rady", [_rady.default]);
  game.loadAsset("nerius", [_nerius.default]);
  game.loadAsset("raw-cidium", [_rawCidium.default]);
  game.loadAsset("raw-grade-cidium", [_rawGradeCidium.default]);
  game.loadAsset("raw-osmy", [_rawOsmy.default]);
  game.loadAsset("raw-antin", [_rawAntin.default]);
  game.loadAsset("raw-rady", [_rawRady.default]);
  game.loadAsset("raw-nerius", [_rawNerius.default]);
  game.loadAsset("raw-manty", [_rawManty.default]);
  game.loadAsset("ground", [_ground.default]);
  game.loadAsset("dome", [_dome.default]);
  game.loadAsset("gear-storage-1", [_gearStorage.default]);
  game.loadAsset("gear-recycler-1", [_gearRecycler.default]);
  game.loadAsset("gear-storage-1-outline", [_gearStorage1Outline.default]);
  game.loadAsset("gear-recycler-1-outline", [_gearRecycler1Outline.default]);
  game.loadAsset("interact", [_interact.default]);
  game.loadAsset("close", [_close.default]);
  game.loadAsset("button", [_button.default]);
  game.loadAsset("tools", [_tools.default]);
  game.loadAsset("bottle", [_bottle.default]);
  game.loadAsset("damage", [_damage.default]);
  game.loadAsset("storage-ui", [_storageUi.default]);
  game.loadAsset("level-up", [_levelUp.default]);
  game.loadAsset("recycler-ui", [_recyclerUi.default]);
  game.loadAsset("description-ui", [_descriptionUi.default]); // > Audio

  game.loadAsset("stone-hit", _stoneHit.default, "audio");
  game.loadAsset("stone-break", _stoneBreak.default, "audio");
  game.loadAsset("step-1", _4.default, "audio");
  game.loadAsset("step-2", _5.default, "audio");
  game.loadAsset("step-3", _6.default, "audio");
  game.loadAsset("storage", _storage.default, "audio");
  game.loadAsset("store", _store.default, "audio");
  game.loadAsset("craft", _craft.default, "audio");
}
},{"../../images/player/stay.png":"xMOE","../../images/player/walk/0.png":"LU2R","../../images/player/walk/1.png":"Gmbh","../../images/player/walk/2.png":"XNnF","../../images/entities/robot/robot-stay.png":"Xxn6","../../images/ores/stone.png":"Qntg","../../images/ores/stony-ground.png":"KP9j","../../images/ores/basalt.png":"EsJD","../../images/ores/deep-stone.png":"m5Mc","../../images/ores/burnt-basalt.png":"yhR6","../../images/ores/destrony.png":"zgKj","../../images/ores/manty.png":"pf9J","../../images/ores/cracked-stone.png":"y0PF","../../images/ores/cidium.png":"FU7E","../../images/ores/osmy.png":"Zvcg","../../images/ores/antin.png":"balx","../../images/ores/rady.png":"DTH9","../../images/ores/nerius.png":"jfHw","../../images/raw/raw-cidium.png":"DgoW","../../images/raw/raw-grade-cidium.png":"DJ58","../../images/raw/raw-osmy.png":"mpJt","../../images/raw/raw-antin.png":"ZWGs","../../images/raw/raw-rady.png":"SrSE","../../images/raw/raw-nerius.png":"ceSm","../../images/raw/raw-manty.png":"h5i8","../../images/environment/ground.png":"aLvf","../../images/environment/dome.png":"Q6m3","../../images/gear/gear-storage-1.png":"G9tz","../../images/gear/gear-recycler-1.png":"FBe0","../../images/gear/gear-storage-1-outline.png":"j56s","../../images/gear/gear-recycler-1-outline.png":"fxXd","../../images/ui/interact.png":"y1NG","../../images/ui/close.png":"rLvC","../../images/ui/button.png":"R1BN","../../images/ui/tools.png":"omch","../../images/ui/bottle.png":"arpR","../../images/ui/damage.png":"nxFT","../../images/ui/level-up.png":"L4Si","../../images/ui/storage-ui.png":"l1xg","../../images/ui/recycler-ui.png":"noxU","../../images/ui/description-ui.png":"rqZe","../../audio/stone-hit.mp3":"mhX9","../../audio/stone-break.mp3":"mlWp","../../audio/steps/1.mp3":"Js59","../../audio/steps/2.mp3":"z5Ql","../../audio/steps/3.mp3":"Y3GC","../../audio/storage.mp3":"xygE","../../audio/store.mp3":"d4NI","../../audio/craft.mp3":"JxEU"}],"NgPq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assetIsValid = assetIsValid;
exports.safeValue = safeValue;
exports.asImage = asImage;
exports.asAudio = asAudio;
exports.standardName = standardName;
exports.compareNames = compareNames;
exports.buildName = buildName;
exports.wrapText = wrapText;
exports.axesToDirection = axesToDirection;
exports.lerp = lerp;
exports.random = random;
exports.chance = chance;
exports.Vector2 = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector2 = /*#__PURE__*/function () {
  function Vector2(x, y) {
    _classCallCheck(this, Vector2);

    this.x = x || 0;
    this.y = y || 0;
  }

  _createClass(Vector2, [{
    key: "set",
    value: function set(x, y) {
      this.x = x || 0;
      this.y = y || 0;
      return this;
    }
  }, {
    key: "copy",
    value: function copy(vec) {
      this.x = vec.x;
      this.y = vec.y;
      return this;
    }
  }, {
    key: "normalize",
    value: function normalize() {
      var v = new Vector2(this.x, this.y);
      var a = Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));
      v.x /= a || 1;
      v.y /= a || 1;
      return v;
    }
  }, {
    key: "distance",
    value: function distance(vec) {
      return Math.sqrt(Math.pow(this.x - vec.x, 2) + Math.pow(this.y - vec.y, 2));
    }
  }, {
    key: "expand",
    value: function expand() {
      return new Vector2(this.x, this.y);
    }
  }, {
    key: "apply",
    value: function apply(func) {
      return new Vector2(func(this.x), func(this.y));
    }
  }, {
    key: "add",
    value: function add(vec) {
      return new Vector2(this.x + vec.x, this.y + vec.y);
    }
  }, {
    key: "sub",
    value: function sub(vec) {
      return new Vector2(this.x - vec.x, this.y - vec.y);
    }
  }, {
    key: "mul",
    value: function mul(value) {
      return new Vector2(this.x * value, this.y * value);
    }
  }, {
    key: "div",
    value: function div(value) {
      return new Vector2(this.x / value, this.y / value);
    }
  }, {
    key: "lerp",
    value: function lerp(to, time) {
      this.x = this.x + (to.x - this.x) * time;
      this.y = this.y + (to.y - this.y) * time;
      return this;
    }
  }], [{
    key: "add",
    value: function add(vec1, vec2) {
      return new Vector2(vec1.x + vec2.x, vec1.y + vec2.y);
    }
  }, {
    key: "sub",
    value: function sub(vec1, vec2) {
      return new Vector2(vec1.x - vec2.x, vec1.y - vec2.y);
    }
  }, {
    key: "zero",
    value: function zero() {
      return new Vector2();
    }
  }, {
    key: "all",
    value: function all(value) {
      return new Vector2(value || 1, value || 1);
    }
  }, {
    key: "compare",
    value: function compare(vec1, vec2) {
      return vec1.x == vec2.x && vec1.y == vec2.y;
    }
  }]);

  return Vector2;
}();

exports.Vector2 = Vector2;

function assetIsValid(asset, type) {
  return asset != null && asset.type != null && asset.type == type;
}

function safeValue(value, safe) {
  return value === undefined ? safe : value;
}

function asImage(asset) {
  if (!asset) return;
  if (assetIsValid(asset, "image")) return asset.element[0];
}

function asAudio(asset) {
  if (!asset) return;
  if (assetIsValid(asset, "audio")) return asset.element;
}

function standardName(name) {
  return name.trim().split(" ").join("-").toLocaleLowerCase();
}

function compareNames(name1, name2) {
  return standardName(name1) == standardName(name2);
}

function buildName() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return [].concat(args).join(" ");
}

function wrapText(text, maxLength) {
  var result = "";
  var wrapCount = 0;

  for (var i = 0; i < text.length; i++) {
    var letter = text[i];

    if (i - 1 > 0 && (i - 1) % maxLength == 0) {
      if (text[i] != " ") result += "-\n";else result += "\n";
      wrapCount++;
      letter = text[i].trim();
    }

    result += letter;
  }

  return {
    text: result,
    wrapCount: wrapCount
  };
}

function axesToDirection(axes) {
  if (axes == "down") return "bottom";else if (axes == "up") return "top";else return axes;
}

function lerp(from, to, time) {
  return from + (to - from) * time;
}

function random(from, to) {
  return Math.random() * (to - from) + from;
}

function chance(percent) {
  return Math.floor(random(0, 101)) <= percent;
}
},{}],"heGh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Asset = void 0;

var _math = require("./utils/math");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Asset = // element: PIXI.Texture | HTMLAudioElement | PIXI.Texture[]
function Asset(name, src, type) {
  _classCallCheck(this, Asset);

  this.name = (0, _math.standardName)(name);
  this.src = src;
  this.type = type || "image";
  this.element = [];

  if (this.type == "image") {
    this.element = this.src.map(function (s) {
      var i = new Image();
      i.src = s;
      return i;
    });
  } else if (type == "audio") {
    this.element = new Audio(this.src);
  }
};

exports.Asset = Asset;
},{"./utils/math":"NgPq"}],"FxBD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemSettings = exports.OreSettings = exports.Color = exports.GeneratorConfig = exports.Config = void 0;
var Config;
exports.Config = Config;

(function (Config) {
  // World size and chunks size in blocks
  Config[Config["WORLD_WIDTH"] = 25] = "WORLD_WIDTH";
  Config[Config["WORLD_HEIGHT"] = 225] = "WORLD_HEIGHT";
  Config[Config["CHUNK_SIZE"] = 4] = "CHUNK_SIZE";
  Config[Config["SPRITE_SCALE"] = 5] = "SPRITE_SCALE";
  Config[Config["SPRITE_PIXEL_SIZE"] = 16] = "SPRITE_PIXEL_SIZE";
  Config[Config["SPRITE_SIZE"] = 80] = "SPRITE_SIZE";
  Config[Config["PARTICLES_GRAVITY"] = 0.4] = "PARTICLES_GRAVITY";
  Config[Config["WORLD_X_CENTER"] = 1000] = "WORLD_X_CENTER";
  Config[Config["ROBOT_PICKUP_DISTANCE"] = 80] = "ROBOT_PICKUP_DISTANCE";
  Config[Config["ROBOT_DAMAGE"] = 4] = "ROBOT_DAMAGE";
  Config[Config["ROBOT_HIT_SPEED"] = 10] = "ROBOT_HIT_SPEED";
  Config[Config["ROBOT_ALLOW_PICKUP_DELAY"] = 20] = "ROBOT_ALLOW_PICKUP_DELAY";
  Config[Config["PICKUP_DISTANCE"] = 50] = "PICKUP_DISTANCE";
  Config[Config["WIRE_LENGTH"] = 60] = "WIRE_LENGTH";
  Config[Config["GEAR_INTERACT_DISTANCE"] = 100] = "GEAR_INTERACT_DISTANCE";
  Config[Config["DOME_DIAMETER"] = 480] = "DOME_DIAMETER";
  Config[Config["GROUND_HEIGHT"] = 160] = "GROUND_HEIGHT";
  Config[Config["ALLOW_DARK"] = 1] = "ALLOW_DARK";
  Config[Config["RAW_LIVE_TIME"] = 400] = "RAW_LIVE_TIME";
  Config[Config["ORE_FALL_DELAY"] = 30] = "ORE_FALL_DELAY";
  Config[Config["DEFAULT_ANIMATION_SPEED"] = 8] = "DEFAULT_ANIMATION_SPEED";
})(Config || (exports.Config = Config = {}));

var GeneratorConfig;
exports.GeneratorConfig = GeneratorConfig;

(function (GeneratorConfig) {
  GeneratorConfig[GeneratorConfig["LAYERS_BLEND_HEIGHT"] = 10] = "LAYERS_BLEND_HEIGHT";
  GeneratorConfig[GeneratorConfig["BASALT_LAYER_HEIGHT"] = 150] = "BASALT_LAYER_HEIGHT";
  GeneratorConfig[GeneratorConfig["BURNT_BASALT_LAYER_HEIGHT"] = 220] = "BURNT_BASALT_LAYER_HEIGHT";
})(GeneratorConfig || (exports.GeneratorConfig = GeneratorConfig = {}));

var Color;
exports.Color = Color;

(function (Color) {
  Color["STONE_LAYER_COLOR"] = "#090d23";
  Color["BASALT_LAYER_COLOR"] = "#1b1d27";
  Color["BURNT_BASALT_LAYER_COLOR"] = "#040508";
  Color["WHITE"] = "#fff";
  Color["BLACK"] = "#0f1531";
  Color["GREY"] = "#2c2f3d";
  Color["DARK_GREY"] = "#13151e";
  Color["YELLOW"] = "#fbc67e";
  Color["ORANGE"] = "#ff935c";
  Color["BLUE"] = "#b9c5ff";
  Color["RED"] = "#fb7e88";
  Color["GREEN"] = "#6aff81";
  Color["YELLOW_LIGHT"] = "#fde3bf";
  Color["BLUE_LIGHT"] = "#e0e6ff";
  Color["RED_LIGHT"] = "#f9cace";
  Color["GREEN_LIGHT"] = "#d4ffdb";
})(Color || (exports.Color = Color = {}));

var OreSettings = {
  "stone": {
    hp: 10
  },
  "stony-ground": {
    hp: 8
  },
  "antin": {
    hp: 52,
    tool: 3
  },
  "basalt": {
    hp: 40,
    tool: 3
  },
  "burnt-basalt": {
    hp: 80,
    tool: 4
  },
  "manty": {
    hp: 108,
    tool: 4
  },
  "cidium": {
    hp: 20
  },
  "cracked-stone": {
    hp: 6
  },
  "deep-stone": {
    hp: 26,
    tool: 2
  },
  "osmy": {
    hp: 36,
    tool: 2
  },
  "nerius": {
    hp: 32,
    tool: 2
  },
  "rady": {
    hp: 58,
    tool: 4
  }
};
exports.OreSettings = OreSettings;
var ItemSettings = {
  "raw-cidium": {
    lineColor: Color.YELLOW_LIGHT,
    storage: 1
  },
  "raw-grade-cidium": {
    lineColor: Color.YELLOW_LIGHT,
    storage: 1
  },
  "raw-osmy": {
    lineColor: Color.BLUE_LIGHT,
    storage: 1
  },
  "raw-antin": {
    lineColor: Color.RED_LIGHT,
    storage: 3
  },
  "raw-rady": {
    lineColor: Color.GREEN_LIGHT,
    storage: 3
  },
  "raw-nerius": {
    lineColor: Color.WHITE,
    storage: 2
  },
  "raw-manty": {
    lineColor: Color.RED_LIGHT,
    storage: 3
  }
};
exports.ItemSettings = ItemSettings;
},{}],"XTEA":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Physics = exports.Collider = void 0;

var _config = require("../config");

var _math = require("./utils/math");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collider = function Collider(parent) {
  _classCallCheck(this, Collider);

  this.type = "dynamic";
  this.width = _config.Config.SPRITE_PIXEL_SIZE * _config.Config.SPRITE_SCALE;
  this.height = _config.Config.SPRITE_PIXEL_SIZE * _config.Config.SPRITE_SCALE;
  this.offset = new _math.Vector2();
  this.collidable = true;
  this.collidesWith = null;
  this.parent = parent;
};

exports.Collider = Collider;

var Physics = /*#__PURE__*/function () {
  function Physics(game) {
    _classCallCheck(this, Physics);

    this.game = game;
  }

  _createClass(Physics, [{
    key: "collide",
    value: function collide(point1, point2) {
      // if (this.game.camera.distance(point1.position) < 300 && this.game.camera.distance(point2.position) < 300)
      //     return {
      //         id: null, any: false,
      //         right: false, left: false,
      //         top: false, bottom: false
      //     }
      var pos1 = _math.Vector2.add(point1.position, point1.collider.offset).add(point1.velocity),
          pos2 = _math.Vector2.add(point2.position, point2.collider.offset).add(point2.velocity);

      var w1 = point1.collider.width / 2,
          w2 = point2.collider.width / 2;
      var h1 = point1.collider.height / 2,
          h2 = point2.collider.height / 2;
      var valid = point1.id != point2.id;
      var horizontal = pos1.x + w1 > pos2.x - w2 && // Right
      pos1.x - w1 < pos2.x + w2 // Left
      ;
      var vertical = pos1.y + h1 > pos2.y - h2 && // Bottom
      pos1.y - h2 < pos2.y + h2 // Top
      && valid;
      var locationX = Math.abs(Math.sqrt(Math.pow(pos1.x - pos2.x, 2)));
      var locationY = Math.abs(Math.sqrt(Math.pow(pos1.y - pos2.y, 2))); // Right

      var right = pos1.x + w1 > pos2.x - w2 && pos2.x > pos1.x && vertical && locationX > locationY; // Left

      var left = pos1.x - w1 < pos2.x + w2 && pos1.x > pos2.x && vertical && locationX > locationY; // Top

      var top = pos1.y - h1 < pos2.y + h2 && pos1.y > pos2.y && horizontal && locationY > locationX; // Bottom

      var bottom = pos1.y + h1 > pos2.y - h2 && pos2.y > pos1.y && horizontal && locationY > locationX;
      var any = right || left || top || bottom;
      return {
        id: (point2 === null || point2 === void 0 ? void 0 : point2.id) || null,
        any: any,
        right: right,
        left: left,
        top: top,
        bottom: bottom
      };
    }
  }, {
    key: "update",
    value: function update() {
      var children = this.game.children.filter(function (child) {
        return child.collider.type != "none" && child.collider.collidable;
      });

      for (var i = 0; i < children.length; i++) {
        for (var j = 0; j < children.length; j++) {
          this.collideWith(children[i], children[j]);
        }
      }
    }
  }, {
    key: "collideWith",
    value: function collideWith(collider1, collider2) {
      var allowCollide = true;
      if (!collider2.collider.collidable && collider1.collider.type == "dynamic") allowCollide = false;
      if (allowCollide) if (collider1.collider.type == "dynamic" && collider2.collider.type == "solid") {
        var collide = this.collide(collider1, collider2);
        var col1 = collider1.collider;
        var col2 = collider2.collider; // Right

        if (collide.right && collider1.velocity.x > 0) {
          collider1.position.x = collider2.position.x - col2.width / 2 - col1.width / 2 + 1 - col1.offset.x;
          collider1.velocity.x = 0;
        } // Left


        if (collide.left && collider1.velocity.x < 0) {
          collider1.position.x = collider2.position.x + col2.width / 2 + col1.width / 2 - 1 - col1.offset.x;
          collider1.velocity.x = 0;
        } // Top


        if (collide.top && collider1.velocity.y < 0) {
          collider1.position.y = collider2.position.y + col2.height / 2 + col1.height / 2 - 1;
          collider1.velocity.y = 0;
        } // Bottom


        if (collide.bottom && collider1.velocity.y > 0) {
          collider1.position.y = collider2.position.y - col2.height / 2 - col1.height / 2 + 1;
          collider1.velocity.y = 0;
        } // console.log(collider2.id);


        if (collide.any) {
          // if ((collider1.velocity.x != 0 || collider1.velocity.y != 0))
          collider1.collider.collidesWith = Object.assign({}, collide); // collider1.collider.otherColliders = [collider2];
        } // else
        //     collider1.collider.collidesWith = null;
        // collider1.collider.otherColliders = [];

      }
    }
  }]);

  return Physics;
}();

exports.Physics = Physics;
},{"../config":"FxBD","./utils/math":"NgPq"}],"kmMG":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Point = void 0;

var _Physics = require("../Physics");

var _math = require("../utils/math");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __id = 0;

var Point = /*#__PURE__*/function () {
  function Point(name, props) {
    _classCallCheck(this, Point);

    this.id = "".concat(name, "-").concat(__id++);
    this.type = "point";
    this.name = (0, _math.standardName)(name);
    this.group = (props === null || props === void 0 ? void 0 : props.group) ? (0, _math.standardName)(props.group) : null;
    this.inited = false;
    this.layer = (props === null || props === void 0 ? void 0 : props.layer) || "game";
    this.position = (props === null || props === void 0 ? void 0 : props.position) || _math.Vector2.zero();
    this.velocity = _math.Vector2.zero();
    this.acceleration = _math.Vector2.all();
    this.rotation = (props === null || props === void 0 ? void 0 : props.rotation) || 0;
    this.scale = (props === null || props === void 0 ? void 0 : props.scale) || _math.Vector2.all();
    this.collider = new _Physics.Collider(this);
    this.collider.type = (props === null || props === void 0 ? void 0 : props.colliderType) || "dynamic";
  }

  _createClass(Point, [{
    key: "init",
    value: function init(game) {
      this.inited = true;
    }
  }, {
    key: "update",
    value: function update(game) {
      this.velocity.x *= this.acceleration.x;
      this.velocity.y *= this.acceleration.y;
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }, {
    key: "render",
    value: function render(game, renderer) {}
  }, {
    key: "collideWidth",
    value: function collideWidth(game, point) {
      if (!point) return;
      if (point.position.distance(this.position) > 200) return;
      var allowCollide = true;
      if (!this.collider.collidable && point.collider.type == "dynamic" || !point.collider.collidable) allowCollide = false;
      if (allowCollide) if (point.collider.type == "dynamic" && this.collider.type == "solid") {
        var collide = game.physics.collide(point, this);
        var col1 = point.collider;
        var col2 = this.collider; // Right

        if (collide.right && point.velocity.x > 0) {
          point.position.x = this.position.x - col2.width / 2 - col1.width / 2 + 1 - col1.offset.x;
          point.velocity.x = 0;
        } // Left


        if (collide.left && point.velocity.x < 0) {
          point.position.x = this.position.x + col2.width / 2 + col1.width / 2 - 1 - col1.offset.x;
          point.velocity.x = 0;
        } // Top


        if (collide.top && point.velocity.y < 0) {
          point.position.y = this.position.y + col2.height / 2 + col1.height / 2 - 1;
          point.velocity.y = 0;
        } // Bottom


        if (collide.bottom && point.velocity.y > 0) {
          point.position.y = this.position.y - col2.height / 2 - col1.height / 2 + 1;
          point.velocity.y = 0;
        }

        if (collide.any) {
          point.collider.collidesWith = Object.assign({}, collide);
        }
      }
    }
  }]);

  return Point;
}();

exports.Point = Point;
},{"../Physics":"XTEA","../utils/math":"NgPq"}],"g97P":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  err: {
    animationLoadError: function animationLoadError(name) {
      return "Failed to load asset \"".concat(name, "\"");
    },
    audioPlayError: function audioPlayError(name) {
      return "Failed to play audio asset \"".concat(name, "\"");
    }
  }
};
exports.default = _default;
},{}],"SuzK":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sprite = void 0;

var _Point2 = require("./Point");

var _math = require("../utils/math");

var _messages = _interopRequireDefault(require("../../messages"));

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Sprite = /*#__PURE__*/function (_Point) {
  _inherits(Sprite, _Point);

  var _super = _createSuper(Sprite);

  function Sprite(name, assetName, props) {
    var _this;

    _classCallCheck(this, Sprite);

    _this = _super.call(this, name, props);
    _this.type = "sprite";
    _this.width = (props === null || props === void 0 ? void 0 : props.width) || 1;
    _this.height = (props === null || props === void 0 ? void 0 : props.height) || 1;
    _this.offset = _math.Vector2.zero();
    _this.flip = (props === null || props === void 0 ? void 0 : props.flip) || {
      x: false,
      y: false
    };
    _this.repeat = (props === null || props === void 0 ? void 0 : props.repeat) || 1;
    _this.opacity = 1;
    _this.assetName = assetName;
    _this.texture = null;
    _this.visible = true;
    _this.frame = 0;
    return _this;
  }

  _createClass(Sprite, [{
    key: "init",
    value: function init(game) {
      _get(_getPrototypeOf(Sprite.prototype), "init", this).call(this, game);

      this.updateAsset(game);
    }
  }, {
    key: "updateAsset",
    value: function updateAsset(game) {
      var asset = game.getAssetByName(this.assetName);
      if ((0, _math.assetIsValid)(asset, "image") && asset) this.texture = (0, _math.asImage)(asset);else console.error(_messages.default.err.animationLoadError(this.assetName));
    }
  }, {
    key: "update",
    value: function update(game) {
      _get(_getPrototypeOf(Sprite.prototype), "update", this).call(this, game);
    }
  }, {
    key: "render",
    value: function render(game, renderer) {
      _get(_getPrototypeOf(Sprite.prototype), "render", this).call(this, game, renderer);

      if (this.texture && this.visible) game.renderer.drawSprite(Object.assign(Object.assign({}, this), {
        texture: this.texture
      }));
    }
  }, {
    key: "playAnimation",
    value: function playAnimation(game, assetName, speed) {
      var asset = game.getAssetByName(assetName);

      if (!(0, _math.assetIsValid)(asset, "image")) {
        console.error(_messages.default.err.animationLoadError(assetName));
        return;
      }

      var el = asset.element;

      if (game.clock.elapsed % (speed || _config.Config.DEFAULT_ANIMATION_SPEED) == 0) {
        this.texture = el.length == 1 ? el[0] : el[this.frame];
        this.frame++;
      }

      if (this.frame > el.length - 1 || el.length == 1) this.frame = 0;
    }
  }]);

  return Sprite;
}(_Point2.Point);

exports.Sprite = Sprite;
},{"./Point":"kmMG","../utils/math":"NgPq","../../messages":"g97P","../../config":"FxBD"}],"Pspv":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _Sprite = require("./Sprite");

var _Point = require("./Point");

var _math = require("../utils/math");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Container = /*#__PURE__*/function () {
  function Container() {
    _classCallCheck(this, Container);

    this.children = [];
  }

  _createClass(Container, [{
    key: "createPoint",
    value: function createPoint(name, props) {
      return this.add(new _Point.Point(name, props));
    }
  }, {
    key: "createSprite",
    value: function createSprite(name, assetName, props) {
      return this.add(new _Sprite.Sprite(name, assetName, props));
    }
  }, {
    key: "getChildrenByName",
    value: function getChildrenByName(name) {
      return this.children.filter(function (child) {
        return child.name.indexOf(name) >= 0;
      });
    }
  }, {
    key: "getChildById",
    value: function getChildById(id, expandAll) {
      // if (id) {
      //     if (expandAll) {
      //         let b: any[] = [];
      //         this.children.map(c=> c.type == "group" ? b = (c as any).children : null);
      //         return [...this.children, ...b].find(child=> child.id ? child.id.indexOf(id) >= 0 : null) as T | undefined;
      //     } else
      //         return this.children.find(child=> child.id.indexOf(id) >= 0) as T | undefined;
      // }
      if (id) return this.children.find(function (child) {
        return child.id.indexOf(id) >= 0;
      });
    }
  }, {
    key: "removeChildById",
    value: function removeChildById(id) {
      this.children = this.children.filter(function (child) {
        return !(0, _math.compareNames)(child.id, id);
      });
    }
  }, {
    key: "removeChildrenByGroupName",
    value: function removeChildrenByGroupName(group) {
      this.children = this.children.filter(function (child) {
        return child.group ? !(0, _math.compareNames)(child.group, group) : true;
      });
    }
  }, {
    key: "add",
    value: function add(child) {
      this.children.push(child);
      return child;
    }
  }, {
    key: "initChildren",
    value: function initChildren(game) {
      this.children.filter(function (child) {
        return !child.inited;
      }).map(function (child) {
        return child.init(game);
      });
    }
  }, {
    key: "callChildren",
    value: function callChildren(method, game, args) {
      if (args) this.children.map(function (child) {
        return child[method](game, args);
      });else this.children.map(function (child) {
        return child[method](game);
      });
    }
  }]);

  return Container;
}();

exports.Container = Container;
},{"./Sprite":"SuzK","./Point":"kmMG","../utils/math":"NgPq"}],"lnBr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gamepad = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Gamepad = /*#__PURE__*/function () {
  function Gamepad() {
    var _this = this;

    _classCallCheck(this, Gamepad);

    this.eventKeys = {
      "right": ["ArrowRight", "KeyD"],
      "left": ["ArrowLeft", "KeyA"],
      "up": ["ArrowUp", "KeyW"],
      "down": ["ArrowDown", "KeyS"],
      "enter": ["Enter"]
    };
    this.keys = {
      right: false,
      left: false,
      up: false,
      down: false,
      enter: false
    };
    this.pressed = false;
    this.onKeyDownListeners = [];
    this.onAnyKeyDownListeners = [];
    window.addEventListener("keydown", function (e) {
      _this.updateKey(e.code, true);

      if (_this.pressed) return;

      _this.onKeyDownListeners.map(function (listener) {
        _this.eventKeys[listener.name].map(function (key) {
          if (e.code == key) {
            listener.callback();
            _this.pressed = true;
          }
        });
      });

      _this.onAnyKeyDownListeners.map(function (listener) {
        Object.keys(_this.eventKeys).map(function (ekey) {
          _this.eventKeys[ekey].map(function (key) {
            if (key == e.code) {
              listener.callback(ekey);
              _this.pressed = true;
            }
          });
        });
      });
    });
    window.addEventListener("keyup", function (e) {
      _this.updateKey(e.code, false);

      _this.pressed = false;
    });
  }

  _createClass(Gamepad, [{
    key: "onKeyDown",
    value: function onKeyDown(id, name, callback) {
      this.onKeyDownListeners.push({
        id: id,
        name: name,
        callback: callback
      });
    }
  }, {
    key: "onAnyKeyDown",
    value: function onAnyKeyDown(id, callback) {
      this.onAnyKeyDownListeners.push({
        id: id,
        callback: callback
      });
    }
  }, {
    key: "removeListenerById",
    value: function removeListenerById(id) {
      this.onKeyDownListeners = this.onKeyDownListeners.filter(function (l) {
        return l.id != id;
      });
      this.onAnyKeyDownListeners = this.onAnyKeyDownListeners.filter(function (l) {
        return l.id != id;
      });
    }
  }, {
    key: "updateKey",
    value: function updateKey(code, enabled) {
      var _this2 = this;

      this.mapKeys(function (ekey, key) {
        if (code == key) _this2.keys[ekey] = enabled;
      });
    }
  }, {
    key: "mapKeys",
    value: function mapKeys(func) {
      var _this3 = this;

      Object.keys(this.eventKeys).map(function (ekey) {
        _this3.eventKeys[ekey].map(function (key) {
          return func(ekey, key);
        });
      });
    }
  }]);

  return Gamepad;
}();

exports.Gamepad = Gamepad;
},{}],"iCpn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Renderer = void 0;

var _config = require("../config");

var _math = require("./utils/math");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Renderer = /*#__PURE__*/function () {
  function Renderer(game) {
    _classCallCheck(this, Renderer);

    this.game = game;
    this.particles = [];
    this.layers = {
      "bg": this.createLayer("bg"),
      "game": this.createLayer("game"),
      "particles": this.createLayer("particles"),
      "ui": this.createLayer("ui", true, 0),
      "debug": this.createLayer("debug", false)
    };
    console.log(this.layers);
    document.body.style.background = _config.Color.STONE_LAYER_COLOR;
  } // Create new layer


  _createClass(Renderer, [{
    key: "createLayer",
    value: function createLayer(name, update, cameraFactor) {
      var canvas = document.createElement("canvas");
      canvas.setAttribute("id", name);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      document.body.appendChild(canvas);
      var context = canvas.getContext("2d");
      context.imageSmoothingEnabled = false;
      return {
        canvas: canvas,
        context: context,
        update: (0, _math.safeValue)(update, true),
        cameraFactor: (0, _math.safeValue)(cameraFactor, 1)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      // > Clear layers
      Object.keys(this.layers).map(function (key) {
        if (_this.layers[key].update) _this.layers[key].context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      });
      this.changeBGColor();
    } // > Change bg color

  }, {
    key: "changeBGColor",
    value: function changeBGColor() {
      var spriteSize = _config.Config.SPRITE_SIZE;
      var layerBlendHeight = _config.GeneratorConfig.LAYERS_BLEND_HEIGHT; // Basalt layer color

      if (this.game.camera.position.y > (_config.GeneratorConfig.BASALT_LAYER_HEIGHT - layerBlendHeight) * spriteSize) document.body.style.background = _config.Color.BASALT_LAYER_COLOR; // Burnt basalt layer color

      if (this.game.camera.position.y > (_config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT - layerBlendHeight) * spriteSize) document.body.style.background = _config.Color.BURNT_BASALT_LAYER_COLOR; // Stone layer color
      else if (this.game.camera.position.y < (_config.GeneratorConfig.BASALT_LAYER_HEIGHT - layerBlendHeight) * spriteSize) document.body.style.background = _config.Color.STONE_LAYER_COLOR;
    } // > Render particles

  }, {
    key: "renderParticles",
    value: function renderParticles(game) {
      var _this2 = this;

      this.particles.map(function (part) {
        part.update(_this2.game);
        part.render(_this2, part);
      });
      this.particles.map(function (part, index) {
        if (part.size <= 0 || part.opacity <= 0) _this2.particles.splice(index, 1);
      });
    }
  }, {
    key: "inCameraViewport",
    value: function inCameraViewport(pos, width, height, repeat) {
      var cam = this.game.camera.position;
      var w = innerWidth + 150,
          h = innerHeight + 150;
      width = (0, _math.safeValue)(width, _config.Config.SPRITE_SIZE);
      height = (0, _math.safeValue)(height, _config.Config.SPRITE_SIZE);
      return pos.x + width / 2 + (repeat ? repeat * width : 1) > cam.x - w / 2 && pos.y + height / 2 > cam.y - h / 2 && pos.x - width / 2 < cam.x + w / 2 && pos.y - height / 2 < cam.y + h / 2;
    }
  }, {
    key: "getCameraPosition",
    value: function getCameraPosition(layer) {
      var factor = this.layers[layer || "game"];
      return this.game.camera.position.add(this.game.camera.offset).mul(factor.cameraFactor);
    } // Get layer context

  }, {
    key: "getContext",
    value: function getContext(layer) {
      return this.layers[layer || "game"].context;
    }
  }, {
    key: "startTransform",
    value: function startTransform(layer, pos, rotation, scale, opacity) {
      var l = this.layers[layer || "game"];

      var p = pos || _math.Vector2.zero();

      l.context.save();
      l.context.transform((scale === null || scale === void 0 ? void 0 : scale.x) || 1, 0, 0, (scale === null || scale === void 0 ? void 0 : scale.y) || 1, p.x - this.getCameraPosition(layer).x + window.innerWidth / 2 * l.cameraFactor, p.y - this.getCameraPosition(layer).y + window.innerHeight / 2 * l.cameraFactor);
      l.context.rotate(rotation || 0);
      var op = (0, _math.safeValue)(opacity, 1);
      l.context.globalAlpha = op > 0 ? op : 0;
    }
  }, {
    key: "endTransform",
    value: function endTransform(layer) {
      this.layers[layer || "game"].context.restore();
    } // Draw primitives

  }, {
    key: "drawRect",
    value: function drawRect(props) {
      var w = (0, _math.safeValue)(props.width, 1) * _config.Config.SPRITE_SIZE;

      var h = (0, _math.safeValue)(props.height, 1) * _config.Config.SPRITE_SIZE;

      if (!this.inCameraViewport((0, _math.safeValue)(props.position, _math.Vector2.zero()), w, h) && this.layers[props.layer || "game"].cameraFactor == 1) return;
      this.startTransform(props.layer, props.position, props.rotation, _math.Vector2.all(), props.opacity);
      var context = this.getContext(props.layer);
      context.fillStyle = props.color || "#fff";
      context.fillRect(-w / 2, -h / 2, w, h);

      if (props.stroke) {
        context.lineWidth = props.stroke.width;
        context.strokeStyle = props.stroke.color;
        context.strokeRect(-w / 2, -h / 2, w, h);
      }

      this.endTransform(props.layer);
    }
  }, {
    key: "drawLine",
    value: function drawLine(props) {
      var context = this.getContext(props.layer);
      context.save();
      context.globalAlpha = (0, _math.safeValue)(props.opacity, 1);
      context.lineWidth = props.width;
      context.strokeStyle = props.color || "#fff";
      var w = window.innerWidth / 2;
      var h = window.innerHeight / 2;
      context.moveTo(props.points[0].x - this.getCameraPosition(props.layer).x + w, props.points[0].y - this.getCameraPosition(props.layer).y + h);
      context.lineTo(props.points[1].x - this.getCameraPosition(props.layer).x + w, props.points[1].y - this.getCameraPosition(props.layer).y + h);
      context.stroke();
      context.beginPath();
      context.restore();
    }
  }, {
    key: "drawText",
    value: function drawText(props) {
      var context = this.getContext(props.layer);
      this.startTransform(props.layer, props.position, props.rotation, props.scale, props.opacity);

      function renderText(text, pos) {
        context.strokeText(text, pos.x, pos.y);
        context.fillText(text, pos.x, pos.y);
      }

      context.strokeStyle = _config.Color.STONE_LAYER_COLOR;
      context.lineWidth = 8;
      context.miterLimit = 8;
      context.lineJoin = "round";
      context.fillStyle = props.color || "#fff";
      context.font = props.font || "18px Pixel";
      if ((0, _math.safeValue)(props.centered, true)) context.textAlign = "center";
      context.textBaseline = "middle";
      var text = props.text || "";

      if (text.indexOf("\n") >= 0) {
        for (var i = 0; i < text.split("\n").length; i++) {
          renderText(text.split("\n")[i], new _math.Vector2(0, i * parseInt(context.font.split(" ")[0])));
        }
      } else renderText(text, _math.Vector2.zero()); // context.s();


      this.endTransform(props.layer);
    }
  }, {
    key: "drawSprite",
    value: function drawSprite(props) {
      if (!props.texture) return;

      var w = (0, _math.safeValue)(props.width, 1) * _config.Config.SPRITE_SIZE;

      var h = (0, _math.safeValue)(props.height, 1) * _config.Config.SPRITE_SIZE;

      var p = (0, _math.safeValue)(props.position, _math.Vector2.zero());
      var o = (0, _math.safeValue)(props.offset, _math.Vector2.zero());
      if (!this.inCameraViewport(p, w, h, props.repeat) && this.layers[props.layer || "game"].cameraFactor == 1) return;
      var f = (0, _math.safeValue)(props.flip, {
        x: false,
        y: false
      });
      var s = (0, _math.safeValue)(props.scale, _math.Vector2.all());
      var context = this.getContext(props.layer);
      this.startTransform(props.layer, p.add(o), props.rotation, new _math.Vector2(s.x * (f.x ? -1 : 1), s.y * (f.y ? -1 : 1)), props.opacity); // Draw sprite without repeat

      if (!props.repeat) context.drawImage(props.texture, -w / 2, -h / 2, w, h);else // And... With repeat?
        for (var i = 0; i < props.repeat; i++) {
          context.drawImage(props.texture, -w / 2 + i * w, -h / 2, w, h);
        }
      this.endTransform(props.layer);
    }
  }, {
    key: "updateAspect",
    value: function updateAspect() {
      var _this3 = this;

      Object.keys(this.layers).map(function (key) {
        _this3.layers[key].canvas.width = window.innerWidth;
        _this3.layers[key].canvas.height = window.innerHeight;
        _this3.layers[key].context.imageSmoothingEnabled = false;
      });
    }
  }]);

  return Renderer;
}();

exports.Renderer = Renderer;
},{"../config":"FxBD","./utils/math":"NgPq"}],"xNw6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seed = seed;
exports.simplex2 = simplex2;
exports.simplex3 = simplex3;
exports.perlin2 = perlin2;
exports.perlin3 = perlin3;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * >> Adaptive to typescript by Bogdanov :D
 * >> https://github.com/CloudBogdan
 *
 * A speed-improved perlin and simplex noise algorithms for 2D.
 *
 * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 * Converted to Javascript by Joseph Gentle.
 *
 * Version 2012-03-09
 *
 * This code was placed in the public domain by its original author,
 * Stefan Gustavson. You may use it as you see fit, but
 * attribution is appreciated.
 *
 */
var Grad = /*#__PURE__*/function () {
  function Grad(x, y, z) {
    _classCallCheck(this, Grad);

    this.x = x;
    this.y = y;
    this.z = z;
  }

  _createClass(Grad, [{
    key: "dot2",
    value: function dot2(x, y) {
      return this.x * x + this.y * y;
    }
  }, {
    key: "dot3",
    value: function dot3(x, y, z) {
      return this.x * x + this.y * y + this.z * z;
    }
  }]);

  return Grad;
}(); // function Grad(x: number, y: number, z: number) {
//     this.x = x; this.y = y; this.z = z;
// }
// Grad.prototype.dot2 = function (x: number, y: number) {
//     return this.x * x + this.y * y;
// };
// Grad.prototype.dot3 = function (x: number, y: number, z: number) {
//     return this.x * x + this.y * y + this.z * z;
// };


var grad3 = [new Grad(1, 1, 0), new Grad(-1, 1, 0), new Grad(1, -1, 0), new Grad(-1, -1, 0), new Grad(1, 0, 1), new Grad(-1, 0, 1), new Grad(1, 0, -1), new Grad(-1, 0, -1), new Grad(0, 1, 1), new Grad(0, -1, 1), new Grad(0, 1, -1), new Grad(0, -1, -1)];
var p = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180]; // To remove the need for index wrapping, double the permutation table length

var perm = new Array(512);
var gradP = new Array(512); // This isn't a very good seeding function, but it works ok. It supports 2^16
// different seed values. Write something better if you need more seeds.

function seed(seed) {
  if (seed > 0 && seed < 1) {
    // Scale the seed out
    seed *= 65536;
  }

  seed = Math.floor(seed);

  if (seed < 256) {
    seed |= seed << 8;
  }

  for (var i = 0; i < 256; i++) {
    var v;

    if (i & 1) {
      v = p[i] ^ seed & 255;
    } else {
      v = p[i] ^ seed >> 8 & 255;
    }

    perm[i] = perm[i + 256] = v;
    gradP[i] = gradP[i + 256] = grad3[v % 12];
  }
}

;
seed(0);
/*
for(var i=0; i<256; i++) {
  perm[i] = perm[i + 256] = p[i];
  gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
}*/
// Skewing and unskewing factors for 2, 3, and 4 dimensions

var F2 = 0.5 * (Math.sqrt(3) - 1);
var G2 = (3 - Math.sqrt(3)) / 6;
var F3 = 1 / 3;
var G3 = 1 / 6; // 2D simplex noise

function simplex2(xin, yin) {
  var n0, n1, n2; // Noise contributions from the three corners
  // Skew the input space to determine which simplex cell we're in

  var s = (xin + yin) * F2; // Hairy factor for 2D

  var i = Math.floor(xin + s);
  var j = Math.floor(yin + s);
  var t = (i + j) * G2;
  var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.

  var y0 = yin - j + t; // For the 2D case, the simplex shape is an equilateral triangle.
  // Determine which simplex we are in.

  var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords

  if (x0 > y0) {
    // lower triangle, XY order: (0,0)->(1,0)->(1,1)
    i1 = 1;
    j1 = 0;
  } else {
    // upper triangle, YX order: (0,0)->(0,1)->(1,1)
    i1 = 0;
    j1 = 1;
  } // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
  // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
  // c = (3-sqrt(3))/6


  var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords

  var y1 = y0 - j1 + G2;
  var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords

  var y2 = y0 - 1 + 2 * G2; // Work out the hashed gradient indices of the three simplex corners

  i &= 255;
  j &= 255;
  var gi0 = gradP[i + perm[j]];
  var gi1 = gradP[i + i1 + perm[j + j1]];
  var gi2 = gradP[i + 1 + perm[j + 1]]; // Calculate the contribution from the three corners

  var t0 = 0.5 - x0 * x0 - y0 * y0;

  if (t0 < 0) {
    n0 = 0;
  } else {
    t0 *= t0;
    n0 = t0 * t0 * gi0.dot2(x0, y0); // (x,y) of grad3 used for 2D gradient
  }

  var t1 = 0.5 - x1 * x1 - y1 * y1;

  if (t1 < 0) {
    n1 = 0;
  } else {
    t1 *= t1;
    n1 = t1 * t1 * gi1.dot2(x1, y1);
  }

  var t2 = 0.5 - x2 * x2 - y2 * y2;

  if (t2 < 0) {
    n2 = 0;
  } else {
    t2 *= t2;
    n2 = t2 * t2 * gi2.dot2(x2, y2);
  } // Add contributions from each corner to get the final noise value.
  // The result is scaled to return values in the interval [-1,1].


  return 70 * (n0 + n1 + n2);
}

; // 3D simplex noise

function simplex3(xin, yin, zin) {
  var n0, n1, n2, n3; // Noise contributions from the four corners
  // Skew the input space to determine which simplex cell we're in

  var s = (xin + yin + zin) * F3; // Hairy factor for 2D

  var i = Math.floor(xin + s);
  var j = Math.floor(yin + s);
  var k = Math.floor(zin + s);
  var t = (i + j + k) * G3;
  var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.

  var y0 = yin - j + t;
  var z0 = zin - k + t; // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
  // Determine which simplex we are in.

  var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords

  var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords

  if (x0 >= y0) {
    if (y0 >= z0) {
      i1 = 1;
      j1 = 0;
      k1 = 0;
      i2 = 1;
      j2 = 1;
      k2 = 0;
    } else if (x0 >= z0) {
      i1 = 1;
      j1 = 0;
      k1 = 0;
      i2 = 1;
      j2 = 0;
      k2 = 1;
    } else {
      i1 = 0;
      j1 = 0;
      k1 = 1;
      i2 = 1;
      j2 = 0;
      k2 = 1;
    }
  } else {
    if (y0 < z0) {
      i1 = 0;
      j1 = 0;
      k1 = 1;
      i2 = 0;
      j2 = 1;
      k2 = 1;
    } else if (x0 < z0) {
      i1 = 0;
      j1 = 1;
      k1 = 0;
      i2 = 0;
      j2 = 1;
      k2 = 1;
    } else {
      i1 = 0;
      j1 = 1;
      k1 = 0;
      i2 = 1;
      j2 = 1;
      k2 = 0;
    }
  } // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
  // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
  // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
  // c = 1/6.


  var x1 = x0 - i1 + G3; // Offsets for second corner

  var y1 = y0 - j1 + G3;
  var z1 = z0 - k1 + G3;
  var x2 = x0 - i2 + 2 * G3; // Offsets for third corner

  var y2 = y0 - j2 + 2 * G3;
  var z2 = z0 - k2 + 2 * G3;
  var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner

  var y3 = y0 - 1 + 3 * G3;
  var z3 = z0 - 1 + 3 * G3; // Work out the hashed gradient indices of the four simplex corners

  i &= 255;
  j &= 255;
  k &= 255;
  var gi0 = gradP[i + perm[j + perm[k]]];
  var gi1 = gradP[i + i1 + perm[j + j1 + perm[k + k1]]];
  var gi2 = gradP[i + i2 + perm[j + j2 + perm[k + k2]]];
  var gi3 = gradP[i + 1 + perm[j + 1 + perm[k + 1]]]; // Calculate the contribution from the four corners

  var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;

  if (t0 < 0) {
    n0 = 0;
  } else {
    t0 *= t0;
    n0 = t0 * t0 * gi0.dot3(x0, y0, z0); // (x,y) of grad3 used for 2D gradient
  }

  var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;

  if (t1 < 0) {
    n1 = 0;
  } else {
    t1 *= t1;
    n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
  }

  var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;

  if (t2 < 0) {
    n2 = 0;
  } else {
    t2 *= t2;
    n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
  }

  var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;

  if (t3 < 0) {
    n3 = 0;
  } else {
    t3 *= t3;
    n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
  } // Add contributions from each corner to get the final noise value.
  // The result is scaled to return values in the interval [-1,1].


  return 32 * (n0 + n1 + n2 + n3);
}

; // ##### Perlin noise stuff

function fade(t) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(a, b, t) {
  return (1 - t) * a + t * b;
} // 2D Perlin Noise


function perlin2(x, y) {
  // Find unit grid cell containing point
  var X = Math.floor(x),
      Y = Math.floor(y); // Get relative xy coordinates of point within that cell

  x = x - X;
  y = y - Y; // Wrap the integer cells at 255 (smaller integer period can be introduced here)

  X = X & 255;
  Y = Y & 255; // Calculate noise contributions from each of the four corners

  var n00 = gradP[X + perm[Y]].dot2(x, y);
  var n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
  var n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
  var n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1); // Compute the fade curve value for x

  var u = fade(x); // Interpolate the four results

  return lerp(lerp(n00, n10, u), lerp(n01, n11, u), fade(y));
}

; // 3D Perlin Noise

function perlin3(x, y, z) {
  // Find unit grid cell containing point
  var X = Math.floor(x),
      Y = Math.floor(y),
      Z = Math.floor(z); // Get relative xyz coordinates of point within that cell

  x = x - X;
  y = y - Y;
  z = z - Z; // Wrap the integer cells at 255 (smaller integer period can be introduced here)

  X = X & 255;
  Y = Y & 255;
  Z = Z & 255; // Calculate noise contributions from each of the eight corners

  var n000 = gradP[X + perm[Y + perm[Z]]].dot3(x, y, z);
  var n001 = gradP[X + perm[Y + perm[Z + 1]]].dot3(x, y, z - 1);
  var n010 = gradP[X + perm[Y + 1 + perm[Z]]].dot3(x, y - 1, z);
  var n011 = gradP[X + perm[Y + 1 + perm[Z + 1]]].dot3(x, y - 1, z - 1);
  var n100 = gradP[X + 1 + perm[Y + perm[Z]]].dot3(x - 1, y, z);
  var n101 = gradP[X + 1 + perm[Y + perm[Z + 1]]].dot3(x - 1, y, z - 1);
  var n110 = gradP[X + 1 + perm[Y + 1 + perm[Z]]].dot3(x - 1, y - 1, z);
  var n111 = gradP[X + 1 + perm[Y + 1 + perm[Z + 1]]].dot3(x - 1, y - 1, z - 1); // Compute the fade curve value for x, y, z

  var u = fade(x);
  var v = fade(y);
  var w = fade(z); // Interpolate

  return lerp(lerp(lerp(n000, n100, u), lerp(n001, n101, u), w), lerp(lerp(n010, n110, u), lerp(n011, n111, u), w), v);
}

;
},{}],"KT6z":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Generator = void 0;

var _math = require("./utils/math");

var _config = require("../config");

var _noise = require("./utils/noise");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __chunkId = 0;

var Generator = /*#__PURE__*/function () {
  function Generator(game) {
    _classCallCheck(this, Generator);

    this.game = game; // this.seed = Date.now();

    this.seed = 1636721068016;
    console.log(this.seed);
    (0, _noise.seed)(this.seed);
    this.chunks = [];
    this.destroyedOres = [];
    this.settings = [];
    this.range = [new _math.Vector2(1, 0), new _math.Vector2(-1, 0), new _math.Vector2(0, 1), new _math.Vector2(0, -1), new _math.Vector2(1, 1), new _math.Vector2(-1, -1), new _math.Vector2(-1, 1), new _math.Vector2(1, -1), new _math.Vector2(1, -1), new _math.Vector2(-1, 1), new _math.Vector2(0, 0)];
  }

  _createClass(Generator, [{
    key: "generateChunksAt",
    value: function generateChunksAt(position) {
      var _this = this;

      var pos = position.div(_config.Config.SPRITE_SIZE * _config.Config.CHUNK_SIZE).apply(Math.floor);

      if (pos.add(new _math.Vector2(.5, .5)).mul(_config.Config.SPRITE_SIZE * 5).distance(position) > 100) {
        this.range.map(function (p) {
          if (!_this.chunks.find(function (c) {
            return _math.Vector2.compare(c.pos, pos.add(p));
          })) {
            var chunk = _this.createChunk(pos.add(p));

            if (chunk) _this.chunks.push(chunk);
          }
        });
      }

      this.chunks.map(function (chunk, index) {
        if (position.distance(chunk.pos.mul(_config.Config.SPRITE_SIZE * _config.Config.CHUNK_SIZE)) > 900) {
          _this.game.removeChildrenByGroupName(chunk.group);

          _this.chunks.splice(index, 1);
        }
      });
    }
  }, {
    key: "createChunk",
    value: function createChunk(pos) {
      // if (pos.x < 0 || pos.x > Config.WORLD_WIDTH / Config.CHUNK_SIZE || pos.y < 0 || pos.y > Config.WORLD_HEIGHT / Config.CHUNK_SIZE)
      if (pos.y < 0 || pos.y > _config.Config.WORLD_HEIGHT / _config.Config.CHUNK_SIZE) return;
      var ores = [[null]];
      __chunkId++;

      for (var y = 0; y < _config.Config.CHUNK_SIZE; y++) {
        ores.push([]);

        for (var x = 0; x < _config.Config.CHUNK_SIZE; x++) {
          ores[y].push(null);

          var _y = y + pos.y * _config.Config.CHUNK_SIZE;

          var _x = x + pos.x * _config.Config.CHUNK_SIZE;

          for (var i = 0; i < this.settings.length; i++) {
            var gen = this.settings[i];
            var div = gen.divider || 10;
            var value = (+(0, _noise.perlin2)((x + pos.x * _config.Config.CHUNK_SIZE) / div, (y + pos.y * _config.Config.CHUNK_SIZE) / div) + 1) / 1.5; // if (!(_x == Math.floor(Config.WORLD_WIDTH / 2) && (_y == 0 || _y == 1 || _y == 2))) {

            if (value >= gen.value[0] && value <= gen.value[1] && _y >= gen.height[0] && _y <= gen.height[1]) ores[y][x] = gen.ore; // }
          }

          var inChunkId = [x, y, pos.x, pos.y].join("-");

          if (ores[y][x] && this.destroyedOres.indexOf(inChunkId) < 0) {
            var o = new ores[y][x](new _math.Vector2(_x, _y));
            o.inChunkId = inChunkId;
            o.group = "chunk-".concat(__chunkId);
            this.game.add(o);
          }
        }
      }

      this.game.initChildren();
      return {
        group: "chunk-".concat(__chunkId),
        pos: pos
      };
    }
  }, {
    key: "destroyOre",
    value: function destroyOre(inChunkId) {
      this.destroyedOres.push(inChunkId);
    }
  }]);

  return Generator;
}();

exports.Generator = Generator;
},{"./utils/math":"NgPq","../config":"FxBD","./utils/noise":"xNw6"}],"Udax":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = void 0;

var _Asset = require("./Asset");

var _Container2 = require("./components/Container");

var _Gamepad = require("./events/Gamepad");

var _Physics = require("./Physics");

var _Renderer = require("./Renderer");

var _math = require("./utils/math");

var _Generator = require("./Generator");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Game = /*#__PURE__*/function (_Container) {
  _inherits(Game, _Container);

  var _super = _createSuper(Game);

  function Game() {
    var _this;

    _classCallCheck(this, Game);

    _this = _super.call(this);
    _this.gamepad = new _Gamepad.Gamepad();
    _this.camera = {
      position: _math.Vector2.zero(),
      offset: _math.Vector2.zero(),
      startShakeElapsed: 0,
      shaking: false,
      shakeAmplitude: 2,
      follow: function follow(pos, lerp) {
        if (lerp) this.position.lerp(pos, lerp);else this.position.copy(pos);
      },
      shake: function shake(amplitude) {
        this.shakeAmplitude = amplitude || 2;

        if (!this.shaking) {
          this.shaking = true;
        }
      }
    };
    _this.assets = [];
    _this.clock = {
      elapsed: 0
    };
    _this.initListeners = [];
    _this.updateListeners = [];
    _this.renderListeners = [];
    _this.renderer = new _Renderer.Renderer(_assertThisInitialized(_this));
    _this.physics = new _Physics.Physics(_assertThisInitialized(_this));
    _this.generator = new _Generator.Generator(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Game, [{
    key: "loadAsset",
    value: function loadAsset(name, src, type) {
      this.assets.push(new _Asset.Asset(name, src, type));
    }
  }, {
    key: "getAssetByName",
    value: function getAssetByName(name) {
      return this.assets.find(function (asset) {
        return asset.name == name;
      });
    }
  }, {
    key: "removeChildById",
    value: function removeChildById(id, listenerId) {
      _get(_getPrototypeOf(Game.prototype), "removeChildById", this).call(this, id);

      this.gamepad.removeListenerById(listenerId || id);
    }
  }, {
    key: "initChildren",
    value: function initChildren() {
      _get(_getPrototypeOf(Game.prototype), "initChildren", this).call(this, this);
    }
  }, {
    key: "addInit",
    value: function addInit(listener) {
      this.initListeners.push(listener);
    }
  }, {
    key: "addUpdate",
    value: function addUpdate(listener) {
      this.updateListeners.push(listener);
    }
  }, {
    key: "addRender",
    value: function addRender(listener) {
      this.renderListeners.push(listener);
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      // Init
      this.initListeners.map(function (listener) {
        return listener();
      });
      this.initChildren();

      var loop = function loop() {
        requestAnimationFrame(loop);

        _this2.renderer.render();

        _this2.clock.elapsed++;

        if (!_this2.camera.shaking) {
          _this2.camera.startShakeElapsed = _this2.clock.elapsed;

          _this2.camera.offset.lerp(_math.Vector2.zero(), .2);
        } else {
          if ((_this2.clock.elapsed - _this2.camera.startShakeElapsed) % 20 == 0) _this2.camera.shaking = false;

          _this2.camera.offset.copy(_this2.camera.offset.add(new _math.Vector2((0, _math.random)(-_this2.camera.shakeAmplitude, _this2.camera.shakeAmplitude), (0, _math.random)(-_this2.camera.shakeAmplitude, _this2.camera.shakeAmplitude))));
        } // Update


        _this2.physics.update();

        _this2.callChildren("update", _this2);

        _this2.updateListeners.map(function (listener) {
          return listener(_this2.clock);
        });

        _this2.callChildren("render", _this2, _this2.renderer);

        _this2.renderListeners.map(function (listener) {
          return listener(_this2.renderer);
        });

        _this2.renderer.renderParticles(_this2);
      };

      loop(); // Canvas update

      window.addEventListener("resize", function () {
        _this2.renderer.updateAspect();
      });
    }
  }]);

  return Game;
}(_Container2.Container);

exports.Game = Game;
},{"./Asset":"heGh","./components/Container":"Pspv","./events/Gamepad":"lnBr","./Physics":"XTEA","./Renderer":"iCpn","./utils/math":"NgPq","./Generator":"KT6z"}],"jj1k":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _Point2 = require("./Point");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Text = /*#__PURE__*/function (_Point) {
  _inherits(Text, _Point);

  var _super = _createSuper(Text);

  function Text(name, text, props) {
    var _this;

    _classCallCheck(this, Text);

    _this = _super.call(this, name, props);
    _this.text = text;
    _this.font = (props === null || props === void 0 ? void 0 : props.font) || "18px Pixel";
    _this.color = (props === null || props === void 0 ? void 0 : props.color) || "#fff";
    return _this;
  }

  _createClass(Text, [{
    key: "render",
    value: function render(game, renderer) {
      _get(_getPrototypeOf(Text.prototype), "render", this).call(this, game, renderer);

      game.renderer.drawText(Object.assign({}, this));
    }
  }]);

  return Text;
}(_Point2.Point);

exports.Text = Text;
},{"./Point":"kmMG"}],"o9hB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = void 0;

var _math = require("../utils/math");

var _Container2 = require("./Container");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __id = 0;

var Group = /*#__PURE__*/function (_Container) {
  _inherits(Group, _Container);

  var _super = _createSuper(Group);

  function Group(name, position) {
    var _this;

    _classCallCheck(this, Group);

    _this = _super.call(this);
    _this.id = "".concat(name, "-").concat(__id++);
    _this.type = "group";
    _this.name = (0, _math.standardName)(name);
    _this.position = position || _math.Vector2.zero();
    _this.visible = true;
    _this.allowUpdateChildren = true;
    return _this;
  }

  _createClass(Group, [{
    key: "init",
    value: function init(game) {
      this.initChildren(game);
    }
  }, {
    key: "update",
    value: function update(game) {
      if (this.allowUpdateChildren) this.callChildren("update", game);
    }
  }, {
    key: "render",
    value: function render(game) {
      if (this.visible) this.callChildren("render", game);
    }
  }]);

  return Group;
}(_Container2.Container);

exports.Group = Group;
},{"../utils/math":"NgPq","./Container":"Pspv"}],"XaJu":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Game = require("./Game");

Object.keys(_Game).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Game[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Game[key];
    }
  });
});

var _Point = require("./components/Point");

Object.keys(_Point).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Point[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Point[key];
    }
  });
});

var _Sprite = require("./components/Sprite");

Object.keys(_Sprite).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Sprite[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Sprite[key];
    }
  });
});

var _Text = require("./components/Text");

Object.keys(_Text).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Text[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Text[key];
    }
  });
});

var _Group = require("./components/Group");

Object.keys(_Group).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Group[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Group[key];
    }
  });
});
},{"./Game":"Udax","./components/Point":"kmMG","./components/Sprite":"SuzK","./components/Text":"jj1k","./components/Group":"o9hB"}],"zRqz":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpawnParticles = SpawnParticles;
exports.Particle = void 0;

var _math = require("../utils/math");

var _config = require("../../config");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Particle = /*#__PURE__*/function () {
  function Particle(position, settings) {
    var _this = this;

    _classCallCheck(this, Particle);

    var c = settings === null || settings === void 0 ? void 0 : settings.colors;
    this.color = c ? c[Math.floor((0, _math.random)(0, c.length))] : _config.Color.BLACK;
    this.opacity = 1;
    this.downOpacity = (settings === null || settings === void 0 ? void 0 : settings.downOpacity) || 0;
    this.position = new _math.Vector2(position.x, position.y);
    this.rotation = 0;
    var v = settings === null || settings === void 0 ? void 0 : settings.velocity;
    var rv = settings === null || settings === void 0 ? void 0 : settings.rotationVelocity;
    this.velocity = v ? v() : new _math.Vector2((0, _math.random)(-5, 5), (0, _math.random)(-10, 5));
    this.rotationVelocity = rv ? rv() : (0, _math.random)(-.1, .1);
    var s = settings === null || settings === void 0 ? void 0 : settings.size;
    this.size = (s ? s : [.5, 1.2])[Math.floor((0, _math.random)(0, 2))];
    this.gravity = (settings === null || settings === void 0 ? void 0 : settings.gravity) === undefined ? _config.Config.PARTICLES_GRAVITY : settings === null || settings === void 0 ? void 0 : settings.gravity;
    this.downSize = (settings === null || settings === void 0 ? void 0 : settings.downSize) || .01;
    this.render = (settings === null || settings === void 0 ? void 0 : settings.render) ? settings === null || settings === void 0 ? void 0 : settings.render : function (renderer, part) {
      renderer.drawRect({
        color: _this.color,
        width: _this.size * .2,
        height: _this.size * .2,
        position: _this.position,
        rotation: _this.rotation,
        layer: "particles"
      });
    };
  }

  _createClass(Particle, [{
    key: "update",
    value: function update(game) {
      this.velocity.y += this.gravity;
      this.rotation += this.rotationVelocity;
      this.size -= this.downSize;
      this.opacity -= this.downOpacity;
      this.velocity.x *= .99;
      this.velocity.y *= .99;
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }]);

  return Particle;
}();

exports.Particle = Particle;

function SpawnParticles(game, position, settings) {
  var box = settings === null || settings === void 0 ? void 0 : settings.box;

  for (var i = (settings === null || settings === void 0 ? void 0 : settings.count) || 10; i--;) {
    game.renderer.particles.push(new Particle(position.expand().add(box ? box() : _math.Vector2.zero()), settings));
  }
}
},{"../utils/math":"NgPq","../../config":"FxBD"}],"uf1p":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Entity = void 0;

var _config = require("../../config");

var _engine = require("../../engine");

var _Particles = require("../../engine/components/Particles");

var _math = require("../../engine/utils/math");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Entity = /*#__PURE__*/function (_Sprite) {
  _inherits(Entity, _Sprite);

  var _super = _createSuper(Entity);

  function Entity(name, assetName, props) {
    var _this;

    _classCallCheck(this, Entity);

    _this = _super.call(this, name, assetName, props);
    _this.hp = (props === null || props === void 0 ? void 0 : props.hp) || 10;
    _this.moveSpeed = (props === null || props === void 0 ? void 0 : props.moveSpeed) || 5;
    _this.movement = new _math.Vector2();
    _this.allowMove = true;
    _this.allowAnimate = true;
    _this.digOffsetFactor = .2;
    return _this;
  }

  _createClass(Entity, [{
    key: "init",
    value: function init(game) {
      _get(_getPrototypeOf(Entity.prototype), "init", this).call(this, game);

      this.collider.type = "dynamic";
    }
  }, {
    key: "update",
    value: function update(game) {
      _get(_getPrototypeOf(Entity.prototype), "update", this).call(this, game);

      if (!this.allowMove) {
        this.movement.set();
        this.velocity.set();
      }

      this.offset.lerp(_math.Vector2.zero(), this.digOffsetFactor);
      this.animate(game);
    }
  }, {
    key: "dig",
    value: function dig(game, damage, speed, level, direction) {
      var successOreHit = false;

      if (this.collider.collidesWith != null && this.collider.collidesWith.any) {
        var ore = game.getChildById(this.collider.collidesWith.id, true); // const tool = tools[this.toolLevel.toString()];

        if (ore == undefined) return false;

        if (this.collider.collidesWith[direction] && this.position.distance(ore.position) < _config.Config.SPRITE_SIZE * 2 && game.clock.elapsed % speed == 0) {
          ore.hit(game, damage, level);
          successOreHit = level >= ore.needToolLevel;
          if (direction == "right") this.offset = new _math.Vector2(10, 0);else if (direction == "left") this.offset = new _math.Vector2(-10, 0);else if (direction == "top") this.offset = new _math.Vector2(0, -10);else if (direction == "bottom") this.offset = new _math.Vector2(0, 10);
        }
      }

      this.collider.collidesWith = null;
      return successOreHit;
    }
  }, {
    key: "move",
    value: function move() {
      if (this.movement.x != 0) this.flip.x = this.movement.x < 0;
      this.velocity.x = this.movement.normalize().x * this.moveSpeed;
      this.velocity.y = this.movement.normalize().y * this.moveSpeed;
    }
  }, {
    key: "animate",
    value: function animate(game) {
      if (!this.allowAnimate) return;
      if (this.velocity.x != 0 || this.velocity.y != 0) this.playAnimation(game, this.name + "-walk");else this.playAnimation(game, this.name + "-stay");
    }
  }, {
    key: "spawnText",
    value: function spawnText(game, text, offset) {
      (0, _Particles.SpawnParticles)(game, this.position.add((0, _math.safeValue)(offset, new _math.Vector2(0, -30))), {
        // custom: new Text("store-text", text, { font: "22px Pixel" }),
        render: function render(renderer, part) {
          renderer.drawText({
            text: text,
            font: "22px Pixel",
            position: part.position,
            opacity: part.size,
            layer: "particles"
          });
        },
        size: [5, 5],
        count: 1,
        gravity: 0,
        velocity: function velocity() {
          return new _math.Vector2(0, -1.5);
        },
        downSize: .08,
        box: function box() {
          return new _math.Vector2((0, _math.random)(-10, 10), (0, _math.random)(-10, 10));
        }
      });
    }
  }]);

  return Entity;
}(_engine.Sprite);

exports.Entity = Entity;
},{"../../config":"FxBD","../../engine":"XaJu","../../engine/components/Particles":"zRqz","../../engine/utils/math":"NgPq"}],"gi9E":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UI = exports.Button = void 0;

var _config = require("../../config");

var _math = require("../utils/math");

var _Particles = require("./Particles");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Button = /*#__PURE__*/function () {
  function Button(width, height, layer, assetName, allowScale) {
    _classCallCheck(this, Button);

    this.width = (0, _math.safeValue)(width, 1);
    this.height = (0, _math.safeValue)(height, 1);
    this.position = _math.Vector2.zero();
    this.assetName = assetName || "interact";
    this.layer = layer || "game";
    this.animatedPosY = 0;
    this.allowScale = (0, _math.safeValue)(allowScale, true);
  }

  _createClass(Button, [{
    key: "render",
    value: function render(game) {
      this.animatedPosY = (0, _math.lerp)(this.animatedPosY, 0, .2);
      game.renderer.drawSprite({
        texture: (0, _math.asImage)(game.getAssetByName(this.assetName)),
        width: this.width,
        height: this.height,
        position: this.position.add(new _math.Vector2(0, this.animatedPosY)),
        scale: _math.Vector2.all(this.allowScale ? .7 : 1),
        layer: this.layer
      });
    }
  }, {
    key: "click",
    value: function click() {
      this.animatedPosY = 10;
    }
  }]);

  return Button;
}();

exports.Button = Button;

var UI = /*#__PURE__*/function () {
  // slotFocused: number
  // slotsCount: number
  // slotsRawFocused: number
  // slotsRawsCount: number
  function UI() {
    _classCallCheck(this, UI);

    this.game = null;
    this.enabled = true;
    this.allowSelectSlots = true;
    this.focused = {
      row: 0,
      slot: 0
    };
    this.template = [1]; // this.slotFocused = 0;
    // this.slotsCount = 1;
    // this.slotsRawFocused = 0;
    // this.slotsRawsCount = 1;
  }

  _createClass(UI, [{
    key: "init",
    value: function init(game) {
      var _this = this;

      this.game = game;
      game.gamepad.onAnyKeyDown("ui-listener", function (name) {
        if (_this.allowSelectSlots && _this.enabled) switch (name) {
          case "right":
            _this.focused.slot++;

            _this.bounds();

            break;

          case "left":
            _this.focused.slot--;

            _this.bounds();

            break;

          case "up":
            _this.focused.row--;

            _this.bounds();

            break;

          case "down":
            _this.focused.row++;

            _this.bounds();

            break;
        }
      });
    }
  }, {
    key: "bounds",
    value: function bounds() {
      if (this.focused.row < 0) this.focused.row = this.template.length - 1;else if (this.focused.row > this.template.length - 1) this.focused.row = 0;
      if (this.focused.slot > this.template[this.focused.row] - 1) this.focused.slot = 0;else if (this.focused.slot < 0) this.focused.slot = this.template[this.focused.row] - 1;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.game || !this.enabled) return;
    }
  }, {
    key: "updateTemplate",
    value: function updateTemplate(template) {
      this.template = template.filter(function (t) {
        return t > 0;
      });
    }
  }, {
    key: "renderSlot",
    value: function renderSlot(pos, row, slot, render, width, height, ghost) {
      if (!this.game || !this.enabled) return;
      var focused = this.focused.row == row && this.focused.slot == slot;
      render();

      if (focused || ghost) {
        this.game.renderer.drawRect({
          color: "rgba(0, 0, 0, 0)",
          width: (0, _math.safeValue)(width, 1),
          height: (0, _math.safeValue)(height, 1),
          position: pos.apply(Math.floor),
          stroke: {
            width: 4,
            color: _config.Color.ORANGE
          },
          opacity: ghost && !focused ? .2 : 1,
          layer: "ui"
        });
      }
    }
  }, {
    key: "renderDescriptionUI",
    value: function renderDescriptionUI(props, game, renderer) {
      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);
      var margin = 6;
      var lineHeight = 22; // Container

      renderer.drawSprite({
        texture: (0, _math.asImage)(game.getAssetByName("description-ui")),
        position: new _math.Vector2(0, size * 3).add(windowCenter),
        width: 7,
        height: 5,
        layer: "ui"
      }); // Icon

      props.renderIcon(new _math.Vector2(-2.5 * size + size / 2, size + 70).add(windowCenter)); // Texts

      var title = (0, _math.wrapText)(props.title, 26); // Title

      renderer.drawText({
        text: title.text,
        font: "20px Pixel",
        position: new _math.Vector2(-size * 1.3, size + 70 - size / 2 + 15).add(windowCenter),
        centered: false,
        color: props.titleColor || "#fff",
        layer: "ui"
      }); // Specials

      renderer.drawText({
        text: props.specials.join("\n"),
        color: _config.Color.ORANGE,
        position: new _math.Vector2(-size * 1.3, size + 70 + margin + (title.wrapCount >= 1 ? lineHeight : 0)).add(windowCenter),
        centered: false,
        layer: "ui"
      }); // Description

      renderer.drawText({
        text: (0, _math.wrapText)(props.description, 31).text,
        position: new _math.Vector2(-size * 1.3, size + 70 + lineHeight + margin * 2 + lineHeight * title.wrapCount + lineHeight * (props.specials.length - 1)).add(windowCenter),
        centered: false,
        layer: "ui"
      });
    }
  }, {
    key: "spawnMessageText",
    value: function spawnMessageText(game, text) {
      (0, _Particles.SpawnParticles)(game, new _math.Vector2(20, innerHeight - 40), {
        // custom: new Text("store-text", text, { font: "22px Pixel" }),
        render: function render(renderer, part) {
          renderer.drawText({
            text: text,
            font: "22px Pixel",
            position: part.position,
            opacity: part.size,
            layer: "ui",
            centered: false
          });
        },
        size: [5, 5],
        count: 1,
        gravity: 0,
        rotationVelocity: function rotationVelocity() {
          return (0, _math.random)(-.02, .02);
        },
        velocity: function velocity() {
          return new _math.Vector2(0, -1.5);
        },
        downSize: .08
      });
    }
  }]);

  return UI;
}();

exports.UI = UI;
},{"../../config":"FxBD","../utils/math":"NgPq","./Particles":"zRqz"}],"c1Ag":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;

var _config = require("../../config");

var _engine = require("../../engine");

var _math = require("../../engine/utils/math");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Item = /*#__PURE__*/function (_Sprite) {
  _inherits(Item, _Sprite);

  var _super = _createSuper(Item);

  function Item(name, assetName, position, props) {
    var _this;

    _classCallCheck(this, Item);

    _this = _super.call(this, name, assetName, Object.assign(Object.assign({}, props), {
      colliderType: "dynamic",
      position: position.expand()
    }));
    _this.allowPickup = true;
    _this.picked = false;
    _this.liveStartElapsed = 0;
    _this.nearOnInit = false;
    _this.collider.width = 6 * _config.Config.SPRITE_SCALE;
    _this.collider.height = 6 * _config.Config.SPRITE_SCALE;
    return _this;
  }

  _createClass(Item, [{
    key: "init",
    value: function init(game) {
      _get(_getPrototypeOf(Item.prototype), "init", this).call(this, game);

      this.liveStartElapsed = game.clock.elapsed;
      this.layer = "particles";
      this.velocity.set((0, _math.random)(-8, 8), (0, _math.random)(-8, 8));
      this.acceleration.copy(_math.Vector2.all(.8));
      if (this.checkDistanceToPlayer(game.getChildById("player"), _config.Config.PICKUP_DISTANCE * 2)) this.nearOnInit = true;
    }
  }, {
    key: "update",
    value: function update(game) {
      _get(_getPrototypeOf(Item.prototype), "update", this).call(this, game);

      if (!game.renderer.inCameraViewport(this.position)) {
        if (game.clock.elapsed - this.liveStartElapsed >= _config.Config.RAW_LIVE_TIME) game.removeChildById(this.id);
      } else {
        this.liveStartElapsed = game.clock.elapsed;
      }

      if (this.allowPickup) {
        this.followPlayer(game, game.getChildById("player"));
        this.collideWidthOtherItems([].concat(_toConsumableArray(game.getChildrenByName("raw")), _toConsumableArray(game.getChildrenByName("item"))));
      }
    }
  }, {
    key: "pickup",
    value: function pickup(game, player, count) {
      player.pickup(game, this, this.name, count);
    }
  }, {
    key: "followPlayer",
    value: function followPlayer(game, player) {
      if (!player) return;
      if (!this.checkDistanceToPlayer(player)) this.nearOnInit = false;
      if (this.nearOnInit) return;

      if (!this.picked && this.checkDistanceToPlayer(player)) {
        this.pickup(game, player, 1);
        this.picked = true;
      } else if (this.picked && player.wire.distance(this.position) > _config.Config.PICKUP_DISTANCE) {
        this.pickup(game, player, -1);
        this.picked = false;
      }

      if (!this.picked) return;
      this.moveTo(player.wire);
      game.renderer.drawLine({
        color: _config.ItemSettings[this.name] ? _config.ItemSettings[this.name].lineColor : "#fff",
        width: 2,
        points: [this.position, player.position],
        layer: "bg"
      });
    }
  }, {
    key: "checkDistanceToPlayer",
    value: function checkDistanceToPlayer(player, distance) {
      if (player) return player.position.distance(this.position) < (distance || _config.Config.PICKUP_DISTANCE);
    }
  }, {
    key: "collideWidthOtherItems",
    value: function collideWidthOtherItems(items) {
      var _this2 = this;

      if (!this.picked) return;

      _toConsumableArray(items).filter(function (item) {
        return item.picked && !(0, _math.compareNames)(item.id, _this2.id);
      }).map(function (item, index) {
        if (item.position.distance(_this2.position) < 8 * _config.Config.SPRITE_SCALE) {
          item.position.copy(item.position.add(item.position.sub(_this2.position).normalize()));
        }
      });
    }
  }, {
    key: "moveTo",
    value: function moveTo(position) {
      this.velocity.copy(this.velocity.add(position.sub(this.position).mul(.04)));
    }
  }]);

  return Item;
}(_engine.Sprite);

exports.Item = Item;
},{"../../config":"FxBD","../../engine":"XaJu","../../engine/utils/math":"NgPq"}],"p04f":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RobotItem = void 0;

var _math = require("../../engine/utils/math");

var _Item2 = require("./Item");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RobotItem = /*#__PURE__*/function (_Item) {
  _inherits(RobotItem, _Item);

  var _super = _createSuper(RobotItem);

  function RobotItem(position) {
    _classCallCheck(this, RobotItem);

    return _super.call(this, "item-robot", "robot-stay", position, {
      scale: new _math.Vector2(.9, .8)
    });
  }

  return RobotItem;
}(_Item2.Item);

exports.RobotItem = RobotItem;
},{"../../engine/utils/math":"NgPq","./Item":"c1Ag"}],"DqRi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Robot = void 0;

var _config = require("../../config");

var _Particles = require("../../engine/components/Particles");

var _UI = require("../../engine/components/UI");

var _math = require("../../engine/utils/math");

var _RobotItem = require("../item/RobotItem");

var _Entity2 = require("./Entity");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Robot = /*#__PURE__*/function (_Entity) {
  _inherits(Robot, _Entity);

  var _super = _createSuper(Robot);

  function Robot(position) {
    var _this;

    _classCallCheck(this, Robot);

    _this = _super.call(this, "robot", "robot-stay", {
      position: position.expand(),
      scale: _math.Vector2.zero()
    });
    _this.pickupButton = new _UI.Button();
    _this.playerIsNear = false;
    _this.movement = new _math.Vector2(0, 1);
    _this.allowAnimate = false;

    _this.acceleration.set(.95, .95);

    _this.breaked = false;
    _this.initElapsed = 0;
    _this.allowPickup = false;
    _this.digOffsetFactor = .1;
    return _this;
  }

  _createClass(Robot, [{
    key: "init",
    value: function init(game) {
      var _this2 = this;

      _get(_getPrototypeOf(Robot.prototype), "init", this).call(this, game);

      this.scale.set();
      this.initElapsed = game.clock.elapsed;
      game.gamepad.onKeyDown(this.id, "enter", function () {
        if (!_this2.playerIsNear || !_this2.allowPickup) return; // Pickup robot

        _this2.pickupButton.click();

        _this2.pickup(game);

        console.log(true);
      });
    }
  }, {
    key: "update",
    value: function update(game) {
      _get(_getPrototypeOf(Robot.prototype), "update", this).call(this, game); // if ((game.clock.elapsed - this.initElapsed) % Config.ROBOT_ALLOW_PICKUP_DELAY == 0 && !this.allowPickup)


      if (this.scale.mul(10).apply(Math.round).x >= 10 && !this.allowPickup) this.allowPickup = true;

      if (!game.renderer.inCameraViewport(this.position)) {
        this.velocity.set();
        return;
      }

      this.checkPlayerDistance(game);
      if (!this.breaked) this._move();
      if (!this.collider.collidesWith) return;
      var ore = game.getChildById(this.collider.collidesWith.id);
      if (!ore) return; // If robot cant destroy ore

      if (ore.needToolLevel > 2 && !this.breaked) {
        this.breaked = true;
      }

      this.dig(game, _config.Config.ROBOT_DAMAGE, _config.Config.ROBOT_HIT_SPEED, 2, "bottom");
    }
  }, {
    key: "render",
    value: function render(game, renderer) {
      _get(_getPrototypeOf(Robot.prototype), "render", this).call(this, game, renderer);

      this.scale.lerp(_math.Vector2.all(), .1); // Pickup button

      if (this.playerIsNear) {
        this.pickupButton.position = new _math.Vector2(0, -90).add(this.position);
        this.pickupButton.render(game);
        game.renderer.drawText({
          text: "Подобрать",
          position: new _math.Vector2(0, -50).add(this.position)
        });
      } // Smoke


      if (this.breaked) this.smoke(game);
    }
  }, {
    key: "_move",
    value: function _move() {
      this.velocity.copy(this.velocity.add(this.movement.mul(.2)));
    }
  }, {
    key: "smoke",
    value: function smoke(game) {
      if (game.clock.elapsed % 20 == 0) {
        (0, _Particles.SpawnParticles)(game, this.position, {
          render: function render(renderer, part) {
            renderer.drawRect({
              color: part.color,
              position: part.position,
              rotation: part.rotation,
              width: part.size / 5,
              height: part.size / 5,
              opacity: part.opacity
            });
          },
          colors: ["rgba(50, 50, 50, .8)"],
          count: 1,
          size: [1, 1.5],
          velocity: function velocity() {
            return new _math.Vector2((0, _math.random)(-1, 1), (0, _math.random)(-1, -3));
          },
          box: function box() {
            return new _math.Vector2((0, _math.random)(-10, 10), (0, _math.random)(-10, 10));
          },
          rotationVelocity: function rotationVelocity() {
            return (0, _math.random)(-1, 1) * .01;
          },
          downSize: -.025,
          downOpacity: .008,
          gravity: .01
        });
      }
    }
  }, {
    key: "checkPlayerDistance",
    value: function checkPlayerDistance(game) {
      var player = game.getChildById("player");
      if (!player) return;
      this.playerIsNear = player.position.distance(this.position) < _config.Config.ROBOT_PICKUP_DISTANCE;
    }
  }, {
    key: "pickup",
    value: function pickup(game) {
      game.add(new _RobotItem.RobotItem(this.position));
      game.initChildren();
      game.removeChildById(this.id);
      this.playerIsNear = false;
    }
  }]);

  return Robot;
}(_Entity2.Entity);

exports.Robot = Robot;
},{"../../config":"FxBD","../../engine/components/Particles":"zRqz","../../engine/components/UI":"gi9E","../../engine/utils/math":"NgPq","../item/RobotItem":"p04f","./Entity":"uf1p"}],"IsGb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Audio = void 0;

var _messages = _interopRequireDefault(require("../../messages"));

var _math = require("../utils/math");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Audio = /*#__PURE__*/function () {
  function Audio() {
    _classCallCheck(this, Audio);

    this.assetName = null;
    this.audio = null;
  }

  _createClass(Audio, [{
    key: "play",
    value: function play(game, assetName, toStart) {
      this.assetName = assetName;
      this.audio = (0, _math.asAudio)(game.getAssetByName(assetName));

      if (!this.audio) {
        console.error(_messages.default.err.audioPlayError(assetName));
        return;
      }

      if ((0, _math.safeValue)(toStart, true)) this.audio.currentTime = 0;
      this.audio.play();
    }
  }]);

  return Audio;
}();

exports.Audio = Audio;
},{"../../messages":"g97P","../utils/math":"NgPq"}],"p1IV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = exports.MaxToolLevel = void 0;

var _config = require("../../config");

var _math = require("../../engine/utils/math");

var _Entity2 = require("./Entity");

var _Robot = require("./Robot");

var _Audio = require("../../engine/components/Audio");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MaxToolLevel = 4;
exports.MaxToolLevel = MaxToolLevel;
var tools = {
  "1": {
    speed: 16,
    damage: 2
  },
  "2": {
    speed: 16,
    damage: 4
  },
  "3": {
    speed: 10,
    damage: 3
  },
  "4": {
    speed: 14,
    damage: 8
  },
  "5": {
    speed: 5,
    damage: 20
  }
};

var Player = /*#__PURE__*/function (_Entity) {
  _inherits(Player, _Entity);

  var _super = _createSuper(Player);

  function Player() {
    var _this;

    _classCallCheck(this, Player);

    _this = _super.call(this, "player", "player-stay", {
      position: new _math.Vector2(_config.Config.WORLD_WIDTH * _config.Config.SPRITE_SIZE / 2, -_config.Config.SPRITE_SIZE)
    });
    _this.audio = new _Audio.Audio();
    _this.wire = _this.position.expand();
    _this.inventory = {
      totalCount: 0,
      slots: {}
    };
    _this.hasBottle = false;
    _this.toolLevel = 5;
    _this.damageAnimatedOpacity = 0;
    window.addEventListener("keydown", function (e) {
      if (e.code == "KeyT") {
        _this.moveSpeed = _this.moveSpeed == 5 ? 90 : 5;
        _this.collider.collidable = !_this.collider.collidable;
      }
    });
    return _this;
  }

  _createClass(Player, [{
    key: "init",
    value: function init(game) {
      var _this2 = this;

      _get(_getPrototypeOf(Player.prototype), "init", this).call(this, game);

      this.collider.width = 10 * _config.Config.SPRITE_SCALE;
      this.collider.height = 10 * _config.Config.SPRITE_SCALE;
      this.collider.offset = new _math.Vector2(3, 0); // Set robot

      game.gamepad.onKeyDown(this.id, "enter", function () {
        _this2.placeRobot(game);
      });
    }
  }, {
    key: "update",
    value: function update(game) {
      _get(_getPrototypeOf(Player.prototype), "update", this).call(this, game);

      if (!this.allowMove) return;
      this.movement.set(+game.gamepad.keys.right - +game.gamepad.keys.left, +game.gamepad.keys.down - +game.gamepad.keys.up);
      this.move();
      this.pullWire(); // Foot steps

      this.footsStep(game); // Slow
      // this.moveSpeed = this.checkItemInInventory("raw-nerius") ? 2 : 5;
      // Dig

      var tool = tools[this.toolLevel.toString()];
      if (this.movement.x != 0) this.dig(game, tool.damage, tool.speed, this.toolLevel, this.movement.x > 0 ? "right" : "left");else if (this.movement.y != 0) this.dig(game, tool.damage, tool.speed, this.toolLevel, this.movement.y > 0 ? "bottom" : "top"); //

      this.damageAnimatedOpacity = (0, _math.lerp)(this.damageAnimatedOpacity, 0, .05);
      this.bounds();
    }
  }, {
    key: "render",
    value: function render(game, renderer) {
      _get(_getPrototypeOf(Player.prototype), "render", this).call(this, game, renderer);

      this.renderUI(game, renderer);
    }
  }, {
    key: "renderUI",
    value: function renderUI(game, renderer) {
      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2); // Place robot text

      if (this.checkItemInInventory("item-robot")) renderer.drawText({
        text: "[OK] - установить",
        position: new _math.Vector2(0, 150).add(windowCenter),
        layer: "ui"
      }); // Tool level

      renderer.drawSprite({
        texture: (0, _math.asImage)(game.getAssetByName("tools")),
        position: new _math.Vector2(size, innerHeight - size),
        layer: "ui"
      });
      renderer.drawText({
        text: this.toolLevel + "ур.",
        position: new _math.Vector2(size, innerHeight - size).add(_math.Vector2.all(size * .3)),
        font: "22px Pixel",
        layer: "ui"
      }); // Bottle

      if (this.hasBottle) renderer.drawSprite({
        texture: (0, _math.asImage)(game.getAssetByName("bottle")),
        position: new _math.Vector2(size * 2 + 20, innerHeight - size),
        layer: "ui"
      }); // Damage vignette

      renderer.drawSprite({
        texture: (0, _math.asImage)(game.getAssetByName("damage")),
        width: innerWidth / _config.Config.SPRITE_SIZE,
        height: innerHeight / _config.Config.SPRITE_SIZE,
        position: new _math.Vector2(innerWidth / 2, innerHeight / 2),
        layer: "ui",
        opacity: this.damageAnimatedOpacity
      });
    }
  }, {
    key: "bounds",
    value: function bounds() {
      // World bounds
      var worldWidth = Math.floor(_config.Config.WORLD_WIDTH * _config.Config.SPRITE_SIZE); // By width

      if (this.position.x < 0) this.position.x = 0;else if (this.position.x > worldWidth) this.position.x = worldWidth; // Dome bounds

      var halfDiameter = _config.Config.DOME_DIAMETER / 2;

      if (this.position.x > _config.Config.WORLD_X_CENTER - halfDiameter + 40 && this.position.x < _config.Config.WORLD_X_CENTER + halfDiameter - 40) {
        if (this.position.y < -_config.Config.SPRITE_SIZE / 2) {
          if (this.position.y < -_config.Config.GROUND_HEIGHT) {
            this.position.y = -_config.Config.GROUND_HEIGHT;
          }

          if (this.position.x < _config.Config.WORLD_X_CENTER - halfDiameter + 48) this.position.x = _config.Config.WORLD_X_CENTER - halfDiameter + 48;
          if (this.position.x > _config.Config.WORLD_X_CENTER + halfDiameter - 48) this.position.x = _config.Config.WORLD_X_CENTER + halfDiameter - 48;
        }
      } else {
        // By height
        if (this.position.y < -_config.Config.SPRITE_SIZE / 2) this.position.y = -_config.Config.SPRITE_SIZE / 2;
      }
    }
  }, {
    key: "pickup",
    value: function pickup(game, item, type, count) {
      this.inventory.totalCount += count;
      this.inventory.slots[type] = this.inventory.slots[type] || {
        count: 0,
        instances: []
      };
      this.inventory.slots[type].count += count;
      var instances = this.inventory.slots[type].instances;
      this.inventory.slots[type].instances.push(item);
      this.inventory.slots[type].instances = instances.filter(function (i, index) {
        return instances.indexOf(i) == index;
      });
    }
  }, {
    key: "pullWire",
    value: function pullWire() {
      if (this.position.distance(this.wire) > _config.Config.WIRE_LENGTH) {
        this.wire.copy(this.wire.add(this.position.sub(this.wire).normalize().mul(this.moveSpeed)));
      }
    }
  }, {
    key: "hit",
    value: function hit(game, damage) {
      this.hp -= damage;
      this.damageAnimatedOpacity = 1.5;
      game.camera.shake();
    }
  }, {
    key: "upgradeTool",
    value: function upgradeTool(levelUp) {
      if (this.toolLevel < MaxToolLevel) this.toolLevel += levelUp;
    }
  }, {
    key: "checkItemInInventory",
    value: function checkItemInInventory(name) {
      return this.inventory.slots[name] && this.inventory.slots[name].count > 0;
    }
  }, {
    key: "placeRobot",
    value: function placeRobot(game) {
      if (!this.checkItemInInventory("item-robot")) return; // Sub. robots count in inventory

      this.inventory.slots["item-robot"].count--; // Remove robot inventory instance

      game.removeChildById(this.inventory.slots["item-robot"].instances[0].id);
      this.inventory.slots["item-robot"].instances.splice(0, 1); // Place robot

      game.add(new _Robot.Robot(this.position.div(_config.Config.SPRITE_SIZE).add(_math.Vector2.all(.5)).apply(Math.floor).mul(_config.Config.SPRITE_SIZE)));
      game.initChildren();
    }
  }, {
    key: "footsStep",
    value: function footsStep(game) {
      var _a, _b, _c, _d;

      var allow = this.velocity.x > 0 && !((_a = this.collider.collidesWith) === null || _a === void 0 ? void 0 : _a.right) || this.velocity.x < 0 && !((_b = this.collider.collidesWith) === null || _b === void 0 ? void 0 : _b.left) || this.velocity.y < 0 && !((_c = this.collider.collidesWith) === null || _c === void 0 ? void 0 : _c.top) || this.velocity.y > 0 && !((_d = this.collider.collidesWith) === null || _d === void 0 ? void 0 : _d.bottom);

      if (game.clock.elapsed % 20 == 0 && allow) {
        this.audio.play(game, "step-".concat(Math.floor((0, _math.random)(1, 4))));
        if (this.audio.audio) this.audio.audio.volume = .5;
      }
    }
  }]);

  return Player;
}(_Entity2.Entity);

exports.Player = Player;
},{"../../config":"FxBD","../../engine/utils/math":"NgPq","./Entity":"uf1p","./Robot":"DqRi","../../engine/components/Audio":"IsGb"}],"ZerP":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initLevel = initLevel;

var _config = require("../config");

var _engine = require("../engine");

var _math = require("../engine/utils/math");

function initLevel(game) {
  var ground = game.add(new _engine.Sprite("ground", "ground", {
    width: 4,
    height: 4,
    position: new _math.Vector2(-_config.Config.SPRITE_SIZE * 10, -_config.Config.SPRITE_SIZE * .5 * 3),
    repeat: Math.round(_config.Config.WORLD_WIDTH) + 2,
    layer: "bg"
  }));

  function update(player) {
    var op = (1 - player.position.y / 240) * .3;
    ground.opacity = op > 0 ? op : 0;
  }

  return {
    update: update
  };
}
},{"../config":"FxBD","../engine":"XaJu","../engine/utils/math":"NgPq"}],"ze6F":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ore = void 0;

var _math = require("../../engine/utils/math");

var _engine = require("../../engine");

var _config = require("../../config");

var _Particles = require("../../engine/components/Particles");

var _Audio = require("../../engine/components/Audio");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Ore = /*#__PURE__*/function (_Sprite) {
  _inherits(Ore, _Sprite);

  var _super = _createSuper(Ore);

  function Ore(type, position) {
    var _this;

    _classCallCheck(this, Ore);

    var _a;

    _this = _super.call(this, "ore-".concat(type), type, {
      position: position.add(new _math.Vector2(0, 0)).mul(_config.Config.SPRITE_PIXEL_SIZE * _config.Config.SPRITE_SCALE),
      colliderType: "solid"
    });
    _this.audio = new _Audio.Audio();
    _this.oreType = type;
    _this.tilePosition = position;
    _this.inChunkId = "";
    var settings = _config.OreSettings[type];
    _this.hp = settings ? settings.hp : _config.OreSettings["stone"].hp;
    _this.needToolLevel = ((_a = _config.OreSettings[type]) === null || _a === void 0 ? void 0 : _a.tool) || 1;
    _this.unbreakable = false;
    _this.particlesColors = [_config.Color.BLACK];
    _this.animatedScale = 1;
    _this.darkenFactor = 1;
    _this.randomRotate = true;
    _this.randomFlipX = true;
    return _this;
  }

  _createClass(Ore, [{
    key: "init",
    value: function init(game) {
      _get(_getPrototypeOf(Ore.prototype), "init", this).call(this, game);

      if (this.randomRotate) this.rotation = Math.floor((0, _math.random)(1, 5)) * Math.PI;
      if (this.randomFlipX) this.flip.x = Boolean(Math.floor((0, _math.random)(0, 2)));
      if (_config.Config.ALLOW_DARK) this.visible = false;
    }
  }, {
    key: "update",
    value: function update(game) {
      _get(_getPrototypeOf(Ore.prototype), "update", this).call(this, game);

      this.animatedScale = (0, _math.lerp)(this.animatedScale, 1, .2);
      this.scale.set(this.animatedScale, this.animatedScale); // this.collideWidth(game, game.getChildById<Player>("player"));
    }
  }, {
    key: "render",
    value: function render(game, renderer) {
      _get(_getPrototypeOf(Ore.prototype), "render", this).call(this, game, renderer);

      if (_config.Config.ALLOW_DARK) this.darken(game);
    }
  }, {
    key: "hit",
    value: function hit(game, damage, toolLevel) {
      // Break audio
      if (this.hp > 0) this.audio.play(game, "stone-hit");
      if (this.unbreakable || toolLevel < this.needToolLevel) return;
      this.hp -= damage;
      this.animatedScale = .8;
      (0, _Particles.SpawnParticles)(game, this.position, {
        colors: this.particlesColors,
        size: [.2, .5],
        count: 6,
        box: function box() {
          return new _math.Vector2((0, _math.random)(-_config.Config.SPRITE_SIZE / 2, _config.Config.SPRITE_SIZE / 2), (0, _math.random)(-_config.Config.SPRITE_SIZE / 2, _config.Config.SPRITE_SIZE / 2));
        }
      });

      if (this.hp <= 0) {
        this.onBreak(game); // Destroy audio

        this.audio.play(game, "stone-break");
      }
    }
  }, {
    key: "onBreak",
    value: function onBreak(game) {
      (0, _Particles.SpawnParticles)(game, this.position, {
        colors: this.particlesColors
      });
      game.removeChildById(this.id);
      game.generator.destroyOre(this.inChunkId);
    }
  }, {
    key: "dropRawOre",
    value: function dropRawOre(game, rawOre, chancePercent) {
      var drop = true;
      if (chancePercent) drop = (0, _math.chance)(chancePercent);
      if (!drop) return;
      game.add(new rawOre(this.position.add(new _math.Vector2((0, _math.random)(-10, 10), (0, _math.random)(-10, 10)))));
      game.initChildren();
    }
  }, {
    key: "darken",
    value: function darken(game) {
      // const player = game.getChildById<Player>("player");
      // if (!player) return;
      var t = 1 - game.camera.position.y / 200;
      var d = game.camera.position.distance(this.position) - 200;
      this.darkenFactor = (d > 96 ? 1 : d / 96) + (t > 0 ? t : 0);
      if (this.darkenFactor < 1) this.opacity = 1 - this.darkenFactor; // game.renderer.drawRect(
      //     // `rgba(255, 0, 0, ${ this.darkenFactor })`,
      //     `rgba(15, 21, 49, ${ this.darkenFactor > 0 ? this.darkenFactor : 0  })`,
      //     1, 1,
      //     this.position, 0,
      // );

      this.visible = this.darkenFactor < .9;
    }
  }]);

  return Ore;
}(_engine.Sprite);

exports.Ore = Ore;
},{"../../engine/utils/math":"NgPq","../../engine":"XaJu","../../config":"FxBD","../../engine/components/Particles":"zRqz","../../engine/components/Audio":"IsGb"}],"e9U2":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stone = void 0;

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Stone = /*#__PURE__*/function (_Ore) {
  _inherits(Stone, _Ore);

  var _super = _createSuper(Stone);

  function Stone(position) {
    _classCallCheck(this, Stone);

    return _super.call(this, "stone", position); // this.hp = 10;
  }

  return Stone;
}(_Ore2.Ore);

exports.Stone = Stone;
},{"./Ore":"ze6F"}],"VBKr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FallingOre = void 0;

var _Particles = require("../../engine/components/Particles");

var _math = require("../../engine/utils/math");

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FallingOre = /*#__PURE__*/function (_Ore) {
  _inherits(FallingOre, _Ore);

  var _super = _createSuper(FallingOre);

  function FallingOre(type, position) {
    var _this;

    _classCallCheck(this, FallingOre);

    _this = _super.call(this, type, position);
    _this.elapsedBeforeFall = 0;
    _this.allowFall = false;
    _this.willFall = false;
    _this.allowGravity = false;
    return _this;
  }

  _createClass(FallingOre, [{
    key: "init",
    value: function init(game) {
      _get(_getPrototypeOf(FallingOre.prototype), "init", this).call(this, game);

      this.acceleration.y = .9;
    }
  }, {
    key: "update",
    value: function update(game) {
      _get(_getPrototypeOf(FallingOre.prototype), "update", this).call(this, game); // game.getChildrenByName<Ore>("ore").filter(ore=> this.id != ore.id).map(ore=> {
      //     const collide = game.physics.collide(this, ore);
      //     this.allowGravity = !collide.bottom;
      // this.offset.set(0, 20);
      // [0] - x
      // [1] - y
      // [2] - chunk x
      // [3] - chunk y
      // const oreChunkPos = ore.inChunkId.split("-").map(n=> +n);
      // const thisChunkPos = this.inChunkId.split("-").map(n=> +n);
      // if (thisChunkPos[2] == oreChunkPos[2] && thisChunkPos[3] == oreChunkPos[3]) {
      //     if (thisChunkPos[1] + 1 != oreChunkPos[1] && thisChunkPos[0] == oreChunkPos[0])
      //         this.offset.set(0, 20);
      // }
      // this.allowGravity = !(this.position.y > ore.position.y - Config.SPRITE_SIZE && ((this.position.x + Config.SPRITE_SIZE) > (ore.position.x - Config.SPRITE_SIZE)) && ore.position.x > this.position.x);
      // const collide = game.physics.collide(this, ore);
      // this.allowGravity = !collide.any;
      // this.collider.collidesWith = collide;
      // this.collideWidth(game, ore);
      // })
      // this.gravity(game, this.allowGravity);
      // console.log(this.collider.collidesWith?.bottom);
      // this.gravity(game, !this.collider.collidesWith?.bottom);

    }
  }, {
    key: "gravity",
    value: function gravity(game, allow) {
      // if (!this.collider.collidesWith?.bottom && this.collider.collidesWith?.id) {
      // if (!this.collider.collidesWith?.bottom) {
      if (allow) {
        // if (!this.willFall) {
        //     this.crumble(game);
        //     this.willFall = true;
        // }
        // if (!this.allowFall) {
        //     if ((game.clock.elapsed - this.elapsedBeforeFall) % Config.ORE_FALL_DELAY == 0)
        //         this.allowFall = true;
        // } else {
        this.velocity.y++; // this.collider.type = "dynamic";
        // }
      } else {
        this.velocity.y = 0; // this.allowFall = false;
        // this.willFall = false;
        // this.elapsedBeforeFall = game.clock.elapsed;
        // this.collider.type = "solid";
      } // this.collider.collidable = this.collider.collidesWith?.bottom || false;
      // this.collider.collidesWith = null;

    }
  }, {
    key: "crumble",
    value: function crumble(game) {
      (0, _Particles.SpawnParticles)(game, this.position.add(new _math.Vector2(0, 40)), {
        velocity: function velocity() {
          return new _math.Vector2((0, _math.random)(-2, 2), 0);
        },
        box: function box() {
          return new _math.Vector2((0, _math.random)(-40, 40), 0);
        },
        count: 5
      });
    }
  }]);

  return FallingOre;
}(_Ore2.Ore);

exports.FallingOre = FallingOre;
},{"../../engine/components/Particles":"zRqz","../../engine/utils/math":"NgPq","./Ore":"ze6F"}],"nAsK":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrackedStone = void 0;

var _FallingORe = require("./FallingORe");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CrackedStone = /*#__PURE__*/function (_FallingOre) {
  _inherits(CrackedStone, _FallingOre);

  var _super = _createSuper(CrackedStone);

  function CrackedStone(position) {
    _classCallCheck(this, CrackedStone);

    return _super.call(this, "cracked-stone", position); // this.hp = 6;
  }

  return CrackedStone;
}(_FallingORe.FallingOre);

exports.CrackedStone = CrackedStone;
},{"./FallingORe":"VBKr"}],"IUuf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeepStone = void 0;

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DeepStone = /*#__PURE__*/function (_Ore) {
  _inherits(DeepStone, _Ore);

  var _super = _createSuper(DeepStone);

  function DeepStone(position) {
    var _this;

    _classCallCheck(this, DeepStone);

    _this = _super.call(this, "deep-stone", position);
    _this.randomRotate = false; // this.needToolLevel = 2;
    // this.hp = 26

    return _this;
  }

  return DeepStone;
}(_Ore2.Ore);

exports.DeepStone = DeepStone;
},{"./Ore":"ze6F"}],"oILg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Raw = void 0;

var _math = require("../../engine/utils/math");

var _Item2 = require("../item/Item");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Raw = /*#__PURE__*/function (_Item) {
  _inherits(Raw, _Item);

  var _super = _createSuper(Raw);

  function Raw(type, position) {
    var _this;

    _classCallCheck(this, Raw);

    _this = _super.call(this, "".concat(type), type, position);
    _this.rawType = type;
    _this.foldToPosition = _math.Vector2.zero();
    return _this;
  }

  _createClass(Raw, [{
    key: "update",
    value: function update(game) {
      _get(_getPrototypeOf(Raw.prototype), "update", this).call(this, game);

      if (!this.allowPickup) {
        this.moveTo(this.foldToPosition);
        if (this.foldToPosition.distance(this.position) < 30) game.removeChildById(this.id);
      }
    }
  }]);

  return Raw;
}(_Item2.Item);

exports.Raw = Raw;
},{"../../engine/utils/math":"NgPq","../item/Item":"c1Ag"}],"lOfT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawCidium = void 0;

var _Raw2 = require("./Raw");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RawCidium = /*#__PURE__*/function (_Raw) {
  _inherits(RawCidium, _Raw);

  var _super = _createSuper(RawCidium);

  function RawCidium(position) {
    _classCallCheck(this, RawCidium);

    return _super.call(this, "raw-cidium", position);
  }

  return RawCidium;
}(_Raw2.Raw);

exports.RawCidium = RawCidium;
},{"./Raw":"oILg"}],"zVgn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cidium = void 0;

var _config = require("../../config");

var _RawCidium = require("../raws/RawCidium");

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Cidium = /*#__PURE__*/function (_Ore) {
  _inherits(Cidium, _Ore);

  var _super = _createSuper(Cidium);

  function Cidium(position) {
    var _this;

    _classCallCheck(this, Cidium);

    _this = _super.call(this, "cidium", position); // this.hp = 20;

    _this.particlesColors = [_config.Color.BLACK, _config.Color.YELLOW];
    return _this;
  }

  _createClass(Cidium, [{
    key: "onBreak",
    value: function onBreak(game) {
      _get(_getPrototypeOf(Cidium.prototype), "onBreak", this).call(this, game);

      this.dropRawOre(game, _RawCidium.RawCidium);
    }
  }]);

  return Cidium;
}(_Ore2.Ore);

exports.Cidium = Cidium;
},{"../../config":"FxBD","../raws/RawCidium":"lOfT","./Ore":"ze6F"}],"dSHS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecipeNames = exports.GearNames = exports.RawNames = void 0;

var _math = require("./engine/utils/math");

var prefixes = {
  raw: "Необработанный"
};
var RawNames = {
  "raw-cidium": {
    name: (0, _math.buildName)(prefixes.raw, "цидиум"),
    desc: "Жёлтая руда, которая непонятным образом выделяет энергию, если её правильно обработать. При этом её очень легко найти"
  },
  "raw-osmy": {
    name: (0, _math.buildName)(prefixes.raw, "осмий"),
    desc: "Осмий, кристалы, которые также есть и на земле. Казалось бы, ничего интересного, но вместе с цидиумом, осмий будет очень полезен"
  },
  "raw-grade-cidium": {
    name: (0, _math.buildName)(prefixes.raw, "второсортный цидиум"),
    desc: "Цидиум 2-го сорта, руда, иногда встречающаяся вместе с осмием"
  },
  "raw-antin": {
    name: (0, _math.buildName)(prefixes.raw, "антин"),
    desc: "Антин, крайне странная руда, имеющая красный оттенок. Предположительно кристалы, которые миллионы лет назад из-за вулканической активности. Не зря они расположены ближе к мантии"
  },
  "raw-rady": {
    name: (0, _math.buildName)(prefixes.raw, "радий"),
    desc: "Радий... Нам не удалось его подробно изучить. Известно только, то что он очень глубоко под землёй и излучает радиационный фон до 67.2 мк/ч, что выше нормы в 4 раза",
    special: "> Требуется специальная колба для сбора!"
  },
  "raw-nerius": {
    name: (0, _math.buildName)(prefixes.raw, "нериус"),
    desc: "Нериус, невероятно плотная руда, что значит она ещё и очень тяжёлая. 1см² весит около 300 грамм",
    special: "> Довольно сильно замедляет вас!"
  },
  "raw-manty": {
    name: "Мантий",
    desc: "Мантий... Это то, для чего ты здесь. Но будь осторожен, он очень горячий, до 1200 С°",
    special: "> Требуется специальная колба для сбора!"
  }
};
exports.RawNames = RawNames;
var GearNames = {
  "gear-storage": {
    name: "Хранилище",
    desc: ""
  },
  "gear-recycler": {
    name: "Переработчик",
    desc: ""
  },
  "gear-upgrader": {
    name: "Улучшатель",
    desc: ""
  }
};
exports.GearNames = GearNames;
var RecipeNames = {
  "storage-level-up": {
    name: "Улучшить хранилище",
    desc: "Улучшите своё хранилище для того, чтобы можно было хранить больше ресурсов и их типов."
  },
  "tool-level-up": {
    name: "Улучшить инструмент",
    desc: "Для того чтобы быстрее ломать руду прокачайте свой инструмент. Более новые уровни инструмента позволяют добывать больше типов руд"
  },
  "bottle": {
    name: "\"Специальная колба\"",
    desc: "Колба для сбора особо опасных руд. На пример таких, как радий"
  },
  "robot": {
    name: "Робот",
    desc: "Ваш лисный робот-компаньон. Копает небольшой тунель вниз. Безсилен против базальта"
  }
};
exports.RecipeNames = RecipeNames;
},{"./engine/utils/math":"NgPq"}],"IWn5":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gear = exports.MaxGearLevel = void 0;

var _config = require("../../config");

var _engine = require("../../engine");

var _Audio = require("../../engine/components/Audio");

var _Particles = require("../../engine/components/Particles");

var _UI = require("../../engine/components/UI");

var _math = require("../../engine/utils/math");

var _names = require("../../names");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MaxGearLevel = 3;
exports.MaxGearLevel = MaxGearLevel;

var Gear = /*#__PURE__*/function (_Sprite) {
  _inherits(Gear, _Sprite);

  var _super = _createSuper(Gear);

  function Gear(type, level, props) {
    var _this;

    _classCallCheck(this, Gear);

    _this = _super.call(this, type, [type, 1].join("-"), props);
    _this.width = _this.height = 2;
    _this.audio = new _Audio.Audio();
    _this.ui = new _UI.UI();
    _this.interactButton = new _UI.Button();
    _this.player = undefined;
    _this.gearType = type;
    _this.level = level;
    _this.playerIsNear = false;
    _this.allowInteract = true;
    _this.layer = "bg";
    _this.headerOffset = new _math.Vector2();
    _this.interactText = "";
    _this.closeText = "закрыть";
    return _this;
  }

  _createClass(Gear, [{
    key: "init",
    value: function init(game) {
      var _this2 = this;

      _get(_getPrototypeOf(Gear.prototype), "init", this).call(this, game);

      this.ui.init(game);
      this.ui.enabled = false;
      this.player = game.getChildById("player");
      game.gamepad.onKeyDown(this.id, "enter", function () {
        if (!_this2.playerIsNear) return;
        if (_this2.player) _this2.onInteract(game);
      });
    }
  }, {
    key: "update",
    value: function update(game) {
      _get(_getPrototypeOf(Gear.prototype), "update", this).call(this, game);

      this.checkInteract();
    }
  }, {
    key: "render",
    value: function render(game, renderer) {
      _get(_getPrototypeOf(Gear.prototype), "render", this).call(this, game, renderer);

      this.renderUI(game, renderer);

      if (this.playerIsNear && this.allowInteract) {
        var outlineAsset = game.getAssetByName([this.gearType, 1, "outline"].join("-")); // Draw gear outline

        renderer.drawSprite({
          texture: (0, _math.asImage)(outlineAsset),
          width: 2,
          height: 2,
          position: this.position,
          layer: this.layer,
          flip: this.flip
        });
        renderer.drawText({
          text: this.interactText,
          font: "22px Pixel",
          position: this.position.add(new _math.Vector2(0, -70))
        });
      }
    }
  }, {
    key: "renderUI",
    value: function renderUI(game, renderer) {
      this.ui.render();

      if (this.ui.enabled) {
        var size = _config.Config.SPRITE_SIZE;
        var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);
        renderer.drawRect({
          color: "rgba(0, 0, 0, .6)",
          width: innerWidth / _config.Config.SPRITE_SIZE,
          height: innerHeight / _config.Config.SPRITE_SIZE,
          position: new _math.Vector2(innerWidth / 2, innerHeight / 2),
          layer: "ui"
        }); // Container

        renderer.drawSprite({
          texture: (0, _math.asImage)(game.getAssetByName([this.gearType.replace("gear-", ""), "ui"].join("-"))),
          position: new _math.Vector2(0, -size).add(windowCenter),
          width: 7,
          height: 5,
          layer: "ui"
        }); // Preview

        renderer.drawSprite({
          texture: (0, _math.asImage)(game.getAssetByName([this.gearType, 1].join("-"))),
          position: new _math.Vector2(-size * 2, -size - 15).add(windowCenter).add(this.headerOffset),
          width: 2,
          height: 2,
          layer: "ui"
        }); // Title

        renderer.drawText({
          text: "".concat(_names.GearNames[this.name].name, " ").concat(this.level, "\u0443\u0440."),
          position: new _math.Vector2(-size * 1.2, -size - 15).add(windowCenter).add(this.headerOffset),
          centered: false,
          layer: "ui"
        }); // Close

        renderer.drawText({
          text: "[OK] - ".concat(this.closeText),
          position: new _math.Vector2(-size * 3 + 20, -size * 2 - 40).add(windowCenter).add(this.headerOffset),
          layer: "ui",
          centered: false
        });
      } // Draw interact button


      if (this.playerIsNear && !this.ui.enabled) {
        this.interactButton.position = this.position.add(new _math.Vector2(0, -110));
        this.interactButton.render(game);
      }
    }
  }, {
    key: "upgrade",
    value: function upgrade(game, levelUp) {
      if (this.level < MaxGearLevel) {
        this.level += levelUp;
        (0, _Particles.SpawnParticles)(game, this.position, {
          render: function render(renderer, part) {
            renderer.drawSprite({
              texture: (0, _math.asImage)(game.getAssetByName("level-up")),
              position: part.position,
              opacity: part.size,
              scale: _math.Vector2.all(.8),
              layer: "particles"
            });
          },
          velocity: function velocity() {
            return new _math.Vector2(0, -1.5);
          },
          size: [5, 5],
          downSize: .08,
          count: 1,
          gravity: 0
        });
      }
    }
  }, {
    key: "checkInteract",
    value: function checkInteract() {
      if (!this.player) return;
      this.playerIsNear = this.player.position.distance(this.position) < _config.Config.GEAR_INTERACT_DISTANCE;
      if (this.playerIsNear) this.player.allowMove = !this.ui.enabled;
    }
  }, {
    key: "onInteract",
    value: function onInteract(game) {
      this.interactButton.click();
    }
  }]);

  return Gear;
}(_engine.Sprite);

exports.Gear = Gear;
},{"../../config":"FxBD","../../engine":"XaJu","../../engine/components/Audio":"IsGb","../../engine/components/Particles":"zRqz","../../engine/components/UI":"gi9E","../../engine/utils/math":"NgPq","../../names":"dSHS"}],"kJJZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = require("../../config");

var _math = require("../../engine/utils/math");

var _Player = require("../entities/Player");

var _RobotItem = require("../item/RobotItem");

var _Gear = require("./Gear");

var _Recycler = require("./Recycler");

var recipes = function recipes(recycler) {
  return {
    // Storage up
    "storage-level-up": new _Recycler.Recipe({
      recipe: function recipe() {
        return [{
          "raw-cidium": 1,
          "raw-osmy": 1
        }, // { "raw-cidium": 6, "raw-osmy": 2 }, // Level 2
        {
          "raw-cidium": 12,
          "raw-osmy": 6,
          "raw-grade-cidium": 2
        } // Level 3
        ][recycler.storage.level - 1];
      },
      // On craft
      onCraft: function onCraft(game) {
        recycler.storage.upgrade(game, 1);
      },
      // Render icon
      icon: function icon(game, pos) {
        game.renderer.drawSprite({
          texture: (0, _math.asImage)(game.getAssetByName("gear-storage-1")),
          position: pos,
          width: 2,
          height: 2,
          scale: _math.Vector2.all(.7),
          layer: "ui"
        });
        game.renderer.drawText({
          text: "".concat(recycler.storage.level + 1, "\u0443\u0440."),
          position: pos.add(_math.Vector2.all(_config.Config.SPRITE_SIZE * .3)),
          layer: "ui"
        });
      },
      isRemoved: function isRemoved() {
        return recycler.storage.level >= _Gear.MaxGearLevel;
      }
    }),
    // Tool up
    "tool-level-up": new _Recycler.Recipe({
      recipe: function recipe() {
        var _a;

        return [{
          "raw-cidium": 4
        }, {
          "raw-cidium": 14,
          "raw-osmy": 4,
          "raw-grade-cidium": 1
        }, {
          "raw-cidium": 2,
          "raw-osmy": 8,
          "raw-grade-cidium": 4,
          "raw-antin": 3
        } // Level 4
        ][recycler.player ? ((_a = recycler.player) === null || _a === void 0 ? void 0 : _a.toolLevel) - 1 : 0];
      },
      onCraft: function onCraft() {
        if (!recycler.player) return;
        recycler.player.upgradeTool(1);
      },
      icon: function icon(game, pos) {
        if (!recycler.player) return;
        game.renderer.drawSprite({
          texture: (0, _math.asImage)(game.getAssetByName("tools")),
          position: pos,
          layer: "ui"
        });
        game.renderer.drawText({
          text: "".concat(recycler.player.toolLevel + 1, "\u0443\u0440."),
          position: pos.add(_math.Vector2.all(_config.Config.SPRITE_SIZE * .3)),
          layer: "ui"
        });
      },
      isRemoved: function isRemoved() {
        return recycler.player ? recycler.player.toolLevel >= _Player.MaxToolLevel : false;
      }
    }),
    // Craft bottle
    "bottle": new _Recycler.Recipe({
      recipe: function recipe() {
        return {
          "raw-osmy": 8,
          "raw-antin": 4,
          "raw-nerius": 3
        };
      },
      onCraft: function onCraft() {
        if (!recycler.player) return;
        recycler.player.hasBottle = true;
      },
      icon: function icon(game, pos) {
        game.renderer.drawSprite({
          texture: (0, _math.asImage)(game.getAssetByName("bottle")),
          position: pos,
          width: .8,
          height: .8,
          layer: "ui"
        });
      },
      isRemoved: function isRemoved() {
        return recycler.player ? recycler.player.hasBottle : false;
      }
    }),
    // Craft robot
    "robot": new _Recycler.Recipe({
      // recipe: ()=> ({ "raw-osmy": 6, "raw-cidium": 12, "raw-nerius": 5 } as any),
      recipe: function recipe() {
        return {
          "raw-osmy": 1,
          "raw-cidium": 1,
          "raw-nerius": 1
        };
      },
      onCraft: function onCraft(game) {
        game.add(new _RobotItem.RobotItem(recycler.position));
        game.initChildren();
      },
      icon: function icon(game, pos) {
        game.renderer.drawSprite({
          texture: (0, _math.asImage)(game.getAssetByName("robot-stay")),
          position: pos,
          layer: "ui"
        });
      },
      isRemoved: function isRemoved() {
        return recycler.player ? recycler.player.hasBottle : false;
      }
    })
  };
};

var _default = recipes;
exports.default = _default;
},{"../../config":"FxBD","../../engine/utils/math":"NgPq","../entities/Player":"p1IV","../item/RobotItem":"p04f","./Gear":"IWn5","./Recycler":"m2sq"}],"m2sq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Recipe = exports.Recycler = void 0;

var _config = require("../../config");

var _math = require("../../engine/utils/math");

var _names = require("../../names");

var _Gear2 = require("./Gear");

var _recipes = _interopRequireDefault(require("./recipes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Recycler = /*#__PURE__*/function (_Gear) {
  _inherits(Recycler, _Gear);

  var _super = _createSuper(Recycler);

  function Recycler(level, storage, props) {
    var _this;

    _classCallCheck(this, Recycler);

    _this = _super.call(this, "gear-recycler", level, props);
    _this.ui.focused.slot = 1;
    _this.ui.focused.row = 10;
    _this.storage = storage;
    _this.recipes = (0, _recipes.default)(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Recycler, [{
    key: "onInteract",
    value: function onInteract(game) {
      _get(_getPrototypeOf(Recycler.prototype), "onInteract", this).call(this, game); // Open


      this.ui.enabled = true; // Close

      if (this.ui.focused.slot == 0 && this.ui.focused.row == 0 && this.ui.enabled) {
        this.ui.enabled = false;
        this.ui.focused.slot = 1;
        this.ui.focused.row = 10;
      }

      if (this.ui.enabled && this.ui.focused.slot == 1 && this.ui.focused.row == 10) {
        this.ui.focused.slot = 0;
        this.ui.focused.row = 0;
      }

      if (this.ui.focused.row == 1) {
        var recipesKeys = this.getRecipesKeys();
        var recipe = this.recipes[recipesKeys[this.ui.focused.slot]]; // Craft

        if (recipe.canCraft(this.storage)) {
          recipe.onCraft(game, this.storage);
          this.ui.enabled = false;
          this.audio.play(game, "craft");
        } else {
          this.ui.spawnMessageText(game, "Недостатачно ресурсов");
        }
      }
    }
  }, {
    key: "renderUI",
    value: function renderUI(game, renderer) {
      var _this2 = this;

      _get(_getPrototypeOf(Recycler.prototype), "renderUI", this).call(this, game, renderer);

      var recipesKeys = this.getRecipesKeys();
      this.closeText = this.ui.focused.row == 0 && this.ui.focused.slot == 0 ? "закрыть" : "изготовить";
      this.ui.allowSelectSlots = true;
      this.ui.updateTemplate([1, recipesKeys.length]);
      if (!this.ui.enabled) return;
      this.renderRecipesUI(recipesKeys, game, renderer);
      if (this.ui.focused.row != 1) return; // Get recipe by focused slot

      var currentRecipe = this.recipes[recipesKeys[this.ui.focused.slot]];
      var recipeDescription = _names.RecipeNames[recipesKeys[this.ui.focused.slot]];
      if (!recipeDescription) return;
      var selectedRecipe = this.recipes[recipesKeys[this.ui.focused.slot]].recipe();

      var isInStockCount = function isInStockCount(slotName) {
        return _this2.storage.contains.slots[slotName];
      };

      this.ui.renderDescriptionUI({
        title: recipeDescription.name,
        titleColor: currentRecipe.canCraft(this.storage) ? "#fff" : _config.Color.RED,
        specials: ["Ресурсы:"].concat(_toConsumableArray(Object.keys(selectedRecipe).map(function (slotName) {
          var count = isInStockCount(slotName);
          var recipeItem = _names.RawNames[slotName];
          return "> ".concat((recipeItem === null || recipeItem === void 0 ? void 0 : recipeItem.name) || "ERROR", " ").concat(count || 0, " \u0438\u0437 ").concat(selectedRecipe[slotName]);
        }))),
        description: recipeDescription.desc,
        renderIcon: function renderIcon(pos) {
          currentRecipe.icon(game, pos);
        }
      }, game, renderer);
    }
  }, {
    key: "renderRecipesUI",
    value: function renderRecipesUI(recipes, game, renderer) {
      var _this3 = this;

      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);
      var closePosition = new _math.Vector2(size * 1.5 + 20, -size - 20).add(windowCenter);
      this.ui.renderSlot(closePosition, 0, 0, function () {
        renderer.drawSprite({
          // texture: asImage(game.getAssetByName("close")),
          texture: (0, _math.asImage)(game.getAssetByName("button")),
          position: closePosition,
          width: 2,
          layer: "ui"
        });
        renderer.drawText({
          text: "Закрыть",
          position: closePosition,
          layer: "ui"
        });
      }, 1.75);
      recipes.map(function (recipeName, index) {
        // Render recipe
        var pos = new _math.Vector2(index * size - size * 2, 0).add(windowCenter);

        _this3.ui.renderSlot(pos, 1, index, function () {
          // Render recipe icon
          _this3.recipes[recipeName].icon(game, pos); // Darken


          if (!_this3.recipes[recipeName].canCraft(_this3.storage)) renderer.drawRect({
            position: pos,
            color: _config.Color.STONE_LAYER_COLOR,
            layer: "ui",
            opacity: .5,
            width: .95,
            height: .95
          });
        });
      });
    }
  }, {
    key: "getRecipesKeys",
    value: function getRecipesKeys() {
      var _this4 = this;

      return Object.keys(this.recipes).filter(function (name) {
        return !_this4.recipes[name].isRemoved();
      });
    }
  }]);

  return Recycler;
}(_Gear2.Gear);

exports.Recycler = Recycler;

var Recipe = /*#__PURE__*/function () {
  function Recipe(props) {
    _classCallCheck(this, Recipe);

    this.recipe = props.recipe;
    this._onCraft = props.onCraft;
    this.icon = props.icon;

    this.isRemoved = props.isRemoved || function () {
      return false;
    };
  }

  _createClass(Recipe, [{
    key: "canCraft",
    value: function canCraft(storage) {
      var recipes = Object.keys(this.recipe()); // let can = false;

      var hasCount = 0;

      for (var i = 0; i < recipes.length; i++) {
        if (storage.contains.slots[recipes[i]] >= this.recipe()[recipes[i]]) hasCount++;
      }

      return hasCount >= recipes.length; // return can;
    }
  }, {
    key: "onCraft",
    value: function onCraft(game, storage) {
      var recipes = Object.keys(this.recipe());

      for (var i = 0; i < recipes.length; i++) {
        storage.contains.slots[recipes[i]] -= this.recipe()[recipes[i]];
      }

      this._onCraft(game);
    }
  }]);

  return Recipe;
}();

exports.Recipe = Recipe;
},{"../../config":"FxBD","../../engine/utils/math":"NgPq","../../names":"dSHS","./Gear":"IWn5","./recipes":"kJJZ"}],"A77P":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawAntin = void 0;

var _Raw2 = require("./Raw");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RawAntin = /*#__PURE__*/function (_Raw) {
  _inherits(RawAntin, _Raw);

  var _super = _createSuper(RawAntin);

  function RawAntin(position) {
    _classCallCheck(this, RawAntin);

    return _super.call(this, "raw-antin", position);
  }

  return RawAntin;
}(_Raw2.Raw);

exports.RawAntin = RawAntin;
},{"./Raw":"oILg"}],"QB2i":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawGradeCidium = void 0;

var _Raw2 = require("./Raw");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RawGradeCidium = /*#__PURE__*/function (_Raw) {
  _inherits(RawGradeCidium, _Raw);

  var _super = _createSuper(RawGradeCidium);

  function RawGradeCidium(position) {
    _classCallCheck(this, RawGradeCidium);

    return _super.call(this, "raw-grade-cidium", position);
  }

  return RawGradeCidium;
}(_Raw2.Raw);

exports.RawGradeCidium = RawGradeCidium;
},{"./Raw":"oILg"}],"i9gv":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawNerius = void 0;

var _Raw2 = require("./Raw");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RawNerius = /*#__PURE__*/function (_Raw) {
  _inherits(RawNerius, _Raw);

  var _super = _createSuper(RawNerius);

  function RawNerius(position) {
    _classCallCheck(this, RawNerius);

    return _super.call(this, "raw-nerius", position);
  }

  _createClass(RawNerius, [{
    key: "update",
    value: function update(game) {
      _get(_getPrototypeOf(RawNerius.prototype), "update", this).call(this, game); // const player = game.getChildById<Player>("player");
      // if (!player) return;
      // player.moveSpeed = this.picked ? 2 : 5;

    }
  }]);

  return RawNerius;
}(_Raw2.Raw);

exports.RawNerius = RawNerius;
},{"./Raw":"oILg"}],"j943":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawOsmy = void 0;

var _Raw2 = require("./Raw");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RawOsmy = /*#__PURE__*/function (_Raw) {
  _inherits(RawOsmy, _Raw);

  var _super = _createSuper(RawOsmy);

  function RawOsmy(position) {
    _classCallCheck(this, RawOsmy);

    return _super.call(this, "raw-osmy", position);
  }

  return RawOsmy;
}(_Raw2.Raw);

exports.RawOsmy = RawOsmy;
},{"./Raw":"oILg"}],"FOX4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DangerRaw = void 0;

var _math = require("../../engine/utils/math");

var _Raw2 = require("./Raw");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DangerRaw = /*#__PURE__*/function (_Raw) {
  _inherits(DangerRaw, _Raw);

  var _super = _createSuper(DangerRaw);

  function DangerRaw(type, position) {
    _classCallCheck(this, DangerRaw);

    return _super.call(this, type, position);
  }

  _createClass(DangerRaw, [{
    key: "update",
    value: function update(game) {
      _get(_getPrototypeOf(DangerRaw.prototype), "update", this).call(this, game);

      var player = game.getChildById("player");
      if (!player) return;
      if (player.hasBottle) return; // If is picked, player get damage (1-2)

      if (game.clock.elapsed % 80 == 0 && this.picked) player.hit(game, Math.floor((0, _math.random)(1, 3)));
    }
  }]);

  return DangerRaw;
}(_Raw2.Raw);

exports.DangerRaw = DangerRaw;
},{"../../engine/utils/math":"NgPq","./Raw":"oILg"}],"yZ9h":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawRady = void 0;

var _DangerRaw2 = require("./DangerRaw");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RawRady = /*#__PURE__*/function (_DangerRaw) {
  _inherits(RawRady, _DangerRaw);

  var _super = _createSuper(RawRady);

  function RawRady(position) {
    _classCallCheck(this, RawRady);

    return _super.call(this, "raw-rady", position);
  }

  return RawRady;
}(_DangerRaw2.DangerRaw);

exports.RawRady = RawRady;
},{"./DangerRaw":"FOX4"}],"xA36":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Raws = void 0;

var _RawAntin = require("./objects/raws/RawAntin");

var _RawCidium = require("./objects/raws/RawCidium");

var _RawGradeCidium = require("./objects/raws/RawGradeCidium");

var _RawNerius = require("./objects/raws/RawNerius");

var _RawOsmy = require("./objects/raws/RawOsmy");

var _RawRady = require("./objects/raws/RawRady");

var Raws = {
  "raw-cidium": _RawCidium.RawCidium,
  "raw-osmy": _RawOsmy.RawOsmy,
  "raw-grade-cidium": _RawGradeCidium.RawGradeCidium,
  "raw-antin": _RawAntin.RawAntin,
  "raw-rady": _RawRady.RawRady,
  "raw-nerius": _RawNerius.RawNerius
};
exports.Raws = Raws;
},{"./objects/raws/RawAntin":"A77P","./objects/raws/RawCidium":"lOfT","./objects/raws/RawGradeCidium":"QB2i","./objects/raws/RawNerius":"i9gv","./objects/raws/RawOsmy":"j943","./objects/raws/RawRady":"yZ9h"}],"om7z":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Storage = void 0;

var _config = require("../../config");

var _math = require("../../engine/utils/math");

var _names = require("../../names");

var _objects = require("../../objects");

var _Gear2 = require("./Gear");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MaxStorageTotalCount;

(function (MaxStorageTotalCount) {
  MaxStorageTotalCount[MaxStorageTotalCount["1-level"] = 18] = "1-level";
  MaxStorageTotalCount[MaxStorageTotalCount["2-level"] = 28] = "2-level";
  MaxStorageTotalCount[MaxStorageTotalCount["3-level"] = 42] = "3-level";
})(MaxStorageTotalCount || (MaxStorageTotalCount = {}));

var Storage = /*#__PURE__*/function (_Gear) {
  _inherits(Storage, _Gear);

  var _super = _createSuper(Storage);

  function Storage(level, props) {
    var _this;

    _classCallCheck(this, Storage);

    _this = _super.call(this, "gear-storage", level, props);
    _this.contains = {
      totalCount: 0,
      slots: {}
    };
    _this.interactType = "view";
    _this.maxTotalCount = MaxStorageTotalCount["".concat(level, "-level")];
    _this.headerOffset = new _math.Vector2(0, -_config.Config.SPRITE_SIZE);
    _this.maxRowItemsCount = 5;
    _this.selectedSlotIndex = 0;
    return _this;
  }

  _createClass(Storage, [{
    key: "update",
    value: function update(game) {
      var _this2 = this;

      _get(_getPrototypeOf(Storage.prototype), "update", this).call(this, game);

      if (!this.player) return;
      this.interactType = this.player.inventory.totalCount == 0 || this.contains.totalCount >= this.maxTotalCount || this.filterRaws(this.player.inventory.slots).length == this.filterRaws(this.player.inventory.slots).filter(function (name) {
        return _config.ItemSettings[name].storage > _this2.level;
      }).length ? "view" : "store";
      this.interactText = this.interactType == "view" ? "Содержимое" : "Сложить";
      this.ui.allowSelectSlots = this.ui.enabled;
      if (this.ui.focused.row == 1) this.selectedSlotIndex = this.ui.focused.slot;
    }
  }, {
    key: "onInteract",
    value: function onInteract(game) {
      _get(_getPrototypeOf(Storage.prototype), "onInteract", this).call(this, game);

      if (this.ui.enabled && this.ui.focused.row == 0 && this.ui.focused.slot == 0) {
        var slotName = this.filterRaws(this.contains.slots)[this.selectedSlotIndex];
        this.drop(game, slotName, 1);
        return;
      }

      if (this.interactType == "store") {
        this.ui.enabled = false;
        this.store(game);
      } else if (this.interactType == "view") {
        if (!this.ui.enabled) {
          this.ui.focused.row = 1;
          this.ui.focused.slot = 0;
        }

        this.ui.enabled = !this.ui.enabled;
        if (this.ui.enabled) this.audio.play(game, "storage");
      }
    }
  }, {
    key: "upgrade",
    value: function upgrade(game, levelUp) {
      _get(_getPrototypeOf(Storage.prototype), "upgrade", this).call(this, game, levelUp);

      this.maxTotalCount = MaxStorageTotalCount["".concat(this.level, "-level")];
    }
  }, {
    key: "store",
    value: function store(game) {
      var _this3 = this;

      if (this.contains.totalCount >= this.maxTotalCount || !this.player) return;
      var storedCount = 0;
      var totalStoredCount = 0;
      var slotNames = this.filterRaws(this.player.inventory.slots).filter(function (name) {
        return _config.ItemSettings[name].storage <= _this3.level;
      }); // Storage level less then need

      if (this.filterRaws(this.player.inventory.slots).filter(function (name) {
        return _config.ItemSettings[name].storage > _this3.level;
      }).length > 0) this.player.spawnText(game, "Низкий уровень\nхранилища", new _math.Vector2(0, -90));
      slotNames.map(function (slot) {
        if (!_this3.player) return;
        _this3.contains.slots[slot] = _this3.contains.slots[slot] || 0; // Add items

        if (_this3.contains.totalCount >= _this3.maxTotalCount) {
          _this3.player.spawnText(game, "Хранилище перепольнено", new _math.Vector2(0, -50));

          return;
        }

        var rawInstances = _this3.player.inventory.slots[slot].instances;

        for (var i = 0; i < rawInstances.length; i++) {
          if (rawInstances[i] && rawInstances[i].picked) {
            rawInstances[i].allowPickup = false;
            rawInstances[i].picked = false;
            rawInstances[i].name.indexOf("raw") >= 0 ? rawInstances[i].foldToPosition = _this3.position : 0;
          }
        }

        storedCount = _this3.player.inventory.slots[slot].count + _this3.contains.totalCount <= _this3.maxTotalCount ? _this3.player.inventory.slots[slot].count : _this3.maxTotalCount - _this3.contains.totalCount;
        _this3.contains.slots[slot] += storedCount;
        _this3.contains.totalCount += storedCount;
        totalStoredCount += storedCount;
        _this3.player.inventory.totalCount -= storedCount;
        _this3.player.inventory.slots[slot].count -= storedCount;
      });
      if (slotNames.length <= 0) return; // Play store audio

      this.audio.play(game, "store");
      this.player.spawnText(game, totalStoredCount.toString());
    }
  }, {
    key: "drop",
    value: function drop(game, slotName, count) {
      if (!this.contains.slots[slotName]) return;
      this.contains.slots[slotName] -= count;
      this.contains.totalCount -= count;
      game.add(new _objects.Raws[slotName](this.position));
      game.initChildren();
      this.audio.play(game, "store", false);
    }
  }, {
    key: "renderUI",
    value: function renderUI(game, renderer) {
      _get(_getPrototypeOf(Storage.prototype), "renderUI", this).call(this, game, renderer);

      if (!this.ui.enabled) return;
      var slots = this.filterRaws(this.contains.slots);
      this.ui.updateTemplate([slots.length > 0 ? 1 : 0, slots.length]);

      if (!this.ui.template[0]) {
        this.ui.focused.row = 1;
        this.ui.focused.slot = 0;
      }

      this.closeText = this.ui.focused.row == 0 && this.ui.focused.slot == 0 ? "выбросить" : "закрыть";
      this.renderInventoryUI(slots, game, renderer);
      var name = slots[this.selectedSlotIndex];
      var raw = _names.RawNames[name];
      if (!raw) return;

      var oreSettings = _config.OreSettings[name.replace("raw-", "")];

      var special = [oreSettings ? "> \u041D\u0443\u0436\u0435\u043D \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 ".concat(oreSettings.tool || 1, "\u0443\u0440. \u0438 \u0432\u044B\u0448\u0435") : "> Можно найти", raw.special || ""].filter(function (t) {
        return t != "";
      }); // Render description

      this.ui.renderDescriptionUI({
        title: raw.name,
        specials: special,
        description: raw.desc,
        renderIcon: function renderIcon(pos) {
          renderer.drawSprite({
            texture: (0, _math.asImage)(game.getAssetByName(name)),
            position: pos,
            layer: "ui"
          });
        }
      }, game, renderer);
    }
  }, {
    key: "renderInventoryUI",
    value: function renderInventoryUI(slots, game, renderer) {
      var _this4 = this;

      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);

      if (slots.length != 0) {
        var closePosition = new _math.Vector2(size * 1.5 + 20, -size * 2 - 20).add(windowCenter);
        this.ui.renderSlot(closePosition, 0, 0, function () {
          renderer.drawSprite({
            // texture: asImage(game.getAssetByName("close")),
            texture: (0, _math.asImage)(game.getAssetByName("button")),
            position: closePosition,
            width: 2,
            layer: "ui"
          });
          renderer.drawText({
            text: "Выбросить x1",
            position: closePosition,
            layer: "ui"
          });
        }, 1.75);
      } // Draw count text


      renderer.drawText({
        text: "".concat(this.contains.totalCount, "/").concat(this.maxTotalCount),
        position: new _math.Vector2(-size * 1.2, -size * 2 + 10).add(windowCenter),
        color: this.contains.totalCount >= this.maxTotalCount ? _config.Color.RED : "#fff",
        centered: false,
        layer: "ui"
      });
      slots.map(function (slot, index) {
        var isOverflow = index > _this4.maxRowItemsCount - 1;
        var pos = new _math.Vector2(index * size - size * Math.floor(_this4.maxRowItemsCount / 2) + (isOverflow ? -size * _this4.maxRowItemsCount : 0), isOverflow ? size : 0).add(windowCenter).add(new _math.Vector2(0, -size));

        _this4.ui.renderSlot(pos, 1, index, function () {
          // Draw item sprite
          renderer.drawSprite({
            texture: (0, _math.asImage)(game.getAssetByName(slot)),
            position: pos,
            layer: "ui"
          }); // Draw item count text

          renderer.drawText({
            text: _this4.contains.slots[slot].toString(),
            position: pos.add(_math.Vector2.all(_config.Config.SPRITE_SIZE * .3)),
            layer: "ui"
          });
        }, 1, 1, _this4.selectedSlotIndex == index);
      });
    }
  }, {
    key: "filterRaws",
    value: function filterRaws(slots) {
      return Object.keys(slots).filter(function (name) {
        return name.indexOf("raw") >= 0 && (slots[name].count ? slots[name].count > 0 : slots[name] > 0);
      });
    }
  }]);

  return Storage;
}(_Gear2.Gear);

exports.Storage = Storage;
},{"../../config":"FxBD","../../engine/utils/math":"NgPq","../../names":"dSHS","../../objects":"xA36","./Gear":"IWn5"}],"ZpfZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDome = initDome;

var _config = require("../config");

var _engine = require("../engine");

var _math = require("../engine/utils/math");

var _Recycler = require("../objects/gear/Recycler");

var _Storage = require("../objects/gear/Storage");

function initDome(game) {
  var domePosition = new _math.Vector2(Math.round(_config.Config.WORLD_X_CENTER), -_config.Config.SPRITE_SIZE * 1.5);
  var storage = game.add(new _Storage.Storage(1, {
    position: domePosition.add(new _math.Vector2(-150, 0))
  })); // game.add<Sprite>(new Upgrader(1, {
  //     flip: { x: true, y: false },
  //     position: domePosition.add(new Vector2(50, -70))
  // }));

  game.add(new _Recycler.Recycler(1, storage, {
    flip: {
      x: true,
      y: false
    },
    position: domePosition.add(new _math.Vector2(140, 0))
  })); // Dome

  game.add(new _engine.Sprite("dome", "dome", {
    width: 8,
    height: 8,
    position: domePosition,
    layer: "particles"
  }));
}
},{"../config":"FxBD","../engine":"XaJu","../engine/utils/math":"NgPq","../objects/gear/Recycler":"m2sq","../objects/gear/Storage":"om7z"}],"Fgu4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Osmy = void 0;

var _config = require("../../config");

var _RawGradeCidium = require("../raws/RawGradeCidium");

var _RawOsmy = require("../raws/RawOsmy");

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Osmy = /*#__PURE__*/function (_Ore) {
  _inherits(Osmy, _Ore);

  var _super = _createSuper(Osmy);

  function Osmy(position) {
    var _this;

    _classCallCheck(this, Osmy);

    _this = _super.call(this, "osmy", position); // this.needToolLevel = 2;

    _this.randomRotate = false; // this.hp = 36;

    _this.particlesColors = [_config.Color.BLACK, _config.Color.BLUE];
    return _this;
  }

  _createClass(Osmy, [{
    key: "onBreak",
    value: function onBreak(game) {
      _get(_getPrototypeOf(Osmy.prototype), "onBreak", this).call(this, game);

      this.dropRawOre(game, _RawOsmy.RawOsmy);
      this.dropRawOre(game, _RawGradeCidium.RawGradeCidium, 100);
    }
  }]);

  return Osmy;
}(_Ore2.Ore);

exports.Osmy = Osmy;
},{"../../config":"FxBD","../raws/RawGradeCidium":"QB2i","../raws/RawOsmy":"j943","./Ore":"ze6F"}],"S9NJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Basalt = void 0;

var _config = require("../../config");

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Basalt = /*#__PURE__*/function (_Ore) {
  _inherits(Basalt, _Ore);

  var _super = _createSuper(Basalt);

  function Basalt(position) {
    var _this;

    _classCallCheck(this, Basalt);

    _this = _super.call(this, "basalt", position); // this.needToolLevel = 3;
    // this.hp = 40;

    _this.particlesColors = [_config.Color.GREY];
    return _this;
  }

  return Basalt;
}(_Ore2.Ore);

exports.Basalt = Basalt;
},{"../../config":"FxBD","./Ore":"ze6F"}],"P2Ir":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Antin = void 0;

var _config = require("../../config");

var _RawAntin = require("../raws/RawAntin");

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Antin = /*#__PURE__*/function (_Ore) {
  _inherits(Antin, _Ore);

  var _super = _createSuper(Antin);

  function Antin(position) {
    var _this;

    _classCallCheck(this, Antin);

    _this = _super.call(this, "antin", position); // this.needToolLevel = 3;
    // this.hp = 52;

    _this.particlesColors = [_config.Color.GREY, _config.Color.RED];
    return _this;
  }

  _createClass(Antin, [{
    key: "onBreak",
    value: function onBreak(game) {
      _get(_getPrototypeOf(Antin.prototype), "onBreak", this).call(this, game);

      this.dropRawOre(game, _RawAntin.RawAntin);
    }
  }]);

  return Antin;
}(_Ore2.Ore);

exports.Antin = Antin;
},{"../../config":"FxBD","../raws/RawAntin":"A77P","./Ore":"ze6F"}],"vVYW":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DangerOre = void 0;

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DangerOre = /*#__PURE__*/function (_Ore) {
  _inherits(DangerOre, _Ore);

  var _super = _createSuper(DangerOre);

  function DangerOre(type, position) {
    _classCallCheck(this, DangerOre);

    return _super.call(this, type, position);
  }

  _createClass(DangerOre, [{
    key: "hit",
    value: function hit(game, damage, level) {
      _get(_getPrototypeOf(DangerOre.prototype), "hit", this).call(this, game, damage, level);

      var player = game.getChildById("player");
      if (!player) return;
      if (!player.hasBottle) player.hit(game, 1);
    }
  }]);

  return DangerOre;
}(_Ore2.Ore);

exports.DangerOre = DangerOre;
},{"./Ore":"ze6F"}],"vPcC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rady = void 0;

var _config = require("../../config");

var _RawRady = require("../raws/RawRady");

var _DangerOre2 = require("./DangerOre");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Rady = /*#__PURE__*/function (_DangerOre) {
  _inherits(Rady, _DangerOre);

  var _super = _createSuper(Rady);

  function Rady(position) {
    var _this;

    _classCallCheck(this, Rady);

    _this = _super.call(this, "rady", position);
    _this.particlesColors = [_config.Color.GREY, _config.Color.GREEN];
    return _this;
  }

  _createClass(Rady, [{
    key: "onBreak",
    value: function onBreak(game) {
      _get(_getPrototypeOf(Rady.prototype), "onBreak", this).call(this, game);

      this.dropRawOre(game, _RawRady.RawRady);
    }
  }]);

  return Rady;
}(_DangerOre2.DangerOre);

exports.Rady = Rady;
},{"../../config":"FxBD","../raws/RawRady":"yZ9h","./DangerOre":"vVYW"}],"G4HC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurntBasalt = void 0;

var _config = require("../../config");

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BurntBasalt = /*#__PURE__*/function (_Ore) {
  _inherits(BurntBasalt, _Ore);

  var _super = _createSuper(BurntBasalt);

  function BurntBasalt(position) {
    var _this;

    _classCallCheck(this, BurntBasalt);

    _this = _super.call(this, "burnt-basalt", position); // this.needToolLevel = 4;
    // this.hp = 80;

    _this.particlesColors = [_config.Color.DARK_GREY];
    return _this;
  }

  return BurntBasalt;
}(_Ore2.Ore);

exports.BurntBasalt = BurntBasalt;
},{"../../config":"FxBD","./Ore":"ze6F"}],"rOTL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nerius = void 0;

var _config = require("../../config");

var _RawNerius = require("../raws/RawNerius");

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Nerius = /*#__PURE__*/function (_Ore) {
  _inherits(Nerius, _Ore);

  var _super = _createSuper(Nerius);

  function Nerius(position) {
    var _this;

    _classCallCheck(this, Nerius);

    _this = _super.call(this, "nerius", position);
    _this.randomRotate = false;
    _this.particlesColors = [_config.Color.BLACK, "#fff"];
    return _this;
  }

  _createClass(Nerius, [{
    key: "onBreak",
    value: function onBreak(game) {
      _get(_getPrototypeOf(Nerius.prototype), "onBreak", this).call(this, game);

      this.dropRawOre(game, _RawNerius.RawNerius); // this.dropRawOre(game, RawGradeCidium, 100);
    }
  }]);

  return Nerius;
}(_Ore2.Ore);

exports.Nerius = Nerius;
},{"../../config":"FxBD","../raws/RawNerius":"i9gv","./Ore":"ze6F"}],"KTUq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StonyGround = void 0;

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var StonyGround = /*#__PURE__*/function (_Ore) {
  _inherits(StonyGround, _Ore);

  var _super = _createSuper(StonyGround);

  function StonyGround(position) {
    _classCallCheck(this, StonyGround);

    return _super.call(this, "stony-ground", position);
  }

  return StonyGround;
}(_Ore2.Ore);

exports.StonyGround = StonyGround;
},{"./Ore":"ze6F"}],"jc3R":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Destrony = void 0;

var _Ore2 = require("./Ore");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Destrony = /*#__PURE__*/function (_Ore) {
  _inherits(Destrony, _Ore);

  var _super = _createSuper(Destrony);

  function Destrony(position) {
    var _this;

    _classCallCheck(this, Destrony);

    _this = _super.call(this, "destrony", position);
    _this.unbreakable = true;
    _this.randomRotate = false;
    return _this;
  }

  return Destrony;
}(_Ore2.Ore);

exports.Destrony = Destrony;
},{"./Ore":"ze6F"}],"GaRh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawManty = void 0;

var _DangerRaw2 = require("./DangerRaw");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RawManty = /*#__PURE__*/function (_DangerRaw) {
  _inherits(RawManty, _DangerRaw);

  var _super = _createSuper(RawManty);

  function RawManty(position) {
    _classCallCheck(this, RawManty);

    return _super.call(this, "raw-manty", position);
  }

  return RawManty;
}(_DangerRaw2.DangerRaw);

exports.RawManty = RawManty;
},{"./DangerRaw":"FOX4"}],"Ms1e":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Manty = void 0;

var _RawManty = require("../raws/RawManty");

var _DangerOre2 = require("./DangerOre");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Manty = /*#__PURE__*/function (_DangerOre) {
  _inherits(Manty, _DangerOre);

  var _super = _createSuper(Manty);

  function Manty(position) {
    var _this;

    _classCallCheck(this, Manty);

    _this = _super.call(this, "manty", position);
    _this.randomRotate = false;
    return _this;
  }

  _createClass(Manty, [{
    key: "onBreak",
    value: function onBreak(game) {
      _get(_getPrototypeOf(Manty.prototype), "onBreak", this).call(this, game);

      this.dropRawOre(game, _RawManty.RawManty);
    }
  }]);

  return Manty;
}(_DangerOre2.DangerOre);

exports.Manty = Manty;
},{"../raws/RawManty":"GaRh","./DangerOre":"vVYW"}],"g7hl":[function(require,module,exports) {
"use strict";

var _assets = require("./managers/assets");

var _engine = require("./engine");

var _Player = require("./objects/entities/Player");

var _Particles = require("./engine/components/Particles");

var _level = require("./managers/level");

var _Stone = require("./objects/ores/Stone");

var _CrackedStone = require("./objects/ores/CrackedStone");

var _config = require("./config");

var _DeepStone = require("./objects/ores/DeepStone");

var _Cidium = require("./objects/ores/Cidium");

var _dome = require("./managers/dome");

var _Osmy = require("./objects/ores/Osmy");

var _Basalt = require("./objects/ores/Basalt");

var _math = require("./engine/utils/math");

var _Antin = require("./objects/ores/Antin");

var _Rady = require("./objects/ores/Rady");

var _BurntBasalt = require("./objects/ores/BurntBasalt");

var _Nerius = require("./objects/ores/Nerius");

var _StonyGround = require("./objects/ores/StonyGround");

var _Destrony = require("./objects/ores/Destrony");

var _Manty = require("./objects/ores/Manty");

var game = new _engine.Game();
var player = game.add(new _Player.Player()); // const robot = game.add<Robot>(new Robot(new Vector2(Config.WORLD_WIDTH * Config.SPRITE_SIZE / 2 - Config.SPRITE_SIZE / 2, Config.SPRITE_SIZE)));

var level = (0, _level.initLevel)(game);
var lastLoop = Date.now();
var fps = 0;
game.addInit(function () {
  (0, _assets.initAssets)(game);
  (0, _dome.initDome)(game);
  game.generator.settings = [// > Stones
  {
    value: [0, 1],
    height: [0, 43],
    ore: _Stone.Stone
  }, {
    value: [.5, .6],
    height: [5, 90],
    divider: 5,
    ore: _CrackedStone.CrackedStone
  }, {
    value: [.5, .6],
    height: [0, 14],
    divider: 5,
    ore: _StonyGround.StonyGround
  }, // > Deepest stones
  // Deep stone blend layer
  {
    value: [.8, 1],
    height: [30, 43],
    divider: 2,
    ore: _DeepStone.DeepStone
  }, // Deep stone layer
  {
    value: [0, 1],
    height: [42, _config.GeneratorConfig.BASALT_LAYER_HEIGHT],
    ore: _DeepStone.DeepStone
  }, // Basalt blend layer
  {
    value: [.7, 1],
    height: [_config.GeneratorConfig.BASALT_LAYER_HEIGHT - _config.GeneratorConfig.LAYERS_BLEND_HEIGHT, _config.GeneratorConfig.BASALT_LAYER_HEIGHT],
    divider: 3,
    ore: _Basalt.Basalt
  }, // Basalt layer
  {
    value: [0, 1],
    height: [_config.GeneratorConfig.BASALT_LAYER_HEIGHT, _config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT],
    ore: _Basalt.Basalt
  }, // Burnt basalt blend layer
  {
    value: [.8, 1],
    height: [_config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT - _config.GeneratorConfig.LAYERS_BLEND_HEIGHT, _config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT],
    divider: 3,
    ore: _BurntBasalt.BurntBasalt
  }, // Burnt basalt layer
  {
    value: [0, 1],
    height: [_config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT, _config.Config.WORLD_HEIGHT],
    ore: _BurntBasalt.BurntBasalt
  }, // > Destrony layer
  {
    value: [0, 1],
    height: [_config.Config.WORLD_HEIGHT, _config.Config.WORLD_HEIGHT],
    ore: _Destrony.Destrony
  }, // > Ores
  // Cidium
  {
    value: [.85, 1],
    // height: [12, Config.WORLD_HEIGHT - 10],
    height: [0, _config.GeneratorConfig.BASALT_LAYER_HEIGHT - _config.GeneratorConfig.LAYERS_BLEND_HEIGHT * 3],
    divider: 5,
    ore: _Cidium.Cidium
  }, // Osmy - deep stone layer
  {
    value: [.95, 1],
    // height: [50, GeneratorConfig.BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT],
    height: [0, _config.GeneratorConfig.BASALT_LAYER_HEIGHT - _config.GeneratorConfig.LAYERS_BLEND_HEIGHT],
    divider: .8,
    ore: _Osmy.Osmy
  }, {
    value: [.95, 1],
    height: [0, _config.GeneratorConfig.BASALT_LAYER_HEIGHT - _config.GeneratorConfig.LAYERS_BLEND_HEIGHT],
    // height: [100, GeneratorConfig.BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT],
    divider: 5,
    ore: _Nerius.Nerius
  }, // Antin - basalt layer
  {
    value: [0, .35],
    height: [0, _config.Config.WORLD_HEIGHT - 40],
    // height: [GeneratorConfig.BASALT_LAYER_HEIGHT + 10, Config.WORLD_HEIGHT - 22],
    divider: .9,
    ore: _Antin.Antin
  }, // Rady - basalt layer
  {
    value: [0, .3],
    height: [0, _config.Config.WORLD_HEIGHT - 5],
    // height: [200, Config.WORLD_HEIGHT - 5],
    divider: 2,
    ore: _Rady.Rady
  }, // > Manty layer
  {
    value: [0, .3],
    height: [0, _config.Config.WORLD_HEIGHT - 1],
    // height: [Config.WORLD_HEIGHT - 5, Config.WORLD_HEIGHT - 1],
    divider: 2,
    ore: _Manty.Manty
  }, {
    value: [0, .5],
    height: [_config.Config.WORLD_HEIGHT - 1, _config.Config.WORLD_HEIGHT - 1],
    divider: 2,
    ore: _Manty.Manty
  }, // > Holes
  {
    value: [0, .5],
    height: [5, 150],
    ore: null
  }, {
    value: [0, .4],
    height: [155, _config.Config.WORLD_HEIGHT - 40],
    divider: 5,
    ore: null
  }];
  game.camera.follow(player.position);
});
game.addUpdate(function () {
  var thisLoop = Date.now();
  if (game.clock.elapsed % 30 == 0) fps = +(1000 / (thisLoop - lastLoop)).toFixed(1);
  lastLoop = thisLoop;
  level.update(player);
  game.camera.follow(player.position, .1);
  game.generator.generateChunksAt(game.camera.position);
});
game.addRender(function (renderer) {
  renderer.drawText({
    text: fps.toString(),
    font: "20px Pixel",
    position: new _math.Vector2(40, 40),
    layer: "ui"
  });
  renderer.drawText({
    text: "Height: ".concat(Math.floor(player.position.y / _config.Config.SPRITE_SIZE + 1)),
    font: "20px Pixel",
    position: new _math.Vector2(70, 80),
    layer: "ui"
  });
});
game.init(); // ! Debug

window.addEventListener("keydown", function (e) {
  if (e.code == "KeyG") console.log(game);
  if (e.code == "KeyP") (0, _Particles.SpawnParticles)(game, game.camera.position);
  if (e.code == "KeyM") console.log(player);
});
},{"./managers/assets":"ibCN","./engine":"XaJu","./objects/entities/Player":"p1IV","./engine/components/Particles":"zRqz","./managers/level":"ZerP","./objects/ores/Stone":"e9U2","./objects/ores/CrackedStone":"nAsK","./config":"FxBD","./objects/ores/DeepStone":"IUuf","./objects/ores/Cidium":"zVgn","./managers/dome":"ZpfZ","./objects/ores/Osmy":"Fgu4","./objects/ores/Basalt":"S9NJ","./engine/utils/math":"NgPq","./objects/ores/Antin":"P2Ir","./objects/ores/Rady":"vPcC","./objects/ores/BurntBasalt":"G4HC","./objects/ores/Nerius":"rOTL","./objects/ores/StonyGround":"KTUq","./objects/ores/Destrony":"jc3R","./objects/ores/Manty":"Ms1e"}]},{},["g7hl"], null)
//# sourceMappingURL=/main.ae7c08b8.js.map