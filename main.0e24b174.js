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
})({"images/player/stay.png":[function(require,module,exports) {
module.exports = "./stay.39efbb46.png";
},{}],"images/player/walk.png":[function(require,module,exports) {
module.exports = "./walk.c1c7bbea.png";
},{}],"images/entities/robot.png":[function(require,module,exports) {
module.exports = "./robot.89fb746a.png";
},{}],"images/ores/stone.png":[function(require,module,exports) {
module.exports = "./stone.699540e4.png";
},{}],"images/ores/stony-ground.png":[function(require,module,exports) {
module.exports = "./stony-ground.aee45ace.png";
},{}],"images/ores/basalt.png":[function(require,module,exports) {
module.exports = "./basalt.e51f77ac.png";
},{}],"images/ores/deep-stone.png":[function(require,module,exports) {
module.exports = "./deep-stone.05fd66d6.png";
},{}],"images/ores/burnt-basalt.png":[function(require,module,exports) {
module.exports = "./burnt-basalt.6f379b0a.png";
},{}],"images/ores/destrony.png":[function(require,module,exports) {
module.exports = "./destrony.7c3453f2.png";
},{}],"images/ores/manty.png":[function(require,module,exports) {
module.exports = "./manty.3a63cc82.png";
},{}],"images/ores/fetus-stone.png":[function(require,module,exports) {
module.exports = "./fetus-stone.e314f0d2.png";
},{}],"images/ores/mushroom-stone.png":[function(require,module,exports) {
module.exports = "./mushroom-stone.4a9571f2.png";
},{}],"images/ores/cracked-stone.png":[function(require,module,exports) {
module.exports = "./cracked-stone.5598ad76.png";
},{}],"images/ores/cidium.png":[function(require,module,exports) {
module.exports = "./cidium.3c514440.png";
},{}],"images/ores/osmy.png":[function(require,module,exports) {
module.exports = "./osmy.145b8e50.png";
},{}],"images/ores/antin.png":[function(require,module,exports) {
module.exports = "./antin.9171e922.png";
},{}],"images/ores/rady.png":[function(require,module,exports) {
module.exports = "./rady.bccf7d2b.png";
},{}],"images/ores/nerius.png":[function(require,module,exports) {
module.exports = "./nerius.809bdc0a.png";
},{}],"images/raw/raw-cidium.png":[function(require,module,exports) {
module.exports = "./raw-cidium.46dee7ea.png";
},{}],"images/raw/raw-grade-cidium.png":[function(require,module,exports) {
module.exports = "./raw-grade-cidium.3db1e106.png";
},{}],"images/raw/raw-osmy.png":[function(require,module,exports) {
module.exports = "./raw-osmy.26781543.png";
},{}],"images/raw/raw-antin.png":[function(require,module,exports) {
module.exports = "./raw-antin.55b69ac9.png";
},{}],"images/raw/raw-rady.png":[function(require,module,exports) {
module.exports = "./raw-rady.b7c5537f.png";
},{}],"images/raw/raw-nerius.png":[function(require,module,exports) {
module.exports = "./raw-nerius.c4d29839.png";
},{}],"images/raw/raw-manty.png":[function(require,module,exports) {
module.exports = "./raw-manty.628d6f23.png";
},{}],"images/ready/ready-cidium.png":[function(require,module,exports) {
module.exports = "./ready-cidium.9e9a8632.png";
},{}],"images/items/battery.png":[function(require,module,exports) {
module.exports = "./battery.a5eb3452.png";
},{}],"images/items/drill.png":[function(require,module,exports) {
module.exports = "./drill.45144ddf.png";
},{}],"images/flora/fetus-vine.png":[function(require,module,exports) {
module.exports = "./fetus-vine.bacb2638.png";
},{}],"images/flora/mushroom.png":[function(require,module,exports) {
module.exports = "./mushroom.ad368f59.png";
},{}],"images/food/food-fetus.png":[function(require,module,exports) {
module.exports = "./food-fetus.7257c57b.png";
},{}],"images/environment/ground.png":[function(require,module,exports) {
module.exports = "./ground.60b82a27.png";
},{}],"images/environment/dome.png":[function(require,module,exports) {
module.exports = "./dome.de3e7132.png";
},{}],"images/environment/under-stone.png":[function(require,module,exports) {
module.exports = "./under-stone.25b0e43a.png";
},{}],"images/environment/disputes.png":[function(require,module,exports) {
module.exports = "./disputes.69e06412.png";
},{}],"images/gear/gear-storage-1.png":[function(require,module,exports) {
module.exports = "./gear-storage-1.3a898236.png";
},{}],"images/gear/gear-recycler-1.png":[function(require,module,exports) {
module.exports = "./gear-recycler-1.24df4e8a.png";
},{}],"images/gear/gear-oxygen-generator-1.png":[function(require,module,exports) {
module.exports = "./gear-oxygen-generator-1.51e8bdb6.png";
},{}],"images/gear/gear-storage-1-outline.png":[function(require,module,exports) {
module.exports = "./gear-storage-1-outline.5c7aa5f9.png";
},{}],"images/gear/gear-recycler-1-outline.png":[function(require,module,exports) {
module.exports = "./gear-recycler-1-outline.896cc421.png";
},{}],"images/gear/gear-oxygen-generator-1-outline.png":[function(require,module,exports) {
module.exports = "./gear-oxygen-generator-1-outline.ad0371d5.png";
},{}],"images/ui/interact.png":[function(require,module,exports) {
module.exports = "./interact.cf2130fe.png";
},{}],"images/ui/close.png":[function(require,module,exports) {
module.exports = "./close.47e7c90a.png";
},{}],"images/ui/drop.png":[function(require,module,exports) {
module.exports = "./drop.df95270c.png";
},{}],"images/ui/craft.png":[function(require,module,exports) {
module.exports = "./craft.95f37d3a.png";
},{}],"images/ui/button.png":[function(require,module,exports) {
module.exports = "./button.f2d71914.png";
},{}],"images/ui/tools.png":[function(require,module,exports) {
module.exports = "./tools.bd80d9fc.png";
},{}],"images/ui/bottle.png":[function(require,module,exports) {
module.exports = "./bottle.15b8d6d6.png";
},{}],"images/ui/damage.png":[function(require,module,exports) {
module.exports = "./damage.cc267781.png";
},{}],"images/ui/level-up.png":[function(require,module,exports) {
module.exports = "./level-up.b72a7aa3.png";
},{}],"images/ui/storage-ui.png":[function(require,module,exports) {
module.exports = "./storage-ui.cb448bd7.png";
},{}],"images/ui/recycler-ui.png":[function(require,module,exports) {
module.exports = "./recycler-ui.89aac496.png";
},{}],"images/ui/description-ui.png":[function(require,module,exports) {
module.exports = "./description-ui.4519db9d.png";
},{}],"images/ui/oxygen-generator-ui.png":[function(require,module,exports) {
module.exports = "./oxygen-generator-ui.391b5aef.png";
},{}],"audio/stone-hit.mp3":[function(require,module,exports) {
module.exports = "./stone-hit.51a04405.mp3";
},{}],"audio/stone-break/stone-break-1.mp3":[function(require,module,exports) {
module.exports = "./stone-break-1.19747488.mp3";
},{}],"audio/stone-break/stone-break-2.mp3":[function(require,module,exports) {
module.exports = "./stone-break-2.59f41769.mp3";
},{}],"audio/stone-break/stone-break-3.mp3":[function(require,module,exports) {
module.exports = "./stone-break-3.b9a5f24c.mp3";
},{}],"audio/stone-break/fall-stone-break.mp3":[function(require,module,exports) {
module.exports = "./fall-stone-break.a79c9812.mp3";
},{}],"audio/plants/plant-break.mp3":[function(require,module,exports) {
module.exports = "./plant-break.64be894f.mp3";
},{}],"audio/plants/plant-hit.mp3":[function(require,module,exports) {
module.exports = "./plant-hit.6087f6b0.mp3";
},{}],"audio/plants/wave.mp3":[function(require,module,exports) {
module.exports = "./wave.9c7d0575.mp3";
},{}],"audio/bonk.mp3":[function(require,module,exports) {
module.exports = "./bonk.ecc7f323.mp3";
},{}],"audio/steps/1.mp3":[function(require,module,exports) {
module.exports = "./1.bb72bcbd.mp3";
},{}],"audio/steps/2.mp3":[function(require,module,exports) {
module.exports = "./2.e9b2ba92.mp3";
},{}],"audio/steps/3.mp3":[function(require,module,exports) {
module.exports = "./3.a1d2e232.mp3";
},{}],"audio/gear/storage.mp3":[function(require,module,exports) {
module.exports = "./storage.3dbcac5b.mp3";
},{}],"audio/gear/store.mp3":[function(require,module,exports) {
module.exports = "./store.191bbd6f.mp3";
},{}],"audio/gear/craft.mp3":[function(require,module,exports) {
module.exports = "./craft.4224af63.mp3";
},{}],"audio/gear/error.mp3":[function(require,module,exports) {
module.exports = "./error.72d638f7.mp3";
},{}],"audio/robot/motor.mp3":[function(require,module,exports) {
module.exports = "./motor.b26faf6a.mp3";
},{}],"audio/robot/motor-start.mp3":[function(require,module,exports) {
module.exports = "./motor-start.931605d0.mp3";
},{}],"ts/managers/assets.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAssets = initAssets;

var _stay = _interopRequireDefault(require("../../images/player/stay.png"));

var _walk = _interopRequireDefault(require("../../images/player/walk.png"));

var _robot = _interopRequireDefault(require("../../images/entities/robot.png"));

var _stone = _interopRequireDefault(require("../../images/ores/stone.png"));

var _stonyGround = _interopRequireDefault(require("../../images/ores/stony-ground.png"));

var _basalt = _interopRequireDefault(require("../../images/ores/basalt.png"));

var _deepStone = _interopRequireDefault(require("../../images/ores/deep-stone.png"));

var _burntBasalt = _interopRequireDefault(require("../../images/ores/burnt-basalt.png"));

var _destrony = _interopRequireDefault(require("../../images/ores/destrony.png"));

var _manty = _interopRequireDefault(require("../../images/ores/manty.png"));

var _fetusStone = _interopRequireDefault(require("../../images/ores/fetus-stone.png"));

var _mushroomStone = _interopRequireDefault(require("../../images/ores/mushroom-stone.png"));

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

var _readyCidium = _interopRequireDefault(require("../../images/ready/ready-cidium.png"));

var _battery = _interopRequireDefault(require("../../images/items/battery.png"));

var _drill = _interopRequireDefault(require("../../images/items/drill.png"));

var _fetusVine = _interopRequireDefault(require("../../images/flora/fetus-vine.png"));

var _mushroom = _interopRequireDefault(require("../../images/flora/mushroom.png"));

var _foodFetus = _interopRequireDefault(require("../../images/food/food-fetus.png"));

var _ground = _interopRequireDefault(require("../../images/environment/ground.png"));

var _dome = _interopRequireDefault(require("../../images/environment/dome.png"));

var _underStone = _interopRequireDefault(require("../../images/environment/under-stone.png"));

var _disputes = _interopRequireDefault(require("../../images/environment/disputes.png"));

var _gearStorage = _interopRequireDefault(require("../../images/gear/gear-storage-1.png"));

var _gearRecycler = _interopRequireDefault(require("../../images/gear/gear-recycler-1.png"));

var _gearOxygenGenerator = _interopRequireDefault(require("../../images/gear/gear-oxygen-generator-1.png"));

var _gearStorage1Outline = _interopRequireDefault(require("../../images/gear/gear-storage-1-outline.png"));

var _gearRecycler1Outline = _interopRequireDefault(require("../../images/gear/gear-recycler-1-outline.png"));

var _gearOxygenGenerator1Outline = _interopRequireDefault(require("../../images/gear/gear-oxygen-generator-1-outline.png"));

var _interact = _interopRequireDefault(require("../../images/ui/interact.png"));

var _close = _interopRequireDefault(require("../../images/ui/close.png"));

var _drop = _interopRequireDefault(require("../../images/ui/drop.png"));

var _craft = _interopRequireDefault(require("../../images/ui/craft.png"));

var _button = _interopRequireDefault(require("../../images/ui/button.png"));

var _tools = _interopRequireDefault(require("../../images/ui/tools.png"));

var _bottle = _interopRequireDefault(require("../../images/ui/bottle.png"));

var _damage = _interopRequireDefault(require("../../images/ui/damage.png"));

var _levelUp = _interopRequireDefault(require("../../images/ui/level-up.png"));

var _storageUi = _interopRequireDefault(require("../../images/ui/storage-ui.png"));

var _recyclerUi = _interopRequireDefault(require("../../images/ui/recycler-ui.png"));

var _descriptionUi = _interopRequireDefault(require("../../images/ui/description-ui.png"));

var _oxygenGeneratorUi = _interopRequireDefault(require("../../images/ui/oxygen-generator-ui.png"));

var _stoneHit = _interopRequireDefault(require("../../audio/stone-hit.mp3"));

var _stoneBreak = _interopRequireDefault(require("../../audio/stone-break/stone-break-1.mp3"));

var _stoneBreak2 = _interopRequireDefault(require("../../audio/stone-break/stone-break-2.mp3"));

var _stoneBreak3 = _interopRequireDefault(require("../../audio/stone-break/stone-break-3.mp3"));

var _fallStoneBreak = _interopRequireDefault(require("../../audio/stone-break/fall-stone-break.mp3"));

var _plantBreak = _interopRequireDefault(require("../../audio/plants/plant-break.mp3"));

var _plantHit = _interopRequireDefault(require("../../audio/plants/plant-hit.mp3"));

var _wave = _interopRequireDefault(require("../../audio/plants/wave.mp3"));

var _bonk = _interopRequireDefault(require("../../audio/bonk.mp3"));

var _ = _interopRequireDefault(require("../../audio/steps/1.mp3"));

var _2 = _interopRequireDefault(require("../../audio/steps/2.mp3"));

var _3 = _interopRequireDefault(require("../../audio/steps/3.mp3"));

var _storage = _interopRequireDefault(require("../../audio/gear/storage.mp3"));

var _store = _interopRequireDefault(require("../../audio/gear/store.mp3"));

var _craft2 = _interopRequireDefault(require("../../audio/gear/craft.mp3"));

var _error = _interopRequireDefault(require("../../audio/gear/error.mp3"));

var _motor = _interopRequireDefault(require("../../audio/robot/motor.mp3"));

var _motorStart = _interopRequireDefault(require("../../audio/robot/motor-start.mp3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// I can't setup declare module :(
// > Player
// @ts-ignore
// @ts-ignore
// > Entities
// @ts-ignore
// > Stones
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
// > Ores
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// > Raw
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// > Ready
// @ts-ignore
// > Items
// @ts-ignore
// @ts-ignore
// > Plants
// @ts-ignore
// @ts-ignore
// > Food
// @ts-ignore
// > Environment
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// > Gear
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// > UI
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
function initAssets(game) {
  // > Player
  game.loadAsset("player-stay", [_stay.default]);
  game.loadAsset("player-walk", [_walk.default]); // game.loadAsset("player-walk", [
  //     player_walk_0_img,
  //     player_walk_1_img,
  //     player_walk_2_img,
  //     player_stay_img,
  // ]);
  // > Entities

  game.loadAsset("robot", [_robot.default]); // > Stones

  game.loadAsset("stone", [_stone.default]);
  game.loadAsset("stony-ground", [_stonyGround.default]);
  game.loadAsset("basalt", [_basalt.default]);
  game.loadAsset("deep-stone", [_deepStone.default]);
  game.loadAsset("burnt-basalt", [_burntBasalt.default]);
  game.loadAsset("destrony", [_destrony.default]);
  game.loadAsset("manty", [_manty.default]);
  game.loadAsset("fetus-stone", [_fetusStone.default]);
  game.loadAsset("mushroom-stone", [_mushroomStone.default]);
  game.loadAsset("cracked-stone", [_crackedStone.default]); // > Ores

  game.loadAsset("cidium", [_cidium.default]);
  game.loadAsset("osmy", [_osmy.default]);
  game.loadAsset("antin", [_antin.default]);
  game.loadAsset("rady", [_rady.default]);
  game.loadAsset("nerius", [_nerius.default]); // > Raws

  game.loadAsset("raw-cidium", [_rawCidium.default]);
  game.loadAsset("raw-grade-cidium", [_rawGradeCidium.default]);
  game.loadAsset("raw-osmy", [_rawOsmy.default]);
  game.loadAsset("raw-antin", [_rawAntin.default]);
  game.loadAsset("raw-rady", [_rawRady.default]);
  game.loadAsset("raw-nerius", [_rawNerius.default]);
  game.loadAsset("raw-manty", [_rawManty.default]); // > Ready

  game.loadAsset("ready-cidium", [_readyCidium.default]); // > Items

  game.loadAsset("battery", [_battery.default]);
  game.loadAsset("drill", [_drill.default]); // > Plants

  game.loadAsset("fetus-vine", [_fetusVine.default]);
  game.loadAsset("mushroom", [_mushroom.default]); // > Food

  game.loadAsset("food-fetus", [_foodFetus.default]); // > Environment

  game.loadAsset("ground", [_ground.default]);
  game.loadAsset("dome", [_dome.default]);
  game.loadAsset("under-stone", [_underStone.default]);
  game.loadAsset("disputes", [_disputes.default]); // > Gear

  game.loadAsset("gear-storage-1", [_gearStorage.default]);
  game.loadAsset("gear-recycler-1", [_gearRecycler.default]);
  game.loadAsset("gear-oxygen-generator-1", [_gearOxygenGenerator.default]);
  game.loadAsset("gear-storage-1-outline", [_gearStorage1Outline.default]);
  game.loadAsset("gear-recycler-1-outline", [_gearRecycler1Outline.default]);
  game.loadAsset("gear-oxygen-generator-1-outline", [_gearOxygenGenerator1Outline.default]); // > UI

  game.loadAsset("interact", [_interact.default]);
  game.loadAsset("close", [_close.default]);
  game.loadAsset("drop", [_drop.default]);
  game.loadAsset("craft", [_craft.default]);
  game.loadAsset("button", [_button.default]);
  game.loadAsset("tools", [_tools.default]);
  game.loadAsset("bottle", [_bottle.default]);
  game.loadAsset("damage", [_damage.default]);
  game.loadAsset("storage-ui", [_storageUi.default]);
  game.loadAsset("level-up", [_levelUp.default]);
  game.loadAsset("recycler-ui", [_recyclerUi.default]);
  game.loadAsset("description-ui", [_descriptionUi.default]);
  game.loadAsset("oxygen-generator-ui", [_oxygenGeneratorUi.default]); // > Audio

  game.loadAsset("stone-hit", _stoneHit.default, "audio");
  game.loadAsset("stone-break-1", _stoneBreak.default, "audio");
  game.loadAsset("stone-break-2", _stoneBreak2.default, "audio");
  game.loadAsset("stone-break-3", _stoneBreak3.default, "audio");
  game.loadAsset("fall-stone-break", _fallStoneBreak.default, "audio");
  game.loadAsset("plant-break", _plantBreak.default, "audio");
  game.loadAsset("plant-hit", _plantHit.default, "audio");
  game.loadAsset("wave", _wave.default, "audio");
  game.loadAsset("bonk", _bonk.default, "audio");
  game.loadAsset("step-1", _.default, "audio");
  game.loadAsset("step-2", _2.default, "audio");
  game.loadAsset("step-3", _3.default, "audio");
  game.loadAsset("storage", _storage.default, "audio");
  game.loadAsset("error", _error.default, "audio");
  game.loadAsset("store", _store.default, "audio");
  game.loadAsset("crafting", _craft2.default, "audio");
  game.loadAsset("motor", _motor.default, "audio");
  game.loadAsset("motor-start", _motorStart.default, "audio");
}
},{"../../images/player/stay.png":"images/player/stay.png","../../images/player/walk.png":"images/player/walk.png","../../images/entities/robot.png":"images/entities/robot.png","../../images/ores/stone.png":"images/ores/stone.png","../../images/ores/stony-ground.png":"images/ores/stony-ground.png","../../images/ores/basalt.png":"images/ores/basalt.png","../../images/ores/deep-stone.png":"images/ores/deep-stone.png","../../images/ores/burnt-basalt.png":"images/ores/burnt-basalt.png","../../images/ores/destrony.png":"images/ores/destrony.png","../../images/ores/manty.png":"images/ores/manty.png","../../images/ores/fetus-stone.png":"images/ores/fetus-stone.png","../../images/ores/mushroom-stone.png":"images/ores/mushroom-stone.png","../../images/ores/cracked-stone.png":"images/ores/cracked-stone.png","../../images/ores/cidium.png":"images/ores/cidium.png","../../images/ores/osmy.png":"images/ores/osmy.png","../../images/ores/antin.png":"images/ores/antin.png","../../images/ores/rady.png":"images/ores/rady.png","../../images/ores/nerius.png":"images/ores/nerius.png","../../images/raw/raw-cidium.png":"images/raw/raw-cidium.png","../../images/raw/raw-grade-cidium.png":"images/raw/raw-grade-cidium.png","../../images/raw/raw-osmy.png":"images/raw/raw-osmy.png","../../images/raw/raw-antin.png":"images/raw/raw-antin.png","../../images/raw/raw-rady.png":"images/raw/raw-rady.png","../../images/raw/raw-nerius.png":"images/raw/raw-nerius.png","../../images/raw/raw-manty.png":"images/raw/raw-manty.png","../../images/ready/ready-cidium.png":"images/ready/ready-cidium.png","../../images/items/battery.png":"images/items/battery.png","../../images/items/drill.png":"images/items/drill.png","../../images/flora/fetus-vine.png":"images/flora/fetus-vine.png","../../images/flora/mushroom.png":"images/flora/mushroom.png","../../images/food/food-fetus.png":"images/food/food-fetus.png","../../images/environment/ground.png":"images/environment/ground.png","../../images/environment/dome.png":"images/environment/dome.png","../../images/environment/under-stone.png":"images/environment/under-stone.png","../../images/environment/disputes.png":"images/environment/disputes.png","../../images/gear/gear-storage-1.png":"images/gear/gear-storage-1.png","../../images/gear/gear-recycler-1.png":"images/gear/gear-recycler-1.png","../../images/gear/gear-oxygen-generator-1.png":"images/gear/gear-oxygen-generator-1.png","../../images/gear/gear-storage-1-outline.png":"images/gear/gear-storage-1-outline.png","../../images/gear/gear-recycler-1-outline.png":"images/gear/gear-recycler-1-outline.png","../../images/gear/gear-oxygen-generator-1-outline.png":"images/gear/gear-oxygen-generator-1-outline.png","../../images/ui/interact.png":"images/ui/interact.png","../../images/ui/close.png":"images/ui/close.png","../../images/ui/drop.png":"images/ui/drop.png","../../images/ui/craft.png":"images/ui/craft.png","../../images/ui/button.png":"images/ui/button.png","../../images/ui/tools.png":"images/ui/tools.png","../../images/ui/bottle.png":"images/ui/bottle.png","../../images/ui/damage.png":"images/ui/damage.png","../../images/ui/level-up.png":"images/ui/level-up.png","../../images/ui/storage-ui.png":"images/ui/storage-ui.png","../../images/ui/recycler-ui.png":"images/ui/recycler-ui.png","../../images/ui/description-ui.png":"images/ui/description-ui.png","../../images/ui/oxygen-generator-ui.png":"images/ui/oxygen-generator-ui.png","../../audio/stone-hit.mp3":"audio/stone-hit.mp3","../../audio/stone-break/stone-break-1.mp3":"audio/stone-break/stone-break-1.mp3","../../audio/stone-break/stone-break-2.mp3":"audio/stone-break/stone-break-2.mp3","../../audio/stone-break/stone-break-3.mp3":"audio/stone-break/stone-break-3.mp3","../../audio/stone-break/fall-stone-break.mp3":"audio/stone-break/fall-stone-break.mp3","../../audio/plants/plant-break.mp3":"audio/plants/plant-break.mp3","../../audio/plants/plant-hit.mp3":"audio/plants/plant-hit.mp3","../../audio/plants/wave.mp3":"audio/plants/wave.mp3","../../audio/bonk.mp3":"audio/bonk.mp3","../../audio/steps/1.mp3":"audio/steps/1.mp3","../../audio/steps/2.mp3":"audio/steps/2.mp3","../../audio/steps/3.mp3":"audio/steps/3.mp3","../../audio/gear/storage.mp3":"audio/gear/storage.mp3","../../audio/gear/store.mp3":"audio/gear/store.mp3","../../audio/gear/craft.mp3":"audio/gear/craft.mp3","../../audio/gear/error.mp3":"audio/gear/error.mp3","../../audio/robot/motor.mp3":"audio/robot/motor.mp3","../../audio/robot/motor-start.mp3":"audio/robot/motor-start.mp3"}],"ts/config.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemSettings = exports.OreSettings = exports.Color = exports.GeneratorConfig = exports.Config = void 0;
var Config;
exports.Config = Config;

(function (Config) {
  // World size and chunks size in blocks
  Config[Config["WORLD_WIDTH"] = 82] = "WORLD_WIDTH";
  Config[Config["WORLD_HEIGHT"] = 225] = "WORLD_HEIGHT";
  Config[Config["CHUNK_SIZE"] = 4] = "CHUNK_SIZE";
  Config[Config["SPRITE_SCALE"] = 5] = "SPRITE_SCALE";
  Config[Config["SPRITE_PIXEL_SIZE"] = 16] = "SPRITE_PIXEL_SIZE";
  Config[Config["SPRITE_SIZE"] = 80] = "SPRITE_SIZE";
  Config[Config["PARTICLES_GRAVITY"] = 0.4] = "PARTICLES_GRAVITY";
  Config[Config["WORLD_X_CENTER"] = 3280] = "WORLD_X_CENTER";
  Config[Config["VINE_GROW_TICK"] = 60] = "VINE_GROW_TICK";
  Config[Config["VINE_GROW_CHANCE"] = 50] = "VINE_GROW_CHANCE";
  Config[Config["VINE_MIN_LENGTH"] = 4] = "VINE_MIN_LENGTH";
  Config[Config["VINE_MAX_LENGTH"] = 8] = "VINE_MAX_LENGTH";
  Config[Config["ROBOT_PICKUP_DISTANCE"] = 80] = "ROBOT_PICKUP_DISTANCE";
  Config[Config["ROBOT_DAMAGE"] = 4] = "ROBOT_DAMAGE";
  Config[Config["ROBOT_HIT_SPEED"] = 10] = "ROBOT_HIT_SPEED";
  Config[Config["ROBOT_ALLOW_PICKUP_DELAY"] = 20] = "ROBOT_ALLOW_PICKUP_DELAY";
  Config[Config["PICKUP_DISTANCE"] = 50] = "PICKUP_DISTANCE";
  Config[Config["WIRE_LENGTH"] = 60] = "WIRE_LENGTH";
  Config[Config["GEAR_INTERACT_DISTANCE"] = 85] = "GEAR_INTERACT_DISTANCE";
  Config[Config["DOME_DIAMETER"] = 480] = "DOME_DIAMETER";
  Config[Config["GROUND_HEIGHT"] = 160] = "GROUND_HEIGHT";
  Config[Config["OXYGEN_HUNGRY_TIME"] = 3550] = "OXYGEN_HUNGRY_TIME";
  Config[Config["ALLOW_DARK"] = 1] = "ALLOW_DARK";
  Config[Config["ITEMS_LIVE_TIME"] = 800] = "ITEMS_LIVE_TIME";
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
  },
  "root-stone": {
    hp: 14
  },
  "mushroom-stone": {
    hp: 32,
    tool: 3
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
},{}],"ts/engine/utils/noise.ts":[function(require,module,exports) {
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
},{}],"ts/engine/utils/math.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assetIsValid = assetIsValid;
exports.safeValue = safeValue;
exports.safeSlot = safeSlot;
exports.asImage = asImage;
exports.asAudio = asAudio;
exports.standardName = standardName;
exports.compareNames = compareNames;
exports.buildName = buildName;
exports.wrapText = wrapText;
exports.inChunkIdToPosition = inChunkIdToPosition;
exports.lerp = lerp;
exports.random = random;
exports.randomInt = randomInt;
exports.randomNoise = randomNoise;
exports.chance = chance;
exports.clamp = clamp;
exports.inRange = inRange;
exports.Vector2 = void 0;

var _config = require("../../config");

var _noise = require("./noise");

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
  return value === undefined || value === null ? safe : value;
}

function safeSlot(slot) {
  return safeValue(slot, {
    count: 0
  });
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

function inChunkIdToPosition(inChunkId) {
  var size = _config.Config.SPRITE_SIZE;
  var inChunkPos = inChunkId.split("-").map(function (p) {
    return +p;
  });
  return new Vector2((inChunkPos[0] + inChunkPos[2] * _config.Config.CHUNK_SIZE) * size, (inChunkPos[1] + inChunkPos[3] * _config.Config.CHUNK_SIZE) * size);
}

function lerp(from, to, time) {
  return from + (to - from) * time;
}

function random(from, to) {
  return Math.random() * (to - from) + from;
}

function randomInt(from, to) {
  return Math.floor(Math.random() * (to + 1 - from) + from);
}

function randomNoise(depends, from, to) {
  return ((0, _noise.simplex2)(depends / 4, depends / 4) + 1) / 2 * (to - from) + from;
}

function chance(percent) {
  return randomInt(0, 100) <= percent;
}

function clamp(value, min, max) {
  if (value < min) return min;else if (value > max) return max;else return value;
}

function inRange(value, from, to) {
  return value >= from && value <= to;
}
},{"../../config":"ts/config.ts","./noise":"ts/engine/utils/noise.ts"}],"ts/engine/Asset.ts":[function(require,module,exports) {
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
},{"./utils/math":"ts/engine/utils/math.ts"}],"ts/engine/Physics.ts":[function(require,module,exports) {
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
    key: "collideWithRect",
    value: function collideWithRect(rect1, rect2) {
      var pos1 = rect1.position,
          pos2 = rect2.position;
      var w1 = rect1.width / 2,
          w2 = rect2.width / 2;
      var h1 = rect1.height / 2,
          h2 = rect2.height / 2;
      var valid = rect1.id != rect2.id;
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
        id: (rect2 === null || rect2 === void 0 ? void 0 : rect2.id) || null,
        any: any,
        right: right,
        left: left,
        top: top,
        bottom: bottom
      };
    }
  }, {
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

      var w1 = point1.collider.width,
          w2 = point2.collider.width;
      var h1 = point1.collider.height,
          h2 = point2.collider.height;
      return this.collideWithRect({
        id: point1.id,
        position: pos1,
        width: w1,
        height: h1
      }, {
        id: point2.id,
        position: pos2,
        width: w2,
        height: h2
      }); // const
      //     pos1 = Vector2.add(point1.position, point1.collider.offset).add(point1.velocity),
      //     pos2 = Vector2.add(point2.position, point2.collider.offset).add(point2.velocity);
      // const
      //     w1 = point1.collider.width / 2,
      //     w2 = point2.collider.width / 2;
      // const
      //     h1 = point1.collider.height / 2,
      //     h2 = point2.collider.height / 2;
      // const valid = point1.id != point2.id;
      // const horizontal = (
      //     ((pos1.x + w1) > (pos2.x - w2)) && // Right
      //     ((pos1.x - w1) < (pos2.x + w2)) // Left
      // )
      // const vertical = (
      //     ((pos1.y + h1) > (pos2.y - h2)) && // Bottom
      //     ((pos1.y - h2) < (pos2.y + h2)) // Top
      // ) && valid;
      // const locationX = Math.abs(Math.sqrt((pos1.x - pos2.x) ** 2));
      // const locationY = Math.abs(Math.sqrt((pos1.y - pos2.y) ** 2));
      // // Right
      // let right = (
      //     ((pos1.x + w1) > (pos2.x - w2)) && pos2.x > pos1.x
      // ) && vertical && (locationX > locationY);
      // // Left
      // let left = (
      //     ((pos1.x - w1) < (pos2.x + w2)) && pos1.x > pos2.x
      // ) && vertical && (locationX > locationY);
      // // Top
      // let top = (
      //     ((pos1.y - h1) < (pos2.y + h2)) && pos1.y > pos2.y
      // ) && horizontal && (locationY > locationX);
      // // Bottom
      // let bottom = (
      //     ((pos1.y + h1) > (pos2.y - h2)) && pos2.y > pos1.y
      // ) && horizontal && (locationY > locationX);
      // let any = right || left || top || bottom;
      // return {
      //     id: point2?.id || null, any,
      //     right, left,
      //     top, bottom
      // };
    }
  }, {
    key: "update",
    value: function update() {
      var _this = this;

      var children = this.game.children.filter(function (child) {
        return child.collider.type != "none" && child.collider.collidable;
      }); // for (let i = 0; i < children.length; i ++) {
      //     for (let j = 0; j < children.length; j ++) {                
      //         this.collideWith(children[i], children[j]);
      //     }
      // }

      children.filter(function (child) {
        return child.collider.type == "solid";
      }).map(function (solidChild) {
        children.filter(function (child) {
          return child.collider.type == "dynamic";
        }).map(function (dynamicChild) {
          _this.collideWith(dynamicChild, solidChild);
        });
      });
    }
  }, {
    key: "collideWith",
    value: function collideWith(dynamicCollider, solidCollider) {
      // let allowCollide = true 
      // if (!collider2.collider.collidable && collider1.collider.type == "dynamic")
      //     allowCollide = false;
      if (!dynamicCollider.collider.collidable) return; // if (collider1.collider.type == "dynamic" && collider2.collider.type == "solid") {

      var collide = this.collide(dynamicCollider, solidCollider);
      var col1 = dynamicCollider.collider;
      var col2 = solidCollider.collider; // Right

      if (collide.right && dynamicCollider.velocity.x > 0) {
        dynamicCollider.position.x = solidCollider.position.x - col2.width / 2 - col1.width / 2 + 1 - col1.offset.x;
        dynamicCollider.velocity.x = 0;
      } // Left


      if (collide.left && dynamicCollider.velocity.x < 0) {
        dynamicCollider.position.x = solidCollider.position.x + col2.width / 2 + col1.width / 2 - 1 - col1.offset.x;
        dynamicCollider.velocity.x = 0;
      } // Top


      if (collide.top && dynamicCollider.velocity.y < 0) {
        dynamicCollider.position.y = solidCollider.position.y + col2.height / 2 + col1.height / 2 - 1;
        dynamicCollider.velocity.y = 0;
      } // Bottom


      if (collide.bottom && dynamicCollider.velocity.y > 0) {
        dynamicCollider.position.y = solidCollider.position.y - col2.height / 2 - col1.height / 2 + 1;
        dynamicCollider.velocity.y = 0;
      } // console.log(collider2.id);


      if (collide.any) {
        // if ((collider1.velocity.x != 0 || collider1.velocity.y != 0))
        dynamicCollider.collider.collidesWith = Object.assign({}, collide); // collider1.collider.otherColliders = [collider2];
      } // else
      //     collider1.collider.collidesWith = null;
      // collider1.collider.otherColliders = [];
      // }

    }
  }]);

  return Physics;
}();

exports.Physics = Physics;
},{"../config":"ts/config.ts","./utils/math":"ts/engine/utils/math.ts"}],"ts/engine/components/Point.ts":[function(require,module,exports) {
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
    value: function init() {
      this.inited = true;
    }
  }, {
    key: "update",
    value: function update() {
      this.velocity.x *= this.acceleration.x;
      this.velocity.y *= this.acceleration.y;
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }, {
    key: "render",
    value: function render() {}
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return Point;
}();

exports.Point = Point;
},{"../Physics":"ts/engine/Physics.ts","../utils/math":"ts/engine/utils/math.ts"}],"ts/engine/components/Sprite.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sprite = void 0;

var _Point2 = require("./Point");

var _math = require("../utils/math");

var _config = require("../../config");

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
    _this.repeat = (props === null || props === void 0 ? void 0 : props.repeat) || _math.Vector2.all();
    _this.opacity = 1;
    _this.frame = (props === null || props === void 0 ? void 0 : props.frame) || _math.Vector2.zero();
    _this.assetName = assetName;
    _this.texture = null;
    _this.visible = true;
    return _this;
  }

  _createClass(Sprite, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Sprite.prototype), "init", this).call(this);

      this.updateAsset();
    }
  }, {
    key: "updateAsset",
    value: function updateAsset() {
      this.texture = (0, _math.asImage)(this.game.getAssetByName(this.assetName));
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(Sprite.prototype), "update", this).call(this);
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(Sprite.prototype), "render", this).call(this);

      if (!this.texture || !this.visible) return;
      this.game.renderer.drawSprite(Object.assign(Object.assign({}, this), {
        texture: this.texture
      }));
    }
  }, {
    key: "blink",
    value: function blink() {
      if (this.game.tick(5)) this.visible = !this.visible;
    }
  }, {
    key: "playAnimation",
    value: function playAnimation(assetName, framesCount, speed) {
      this.texture = (0, _math.asImage)(this.game.getAssetByName(assetName));

      if (framesCount <= 1) {
        this.frame.x = 0;
        return;
      }

      if (this.game.tick(speed || _config.Config.DEFAULT_ANIMATION_SPEED)) {
        this.frame.x++;
        if (this.frame.x >= framesCount) this.frame.x = 0;
      }
    }
  }]);

  return Sprite;
}(_Point2.Point);

exports.Sprite = Sprite;
},{"./Point":"ts/engine/components/Point.ts","../utils/math":"ts/engine/utils/math.ts","../../config":"ts/config.ts"}],"ts/engine/components/Container.ts":[function(require,module,exports) {
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
      if (id) return this.children.find(function (child) {
        return child.id.indexOf(id) >= 0;
      });
    }
  }, {
    key: "removeChildById",
    value: function removeChildById(id) {
      this.children = this.children.filter(function (child) {
        if (!(0, _math.compareNames)(child.id, id)) return true;else {
          child.destroy();
          return false;
        }
      });
    }
  }, {
    key: "removeChildrenByGroupName",
    value: function removeChildrenByGroupName(group) {
      var _this = this;

      this.children.map(function (child) {
        if (child.group && (0, _math.compareNames)(child.group, group)) {
          _this.removeChildById(child.id);
        }
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
        child.game = game;
        child.init();
      });
    }
  }, {
    key: "callChildren",
    value: function callChildren(method) {
      this.children.map(function (child) {
        return child[method]();
      });
    }
  }]);

  return Container;
}();

exports.Container = Container;
},{"./Sprite":"ts/engine/components/Sprite.ts","./Point":"ts/engine/components/Point.ts","../utils/math":"ts/engine/utils/math.ts"}],"ts/engine/events/Gamepad.ts":[function(require,module,exports) {
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
},{}],"ts/engine/Renderer.ts":[function(require,module,exports) {
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
    value: function renderParticles() {
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
    value: function inCameraViewport(pos, width, height) {
      var cam = this.game.camera.position;
      var w = innerWidth + 150,
          h = innerHeight + 150;
      width = (0, _math.safeValue)(width, _config.Config.SPRITE_SIZE);
      height = (0, _math.safeValue)(height, _config.Config.SPRITE_SIZE);
      return pos.x + width / 2 > cam.x - w / 2 && pos.y + height / 2 > cam.y - h / 2 && pos.x - width / 2 < cam.x + w / 2 && pos.y - height / 2 < cam.y + h / 2;
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
      l.context.translate(innerWidth / 2 * l.cameraFactor, innerHeight / 2 * l.cameraFactor);
      l.context.rotate(this.game.camera.rotation * l.cameraFactor);
      l.context.transform((scale === null || scale === void 0 ? void 0 : scale.x) || 1, 0, 0, (scale === null || scale === void 0 ? void 0 : scale.y) || 1, p.x - this.getCameraPosition(layer).x, p.y - this.getCameraPosition(layer).y);
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
      var w = Math.floor((0, _math.safeValue)(props.width, 1) * _config.Config.SPRITE_SIZE);
      var h = Math.floor((0, _math.safeValue)(props.height, 1) * _config.Config.SPRITE_SIZE);
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
      context.textAlign = props.align || "center";
      context.textBaseline = "middle";

      if (props.centered != undefined) {
        console.warn("Text centered!");
      }

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
      var _a, _b;

      try {
        if (!props.texture) return;
        var size = _config.Config.SPRITE_SIZE;
        var w = (0, _math.safeValue)(props.width, 1) * size;
        var h = (0, _math.safeValue)(props.height, 1) * size;

        var frameW = (0, _math.safeValue)(props.width, 1) * _config.Config.SPRITE_PIXEL_SIZE;

        var frameH = (0, _math.safeValue)(props.height, 1) * _config.Config.SPRITE_PIXEL_SIZE;

        var framePos = (0, _math.safeValue)(props.frame, _math.Vector2.zero());
        var p = (0, _math.safeValue)(props.position, _math.Vector2.zero());
        var o = (0, _math.safeValue)(props.offset, _math.Vector2.zero());
        if (!this.inCameraViewport(p, w * (0, _math.safeValue)((_a = props.repeat) === null || _a === void 0 ? void 0 : _a.x, 1), h * (0, _math.safeValue)((_b = props.repeat) === null || _b === void 0 ? void 0 : _b.y, 1)) && this.layers[props.layer || "game"].cameraFactor == 1) return;
        var f = (0, _math.safeValue)(props.flip, {
          x: false,
          y: false
        });
        var s = (0, _math.safeValue)(props.scale, _math.Vector2.all());
        var context = this.getContext(props.layer);
        this.startTransform(props.layer, p.add(o), props.rotation, new _math.Vector2(s.x * (f.x ? -1 : 1), s.y * (f.y ? -1 : 1)), props.opacity); // Draw sprite without repeat

        if (!props.repeat || _math.Vector2.compare(props.repeat || _math.Vector2.all(), _math.Vector2.all())) {
          if ((0, _math.safeValue)(props.framed, true)) context.drawImage(props.texture, // Clip rect
          framePos.x * frameW, framePos.y * frameH, frameW, frameH, // Transform
          -w / 2, -h / 2, w, h);else context.drawImage(props.texture, // Transform
          -w / 2, -h / 2, w, h);
        } else if (props.repeat) // And... With repeat?
          for (var repeatY = 0; repeatY < props.repeat.y; repeatY++) {
            for (var repeatX = 0; repeatX < props.repeat.x; repeatX++) {
              context.drawImage(props.texture, -w / 2 + repeatX * w, -h / 2 + repeatY * h, w, h);
            }
          }

        this.endTransform(props.layer);
      } catch (err) {}
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
},{"../config":"ts/config.ts","./utils/math":"ts/engine/utils/math.ts"}],"ts/engine/Generator.ts":[function(require,module,exports) {
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
    this.onWorldChangeListeners = [];
    this.chunks = [];
    this.destroyedOres = [];
    this.modifiedOres = {};
    this.settings = [];
    this.range = [new _math.Vector2(1, 0), new _math.Vector2(-1, 0), new _math.Vector2(0, 1), new _math.Vector2(0, -1), new _math.Vector2(1, 1), new _math.Vector2(-1, -1), new _math.Vector2(-1, 1), new _math.Vector2(1, -1), new _math.Vector2(1, -1), new _math.Vector2(-1, 1), new _math.Vector2(0, 0)];
  }

  _createClass(Generator, [{
    key: "generateChunksAt",
    value: function generateChunksAt(position) {
      var _this = this;

      var mul = 1;
      var pos = this.game.camera.position.div(_config.Config.SPRITE_SIZE * (_config.Config.CHUNK_SIZE * mul)).apply(Math.floor);
      var checkPos = pos.add(new _math.Vector2(.5, .5)).mul(_config.Config.SPRITE_SIZE * _config.Config.CHUNK_SIZE * mul); // Create chunks

      if (checkPos.distance(this.game.camera.position) > 100) {
        this.range.map(function (p) {
          if (!_this.chunks.find(function (c) {
            return _math.Vector2.compare(c.pos, pos.mul(mul).add(p));
          })) {
            var chunk = _this.createChunk(pos.mul(mul).add(p));

            if (chunk) _this.chunks.push(chunk);
          }
        });
        this.onWorldChangeListeners.filter(function (listener) {
          return listener.listenChunks;
        }).map(function (listener) {
          listener.callback();
        });
      } // Remove chunks


      this.chunks.map(function (chunk, index) {
        if (_this.game.camera.position.distance(chunk.pos.mul(_config.Config.SPRITE_SIZE * _config.Config.CHUNK_SIZE)) > 800) {
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
            var noiseX = x + pos.x * _config.Config.CHUNK_SIZE;
            var noiseY = y + pos.y * _config.Config.CHUNK_SIZE;

            var getValue = function getValue(x, y, div) {
              return (+(0, _noise.perlin2)(x / (div || 10), y / (div || 10)) + 1) / 1.5;
            };

            var value = getValue(noiseX, noiseY, gen.divider);
            var rules = gen.rules ? gen.rules(noiseX, noiseY, getValue) : true;
            if ((0, _math.inRange)(value, gen.value[0], gen.value[1]) && (0, _math.inRange)(_y, gen.height[0], gen.height[1]) && rules) ores[y][x] = gen.block;
          }

          var inChunkId = [x, y, pos.x, pos.y].join("-");

          if (ores[y][x] && this.destroyedOres.indexOf(inChunkId) < 0) {
            var ore = new ores[y][x](new _math.Vector2(_x, _y), this.modifiedOres[inChunkId]);
            ore.inChunkId = inChunkId;
            ore.group = "".concat(__chunkId);
            this.game.add(ore);
          }
        }
      }

      this.game.initChildren();
      return {
        group: "".concat(__chunkId),
        pos: pos
      };
    }
  }, {
    key: "checkIsInLoadedChunk",
    value: function checkIsInLoadedChunk(checkPosition) {
      return this.chunks.findIndex(function (chunk) {
        return _math.Vector2.compare(chunk.pos, checkPosition.add(_math.Vector2.all(_config.Config.SPRITE_SIZE / 2)).div(_config.Config.SPRITE_SIZE * _config.Config.CHUNK_SIZE).apply(Math.floor));
      }) >= 0;
    }
  }, {
    key: "destroyOre",
    value: function destroyOre(inChunkId) {
      delete this.modifiedOres[inChunkId];
      this.destroyedOres.push(inChunkId);
      this.onWorldChangeListeners.map(function (listener) {
        if (listener.pos != null && listener.pos.distance((0, _math.inChunkIdToPosition)(inChunkId)) < 200 || !listener.pos) listener.callback();
      });
    }
  }, {
    key: "modifyOre",
    value: function modifyOre(inChunkId, data) {
      this.modifiedOres[inChunkId] = data;
    }
  }, {
    key: "onWorldChange",
    value: function onWorldChange(id, pos, callback, listenChunks) {
      this.onWorldChangeListeners.push({
        id: id,
        pos: pos,
        callback: callback,
        listenChunks: listenChunks
      });
    }
  }, {
    key: "removeListenerById",
    value: function removeListenerById(id) {
      this.onWorldChangeListeners = this.onWorldChangeListeners.filter(function (listener) {
        return listener.id != id;
      });
    }
  }]);

  return Generator;
}();

exports.Generator = Generator;
},{"./utils/math":"ts/engine/utils/math.ts","../config":"ts/config.ts","./utils/noise":"ts/engine/utils/noise.ts"}],"ts/messages.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  err: {
    assetLoadError: function assetLoadError(name) {
      return "Failed to load asset with name \"".concat(name, "\"");
    },
    audioPlayError: function audioPlayError(name) {
      return "Failed to play audio asset \"".concat(name, "\"");
    },
    cantFindBlockByInChunkId: function cantFindBlockByInChunkId(id) {
      return "Can't find block by inChunkId \"".concat(id, "\"");
    }
  }
};
exports.default = _default;
},{}],"ts/engine/components/Sound.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sound = void 0;

var _messages = _interopRequireDefault(require("../../messages"));

var _math = require("../utils/math");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sound = /*#__PURE__*/function () {
  function Sound() {
    _classCallCheck(this, Sound);

    this.assetName = null;
    this.audio = null;
    this.volume = 1;
  }

  _createClass(Sound, [{
    key: "play",
    value: function play(game, assetName, volume, loop, toStart) {
      var _this = this;

      this.assetName = assetName;
      this.audio = (0, _math.asAudio)(game.getAssetByName(assetName));

      if (!this.audio) {
        console.error(_messages.default.err.audioPlayError(assetName));
        return;
      }

      if ((0, _math.safeValue)(toStart, true)) this.audio.currentTime = 0;
      this.volume = (0, _math.safeValue)(volume, 1);
      this.audio.volume = this.volume;
      this.audio.play();
      if (loop) this.audio.ontimeupdate = function () {
        if (!_this.audio) return;

        if (_this.audio.currentTime >= _this.audio.duration - .3) {
          _this.audio.currentTime = 0;

          _this.audio.play();
        }
      };
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!this.audio) return;
      if (this.audio.paused) return;
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }, {
    key: "update3D",
    value: function update3D(game, emitterPosition, maxDistance) {
      if (!this.audio) return;
      var distance = (0, _math.safeValue)(maxDistance, innerHeight / 2 + 300);
      this.audio.volume = (0, _math.clamp)(this.volume * (0, _math.clamp)((1 - game.camera.position.distance(emitterPosition) / distance) * 1.8, 0, 1), 0, 1);
    }
  }]);

  return Sound;
}();

exports.Sound = Sound;
},{"../../messages":"ts/messages.ts","../utils/math":"ts/engine/utils/math.ts"}],"ts/engine/Game.ts":[function(require,module,exports) {
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

var _Sound = require("./components/Sound");

var _messages = _interopRequireDefault(require("../messages"));

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
      rotation: 0,
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
    _this.sounds = [];
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
      var asset = this.assets.find(function (asset) {
        return asset.name == name;
      });
      if (asset) return asset;else console.error(_messages.default.err.assetLoadError(name));
    }
  }, {
    key: "removeChildById",
    value: function removeChildById(id, listenerId) {
      this.gamepad.removeListenerById(listenerId || id);
      this.generator.removeListenerById(listenerId || id);

      _get(_getPrototypeOf(Game.prototype), "removeChildById", this).call(this, id);
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
    key: "tick",
    value: function tick(_tick) {
      return this.clock.elapsed % _tick == 0;
    }
  }, {
    key: "playSoundAt",
    value: function playSoundAt(position, assetName, volume) {
      var sound = new _Sound.Sound();
      sound.play(this, assetName, volume);
      this.sounds.push(sound);
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

        _this2.clock.elapsed++; // Camera shake

        if (!_this2.camera.shaking) {
          _this2.camera.startShakeElapsed = _this2.clock.elapsed;

          _this2.camera.offset.lerp(_math.Vector2.zero(), .2);
        } else {
          if ((_this2.clock.elapsed - _this2.camera.startShakeElapsed) % 10 == 0) _this2.camera.shaking = false;

          _this2.camera.offset.copy(_this2.camera.offset.add(new _math.Vector2((0, _math.random)(-_this2.camera.shakeAmplitude, _this2.camera.shakeAmplitude), (0, _math.random)(-_this2.camera.shakeAmplitude, _this2.camera.shakeAmplitude))));
        } // Update


        _this2.physics.update();

        _this2.callChildren("update");

        _this2.updateListeners.map(function (listener) {
          return listener(_this2.clock);
        });

        _this2.callChildren("render");

        _this2.renderListeners.map(function (listener) {
          return listener(_this2.renderer);
        });

        _this2.renderer.renderParticles();
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
},{"./Asset":"ts/engine/Asset.ts","./components/Container":"ts/engine/components/Container.ts","./events/Gamepad":"ts/engine/events/Gamepad.ts","./Physics":"ts/engine/Physics.ts","./Renderer":"ts/engine/Renderer.ts","./utils/math":"ts/engine/utils/math.ts","./Generator":"ts/engine/Generator.ts","./components/Sound":"ts/engine/components/Sound.ts","../messages":"ts/messages.ts"}],"ts/engine/components/Text.ts":[function(require,module,exports) {
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
    value: function render() {
      _get(_getPrototypeOf(Text.prototype), "render", this).call(this);

      this.game.renderer.drawText(Object.assign({}, this));
    }
  }]);

  return Text;
}(_Point2.Point);

exports.Text = Text;
},{"./Point":"ts/engine/components/Point.ts"}],"ts/engine/components/Group.ts":[function(require,module,exports) {
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
    value: function init() {
      this.initChildren(this.game);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.allowUpdateChildren) this.callChildren("update");
    }
  }, {
    key: "render",
    value: function render() {
      if (this.visible) this.callChildren("render");
    }
  }]);

  return Group;
}(_Container2.Container);

exports.Group = Group;
},{"../utils/math":"ts/engine/utils/math.ts","./Container":"ts/engine/components/Container.ts"}],"ts/engine/index.ts":[function(require,module,exports) {
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
},{"./Game":"ts/engine/Game.ts","./components/Point":"ts/engine/components/Point.ts","./components/Sprite":"ts/engine/components/Sprite.ts","./components/Text":"ts/engine/components/Text.ts","./components/Group":"ts/engine/components/Group.ts"}],"ts/engine/components/Particles.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpawnParticles = SpawnParticles;
exports.SpawnDisputesParticles = SpawnDisputesParticles;
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
    this.opacity = (0, _math.safeValue)(settings === null || settings === void 0 ? void 0 : settings.opacity, 1);
    this.downOpacity = (0, _math.safeValue)(settings === null || settings === void 0 ? void 0 : settings.downOpacity, 0);
    this.position = new _math.Vector2(position.x, position.y);
    this.rotation = (0, _math.random)(0, Math.PI * 4);
    var v = settings === null || settings === void 0 ? void 0 : settings.velocity;
    var rv = settings === null || settings === void 0 ? void 0 : settings.rotationVelocity;
    this.velocity = v ? v() : new _math.Vector2((0, _math.random)(-5, 5), (0, _math.random)(-10, 5));
    this.rotationVelocity = rv ? rv() : (0, _math.random)(-.1, .1);
    var s = settings === null || settings === void 0 ? void 0 : settings.size;
    this.size = (s ? s : [.5, 1.2])[Math.floor((0, _math.random)(0, 2))];
    this.gravity = (0, _math.safeValue)(settings === null || settings === void 0 ? void 0 : settings.gravity, _config.Config.PARTICLES_GRAVITY);
    this.downSize = (0, _math.safeValue)(settings === null || settings === void 0 ? void 0 : settings.downSize, .01);
    this.render = (settings === null || settings === void 0 ? void 0 : settings.render) ? settings === null || settings === void 0 ? void 0 : settings.render : function (renderer, part) {
      renderer.drawRect({
        color: _this.color,
        width: _this.size * .2,
        height: _this.size * .2,
        position: _this.position,
        rotation: _this.rotation,
        layer: "particles",
        opacity: _this.opacity
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

function SpawnDisputesParticles(game, position, intensity) {
  SpawnParticles(game, position, {
    render: function render(renderer, part) {
      renderer.drawSprite({
        texture: (0, _math.asImage)(game.getAssetByName("disputes")),
        position: part.position,
        rotation: part.rotation,
        opacity: part.opacity,
        scale: _math.Vector2.all(part.size)
      });
    },
    count: 6,
    gravity: -.01,
    size: [1.4 * (0, _math.safeValue)(intensity, 1), 1.4 * (0, _math.safeValue)(intensity, 1)],
    rotationVelocity: function rotationVelocity() {
      return (0, _math.random)(-.01, -.01);
    },
    velocity: function velocity() {
      return new _math.Vector2((0, _math.random)(-1, 1), (0, _math.random)(-1, 1)).mul(2 * (0, _math.safeValue)(intensity, 1));
    },
    opacity: 3 * (0, _math.safeValue)(intensity, 1),
    downSize: .002,
    downOpacity: .01
  });
}
},{"../utils/math":"ts/engine/utils/math.ts","../../config":"ts/config.ts"}],"ts/objects/entities/Entity.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Entity = void 0;

var _config = require("../../config");

var _engine = require("../../engine");

var _Sound = require("../../engine/components/Sound");

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
    _this.sound = new _Sound.Sound();
    _this.hp = (props === null || props === void 0 ? void 0 : props.hp) || 10;
    _this.initialMoveSpeed = (props === null || props === void 0 ? void 0 : props.moveSpeed) || 5;
    _this.moveSpeed = (props === null || props === void 0 ? void 0 : props.moveSpeed) || 5;
    _this.damaged = false;
    _this.damagedElapsed = 0;
    _this.stayAnimation = "".concat(name, "-stay");
    _this.walkAnimation = "".concat(name, "-walk");
    _this.moveSpeedDown = 0;
    _this.movement = new _math.Vector2();
    _this.allowMove = true;
    _this.allowAnimate = true;
    _this.digOffsetFactor = .2;
    return _this;
  }

  _createClass(Entity, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Entity.prototype), "init", this).call(this);

      this.collider.type = "dynamic";
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(Entity.prototype), "update", this).call(this);

      if (!this.allowMove) {
        this.movement.set();
        this.velocity.set();
      }

      if (!this.damaged) {
        this.damagedElapsed = this.game.clock.elapsed;
        this.visible = true;
      } else {
        if ((this.game.clock.elapsed - this.damagedElapsed) % 50 == 0) this.damaged = false;
        this.blink();
      }

      this.offset.lerp(_math.Vector2.zero(), this.digOffsetFactor);
      this.animate();
    }
  }, {
    key: "dig",
    value: function dig(damage, speed, level, direction) {
      var successOreHit = false;

      if (this.collider.collidesWith != null && this.collider.collidesWith.any) {
        var ore = this.game.getChildById(this.collider.collidesWith.id, true); // const tool = tools[this.toolLevel.toString()];

        if (ore == undefined) return false;

        if (this.collider.collidesWith[direction] && this.position.distance(ore.position) < _config.Config.SPRITE_SIZE * 2 && this.game.clock.elapsed % speed == 0) {
          ore.hit(damage, level);
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
      this.velocity.x = this.movement.normalize().x * (this.moveSpeed - this.moveSpeedDown);
      this.velocity.y = this.movement.normalize().y * (this.moveSpeed - this.moveSpeedDown);
    }
  }, {
    key: "animate",
    value: function animate() {
      if (!this.allowAnimate) return;
      if (this.velocity.x != 0 || this.velocity.y != 0) this.playAnimation(this.walkAnimation, 4);else this.playAnimation(this.stayAnimation, 1);
    }
  }, {
    key: "hit",
    value: function hit(damage) {
      if (this.damaged) return;
      this.hp -= damage;
      this.damaged = true;
      this.spawnText("-".concat(damage), undefined, _config.Color.RED);
    }
  }, {
    key: "spawnText",
    value: function spawnText(text, offset, color) {
      (0, _Particles.SpawnParticles)(this.game, this.position.add((0, _math.safeValue)(offset, new _math.Vector2(0, -30))), {
        render: function render(renderer, part) {
          renderer.drawText({
            text: text,
            font: "22px Pixel",
            color: color,
            position: part.position,
            opacity: part.opacity,
            rotation: part.velocity.y / 20,
            layer: "particles"
          });
        },
        opacity: 5,
        count: 1,
        gravity: .04,
        velocity: function velocity() {
          return new _math.Vector2(0, -2);
        },
        downOpacity: .08,
        downSize: 0,
        box: function box() {
          return new _math.Vector2((0, _math.random)(-10, 10), (0, _math.random)(-10, 10));
        }
      });
    }
  }]);

  return Entity;
}(_engine.Sprite);

exports.Entity = Entity;
},{"../../config":"ts/config.ts","../../engine":"ts/engine/index.ts","../../engine/components/Sound":"ts/engine/components/Sound.ts","../../engine/components/Particles":"ts/engine/components/Particles.ts","../../engine/utils/math":"ts/engine/utils/math.ts"}],"ts/engine/components/UI.ts":[function(require,module,exports) {
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
  function UI() {
    _classCallCheck(this, UI);

    this.game = null;
    this.enabled = true;
    this.allowSelectSlots = true;
    this.focused = {
      row: 0,
      slot: 0
    };
    this.ghostFocused = {
      row: 0,
      slot: 0
    };
    this.template = [1];
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
            if (_this.ghostFocused.row == Math.abs(_this.focused.row % _this.template.length - 1)) _this.focused.slot = _this.ghostFocused.slot;
            _this.focused.row--;

            _this.bounds();

            break;

          case "down":
            if (_this.ghostFocused.row == _this.focused.row % _this.template.length + 1) _this.focused.slot = _this.ghostFocused.slot;
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
      this.focused.row = (0, _math.clamp)(this.focused.row, 0, this.template.length - 1);
      if (this.focused.slot > this.template[this.focused.row] - 1) this.focused.slot = 0;else if (this.focused.slot < 0) this.focused.slot = this.template[this.focused.row] - 1;
      this.focused.slot = (0, _math.clamp)(this.focused.slot, 0, this.template[this.focused.row] - 1);
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
      var isFocused = this.focused.row == row && this.focused.slot == slot;
      var isGhostFocused = this.ghostFocused.row == row && this.ghostFocused.slot == slot;
      if (ghost && isFocused) this.ghostFocused = {
        row: row,
        slot: slot
      };
      render();

      if (isFocused || isGhostFocused && ghost) {
        this.game.renderer.drawRect({
          color: "rgba(0, 0, 0, 0)",
          width: (0, _math.safeValue)(width, 1),
          height: (0, _math.safeValue)(height, 1),
          position: pos.apply(Math.floor),
          stroke: {
            width: 4,
            color: _config.Color.ORANGE
          },
          opacity: isGhostFocused && !isFocused ? .2 : 1,
          layer: "ui"
        });
      }
    }
  }, {
    key: "renderDescriptionUI",
    value: function renderDescriptionUI(props) {
      if (!this.game) return;
      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);
      var margin = 6;
      var lineHeight = 22; // Container

      this.game.renderer.drawSprite({
        texture: (0, _math.asImage)(this.game.getAssetByName("description-ui")),
        position: new _math.Vector2(0, size * 3).add(windowCenter),
        width: 7,
        height: 5,
        layer: "ui"
      }); // Icon

      props.renderIcon(new _math.Vector2(-2.5 * size + size / 2, size + 70).add(windowCenter)); // Texts

      var title = (0, _math.wrapText)(props.title, 26); // Title

      this.game.renderer.drawText({
        text: title.text,
        font: "20px Pixel",
        position: new _math.Vector2(-size * 1.3, size + 70 - size / 2 + 15).add(windowCenter),
        align: "left",
        color: props.titleColor || "#fff",
        layer: "ui"
      }); // Specials

      this.game.renderer.drawText({
        text: props.specials.join("\n"),
        color: _config.Color.ORANGE,
        position: new _math.Vector2(-size * 1.3, size + 70 + margin + (title.wrapCount >= 1 ? lineHeight : 0)).add(windowCenter),
        align: "left",
        layer: "ui"
      }); // Description

      this.game.renderer.drawText({
        text: (0, _math.wrapText)(props.description, 31).text,
        position: new _math.Vector2(-size * 1.3, size + 70 + lineHeight + margin * 2 + lineHeight * title.wrapCount + lineHeight * (props.specials.length - 1)).add(windowCenter),
        align: "left",
        layer: "ui"
      });
    }
  }, {
    key: "renderProgressBar",
    value: function renderProgressBar(props) {
      if (!this.game) return;
      var width = props.width;
      var height = props.height;
      var progress = height * props.progress;
      var pos = props.position.apply(Math.floor);
      this.game.renderer.drawRect({
        width: (width + 10) / _config.Config.SPRITE_SIZE,
        height: (height + 10) / _config.Config.SPRITE_SIZE,
        position: pos.add(_math.Vector2.all(.5)),
        color: _config.Color.STONE_LAYER_COLOR,
        stroke: {
          color: props.strokeColor || _config.Color.ORANGE,
          width: 4
        },
        layer: props.layer || "ui"
      });
      this.game.renderer.drawRect({
        width: width / _config.Config.SPRITE_SIZE,
        height: progress / _config.Config.SPRITE_SIZE,
        position: pos.add(new _math.Vector2(0, (height - height * props.progress) / 2)).add(_math.Vector2.all(.5)),
        color: props.color || _config.Color.YELLOW,
        layer: props.layer || "ui"
      });
    }
  }, {
    key: "spawnMessageText",
    value: function spawnMessageText(text) {
      if (!this.game) return;
      (0, _Particles.SpawnParticles)(this.game, new _math.Vector2(20, innerHeight - 40), {
        // custom: new Text("store-text", text, { font: "22px Pixel" }),
        render: function render(renderer, part) {
          renderer.drawText({
            text: text,
            font: "22px Pixel",
            position: part.position,
            opacity: part.size,
            layer: "ui",
            align: "left"
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
},{"../../config":"ts/config.ts","../utils/math":"ts/engine/utils/math.ts","./Particles":"ts/engine/components/Particles.ts"}],"ts/objects/item/ItemParent.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemParent = void 0;

var _config = require("../../config");

var _engine = require("../../engine");

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

var ItemParent = /*#__PURE__*/function (_Sprite) {
  _inherits(ItemParent, _Sprite);

  var _super = _createSuper(ItemParent);

  function ItemParent(name, assetName, position, props) {
    var _this;

    _classCallCheck(this, ItemParent);

    _this = _super.call(this, name, assetName, Object.assign(Object.assign({}, props), {
      colliderType: "dynamic",
      position: position.expand()
    }));
    _this.radius = 4;
    _this.group = "items";
    _this.allowPickup = true;
    _this.picked = false;
    _this.liveStartElapsed = 0;
    _this.nearOnInit = false;
    _this.foldToPosition = _math.Vector2.zero();
    _this.collider.width = 6 * _config.Config.SPRITE_SCALE;
    _this.collider.height = 6 * _config.Config.SPRITE_SCALE;
    return _this;
  }

  _createClass(ItemParent, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(ItemParent.prototype), "init", this).call(this);

      this.liveStartElapsed = this.game.clock.elapsed;
      this.layer = "particles";
      this.velocity.set((0, _math.random)(-8, 8), (0, _math.random)(-8, 8));
      this.acceleration.copy(_math.Vector2.all(.8));
      if (this.checkDistanceToPlayer(this.game.getChildById("player"), _config.Config.PICKUP_DISTANCE * 2)) this.nearOnInit = true;
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(ItemParent.prototype), "update", this).call(this);

      if (!this.game.renderer.inCameraViewport(this.position)) {
        if (this.game.clock.elapsed - this.liveStartElapsed >= _config.Config.ITEMS_LIVE_TIME) this.game.removeChildById(this.id);
      } else {
        this.liveStartElapsed = this.game.clock.elapsed;
      }

      if (this.allowPickup) {
        this.followPlayer(this.game.getChildById("player"));
        this.collideWidthOtherItems(this.game.children.filter(function (child) {
          return child.group == "items" && child.allowPickup && child.picked;
        }));
      } else {
        this.moveTo(this.foldToPosition);
        if (this.foldToPosition.distance(this.position) < 30) this.game.removeChildById(this.id);
      }
    }
  }, {
    key: "pickup",
    value: function pickup(player, count) {
      player.pickup(this, this.name, count);
    }
  }, {
    key: "followPlayer",
    value: function followPlayer(player) {
      if (!player) return;
      if (!this.checkDistanceToPlayer(player)) this.nearOnInit = false;
      if (this.nearOnInit) return;

      if (!this.picked && this.checkDistanceToPlayer(player)) {
        this.pickup(player, 1);
        this.picked = true;
      } else if (this.picked && player.wire.distance(this.position) > _config.Config.PICKUP_DISTANCE) {
        this.pickup(player, -1);
        this.picked = false;
      }

      if (!this.picked) return;
      this.moveTo(player.wire);
      this.game.renderer.drawLine({
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
      items.map(function (item, index) {
        if (item.position.distance(_this2.position) < (_this2.radius + item.radius) * _config.Config.SPRITE_SCALE) {
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

  return ItemParent;
}(_engine.Sprite);

exports.ItemParent = ItemParent;
},{"../../config":"ts/config.ts","../../engine":"ts/engine/index.ts","../../engine/utils/math":"ts/engine/utils/math.ts"}],"ts/objects/item/Item.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;

var _ItemParent2 = require("./ItemParent");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Item = /*#__PURE__*/function (_ItemParent) {
  _inherits(Item, _ItemParent);

  var _super = _createSuper(Item);

  function Item(type, position, props) {
    var _this;

    _classCallCheck(this, Item);

    _this = _super.call(this, type, type.replace("item-", ""), position, props);
    _this.itemType = type;
    return _this;
  }

  return Item;
}(_ItemParent2.ItemParent);

exports.Item = Item;
},{"./ItemParent":"ts/objects/item/ItemParent.ts"}],"ts/objects/item/RobotItem.ts":[function(require,module,exports) {
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

    return _super.call(this, "item-robot", position, {
      scale: new _math.Vector2(.9, .8)
    });
  }

  return RobotItem;
}(_Item2.Item);

exports.RobotItem = RobotItem;
},{"../../engine/utils/math":"ts/engine/utils/math.ts","./Item":"ts/objects/item/Item.ts"}],"ts/objects/entities/Robot.ts":[function(require,module,exports) {
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

    _this = _super.call(this, "robot", "robot", {
      position: position.expand(),
      scale: _math.Vector2.zero()
    });
    _this.pickupButton = new _UI.Button();
    _this.playerIsNear = false;
    _this.movement = new _math.Vector2(0, 1);
    _this.allowAnimate = false;

    _this.acceleration.set(.95, .95);

    _this.stayAnimation = "robot";
    _this.breaked = false;
    _this.initElapsed = 0;
    _this.allowPickup = false;
    _this.digOffsetFactor = .1;
    return _this;
  }

  _createClass(Robot, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      _get(_getPrototypeOf(Robot.prototype), "init", this).call(this);

      this.scale.set();
      this.initElapsed = this.game.clock.elapsed;
      this.game.gamepad.onKeyDown(this.id, "enter", function () {
        if (!_this2.playerIsNear || !_this2.allowPickup) return; // Pickup robot

        _this2.pickupButton.click();

        _this2.pickup();

        console.log(true);
      }); // Play motor start sound

      this.sound.play(this.game, "motor-start", .5); // Play motor sound

      this.sound.play(this.game, "motor", 1, true);
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(Robot.prototype), "update", this).call(this); // Audio


      this.sound.update3D(this.game, this.position); // Allow pickup

      if (this.scale.mul(10).apply(Math.round).x >= 10 && !this.allowPickup) this.allowPickup = true; // If not in loaded chunk

      if (!this.game.generator.checkIsInLoadedChunk(this.position)) {
        this.velocity.set();
        return;
      }

      this.checkPlayerDistance();
      if (!this.breaked) this._move();
      if (!this.collider.collidesWith) return;
      var ore = this.game.getChildById(this.collider.collidesWith.id);
      if (!ore) return; // If robot cant destroy ore

      if (ore.needToolLevel > 2 && !this.breaked) {
        this.breaked = true;
      }

      this.dig(_config.Config.ROBOT_DAMAGE, _config.Config.ROBOT_HIT_SPEED, 2, "bottom");
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(Robot.prototype), "render", this).call(this);

      this.scale.lerp(_math.Vector2.all(), .1); // Pickup button

      if (this.playerIsNear) {
        this.pickupButton.position = new _math.Vector2(0, -90).add(this.position);
        this.pickupButton.render(this.game);
        this.game.renderer.drawText({
          text: "Подобрать",
          position: new _math.Vector2(0, -50).add(this.position)
        });
      } // Smoke


      if (this.breaked) this.smoke();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(Robot.prototype), "destroy", this).call(this);

      this.sound.stop();
    }
  }, {
    key: "_move",
    value: function _move() {
      this.velocity.copy(this.velocity.add(this.movement.mul(.2)));
    }
  }, {
    key: "smoke",
    value: function smoke() {
      if (this.game.clock.elapsed % 20 == 0) {
        (0, _Particles.SpawnParticles)(this.game, this.position, {
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
    value: function checkPlayerDistance() {
      var player = this.game.getChildById("player");
      if (!player) return;
      this.playerIsNear = player.position.distance(this.position) < _config.Config.ROBOT_PICKUP_DISTANCE;
    }
  }, {
    key: "pickup",
    value: function pickup() {
      this.game.add(new _RobotItem.RobotItem(this.position));
      this.game.initChildren();
      this.game.removeChildById(this.id);
      this.playerIsNear = false;
    }
  }]);

  return Robot;
}(_Entity2.Entity);

exports.Robot = Robot;
},{"../../config":"ts/config.ts","../../engine/components/Particles":"ts/engine/components/Particles.ts","../../engine/components/UI":"ts/engine/components/UI.ts","../../engine/utils/math":"ts/engine/utils/math.ts","../item/RobotItem":"ts/objects/item/RobotItem.ts","./Entity":"ts/objects/entities/Entity.ts"}],"ts/objects/entities/Player.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = exports.MaxToolLevel = void 0;

var _config = require("../../config");

var _math = require("../../engine/utils/math");

var _Entity2 = require("./Entity");

var _Robot = require("./Robot");

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
  },
  "6": {
    speed: 16,
    damage: 2
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
    }); // this.ambientSound = null;
    // this.ambientIsPlaying = false;

    _this.oxygenHungry = false;
    _this.oxygenHungryStartElapsed = 0;
    _this.wire = _this.position.expand();
    _this.inventory = {
      totalCount: 0,
      slots: {}
    };
    _this.hasBottle = false;
    _this.toolLevel = 5;
    _this.allowPlaceRobot = false;
    _this.allowUseFood = false;
    _this.actionType = "grab";
    _this.tipText = "";
    _this.nearFetusStone = undefined;
    _this.damageAnimatedOpacity = 0;
    _this.animatedCameraRotation = 0;
    window.addEventListener("keydown", function (e) {
      if (e.code == "KeyT") {
        _this.initialMoveSpeed = _this.initialMoveSpeed == 5 ? 90 : 5; // this.moveSpeed = this.moveSpeed == 5 ? 90 : 5;

        _this.collider.collidable = !_this.collider.collidable;
      }
    });
    return _this;
  }

  _createClass(Player, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      _get(_getPrototypeOf(Player.prototype), "init", this).call(this);

      this.collider.width = 10 * _config.Config.SPRITE_SCALE;
      this.collider.height = 10 * _config.Config.SPRITE_SCALE;
      this.collider.offset = new _math.Vector2(3, 0); // Set robot

      this.game.gamepad.onKeyDown(this.id, "enter", function () {
        if (_this2.checkItemInInventory("item-robot") && _this2.allowPlaceRobot) _this2.placeRobot();

        _this2.useFood();

        if (!_this2.nearFetusStone) return;

        _this2.nearFetusStone.grab();
      });
    }
  }, {
    key: "update",
    value: function update() {
      var _this3 = this;

      _get(_getPrototypeOf(Player.prototype), "update", this).call(this);

      if (!this.allowMove) return;
      this.movement.set(+this.game.gamepad.keys.right - +this.game.gamepad.keys.left, +this.game.gamepad.keys.down - +this.game.gamepad.keys.up);
      this.move();
      this.pullWire();
      this.nearFetusStone = this.game.getChildrenByName("fetus-stone").find(function (ore) {
        var vineHeight = (ore.length || 0) * _config.Config.SPRITE_SIZE;
        return _this3.game.physics.collideWithRect({
          id: _this3.id,
          position: _this3.position,
          width: _this3.collider.width,
          height: _this3.collider.height
        }, {
          id: ore.id,
          position: ore.position.add(new _math.Vector2(0, vineHeight / 2)),
          width: ore.collider.width / 2,
          height: ore.collider.height + vineHeight
        }).any;
      }); // this.nearFetusStone = this.game.getChildrenByName<FetusStone>("fetus-stone").find(ore=> safeValue(ore.length, 0) > 0 && ore.position.distance(this.position) < 150);
      // this.actionType = this.checkItemInInventory("item-robot") && this.allowPlaceRobot ? "place" : "";

      this.actionType = !!this.nearFetusStone ? "grab" : ""; // Sounds

      this.footsStep(); // this.ambient();

      this.animatedCameraRotation = (0, _math.lerp)(this.animatedCameraRotation, this.velocity.x / 50, .2); // Slow

      if (this.oxygenHungry) {
        this.moveSpeed = this.initialMoveSpeed / 2 + 1;
      } else {
        this.moveSpeed = this.initialMoveSpeed;
        this.moveSpeedDown = (this.checkItemInInventory("raw-nerius") ? 3 : 0) + (this.checkItemInInventory("ready-cidium") ? -2 : 0);
      }

      if (!this.oxygenHungry) this.oxygenHungryStartElapsed = this.game.clock.elapsed; // Dig

      var tool = tools[this.toolLevel.toString()];
      if (this.movement.x != 0) this.dig(tool.damage, tool.speed, this.toolLevel, this.movement.x > 0 ? "right" : "left");else if (this.movement.y != 0) this.dig(tool.damage, tool.speed, this.toolLevel, this.movement.y > 0 ? "bottom" : "top"); //

      this.damageAnimatedOpacity = (0, _math.lerp)(this.damageAnimatedOpacity, 0, .05);
      this.bounds();
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(Player.prototype), "render", this).call(this);

      this.renderUI();
    }
  }, {
    key: "renderUI",
    value: function renderUI() {
      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2);
      if (this.oxygenHungry) this.renderOxygenHungryUI(); //

      this.allowPlaceRobot = this.position.y > 20; // Tip text

      if (this.actionType == "grab") this.tipText = "[OK] - собрать";else if (this.actionType == "place") this.tipText = "[OK] - установить";
      this.game.renderer.drawText({
        text: this.tipText,
        position: new _math.Vector2(0, 150).add(windowCenter),
        layer: "ui"
      });
      this.allowUseFood = !this.checkItemInInventory("item-robot") && this.checkItemInInventory("food-fetus"); // Tool level

      this.game.renderer.drawSprite({
        texture: (0, _math.asImage)(this.game.getAssetByName("tools")),
        position: new _math.Vector2(size, innerHeight - size),
        layer: "ui"
      });
      this.game.renderer.drawText({
        text: this.toolLevel + "ур.",
        position: new _math.Vector2(size, innerHeight - size).add(_math.Vector2.all(size * .3)),
        font: "22px Pixel",
        layer: "ui"
      }); // Bottle

      if (this.hasBottle) this.game.renderer.drawSprite({
        texture: (0, _math.asImage)(this.game.getAssetByName("bottle")),
        position: new _math.Vector2(size * 2 + 20, innerHeight - size),
        layer: "ui"
      }); // Damage vignette

      this.game.renderer.drawSprite({
        texture: (0, _math.asImage)(this.game.getAssetByName("damage")),
        width: innerWidth / _config.Config.SPRITE_SIZE,
        height: innerHeight / _config.Config.SPRITE_SIZE,
        position: new _math.Vector2(innerWidth / 2, innerHeight / 2),
        layer: "ui",
        framed: false,
        opacity: this.damageAnimatedOpacity
      });
    }
  }, {
    key: "renderOxygenHungryUI",
    value: function renderOxygenHungryUI() {
      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2);
      var loseConsciousnessIn = _config.Config.OXYGEN_HUNGRY_TIME - (this.game.clock.elapsed - this.oxygenHungryStartElapsed); // this.game.renderer.drawText({
      //     text: "Кислородное голодание!",
      //     position: new Vector2(innerWidth/2, 100),
      //     font: "24px Pixel",
      //     scale: Vector2.all(1 - (Math.sin(this.game.clock.elapsed / 10) + 1) / 2 / 10),
      //     layer: "ui"
      // });

      this.game.renderer.drawText({
        text: "\u041A\u0438\u0441\u043B\u043E\u0440\u043E\u0434\u043D\u043E\u0435 \u0433\u043E\u043B\u043E\u0434\u0430\u043D\u0438\u0435!\n\u0412\u044B \u043F\u043E\u0442\u0435\u0440\u044F\u0439\u0442\u0435 \u0441\u043E\u0437\u043D\u0430\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437:",
        position: new _math.Vector2(innerWidth / 2, 130),
        layer: "ui"
      });
      this.game.renderer.drawText({
        text: "0:".concat(Math.floor(loseConsciousnessIn / 60)),
        position: new _math.Vector2(innerWidth / 2, 180),
        font: "30px Pixel",
        layer: "ui"
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
    } // ambient() {
    //     if (!this.game.tick(100)) return;
    //     this.game.getChildrenByName<Ore>("ore").filter(ore=> ore.oreType == "fetus-stone").map(ore=> {
    //         if (this.position.distance(ore.position) < 300 && !this.ambientSound) {
    //             this.ambientSound = new Sound();
    //             this.ambientSound.play(this.game, "wave", 1, true);
    //             this.ambientIsPlaying = true;
    //         }
    //         if (this.position.distance(ore.position) > 300 && this.ambientIsPlaying) {
    //             this.ambientSound
    //         }
    //     });
    // }

  }, {
    key: "pickup",
    value: function pickup(item, type, count) {
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
      this.calculateTotalCount();
    }
  }, {
    key: "calculateTotalCount",
    value: function calculateTotalCount() {
      var _this4 = this;

      this.inventory.totalCount = 0;
      this.getInventorySlotNames().map(function (slotName) {
        _this4.inventory.totalCount += _this4.inventory.slots[slotName].count;
      });
    }
  }, {
    key: "pullWire",
    value: function pullWire() {
      if (this.position.distance(this.wire) > _config.Config.WIRE_LENGTH) {
        this.wire.copy(this.wire.add(this.position.sub(this.wire).normalize().mul(this.moveSpeed - this.moveSpeedDown)));
      }
    }
  }, {
    key: "hit",
    value: function hit(damage) {
      _get(_getPrototypeOf(Player.prototype), "hit", this).call(this, damage);

      this.damageAnimatedOpacity = 1.5;
      this.game.camera.shake();
      this.sound.play(this.game, "bonk");

      if (this.hp <= 0) {
        this.position = new _math.Vector2(_config.Config.WORLD_WIDTH * _config.Config.SPRITE_SIZE / 2, -_config.Config.SPRITE_SIZE);
        this.hp = 10;
        this.wire.copy(this.position);
      }
    }
  }, {
    key: "die",
    value: function die() {}
  }, {
    key: "heal",
    value: function heal(_heal) {
      this.hp += _heal;
      this.hp = (0, _math.clamp)(this.hp, 0, 10);
      this.spawnText("+".concat(_heal), undefined, _config.Color.GREEN);
    }
  }, {
    key: "upgradeTool",
    value: function upgradeTool(levelUp) {
      if (this.toolLevel < MaxToolLevel) this.toolLevel += levelUp;
    }
  }, {
    key: "placeRobot",
    value: function placeRobot() {
      if (this.checkItemInInventory("item-robot")) {
        // Sub. robots count in inventory
        this.inventory.slots["item-robot"].count--; // Remove robot inventory instance

        this.game.removeChildById(this.inventory.slots["item-robot"].instances[0].id);
        this.inventory.slots["item-robot"].instances.splice(0, 1);
        this.calculateTotalCount();
      } // Place robot


      this.game.add(new _Robot.Robot(this.position.div(_config.Config.SPRITE_SIZE).add(_math.Vector2.all(.5)).apply(Math.floor).mul(_config.Config.SPRITE_SIZE)));
      this.game.initChildren();
    }
  }, {
    key: "foldSlotItemsTo",
    value: function foldSlotItemsTo(slotName, count, position) {
      var _this5 = this;

      var slotInstances = this.inventory.slots[slotName].instances.filter(function (item) {
        return _this5.game.children.indexOf(item) >= 0 && item.picked;
      });

      for (var i = 0; i < count; i++) {
        if (slotInstances[i] && slotInstances[i].picked) {
          slotInstances[i].allowPickup = false;
          slotInstances[i].picked = false;
          slotInstances[i].foldToPosition = position;
        }
      }

      this.inventory.slots[slotName].instances.splice(0, count); // for (let i = 0; i < count; i ++) {
      //     if (slotInstances[i] && !slotInstances[i].picked && !slotInstances[i].allowPickup) {
      //         this.inventory.slots[slotName].instances.splice(i, 1);
      //     }
      // }

      this.inventory.slots[slotName].count -= count;
      this.calculateTotalCount();
    }
  }, {
    key: "useFood",
    value: function useFood() {
      if (this.allowUseFood && this.hp < 8) {
        var foodSlotNames = this.getInventorySlotNames().filter(function (slotName) {
          return slotName.indexOf("food") >= 0;
        });
        this.inventory.slots[foodSlotNames[0]].instances[0].onUse(this);
        this.game.removeChildById(this.inventory.slots[foodSlotNames[0]].instances[0].id);
        this.inventory.slots[foodSlotNames[0]].count--;
        this.inventory.slots[foodSlotNames[0]].instances.splice(0, 1);
      }
    }
  }, {
    key: "footsStep",
    value: function footsStep() {
      var _a, _b, _c, _d;

      var allow = this.velocity.x > 0 && !((_a = this.collider.collidesWith) === null || _a === void 0 ? void 0 : _a.right) || this.velocity.x < 0 && !((_b = this.collider.collidesWith) === null || _b === void 0 ? void 0 : _b.left) || this.velocity.y < 0 && !((_c = this.collider.collidesWith) === null || _c === void 0 ? void 0 : _c.top) || this.velocity.y > 0 && !((_d = this.collider.collidesWith) === null || _d === void 0 ? void 0 : _d.bottom);
      if (this.game.clock.elapsed % 20 == 0 && allow) this.sound.play(this.game, "step-".concat(Math.floor((0, _math.random)(1, 4))), .3);
    }
  }, {
    key: "getInventorySlotNames",
    value: function getInventorySlotNames() {
      return Object.keys(this.inventory.slots);
    }
  }, {
    key: "checkItemInInventory",
    value: function checkItemInInventory(name) {
      return this.inventory.slots[name] && this.inventory.slots[name].count > 0;
    }
  }]);

  return Player;
}(_Entity2.Entity);

exports.Player = Player;
},{"../../config":"ts/config.ts","../../engine/utils/math":"ts/engine/utils/math.ts","./Entity":"ts/objects/entities/Entity.ts","./Robot":"ts/objects/entities/Robot.ts"}],"ts/managers/level.ts":[function(require,module,exports) {
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
    repeat: new _math.Vector2(Math.round(_config.Config.WORLD_WIDTH) + 2, 1),
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
},{"../config":"ts/config.ts","../engine":"ts/engine/index.ts","../engine/utils/math":"ts/engine/utils/math.ts"}],"ts/objects/Block.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Block = void 0;

var _config = require("../config");

var _engine = require("../engine");

var _Sound = require("../engine/components/Sound");

var _math = require("../engine/utils/math");

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

var Block = /*#__PURE__*/function (_Sprite) {
  _inherits(Block, _Sprite);

  var _super = _createSuper(Block);

  function Block(name, assetName, position, props) {
    var _this;

    _classCallCheck(this, Block);

    _this = _super.call(this, name, assetName, Object.assign(Object.assign({
      colliderType: "none"
    }, props), {
      position: position.add(new _math.Vector2(0, 0)).mul(_config.Config.SPRITE_PIXEL_SIZE * _config.Config.SPRITE_SCALE)
    }));
    _this.inChunkId = "";
    _this.sound = new _Sound.Sound();
    _this.animatedScale = 1;
    _this.animateScaleTo = 1;
    _this.darkenFactor = 1;
    _this.randomRotate = true;
    _this.randomFlipX = true;
    _this.customColliderType = undefined;
    return _this;
  }

  _createClass(Block, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Block.prototype), "init", this).call(this);

      if (this.randomRotate) this.rotation = Math.floor((0, _math.random)(1, 5)) * Math.PI;
      if (this.randomFlipX) this.flip.x = Boolean(Math.floor((0, _math.random)(0, 2)));
      if (_config.Config.ALLOW_DARK) this.visible = false;
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(Block.prototype), "render", this).call(this);

      if (_config.Config.ALLOW_DARK) this.darken();
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(Block.prototype), "update", this).call(this); // this.sound.update3D(this.game, this.position);


      this.animatedScale = (0, _math.lerp)(this.animatedScale, this.animateScaleTo, .2);
      this.scale.set(this.animatedScale, this.animatedScale);
    }
  }, {
    key: "darken",
    value: function darken() {
      var t = 1 - this.game.camera.position.y / 200;
      var d = this.game.camera.position.distance(this.position) - 200;
      this.darkenFactor = (d > 96 ? 1 : d / 96) + (t > 0 ? t : 0);
      if (this.darkenFactor < 1) this.opacity = 1 - this.darkenFactor;
      this.visible = this.darkenFactor < 1;
      this.collider.type = this.darkenFactor < .8 ? (0, _math.safeValue)(this.customColliderType, "solid") : "none"; // this.game.renderer.drawText({
      //     text: JSON.stringify(+this.inChunkId.split("-")[1] < 3),
      //     position: this.position,
      //     layer: "particles"
      // })
    }
  }, {
    key: "checkBlockIn",
    value: function checkBlockIn(offset, checkChunkBorders, findName) {
      var size = _config.Config.SPRITE_SIZE;
      var blocks = this.game.getChildrenByName(findName || "ore");
      var thisPos = this.position.div(size).apply(Math.floor);
      return +this.inChunkId.split("-")[1] >= 3 && (0, _math.safeValue)(checkChunkBorders, true) || blocks.filter(function (block) {
        return block.name.indexOf("plant") < 0;
      }).findIndex(function (block) {
        var orePos = block.position.div(size).apply(Math.floor);
        return _math.Vector2.compare(orePos, thisPos.add(offset));
      }) >= 0;
    }
  }]);

  return Block;
}(_engine.Sprite);

exports.Block = Block;
},{"../config":"ts/config.ts","../engine":"ts/engine/index.ts","../engine/components/Sound":"ts/engine/components/Sound.ts","../engine/utils/math":"ts/engine/utils/math.ts"}],"ts/objects/ores/Ore.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ore = void 0;

var _math = require("../../engine/utils/math");

var _config = require("../../config");

var _Particles = require("../../engine/components/Particles");

var _Block2 = require("../Block");

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

var Ore = /*#__PURE__*/function (_Block) {
  _inherits(Ore, _Block);

  var _super = _createSuper(Ore);

  function Ore(type, position, props) {
    var _this;

    _classCallCheck(this, Ore);

    var _a;

    _this = _super.call(this, "ore-".concat(type), type, position, props);
    _this.oreType = type;
    _this.tilePosition = position;
    var settings = _config.OreSettings[type];
    _this.hp = settings ? settings.hp : _config.OreSettings["stone"].hp;
    _this.needToolLevel = ((_a = _config.OreSettings[type]) === null || _a === void 0 ? void 0 : _a.tool) || 1;
    _this.unbreakable = false;
    _this.particlesColors = [_config.Color.BLACK];
    _this.hitAudioName = "stone-hit";
    _this.breakAudioNames = ["stone-break-1", "stone-break-2", "stone-break-3"];
    _this.allowDecorations = false;
    _this.decorationsCount = 10;
    _this.currentDecorationFrame = null;
    return _this;
  }

  _createClass(Ore, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Ore.prototype), "init", this).call(this);

      if (!this.allowDecorations) return;

      if ((0, _math.chance)(50)) {
        this.currentDecorationFrame = (0, _math.randomInt)(0, this.decorationsCount);
      } else {
        this.currentDecorationFrame = null;
      }

      if (this.checkBlockIn(new _math.Vector2(0, 1))) {
        this.allowDecorations = false;
      }
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(Ore.prototype), "update", this).call(this);
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(Ore.prototype), "render", this).call(this);

      if (this.allowDecorations) this.renderDecorations();
    }
  }, {
    key: "renderDecorations",
    value: function renderDecorations() {
      if (!this.visible || !this.currentDecorationFrame) return;
      this.game.renderer.drawSprite({
        texture: (0, _math.asImage)(this.game.getAssetByName("under-stone")),
        frame: new _math.Vector2(this.currentDecorationFrame, 0),
        position: this.position.add(new _math.Vector2(0, _config.Config.SPRITE_SIZE - (1 - this.scale.y) * _config.Config.SPRITE_SIZE)),
        opacity: this.opacity,
        scale: this.scale
      });
    }
  }, {
    key: "hit",
    value: function hit(damage, toolLevel) {
      if (!this.unbreakable && toolLevel >= this.needToolLevel) {
        this.hp -= damage;
        this.animatedScale = .8;
        (0, _Particles.SpawnParticles)(this.game, this.position, {
          colors: this.particlesColors,
          size: [.2, .5],
          count: 6,
          box: function box() {
            return new _math.Vector2((0, _math.random)(-_config.Config.SPRITE_SIZE / 2, _config.Config.SPRITE_SIZE / 2), (0, _math.random)(-_config.Config.SPRITE_SIZE / 2, _config.Config.SPRITE_SIZE / 2));
          }
        });

        if (this.hp <= 0) {
          // Break audio
          this.sound.play(this.game, this.breakAudioNames[(0, _math.randomInt)(0, this.breakAudioNames.length - 1)]);
          this.onBreak();
        }
      } // Hit audio


      if (this.hp > 0) this.sound.play(this.game, this.hitAudioName);
    }
  }, {
    key: "onBreak",
    value: function onBreak() {
      (0, _Particles.SpawnParticles)(this.game, this.position, {
        colors: this.particlesColors
      });
      this.game.removeChildById(this.id);
      this.game.generator.destroyOre(this.inChunkId);
    }
  }, {
    key: "dropRawOre",
    value: function dropRawOre(rawOre, chancePercent) {
      var drop = true;
      if (chancePercent) drop = (0, _math.chance)(chancePercent);
      if (!drop) return;
      this.game.add(new rawOre(this.position.add(new _math.Vector2((0, _math.random)(-10, 10), (0, _math.random)(-10, 10)))));
      this.game.initChildren();
    }
  }]);

  return Ore;
}(_Block2.Block);

exports.Ore = Ore;
},{"../../engine/utils/math":"ts/engine/utils/math.ts","../../config":"ts/config.ts","../../engine/components/Particles":"ts/engine/components/Particles.ts","../Block":"ts/objects/Block.ts"}],"ts/objects/ores/Stone.ts":[function(require,module,exports) {
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
    var _this;

    _classCallCheck(this, Stone);

    _this = _super.call(this, "stone", position);
    _this.allowDecorations = true;
    return _this;
  }

  return Stone;
}(_Ore2.Ore);

exports.Stone = Stone;
},{"./Ore":"ts/objects/ores/Ore.ts"}],"ts/objects/ores/FallingORe.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FallingOre = void 0;

var _config = require("../../config");

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
    _this.customColliderType = "solid";
    return _this;
  }

  _createClass(FallingOre, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      _get(_getPrototypeOf(FallingOre.prototype), "init", this).call(this);

      this.acceleration.y = .98;
      this.game.generator.onWorldChange(this.id, this.position, function () {
        if (!_this2.checkBlockIn(new _math.Vector2(0, 1), false)) {
          _this2.allowGravity = true;
          _this2.animateScaleTo = .7;

          _this2.crumble();
        }
      });
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(FallingOre.prototype), "update", this).call(this);

      this.gravity();
    }
  }, {
    key: "gravity",
    value: function gravity() {
      var _a;

      if (this.game.generator.checkIsInLoadedChunk(this.position)) {
        if (this.allowGravity) {
          if ((this.game.clock.elapsed - this.elapsedBeforeFall) % _config.Config.ORE_FALL_DELAY == 0 && !this.allowFall) this.allowFall = true;

          if (this.allowFall) {
            if ((_a = this.collider.collidesWith) === null || _a === void 0 ? void 0 : _a.bottom) {
              this.fallDestroy();
            }

            this.customColliderType = "dynamic"; // this.collider.type = "dynamic";

            this.collider.width = this.collider.height = _config.Config.SPRITE_SCALE * 6;
            this.velocity.y++;
            var player = this.game.getChildById("player");

            if (player && this.game.physics.collide(player, this).any) {
              player.hit((0, _math.clamp)((0, _math.randomInt)(0, 5), 2, 5));
            }
          }
        }
      } else {
        // this.velocity.y = 0;
        if (!this.allowFall) this.elapsedBeforeFall = this.game.clock.elapsed;else this.fallDestroy();
      }

      this.collider.collidesWith = null;
    }
  }, {
    key: "fallDestroy",
    value: function fallDestroy() {
      (0, _Particles.SpawnParticles)(this.game, this.position);
      this.sound.play(this.game, "fall-stone-break");
      this.game.removeChildById(this.id);
      this.game.generator.destroyOre(this.inChunkId);
    }
  }, {
    key: "crumble",
    value: function crumble() {
      (0, _Particles.SpawnParticles)(this.game, this.position.add(new _math.Vector2(0, 40)), {
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
},{"../../config":"ts/config.ts","../../engine/components/Particles":"ts/engine/components/Particles.ts","../../engine/utils/math":"ts/engine/utils/math.ts","./Ore":"ts/objects/ores/Ore.ts"}],"ts/objects/ores/CrackedStone.ts":[function(require,module,exports) {
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
},{"./FallingORe":"ts/objects/ores/FallingORe.ts"}],"ts/objects/ores/DeepStone.ts":[function(require,module,exports) {
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
    _this.randomRotate = false;
    _this.allowDecorations = true;
    return _this;
  }

  return DeepStone;
}(_Ore2.Ore);

exports.DeepStone = DeepStone;
},{"./Ore":"ts/objects/ores/Ore.ts"}],"ts/objects/raws/Raw.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Raw = void 0;

var _ItemParent2 = require("../item/ItemParent");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Raw = /*#__PURE__*/function (_ItemParent) {
  _inherits(Raw, _ItemParent);

  var _super = _createSuper(Raw);

  function Raw(type, position) {
    var _this;

    _classCallCheck(this, Raw);

    _this = _super.call(this, type, type, position);
    _this.rawType = type;
    return _this;
  }

  return Raw;
}(_ItemParent2.ItemParent);

exports.Raw = Raw;
},{"../item/ItemParent":"ts/objects/item/ItemParent.ts"}],"ts/objects/raws/RawCidium.ts":[function(require,module,exports) {
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
},{"./Raw":"ts/objects/raws/Raw.ts"}],"ts/objects/ores/Cidium.ts":[function(require,module,exports) {
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
    _this.allowDecorations = true;
    return _this;
  }

  _createClass(Cidium, [{
    key: "onBreak",
    value: function onBreak() {
      _get(_getPrototypeOf(Cidium.prototype), "onBreak", this).call(this);

      this.dropRawOre(_RawCidium.RawCidium);
    }
  }]);

  return Cidium;
}(_Ore2.Ore);

exports.Cidium = Cidium;
},{"../../config":"ts/config.ts","../raws/RawCidium":"ts/objects/raws/RawCidium.ts","./Ore":"ts/objects/ores/Ore.ts"}],"ts/names.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectNames = void 0;

var _math = require("./engine/utils/math");

var prefixes = {
  raw: "Необработанный",
  ready: "Обработанный"
};
var ObjectNames = {
  // Raw
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
  },
  // Ready
  "ready-cidium": {
    name: (0, _math.buildName)(prefixes.ready, "цидиум"),
    desc: "Обработанный цидиум, способен генерировать энегрию. Используется в создании батареи и других крафтов"
  },
  // Recipes
  "storage-level-up": {
    name: "Улучшить хранилище",
    desc: "Улучшите своё хранилище для того, чтобы можно было хранить больше ресурсов и их типов."
  },
  "tool-level-up": {
    name: "Улучшить инструмент",
    desc: "Для того чтобы быстрее ломать руду прокачайте свой инструмент. Более новые уровни инструмента позволяют добывать больше типов руд"
  },
  // Items
  "bottle": {
    name: "\"Специальная колба\"",
    desc: "Колба для сбора особо опасных руд. На пример таких, как радий"
  },
  "battery": {
    name: "Батарея",
    desc: "Да будет свет!"
  },
  "drill": {
    name: "Бур",
    desc: "Изпользуется в квафте чего-либо"
  },
  "item-robot": {
    name: "Робот",
    desc: "Ваш лисный робот-компаньон. Копает небольшой тунель вниз. Безсилен против базальта"
  },
  // Gear
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
  },
  "gear-oxygen-generator": {
    name: "Генератор кислорода",
    desc: ""
  }
};
exports.ObjectNames = ObjectNames;
},{"./engine/utils/math":"ts/engine/utils/math.ts"}],"ts/objects/gear/Gear.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gear = exports.MaxGearLevel = void 0;

var _config = require("../../config");

var _engine = require("../../engine");

var _Sound = require("../../engine/components/Sound");

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
    _this.sound = new _Sound.Sound();
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
    _this.tipText = "закрыть";
    return _this;
  }

  _createClass(Gear, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      _get(_getPrototypeOf(Gear.prototype), "init", this).call(this);

      this.ui.init(this.game);
      this.ui.enabled = false;
      this.player = this.game.getChildById("player");
      this.game.gamepad.onKeyDown(this.id, "enter", function () {
        if (!_this2.playerIsNear) return;
        if (_this2.player) _this2.onInteract();
      });
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(Gear.prototype), "update", this).call(this);

      this.ui.allowSelectSlots = true;
      this.checkInteract();
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(Gear.prototype), "render", this).call(this);

      this.renderUI();

      if (this.playerIsNear && this.allowInteract) {
        var outlineAsset = this.game.getAssetByName([this.gearType, 1, "outline"].join("-")); // Draw gear outline

        this.game.renderer.drawSprite({
          texture: (0, _math.asImage)(outlineAsset),
          width: 2,
          height: 2,
          position: this.position,
          layer: this.layer,
          flip: this.flip
        });
        this.game.renderer.drawText({
          text: this.interactText,
          font: "22px Pixel",
          position: this.position.add(new _math.Vector2(0, -70))
        });
      }
    }
  }, {
    key: "renderUI",
    value: function renderUI() {
      this.ui.render();

      if (this.ui.enabled) {
        var size = _config.Config.SPRITE_SIZE;
        var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor);
        this.game.renderer.drawRect({
          color: "rgba(0, 0, 0, .6)",
          width: innerWidth / _config.Config.SPRITE_SIZE,
          height: innerHeight / _config.Config.SPRITE_SIZE,
          position: new _math.Vector2(innerWidth / 2, innerHeight / 2),
          layer: "ui"
        }); // Container

        this.game.renderer.drawSprite({
          texture: (0, _math.asImage)(this.game.getAssetByName([this.gearType.replace("gear-", ""), "ui"].join("-"))),
          position: new _math.Vector2(0, -size).add(windowCenter),
          width: 7,
          height: 5,
          layer: "ui"
        }); // Preview
        // this.game.renderer.drawSprite({
        //     texture: asImage(this.game.getAssetByName([this.gearType, 1].join("-"))),
        //     position: new Vector2(-size * 2, -size - 15).add(windowCenter).add(this.headerOffset),
        //     width: 2,
        //     height: 2,
        //     layer: "ui"
        // });
        // Title

        this.game.renderer.drawText({
          text: "".concat(_names.ObjectNames[this.name].name, " ").concat(this.level, "\u0443\u0440."),
          position: new _math.Vector2(-size * 2.25, -size - 15).add(windowCenter).add(this.headerOffset),
          // position: new Vector2(-size*2 - size/4, -size*2 + 10).add(windowCenter).add(this.headerOffset),
          align: "left",
          layer: "ui"
        }); // Close

        this.game.renderer.drawText({
          text: "[OK] - ".concat(this.tipText),
          position: new _math.Vector2(-size * 3 + 20, -size * 2 - 40).add(windowCenter).add(this.headerOffset),
          layer: "ui",
          align: "left"
        });
      } // Draw interact button


      if (this.playerIsNear && !this.ui.enabled) {
        this.interactButton.position = this.position.add(new _math.Vector2(0, -110));
        this.interactButton.render(this.game);
      }
    }
  }, {
    key: "upgrade",
    value: function upgrade(levelUp) {
      var _this3 = this;

      if (this.level < MaxGearLevel) {
        this.level += levelUp;
        (0, _Particles.SpawnParticles)(this.game, this.position, {
          render: function render(renderer, part) {
            renderer.drawSprite({
              texture: (0, _math.asImage)(_this3.game.getAssetByName("level-up")),
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
    value: function onInteract() {
      this.interactButton.click();
    }
  }]);

  return Gear;
}(_engine.Sprite);

exports.Gear = Gear;
},{"../../config":"ts/config.ts","../../engine":"ts/engine/index.ts","../../engine/components/Sound":"ts/engine/components/Sound.ts","../../engine/components/Particles":"ts/engine/components/Particles.ts","../../engine/components/UI":"ts/engine/components/UI.ts","../../engine/utils/math":"ts/engine/utils/math.ts","../../names":"ts/names.ts"}],"ts/objects/gear/OxygenGenerator.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OxygenGenerator = void 0;

var _config = require("../../config");

var _math = require("../../engine/utils/math");

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

var OxygenGenerator = /*#__PURE__*/function (_Gear) {
  _inherits(OxygenGenerator, _Gear);

  var _super = _createSuper(OxygenGenerator);

  function OxygenGenerator(props) {
    var _this;

    _classCallCheck(this, OxygenGenerator);

    _this = _super.call(this, "gear-oxygen-generator", 1, props);
    _this.startPosition = _this.position.expand();
    _this.oxygenLevel = 100;
    _this.batteryLevel = 15;
    _this.animatedOxygenLevel = 100;
    _this.animatedBatteryLevel = 100;
    _this.playerWithBattery = false;

    _this.headerOffset.set(0, -_config.Config.SPRITE_SIZE / 2 - 15);

    return _this;
  }

  _createClass(OxygenGenerator, [{
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(OxygenGenerator.prototype), "update", this).call(this);

      this.work();
      this.checkBattery();

      if (this.player) {
        this.player.oxygenHungry = this.oxygenLevel <= 0;
      }

      if (this.oxygenLevel <= 40 || this.batteryLevel <= 0 && this.oxygenLevel < 50) {
        this.position.copy(this.startPosition.add(new _math.Vector2((0, _math.random)(-1, 1), (0, _math.random)(-1, 1))));
      } else {
        this.position.lerp(this.startPosition, .3);
      }

      this.animatedOxygenLevel = (0, _math.lerp)(this.animatedOxygenLevel, this.oxygenLevel, .2);
      this.animatedBatteryLevel = (0, _math.lerp)(this.animatedBatteryLevel, this.batteryLevel, .2);
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(OxygenGenerator.prototype), "render", this).call(this);

      this.frame = new _math.Vector2(4 - (0, _math.clamp)(Math.floor((this.batteryLevel + 20) / 25), 0, 4));
      if (this.playerIsNear) this.renderBars();
    }
  }, {
    key: "onInteract",
    value: function onInteract() {
      _get(_getPrototypeOf(OxygenGenerator.prototype), "onInteract", this).call(this);

      if (!this.playerWithBattery) this.ui.enabled = !this.ui.enabled;else {
        if (!this.player) return;
        this.player.foldSlotItemsTo("battery", 1, this.position);
        this.updateBatteryLevel((0, _math.randomInt)(50, 65));
      }
    }
  }, {
    key: "work",
    value: function work() {
      // Remove oxygen
      if (this.batteryLevel < 90) {
        if (this.game.tick(this.batteryLevel > 20 ? 220 : this.batteryLevel <= 0 ? 20 : 60) && this.oxygenLevel > 0) this.updateOxygenLevel(-(0, _math.randomInt)(1, 3));
      } else {
        if (this.game.tick(30)) this.updateOxygenLevel((0, _math.randomInt)(1, 3));
      } // Remove battery


      if (this.game.tick(300) && this.batteryLevel > 0) {
        this.updateBatteryLevel(-(0, _math.clamp)((0, _math.randomInt)(-2, 4), 1, 4)); // Add oxygen

        if (this.batteryLevel > 20) this.updateOxygenLevel((0, _math.randomInt)(0, 8));
      }
    }
  }, {
    key: "updateBatteryLevel",
    value: function updateBatteryLevel(value) {
      this.batteryLevel += value;
      this.batteryLevel = (0, _math.clamp)(this.batteryLevel, 0, 100);
    }
  }, {
    key: "updateOxygenLevel",
    value: function updateOxygenLevel(value) {
      this.oxygenLevel += value;
      this.oxygenLevel = (0, _math.clamp)(this.oxygenLevel, 0, 100);
    }
  }, {
    key: "renderUI",
    value: function renderUI() {
      _get(_getPrototypeOf(OxygenGenerator.prototype), "renderUI", this).call(this);

      if (!this.ui.enabled) return;
      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor); // > Names

      this.game.renderer.drawText({
        text: "Кислород",
        position: new _math.Vector2(size * 1.3, -size).add(windowCenter),
        layer: "ui",
        align: "left"
      });
      this.game.renderer.drawText({
        text: "Батарея",
        position: new _math.Vector2(size * 1.3, 0).add(windowCenter),
        layer: "ui",
        align: "left"
      }); // > Progresses

      var oxygenProgress = this.animatedOxygenLevel / 100;
      var batteryProgress = this.animatedBatteryLevel / 100; // Oxygen

      this.game.renderer.drawRect({
        width: 2.5 * oxygenProgress,
        height: .3,
        color: _config.Color.BLUE,
        position: new _math.Vector2(-size + (size * 2.5 * oxygenProgress - size * 2.5) / 2, -size).add(windowCenter),
        layer: "ui"
      }); // Battery

      this.game.renderer.drawRect({
        width: 2.5 * batteryProgress,
        height: .3,
        color: _config.Color.YELLOW,
        position: new _math.Vector2(-size + (size * 2.5 * batteryProgress - size * 2.5) / 2).add(windowCenter),
        layer: "ui"
      }); // > Percents
      // Oxygen

      this.game.renderer.drawText({
        text: "".concat(this.oxygenLevel, "%"),
        position: new _math.Vector2(-size * 2.1, -size).add(windowCenter),
        layer: "ui",
        align: "left"
      }); // Battery

      this.game.renderer.drawText({
        text: "".concat(this.batteryLevel, "%"),
        position: new _math.Vector2(-size * 2.1, 0).add(windowCenter),
        layer: "ui",
        align: "left"
      });
    }
  }, {
    key: "renderBars",
    value: function renderBars() {
      // Oxygen text
      this.game.renderer.drawText({
        text: "".concat(this.oxygenLevel, "%"),
        position: this.position.add(new _math.Vector2(-80, -65)),
        layer: "particles"
      }); // Battery text

      this.game.renderer.drawText({
        text: "".concat(this.batteryLevel, "%"),
        position: this.position.add(new _math.Vector2(80, -65)),
        layer: "particles"
      }); // Oxygen level

      this.ui.renderProgressBar({
        progress: this.animatedOxygenLevel / 100,
        position: this.position.add(new _math.Vector2(-80, 0)),
        width: 10,
        height: 80,
        layer: "particles",
        color: _config.Color.BLUE,
        strokeColor: _config.Color.BLUE
      }); // Battery level

      this.ui.renderProgressBar({
        progress: this.animatedBatteryLevel / 100,
        position: this.position.add(new _math.Vector2(80, 0)),
        width: 10,
        height: 80,
        layer: "particles"
      });
    }
  }, {
    key: "checkBattery",
    value: function checkBattery() {
      if (!this.playerIsNear || !this.player || !this.player.checkItemInInventory("battery")) {
        this.interactText = "";
        this.playerWithBattery = false;
        return;
      }

      this.playerWithBattery = true;
      this.interactText = "Зарядить";
    }
  }]);

  return OxygenGenerator;
}(_Gear2.Gear);

exports.OxygenGenerator = OxygenGenerator;
},{"../../config":"ts/config.ts","../../engine/utils/math":"ts/engine/utils/math.ts","./Gear":"ts/objects/gear/Gear.ts"}],"ts/objects/food/Food.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Food = void 0;

var _math = require("../../engine/utils/math");

var _ItemParent2 = require("../item/ItemParent");

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

var Food = /*#__PURE__*/function (_ItemParent) {
  _inherits(Food, _ItemParent);

  var _super = _createSuper(Food);

  function Food(type, position) {
    var _this;

    _classCallCheck(this, Food);

    _this = _super.call(this, type, type, position);
    _this.radius = 2;
    _this.foodType = type;
    return _this;
  }

  _createClass(Food, [{
    key: "onUse",
    value: function onUse(player) {
      player.heal((0, _math.randomInt)(1, 2));
    }
  }]);

  return Food;
}(_ItemParent2.ItemParent);

exports.Food = Food;
},{"../../engine/utils/math":"ts/engine/utils/math.ts","../item/ItemParent":"ts/objects/item/ItemParent.ts"}],"ts/objects/food/Fetus.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fetus = void 0;

var _Food2 = require("./Food");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Fetus = /*#__PURE__*/function (_Food) {
  _inherits(Fetus, _Food);

  var _super = _createSuper(Fetus);

  function Fetus(position) {
    _classCallCheck(this, Fetus);

    return _super.call(this, "food-fetus", position);
  }

  return Fetus;
}(_Food2.Food);

exports.Fetus = Fetus;
},{"./Food":"ts/objects/food/Food.ts"}],"ts/objects/item/Battery.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Battery = void 0;

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

var Battery = /*#__PURE__*/function (_Item) {
  _inherits(Battery, _Item);

  var _super = _createSuper(Battery);

  function Battery(position) {
    _classCallCheck(this, Battery);

    return _super.call(this, "battery", position);
  }

  return Battery;
}(_Item2.Item);

exports.Battery = Battery;
},{"./Item":"ts/objects/item/Item.ts"}],"ts/objects/item/Drill.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Drill = void 0;

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

var Drill = /*#__PURE__*/function (_Item) {
  _inherits(Drill, _Item);

  var _super = _createSuper(Drill);

  function Drill(position) {
    _classCallCheck(this, Drill);

    return _super.call(this, "drill", position);
  }

  return Drill;
}(_Item2.Item);

exports.Drill = Drill;
},{"./Item":"ts/objects/item/Item.ts"}],"ts/objects/raws/RawAntin.ts":[function(require,module,exports) {
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
},{"./Raw":"ts/objects/raws/Raw.ts"}],"ts/objects/raws/RawGradeCidium.ts":[function(require,module,exports) {
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
},{"./Raw":"ts/objects/raws/Raw.ts"}],"ts/objects/raws/RawNerius.ts":[function(require,module,exports) {
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
},{"./Raw":"ts/objects/raws/Raw.ts"}],"ts/objects/raws/RawOsmy.ts":[function(require,module,exports) {
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
},{"./Raw":"ts/objects/raws/Raw.ts"}],"ts/objects/raws/DangerRaw.ts":[function(require,module,exports) {
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
    value: function update() {
      _get(_getPrototypeOf(DangerRaw.prototype), "update", this).call(this);

      var player = this.game.getChildById("player");
      if (!player) return;
      if (player.hasBottle) return; // If is picked, player get damage (1-2)

      if (this.game.clock.elapsed % 80 == 0 && this.picked) player.hit(Math.floor((0, _math.random)(1, 3)));
    }
  }]);

  return DangerRaw;
}(_Raw2.Raw);

exports.DangerRaw = DangerRaw;
},{"../../engine/utils/math":"ts/engine/utils/math.ts","./Raw":"ts/objects/raws/Raw.ts"}],"ts/objects/raws/RawRady.ts":[function(require,module,exports) {
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
},{"./DangerRaw":"ts/objects/raws/DangerRaw.ts"}],"ts/objects/ready/Ready.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ready = void 0;

var _ItemParent2 = require("../item/ItemParent");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Ready = /*#__PURE__*/function (_ItemParent) {
  _inherits(Ready, _ItemParent);

  var _super = _createSuper(Ready);

  function Ready(type, position) {
    var _this;

    _classCallCheck(this, Ready);

    _this = _super.call(this, type, type, position);
    _this.readyType = type;
    return _this;
  }

  return Ready;
}(_ItemParent2.ItemParent);

exports.Ready = Ready;
},{"../item/ItemParent":"ts/objects/item/ItemParent.ts"}],"ts/objects/ready/ReadyCidium.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReadyCidium = void 0;

var _Ready2 = require("./Ready");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ReadyCidium = /*#__PURE__*/function (_Ready) {
  _inherits(ReadyCidium, _Ready);

  var _super = _createSuper(ReadyCidium);

  function ReadyCidium(position) {
    _classCallCheck(this, ReadyCidium);

    return _super.call(this, "ready-cidium", position);
  }

  return ReadyCidium;
}(_Ready2.Ready);

exports.ReadyCidium = ReadyCidium;
},{"./Ready":"ts/objects/ready/Ready.ts"}],"ts/objects.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Items = void 0;

var _Fetus = require("./objects/food/Fetus");

var _Battery = require("./objects/item/Battery");

var _Drill = require("./objects/item/Drill");

var _RobotItem = require("./objects/item/RobotItem");

var _RawAntin = require("./objects/raws/RawAntin");

var _RawCidium = require("./objects/raws/RawCidium");

var _RawGradeCidium = require("./objects/raws/RawGradeCidium");

var _RawNerius = require("./objects/raws/RawNerius");

var _RawOsmy = require("./objects/raws/RawOsmy");

var _RawRady = require("./objects/raws/RawRady");

var _ReadyCidium = require("./objects/ready/ReadyCidium");

var Items = {
  // Raws
  "raw-cidium": _RawCidium.RawCidium,
  "raw-osmy": _RawOsmy.RawOsmy,
  "raw-grade-cidium": _RawGradeCidium.RawGradeCidium,
  "raw-antin": _RawAntin.RawAntin,
  "raw-rady": _RawRady.RawRady,
  "raw-nerius": _RawNerius.RawNerius,
  // Ready
  "ready-cidium": _ReadyCidium.ReadyCidium,
  // Items
  "item-robot": _RobotItem.RobotItem,
  "battery": _Battery.Battery,
  "drill": _Drill.Drill,
  // Food
  "food-fetus": _Fetus.Fetus
};
exports.Items = Items;
},{"./objects/food/Fetus":"ts/objects/food/Fetus.ts","./objects/item/Battery":"ts/objects/item/Battery.ts","./objects/item/Drill":"ts/objects/item/Drill.ts","./objects/item/RobotItem":"ts/objects/item/RobotItem.ts","./objects/raws/RawAntin":"ts/objects/raws/RawAntin.ts","./objects/raws/RawCidium":"ts/objects/raws/RawCidium.ts","./objects/raws/RawGradeCidium":"ts/objects/raws/RawGradeCidium.ts","./objects/raws/RawNerius":"ts/objects/raws/RawNerius.ts","./objects/raws/RawOsmy":"ts/objects/raws/RawOsmy.ts","./objects/raws/RawRady":"ts/objects/raws/RawRady.ts","./objects/ready/ReadyCidium":"ts/objects/ready/ReadyCidium.ts"}],"ts/objects/gear/recipes.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = require("../../config");

var _math = require("../../engine/utils/math");

var _Player = require("../entities/Player");

var _Gear = require("./Gear");

var _Recycler = require("./Recycler");

var recipes = function recipes(recycler) {
  return {
    // Craft ready cidium
    "ready-cidium": new _Recycler.Recipe({
      recipe: function recipe() {
        return {
          "raw-cidium": {
            count: 2
          }
        };
      }
    }),
    // Craft battery
    "battery": new _Recycler.Recipe({
      recipe: function recipe() {
        return {
          "ready-cidium": {
            count: 1
          },
          "raw-cidium": {
            count: 2
          }
        };
      }
    }),
    // Craft battery
    "drill": new _Recycler.Recipe({
      recipe: function recipe() {
        return {
          "ready-cidium": {
            count: 1
          } // "ready-cidium": { count: 3 },
          // "raw-osmy": { count: 2 },
          // "raw-nerius": { count: 2 },

        };
      }
    }),
    // Storage up
    "storage-level-up": new _Recycler.Recipe({
      recipe: function recipe() {
        return [// { "raw-cidium": { count: 1 }, "raw-osmy": { count: 1 } }, // Level 2
        {
          "ready-cidium": {
            count: 2
          },
          "raw-osmy": {
            count: 3
          }
        }, {
          "ready-cidium": {
            count: 4
          },
          "raw-osmy": {
            count: 6
          },
          "raw-grade-cidium": {
            count: 2
          }
        } // Level 3
        ][recycler.storage.level - 1];
      },
      // On craft
      onCraft: function onCraft() {
        recycler.storage.upgrade(1);
      },
      // Render icon
      icon: function icon(game, pos, opacity) {
        game.renderer.drawSprite({
          texture: (0, _math.asImage)(game.getAssetByName("gear-storage-1")),
          position: pos,
          width: 2,
          height: 2,
          scale: _math.Vector2.all(.7),
          layer: "ui",
          opacity: opacity
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
          "ready-cidium": {
            count: 3
          }
        }, {
          "ready-cidium": {
            count: 2
          },
          "raw-osmy": {
            count: 2
          },
          "raw-grade-cidium": {
            count: 1
          }
        }, {
          "ready-cidium": {
            count: 3
          },
          "raw-osmy": {
            count: 4
          },
          "raw-antin": {
            count: 3
          }
        } // Level 4
        ][recycler.player ? ((_a = recycler.player) === null || _a === void 0 ? void 0 : _a.toolLevel) - 1 : 0];
      },
      onCraft: function onCraft() {
        if (!recycler.player) return;
        recycler.player.upgradeTool(1);
      },
      icon: function icon(game, pos, opacity) {
        if (!recycler.player) return;
        game.renderer.drawSprite({
          texture: (0, _math.asImage)(game.getAssetByName("tools")),
          position: pos,
          layer: "ui",
          opacity: opacity
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
          "ready-cidium": {
            count: 1
          },
          "raw-osmy": {
            count: 8
          },
          "raw-antin": {
            count: 4
          },
          "raw-nerius": {
            count: 3
          }
        };
      },
      onCraft: function onCraft() {
        if (!recycler.player) return;
        recycler.player.hasBottle = true;
      },
      isRemoved: function isRemoved() {
        return recycler.player ? recycler.player.hasBottle : false;
      }
    }),
    // Craft robot
    "item-robot": new _Recycler.Recipe({
      // recipe: ()=> ({ "raw-cidium": { count: 1 } } as any),
      recipe: function recipe() {
        return {
          "battery": {
            count: 1
          },
          "drill": {
            count: 1
          },
          "raw-nerius": {
            count: 5
          }
        };
      },
      isRemoved: function isRemoved() {
        return recycler.player ? recycler.player.hasBottle : false;
      }
    })
  };
};

var _default = recipes;
exports.default = _default;
},{"../../config":"ts/config.ts","../../engine/utils/math":"ts/engine/utils/math.ts","../entities/Player":"ts/objects/entities/Player.ts","./Gear":"ts/objects/gear/Gear.ts","./Recycler":"ts/objects/gear/Recycler.ts"}],"ts/objects/gear/Recycler.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Recipe = exports.Recycler = void 0;

var _config = require("../../config");

var _math = require("../../engine/utils/math");

var _names = require("../../names");

var _objects = require("../../objects");

var _Gear2 = require("./Gear");

var _recipes = _interopRequireDefault(require("./recipes"));

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

var Recycler = /*#__PURE__*/function (_Gear) {
  _inherits(Recycler, _Gear);

  var _super = _createSuper(Recycler);

  function Recycler(storage, props) {
    var _this;

    _classCallCheck(this, Recycler);

    _this = _super.call(this, "gear-recycler", 1, props);
    _this.ui.focused.slot = 1;
    _this.ui.focused.row = 10;
    _this.maxRowItemsCount = 5;
    _this.storage = storage;
    _this.recipes = (0, _recipes.default)(_assertThisInitialized(_this));

    _this.headerOffset.set(0, -_config.Config.SPRITE_SIZE);

    _this.actionType = "close";
    return _this;
  }

  _createClass(Recycler, [{
    key: "onInteract",
    value: function onInteract() {
      _get(_getPrototypeOf(Recycler.prototype), "onInteract", this).call(this); // Open


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
          recipe.onCraft(this.game, this.storage, this.position, recipesKeys[this.ui.focused.slot]);
          this.ui.enabled = false;
          this.sound.play(this.game, "crafting");
          this.ui.focused.slot = 1;
          this.ui.focused.row = 10;
        } else {
          // Can't craft
          this.sound.play(this.game, "error");
          this.ui.spawnMessageText("Недостатачно ресурсов");
        }
      }
    }
  }, {
    key: "renderUI",
    value: function renderUI() {
      _get(_getPrototypeOf(Recycler.prototype), "renderUI", this).call(this);

      var recipesKeys = this.getRecipesKeys();
      this.actionType = this.ui.focused.row == 0 && this.ui.focused.slot == 0 ? "close" : "craft";
      this.tipText = this.actionType == "close" ? "закрыть" : "изготовить";
      this.ui.updateTemplate([1, (0, _math.clamp)(recipesKeys.length, 0, this.maxRowItemsCount), (0, _math.clamp)(recipesKeys.length > this.maxRowItemsCount ? recipesKeys.length - this.maxRowItemsCount : 0, 0, this.maxRowItemsCount)]);
      if (!this.ui.enabled) return;
      this.renderRecipesUI(recipesKeys);
      this.renderDescriptionUI(recipesKeys);
    }
  }, {
    key: "renderRecipesUI",
    value: function renderRecipesUI(recipes) {
      var _this2 = this;

      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor); // Close button

      var pos = new _math.Vector2(size * 2, -size - 20).add(windowCenter).add(this.headerOffset);
      this.ui.renderSlot(pos.add(new _math.Vector2(-2, 2)), 0, 0, function () {
        _this2.game.renderer.drawSprite({
          texture: (0, _math.asImage)(_this2.game.getAssetByName(_this2.actionType)),
          position: pos,
          layer: "ui"
        });
      }, 14 / _config.Config.SPRITE_PIXEL_SIZE);
      recipes.map(function (recipeName, index) {
        // Render recipe
        var pos = new _math.Vector2(index % _this2.maxRowItemsCount * size - size * 2, -size + Math.floor(index / _this2.maxRowItemsCount) * size).add(windowCenter);

        _this2.ui.renderSlot(pos, // Row
        Math.floor(index / _this2.maxRowItemsCount) + 1, // Slot
        index % _this2.maxRowItemsCount, function () {
          // Background
          _this2.game.renderer.drawRect({
            position: pos,
            color: _config.Color.STONE_LAYER_COLOR,
            layer: "ui",
            width: .5,
            height: .5
          }); // Render recipe icon


          var renderIcon = _this2.recipes[recipeName].icon;
          if (renderIcon) renderIcon(_this2.game, pos, _this2.recipes[recipeName].canCraft(_this2.storage) ? 1 : .5);else _this2.game.renderer.drawSprite({
            texture: (0, _math.asImage)(_this2.game.getAssetByName(recipeName.replace("item-", ""))),
            position: pos,
            opacity: _this2.recipes[recipeName].canCraft(_this2.storage) ? 1 : .5,
            layer: "ui"
          });
        }, 1, 1, true);
      });
    }
  }, {
    key: "renderDescriptionUI",
    value: function renderDescriptionUI(recipesKeys) {
      var _this3 = this;

      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor); // Get recipe by focused slot

      var selectedSlot = this.ui.ghostFocused.slot + (this.ui.ghostFocused.row - 1) * this.maxRowItemsCount;
      var currentRecipe = this.recipes[recipesKeys[selectedSlot]];
      var recipeDescription = _names.ObjectNames[recipesKeys[selectedSlot]];
      if (!recipeDescription) return;

      var isInStockCount = function isInStockCount(slotName) {
        return (0, _math.safeSlot)(_this3.storage.contains.slots[slotName]).count;
      };

      this.ui.renderDescriptionUI({
        title: recipeDescription.name,
        titleColor: currentRecipe.canCraft(this.storage) ? "#fff" : _config.Color.RED,
        specials: ["", ""],
        description: recipeDescription.desc,
        renderIcon: function renderIcon(pos) {
          var renderIcon = currentRecipe.icon;
          if (renderIcon) renderIcon(_this3.game, pos, 1);else _this3.game.renderer.drawSprite({
            texture: (0, _math.asImage)(_this3.game.getAssetByName(recipesKeys[selectedSlot].replace("item-", ""))),
            position: pos,
            layer: "ui"
          });
        }
      }); //

      var selectedRecipeKeys = Object.keys(currentRecipe.recipe());
      selectedRecipeKeys.map(function (slotName, index) {
        var pos = new _math.Vector2(index * _config.Config.SPRITE_SIZE - size, size * 2 + 5).add(windowCenter);
        var count = isInStockCount(slotName);
        var needCount = currentRecipe.recipe()[slotName].count; // Sprite

        _this3.game.renderer.drawSprite({
          texture: (0, _math.asImage)(_this3.game.getAssetByName(slotName)),
          position: pos,
          layer: "ui"
        }); // Count


        _this3.game.renderer.drawText({
          text: "".concat(count, "/").concat(needCount),
          color: count >= needCount ? "#fff" : _config.Color.RED,
          position: pos.add(_math.Vector2.all(_config.Config.SPRITE_SIZE * .2)),
          layer: "ui"
        }); // Plus


        if (index < selectedRecipeKeys.length - 1) _this3.game.renderer.drawText({
          text: "+",
          font: "22px Pixel",
          position: pos.add(new _math.Vector2(size / 2)),
          layer: "ui"
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
        if ((0, _math.safeSlot)(storage.contains.slots[recipes[i]]).count >= (0, _math.safeSlot)(this.recipe()[recipes[i]]).count) hasCount++;
      }

      return hasCount >= recipes.length; // return can;
    }
  }, {
    key: "onCraft",
    value: function onCraft(game, storage, position, name) {
      var recipes = Object.keys(this.recipe());

      for (var i = 0; i < recipes.length; i++) {
        storage.contains.slots[recipes[i]].count -= this.recipe()[recipes[i]].count;
      }

      storage.calculateTotalCount();
      if (this._onCraft) this._onCraft(game);else {
        game.add(new _objects.Items[name](position));
        game.initChildren();
      }
    }
  }]);

  return Recipe;
}();

exports.Recipe = Recipe;
},{"../../config":"ts/config.ts","../../engine/utils/math":"ts/engine/utils/math.ts","../../names":"ts/names.ts","../../objects":"ts/objects.ts","./Gear":"ts/objects/gear/Gear.ts","./recipes":"ts/objects/gear/recipes.ts"}],"ts/objects/gear/Storage.ts":[function(require,module,exports) {
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

  function Storage(props) {
    var _this;

    _classCallCheck(this, Storage);

    _this = _super.call(this, "gear-storage", 1, props);
    _this.contains = {
      totalCount: 8,
      slots: {
        "raw-cidium": {
          count: 6
        },
        "raw-osmy": {
          count: 2
        },
        "food-fetus": {
          count: 4
        }
      }
    };
    _this.interactType = "view";
    _this.maxTotalCount = MaxStorageTotalCount["".concat(_this.level, "-level")];

    _this.headerOffset.set(0, -_config.Config.SPRITE_SIZE);

    _this.maxRowItemsCount = 5;
    _this.actionType = "close";
    return _this;
  }

  _createClass(Storage, [{
    key: "update",
    value: function update() {
      var _this2 = this;

      _get(_getPrototypeOf(Storage.prototype), "update", this).call(this);

      if (!this.player) return;
      if (!this.playerIsNear) return; // Change interact type

      this.interactType = this.player.inventory.totalCount == 0 || this.contains.totalCount >= this.maxTotalCount || this.filterItems(this.player.inventory.slots).length == this.filterItems(this.player.inventory.slots).filter(function (name) {
        return (0, _math.safeValue)(_config.ItemSettings[name], {
          lineColor: "#fff",
          storage: 1
        }).storage > _this2.level;
      }).length ? "view" : "store";
      this.actionType = this.ui.focused.row == 0 && this.ui.focused.slot == 0 ? "close" : "drop";
      this.interactText = this.interactType == "view" ? "Содержимое" : "Сложить";
      this.tipText = this.actionType == "close" ? "закрыть" : "выбросить x1";
    }
  }, {
    key: "onInteract",
    value: function onInteract() {
      _get(_getPrototypeOf(Storage.prototype), "onInteract", this).call(this);

      if (this.ui.enabled && this.ui.focused.row == 0 && this.ui.focused.slot == 0) {
        this.ui.enabled = false;
        return;
      }

      if (this.ui.enabled && this.ui.focused.row == 1) {
        var slotName = this.filterItems(this.contains.slots)[this.ui.ghostFocused.slot];
        this.drop(slotName, 1);
        return;
      }

      if (this.interactType == "store") {
        this.ui.enabled = false;
        this.store();
      } else if (this.interactType == "view") {
        if (!this.ui.enabled) {
          this.ui.focused.row = 0;
          this.ui.focused.slot = 0;
        }

        this.ui.enabled = true;
        if (this.ui.enabled) this.sound.play(this.game, "storage");
      }
    }
  }, {
    key: "upgrade",
    value: function upgrade(levelUp) {
      _get(_getPrototypeOf(Storage.prototype), "upgrade", this).call(this, levelUp);

      this.maxTotalCount = MaxStorageTotalCount["".concat(this.level, "-level")];
    }
  }, {
    key: "store",
    value: function store() {
      var _this3 = this;

      if (this.contains.totalCount >= this.maxTotalCount || !this.player) return;
      var storedCount = 0;
      var totalStoredCount = 0;
      var slotNames = this.filterItems(this.player.inventory.slots).filter(function (name) {
        return (0, _math.safeValue)(_config.ItemSettings[name], {
          lineColor: "#fff",
          storage: 1
        }).storage <= _this3.level;
      }); // Storage level less then need

      if (this.filterItems(this.player.inventory.slots).filter(function (name) {
        return (0, _math.safeValue)(_config.ItemSettings[name], {
          lineColor: "#fff",
          storage: 1
        }).storage > _this3.level;
      }).length > 0) this.player.spawnText("Низкий уровень\nхранилища", new _math.Vector2(0, -90));
      slotNames.map(function (slotName) {
        if (!_this3.player) return;
        _this3.contains.slots[slotName] = _this3.contains.slots[slotName] || {
          count: 0
        }; // Add items

        if (_this3.contains.totalCount >= _this3.maxTotalCount) {
          _this3.player.spawnText("Хранилище перепольнено", new _math.Vector2(0, -50));

          return;
        }

        storedCount = _this3.player.inventory.slots[slotName].count + _this3.contains.totalCount <= _this3.maxTotalCount ? _this3.player.inventory.slots[slotName].count : _this3.maxTotalCount - _this3.contains.totalCount;
        _this3.contains.slots[slotName].count += storedCount;
        totalStoredCount += storedCount;

        _this3.player.foldSlotItemsTo(slotName, storedCount, _this3.position);

        _this3.calculateTotalCount();

        _this3.player.calculateTotalCount();
      });
      if (slotNames.length <= 0) return; // Play store audio

      this.sound.play(this.game, "store");
      this.player.spawnText(totalStoredCount.toString());
    }
  }, {
    key: "drop",
    value: function drop(slotName, count) {
      if (!this.contains.slots[slotName]) return;
      this.contains.slots[slotName].count -= count;
      this.game.add(new _objects.Items[slotName](this.position));
      this.game.initChildren();
      this.sound.play(this.game, "store");
      this.calculateTotalCount();
    }
  }, {
    key: "calculateTotalCount",
    value: function calculateTotalCount() {
      var _this4 = this;

      this.contains.totalCount = 0;
      Object.keys(this.contains.slots).map(function (slotName) {
        _this4.contains.totalCount += _this4.contains.slots[slotName].count;
      });
    }
  }, {
    key: "renderUI",
    value: function renderUI() {
      var _this5 = this;

      _get(_getPrototypeOf(Storage.prototype), "renderUI", this).call(this);

      if (!this.ui.enabled) return;
      var slots = this.filterItems(this.contains.slots);
      this.ui.updateTemplate([slots.length > 0 ? 1 : 0, slots.length]);

      if (!this.ui.template[0]) {
        this.ui.focused.row = 1;
        this.ui.focused.slot = 0;
      }

      this.renderInventoryUI(slots);
      var name = slots[this.ui.ghostFocused.slot];
      var item = _names.ObjectNames[name];
      if (!item) return;

      var oreSettings = _config.OreSettings[name.replace("raw-", "")];

      var special = [oreSettings ? "> \u041D\u0443\u0436\u0435\u043D \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 ".concat(oreSettings.tool || 1, "\u0443\u0440. \u0438 \u0432\u044B\u0448\u0435") : "> Можно найти", item.special || ""].filter(function (t) {
        return t != "";
      }); // Render description

      this.ui.renderDescriptionUI({
        title: item.name,
        specials: special,
        description: item.desc,
        renderIcon: function renderIcon(pos) {
          _this5.game.renderer.drawSprite({
            texture: (0, _math.asImage)(_this5.game.getAssetByName(name.replace("item-", ""))),
            position: pos,
            layer: "ui"
          });
        }
      });
    }
  }, {
    key: "renderInventoryUI",
    value: function renderInventoryUI(slots) {
      var _this6 = this;

      var size = _config.Config.SPRITE_SIZE;
      var windowCenter = new _math.Vector2(innerWidth / 2, innerHeight / 2).apply(Math.floor); // Close button

      if (slots.length == 0) {
        this.ui.focused.row = 0;
        this.ui.focused.slot = 0;
      }

      var pos = new _math.Vector2(size * 2, -size * 2 - 20).add(windowCenter);
      this.ui.renderSlot(pos.add(new _math.Vector2(-2, 2)), 0, 0, function () {
        _this6.game.renderer.drawSprite({
          texture: (0, _math.asImage)(_this6.game.getAssetByName(_this6.actionType)),
          position: pos,
          layer: "ui"
        });
      }, 14 / _config.Config.SPRITE_PIXEL_SIZE); // Draw count text

      this.game.renderer.drawText({
        text: "".concat(this.contains.totalCount, "/").concat(this.maxTotalCount),
        position: new _math.Vector2(-size * 2.25, -size * 2 + 10).add(windowCenter),
        color: this.contains.totalCount >= this.maxTotalCount ? _config.Color.RED : "#fff",
        align: "left",
        layer: "ui"
      });
      slots.map(function (slot, index) {
        var pos = new _math.Vector2(index % _this6.maxRowItemsCount * size - size * Math.floor(_this6.maxRowItemsCount / 2), Math.floor(index / _this6.maxRowItemsCount) * size).add(windowCenter).add(new _math.Vector2(0, -size));

        _this6.ui.renderSlot(pos, 1, index, function () {
          var count = _this6.contains.slots[slot].count; // Draw item sprite

          _this6.game.renderer.drawSprite({
            texture: (0, _math.asImage)(_this6.game.getAssetByName(slot.replace("item-", ""))),
            position: pos,
            layer: "ui"
          }); // Draw item count text


          if (count > 1) _this6.game.renderer.drawText({
            text: count.toString(),
            position: pos.add(_math.Vector2.all(_config.Config.SPRITE_SIZE * .3)),
            layer: "ui"
          });
        }, 1, 1, true);
      });
    }
  }, {
    key: "filterItems",
    value: function filterItems(slots) {
      return Object.keys(slots).filter(function (name) {
        return slots[name].count > 0;
      }); // return Object.keys(slots).filter(name=> name.indexOf("raw") >= 0 && ((slots[name] as any).count ? (slots[name] as any).count > 0 : slots[name] > 0));
    }
  }]);

  return Storage;
}(_Gear2.Gear);

exports.Storage = Storage;
},{"../../config":"ts/config.ts","../../engine/utils/math":"ts/engine/utils/math.ts","../../names":"ts/names.ts","../../objects":"ts/objects.ts","./Gear":"ts/objects/gear/Gear.ts"}],"ts/managers/dome.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDome = initDome;

var _config = require("../config");

var _engine = require("../engine");

var _math = require("../engine/utils/math");

var _OxygenGenerator = require("../objects/gear/OxygenGenerator");

var _Recycler = require("../objects/gear/Recycler");

var _Storage = require("../objects/gear/Storage");

function initDome(game) {
  var domePosition = new _math.Vector2(Math.round(_config.Config.WORLD_X_CENTER), -_config.Config.SPRITE_SIZE * 1.5);
  var storage = game.add(new _Storage.Storage({
    position: domePosition.add(new _math.Vector2(-150, 0))
  }));
  game.add(new _OxygenGenerator.OxygenGenerator({
    position: domePosition.add(new _math.Vector2(0, -100))
  }));
  game.add(new _Recycler.Recycler(storage, {
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
},{"../config":"ts/config.ts","../engine":"ts/engine/index.ts","../engine/utils/math":"ts/engine/utils/math.ts","../objects/gear/OxygenGenerator":"ts/objects/gear/OxygenGenerator.ts","../objects/gear/Recycler":"ts/objects/gear/Recycler.ts","../objects/gear/Storage":"ts/objects/gear/Storage.ts"}],"ts/objects/ores/Osmy.ts":[function(require,module,exports) {
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

    _this = _super.call(this, "osmy", position);
    _this.randomRotate = false;
    _this.particlesColors = [_config.Color.BLACK, _config.Color.BLUE];
    _this.allowDecorations = true;
    return _this;
  }

  _createClass(Osmy, [{
    key: "onBreak",
    value: function onBreak() {
      _get(_getPrototypeOf(Osmy.prototype), "onBreak", this).call(this);

      this.dropRawOre(_RawOsmy.RawOsmy);
      this.dropRawOre(_RawGradeCidium.RawGradeCidium, 100);
    }
  }]);

  return Osmy;
}(_Ore2.Ore);

exports.Osmy = Osmy;
},{"../../config":"ts/config.ts","../raws/RawGradeCidium":"ts/objects/raws/RawGradeCidium.ts","../raws/RawOsmy":"ts/objects/raws/RawOsmy.ts","./Ore":"ts/objects/ores/Ore.ts"}],"ts/objects/ores/Basalt.ts":[function(require,module,exports) {
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
},{"../../config":"ts/config.ts","./Ore":"ts/objects/ores/Ore.ts"}],"ts/objects/ores/Antin.ts":[function(require,module,exports) {
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
    value: function onBreak() {
      _get(_getPrototypeOf(Antin.prototype), "onBreak", this).call(this);

      this.dropRawOre(_RawAntin.RawAntin);
    }
  }]);

  return Antin;
}(_Ore2.Ore);

exports.Antin = Antin;
},{"../../config":"ts/config.ts","../raws/RawAntin":"ts/objects/raws/RawAntin.ts","./Ore":"ts/objects/ores/Ore.ts"}],"ts/objects/ores/DangerOre.ts":[function(require,module,exports) {
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
    value: function hit(damage, level) {
      _get(_getPrototypeOf(DangerOre.prototype), "hit", this).call(this, damage, level);

      var player = this.game.getChildById("player");
      if (!player) return;
      if (!player.hasBottle) player.hit(1);
    }
  }]);

  return DangerOre;
}(_Ore2.Ore);

exports.DangerOre = DangerOre;
},{"./Ore":"ts/objects/ores/Ore.ts"}],"ts/objects/ores/Rady.ts":[function(require,module,exports) {
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
    value: function onBreak() {
      _get(_getPrototypeOf(Rady.prototype), "onBreak", this).call(this);

      this.dropRawOre(_RawRady.RawRady);
    }
  }]);

  return Rady;
}(_DangerOre2.DangerOre);

exports.Rady = Rady;
},{"../../config":"ts/config.ts","../raws/RawRady":"ts/objects/raws/RawRady.ts","./DangerOre":"ts/objects/ores/DangerOre.ts"}],"ts/objects/ores/BurntBasalt.ts":[function(require,module,exports) {
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
},{"../../config":"ts/config.ts","./Ore":"ts/objects/ores/Ore.ts"}],"ts/objects/ores/Nerius.ts":[function(require,module,exports) {
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
    value: function onBreak() {
      _get(_getPrototypeOf(Nerius.prototype), "onBreak", this).call(this);

      this.dropRawOre(_RawNerius.RawNerius); // this.dropRawOre(game, RawGradeCidium, 100);
    }
  }]);

  return Nerius;
}(_Ore2.Ore);

exports.Nerius = Nerius;
},{"../../config":"ts/config.ts","../raws/RawNerius":"ts/objects/raws/RawNerius.ts","./Ore":"ts/objects/ores/Ore.ts"}],"ts/objects/ores/StonyGround.ts":[function(require,module,exports) {
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
    var _this;

    _classCallCheck(this, StonyGround);

    _this = _super.call(this, "stony-ground", position);
    _this.allowDecorations = true;
    return _this;
  }

  return StonyGround;
}(_Ore2.Ore);

exports.StonyGround = StonyGround;
},{"./Ore":"ts/objects/ores/Ore.ts"}],"ts/objects/ores/Destrony.ts":[function(require,module,exports) {
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
},{"./Ore":"ts/objects/ores/Ore.ts"}],"ts/objects/raws/RawManty.ts":[function(require,module,exports) {
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
},{"./DangerRaw":"ts/objects/raws/DangerRaw.ts"}],"ts/objects/ores/Manty.ts":[function(require,module,exports) {
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
    value: function onBreak() {
      _get(_getPrototypeOf(Manty.prototype), "onBreak", this).call(this);

      this.dropRawOre(_RawManty.RawManty);
    }
  }]);

  return Manty;
}(_DangerOre2.DangerOre);

exports.Manty = Manty;
},{"../raws/RawManty":"ts/objects/raws/RawManty.ts","./DangerOre":"ts/objects/ores/DangerOre.ts"}],"ts/objects/ores/FetusStone.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FetusStone = void 0;

var _config = require("../../config");

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

var FetusStone = /*#__PURE__*/function (_Ore) {
  _inherits(FetusStone, _Ore);

  var _super = _createSuper(FetusStone);

  function FetusStone(position, data) {
    var _this;

    _classCallCheck(this, FetusStone);

    _this = _super.call(this, "fetus-stone", position);
    _this.randomRotate = false;
    _this.playerIsNear = false;
    _this.length = data ? (data === null || data === void 0 ? void 0 : data.length) || null : null;
    _this.maxLength = data ? (data === null || data === void 0 ? void 0 : data.maxLength) || 1 : 1;
    _this.allowGrow = true;
    _this.grabbedCount = data ? (data === null || data === void 0 ? void 0 : data.grabbedCount) || 0 : 0;
    _this.breakAudioNames = ["plant-break"];
    _this.hitAudioName = "plant-hit";
    return _this;
  }

  _createClass(FetusStone, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(FetusStone.prototype), "init", this).call(this);

      if (this.length === null) {
        this.maxLength = (0, _math.clamp)((0, _math.randomInt)(-1, _config.Config.VINE_MAX_LENGTH), _config.Config.VINE_MIN_LENGTH, _config.Config.VINE_MAX_LENGTH);
        this.length = (0, _math.clamp)((0, _math.randomInt)(0, 4), 0, this.maxLength);
        this.saveData();
      }

      if (this.grabbedCount == null) {
        this.grabbedCount = 0;
        this.saveData();
      }

      this.checkEmptySpace();
    }
  }, {
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(FetusStone.prototype), "update", this).call(this); // this.grabbing();


      if (this.game.tick(_config.Config.VINE_GROW_TICK)) if ((0, _math.chance)(_config.Config.VINE_GROW_CHANCE)) this.grow();
      if (this.game.tick(_config.Config.VINE_GROW_TICK * 2)) if ((0, _math.chance)(_config.Config.VINE_GROW_CHANCE * .2) && this.grabbedCount != null) {
        this.grabbedCount--;
        this.grabbedCount = (0, _math.clamp)(this.grabbedCount, 0, this.length || 0);
      }
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(FetusStone.prototype), "render", this).call(this);

      if (this.allowGrow) this.renderVine();
    }
  }, {
    key: "grab",
    value: function grab() {
      if (this.grabbedCount == null) return;
      this.grabbedCount++;
      this.grabbedCount = (0, _math.clamp)(this.grabbedCount, 0, this.length || 0);
      console.log(true);
    }
  }, {
    key: "grabbing",
    value: function grabbing() {
      var player = this.game.getChildById("player");
      if (!player) return;
      var vineHeight = (this.length || 0) * _config.Config.SPRITE_SIZE;

      if (this.game.physics.collideWithRect({
        id: player.id,
        position: player.position,
        width: player.collider.width,
        height: player.collider.height
      }, {
        id: this.id,
        position: this.position.add(new _math.Vector2(0, vineHeight / 2)),
        width: this.collider.width / 2,
        height: this.collider.height + vineHeight
      }).any) {
        console.log(true);
        player.nearFetusStone = this;
        player.actionType = "grab";
      } else {
        player.actionType = "";
        player.nearFetusStone = undefined;
      }
    }
  }, {
    key: "onBreak",
    value: function onBreak() {
      var _this2 = this;

      _get(_getPrototypeOf(FetusStone.prototype), "onBreak", this).call(this);

      if (!this.length) return;
      var size = _config.Config.SPRITE_SIZE;
      (0, _Particles.SpawnParticles)(this.game, this.position, {
        count: 4,
        colors: [_config.Color.ORANGE],
        velocity: function velocity() {
          return new _math.Vector2((0, _math.random)(1, 1.5));
        },
        gravity: .01,
        opacity: 0,
        downOpacity: -.01,
        downSize: .008,
        rotationVelocity: function rotationVelocity() {
          return (0, _math.random)(-.01, .01);
        },
        box: function box() {
          return new _math.Vector2((0, _math.random)(-size * .4, size * .4), (0, _math.random)(0, size * (_this2.length || 1)));
        }
      });
    }
  }, {
    key: "renderVine",
    value: function renderVine() {
      var _this3 = this;

      if (!this.length) return;
      var size = _config.Config.SPRITE_SIZE;

      for (var i = 0; i < this.length; i++) {
        var spriteIndex = 0;
        if (i == 0) spriteIndex = 0;
        if (i > 0) spriteIndex = 1;
        if (i == this.length - 1) spriteIndex = 2;
        var pos = this.position.add(new _math.Vector2(0, size + i * size));
        var t = 1 - this.game.camera.position.y / 200;
        var d = this.game.camera.position.distance(pos) - 200;
        var darkenFactor = (d > 96 ? 1 : d / 96) + (t > 0 ? t : 0);
        if (darkenFactor < 1 || !_config.Config.ALLOW_DARK) this.game.renderer.drawSprite({
          texture: (0, _math.asImage)(this.game.getAssetByName("fetus-vine")),
          position: pos.add(new _math.Vector2(Math.sin(this.game.clock.elapsed / 40 + this.position.x / _config.Config.SPRITE_SIZE) * i * 1.5)),
          frame: new _math.Vector2(0, spriteIndex),
          flip: {
            x: i % 2 == 0 || i % 3 == 0,
            y: false
          },
          opacity: _config.Config.ALLOW_DARK ? 1 - darkenFactor : 1
        });
        this.game.renderer.drawText({
          text: i > this.length - 1 - (this.grabbedCount || 0) ? "grabbed" : "",
          position: pos,
          layer: "particles"
        });
      }

      this.game.renderer.drawText({
        text: (this.grabbedCount || 0).toString(),
        position: this.position,
        layer: "particles"
      }); // Spawn particles

      if (this.game.tick(40) || this.game.tick(120)) (0, _Particles.SpawnParticles)(this.game, this.position, {
        count: 1,
        colors: [_config.Color.ORANGE],
        velocity: function velocity() {
          return new _math.Vector2((0, _math.random)(.2, .5));
        },
        gravity: .01,
        opacity: 0,
        downOpacity: -.01,
        downSize: .008,
        rotationVelocity: function rotationVelocity() {
          return (0, _math.random)(-.01, .01);
        },
        box: function box() {
          return new _math.Vector2((0, _math.random)(-size * .4, size * .4), (0, _math.random)(0, size * (_this3.length || 1)));
        }
      });
    }
  }, {
    key: "grow",
    value: function grow() {
      if (this.length === null) return;
      var needLength = this.length;
      var height = 0;
      if (needLength + 1 < this.maxLength) needLength++;

      for (var i = 1; i < 8; i++) {
        height++;
        if (this.checkBlockIn(new _math.Vector2(0, i))) break;
      }

      if (this.checkBlockIn(new _math.Vector2(0, needLength))) needLength--;
      this.length = (0, _math.clamp)(needLength, 0, height);
      this.saveData();
    }
  }, {
    key: "saveData",
    value: function saveData() {
      this.game.generator.modifyOre(this.inChunkId, {
        length: this.length,
        grabbedCount: this.grabbedCount,
        maxLength: this.maxLength
      });
    }
  }, {
    key: "checkEmptySpace",
    value: function checkEmptySpace() {
      if (this.checkBlockIn(new _math.Vector2(0, 1)) && this.allowGrow) this.allowGrow = false;
    }
  }]);

  return FetusStone;
}(_Ore2.Ore);

exports.FetusStone = FetusStone;
},{"../../config":"ts/config.ts","../../engine/components/Particles":"ts/engine/components/Particles.ts","../../engine/utils/math":"ts/engine/utils/math.ts","./Ore":"ts/objects/ores/Ore.ts"}],"ts/objects/ores/MushroomStone.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MushroomStone = void 0;

var _config = require("../../config");

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

var MushroomStone = /*#__PURE__*/function (_Ore) {
  _inherits(MushroomStone, _Ore);

  var _super = _createSuper(MushroomStone);

  function MushroomStone(position) {
    var _this;

    _classCallCheck(this, MushroomStone);

    _this = _super.call(this, "mushroom-stone", position);
    _this.allowGrow = true;
    _this.growed = true;
    _this.randomRotate = false;
    _this.particlesColors = [_config.Color.GREY, _config.Color.RED];
    _this.currentFrame = (0, _math.randomInt)(0, 4);
    return _this;
  }

  _createClass(MushroomStone, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(MushroomStone.prototype), "init", this).call(this);

      if (this.checkBlockIn(new _math.Vector2(0, -1))) this.allowGrow = false;
    }
  }, {
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(MushroomStone.prototype), "render", this).call(this);

      if (this.allowGrow) this.renderMushroom();
    }
  }, {
    key: "hit",
    value: function hit(damage, toolLevel) {
      _get(_getPrototypeOf(MushroomStone.prototype), "hit", this).call(this, damage, toolLevel);

      (0, _Particles.SpawnDisputesParticles)(this.game, this.position.add(new _math.Vector2(0, -_config.Config.SPRITE_SIZE / 2 - 10)), .4);
    }
  }, {
    key: "onBreak",
    value: function onBreak() {
      _get(_getPrototypeOf(MushroomStone.prototype), "onBreak", this).call(this);

      (0, _Particles.SpawnDisputesParticles)(this.game, this.position, 1);
      var player = this.game.getChildById("player");
      if (player && this.position.distance(player.position) < 200 && player.position.y < this.position.y + _config.Config.SPRITE_SIZE / 2) player.hit((0, _math.randomInt)(4, 6));
    }
  }, {
    key: "renderMushroom",
    value: function renderMushroom() {
      if (!this.growed || !this.visible) return;
      var offset = (Math.sin(this.game.clock.elapsed / 60 + this.position.x) + 1) / 2 * .1;
      this.game.renderer.drawSprite({
        texture: (0, _math.asImage)(this.game.getAssetByName("mushroom")),
        frame: new _math.Vector2(this.currentFrame),
        scale: new _math.Vector2(1, 1 - offset),
        position: this.position.add(new _math.Vector2(0, -_config.Config.SPRITE_SIZE + offset * _config.Config.SPRITE_SIZE / 2)),
        opacity: this.opacity
      });
    }
  }]);

  return MushroomStone;
}(_Ore2.Ore);

exports.MushroomStone = MushroomStone;
},{"../../config":"ts/config.ts","../../engine/components/Particles":"ts/engine/components/Particles.ts","../../engine/utils/math":"ts/engine/utils/math.ts","./Ore":"ts/objects/ores/Ore.ts"}],"ts/main.ts":[function(require,module,exports) {
"use strict";

var _assets = require("./managers/assets");

var _engine = require("./engine");

var _Player = require("./objects/entities/Player");

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

var _FetusStone = require("./objects/ores/FetusStone");

var _MushroomStone = require("./objects/ores/MushroomStone");

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
    block: _Stone.Stone
  }, {
    value: [.5, .6],
    height: [5, 90],
    divider: 5,
    block: _CrackedStone.CrackedStone
  }, {
    value: [.5, .6],
    height: [0, 14],
    divider: 5,
    block: _StonyGround.StonyGround
  }, // > Deepest stones
  // Deep stone blend layer
  {
    value: [.8, 1],
    height: [30, 43],
    divider: 2,
    block: _DeepStone.DeepStone
  }, // Deep stone layer
  {
    value: [0, 1],
    height: [42, _config.GeneratorConfig.BASALT_LAYER_HEIGHT],
    block: _DeepStone.DeepStone
  }, // Basalt blend layer
  {
    value: [.7, 1],
    height: [_config.GeneratorConfig.BASALT_LAYER_HEIGHT - _config.GeneratorConfig.LAYERS_BLEND_HEIGHT, _config.GeneratorConfig.BASALT_LAYER_HEIGHT],
    divider: 3,
    block: _Basalt.Basalt
  }, // Basalt layer
  {
    value: [0, 1],
    height: [_config.GeneratorConfig.BASALT_LAYER_HEIGHT, _config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT],
    block: _Basalt.Basalt
  }, // Burnt basalt blend layer
  {
    value: [.8, 1],
    height: [_config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT - _config.GeneratorConfig.LAYERS_BLEND_HEIGHT, _config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT],
    divider: 3,
    block: _BurntBasalt.BurntBasalt
  }, // Burnt basalt layer
  {
    value: [0, 1],
    height: [_config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT, _config.Config.WORLD_HEIGHT],
    block: _BurntBasalt.BurntBasalt
  }, // > Destrony layer
  {
    value: [0, 1],
    height: [_config.Config.WORLD_HEIGHT, _config.Config.WORLD_HEIGHT],
    block: _Destrony.Destrony
  }, // > Other
  // Fetus stone
  {
    value: [0, 1],
    height: [30, _config.GeneratorConfig.BASALT_LAYER_HEIGHT - 20],
    divider: 2,
    block: _FetusStone.FetusStone,
    rules: function rules(noiseX, noiseY, getValue) {
      return (0, _math.inRange)(getValue(noiseX, noiseY + 1, 10), 0, .5) && (0, _math.inRange)(getValue(noiseX, noiseY, 8), 0, .8) // inRange(getValue(noiseX, noiseY, 2), 0, .3)
      ;
    }
  }, // Mushroom stone
  {
    value: [0, 1],
    height: [0, _config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT - 15],
    // height: [GeneratorConfig.BASALT_LAYER_HEIGHT, GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT-15],
    divider: 2,
    block: _MushroomStone.MushroomStone,
    rules: function rules(noiseX, noiseY, getValue) {
      return (0, _math.inRange)(getValue(noiseX, noiseY - 1, 10), 0, .5) && (0, _math.inRange)(getValue(noiseX, noiseY, 8), 0, .6) // inRange(getValue(noiseX, noiseY, 2), 0, .3)
      ;
    }
  }, // > Ores
  // Cidium
  {
    value: [.95, 1],
    height: [0, _config.GeneratorConfig.BASALT_LAYER_HEIGHT - _config.GeneratorConfig.LAYERS_BLEND_HEIGHT * 3],
    // height: [12, GeneratorConfig.BASALT_LAYER_HEIGHT/2],
    divider: 5,
    block: _Cidium.Cidium
  }, // Osmy - deep stone layer
  {
    value: [0, .7],
    height: [0, _config.GeneratorConfig.BASALT_LAYER_HEIGHT - _config.GeneratorConfig.LAYERS_BLEND_HEIGHT],
    // height: [50, GeneratorConfig.BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT],
    divider: 4,
    block: _Osmy.Osmy,
    rules: function rules(noiseX, noiseY, getValue) {
      // return true;
      return getValue(noiseX + 1, noiseY + 2, 4) > .85;
    }
  }, {
    value: [.9, 1],
    height: [0, _config.GeneratorConfig.BASALT_LAYER_HEIGHT - _config.GeneratorConfig.LAYERS_BLEND_HEIGHT],
    // height: [100, GeneratorConfig.BASALT_LAYER_HEIGHT - GeneratorConfig.LAYERS_BLEND_HEIGHT],
    divider: 3,
    block: _Nerius.Nerius
  }, // Antin - basalt layer
  {
    value: [0, .6],
    height: [0, _config.Config.WORLD_HEIGHT - 40],
    // height: [GeneratorConfig.BASALT_LAYER_HEIGHT + 10, Config.WORLD_HEIGHT - 22],
    divider: 3,
    block: _Antin.Antin,
    rules: function rules(noiseX, noiseY, getValue) {
      return (0, _math.inRange)(getValue(noiseX + 1, noiseY, 5), 0, .4);
    }
  }, // Rady - basalt layer
  {
    value: [0, .3],
    height: [0, _config.Config.WORLD_HEIGHT - 5],
    // height: [200, Config.WORLD_HEIGHT - 5],
    divider: 2,
    block: _Rady.Rady
  }, // > Manty layer
  {
    value: [0, .3],
    height: [0, _config.Config.WORLD_HEIGHT - 1],
    // height: [Config.WORLD_HEIGHT - 5, Config.WORLD_HEIGHT - 1],
    divider: 2,
    block: _Manty.Manty
  }, {
    value: [0, .5],
    height: [_config.Config.WORLD_HEIGHT - 1, _config.Config.WORLD_HEIGHT - 1],
    divider: 2,
    block: _Manty.Manty
  }, // > Holes
  {
    value: [0, .5],
    height: [5, _config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT - 20],
    block: null
  }, {
    value: [0, .4],
    height: [_config.GeneratorConfig.BURNT_BASALT_LAYER_HEIGHT, _config.Config.WORLD_HEIGHT - 40],
    divider: 5,
    block: null
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
  }); // for (let y = 0; y < Config.WORLD_HEIGHT / Config.CHUNK_SIZE; y ++)
  // for (let x = 0; x < Config.WORLD_WIDTH / Config.CHUNK_SIZE; x ++)
  //     renderer.drawRect({
  //         position: new Vector2(x*Config.CHUNK_SIZE*Config.SPRITE_SIZE, y*Config.CHUNK_SIZE*Config.SPRITE_SIZE).add(Vector2.all(Config.SPRITE_SIZE*1.5)),
  //         width: Config.CHUNK_SIZE,
  //         height: Config.CHUNK_SIZE,
  //         color: "rgba(0, 0, 0, 0)",
  //         stroke: { width: 2, color: Color.RED }
  //     });
});
game.init(); // ! Debug

window.addEventListener("keydown", function (e) {
  if (e.code == "KeyG") console.log(game);
  if (e.code == "KeyP") console.log(player);
  if (e.code == "KeyI") console.log(player.inventory);
  if (e.code == "KeyM") console.log(player);
});
},{"./managers/assets":"ts/managers/assets.ts","./engine":"ts/engine/index.ts","./objects/entities/Player":"ts/objects/entities/Player.ts","./managers/level":"ts/managers/level.ts","./objects/ores/Stone":"ts/objects/ores/Stone.ts","./objects/ores/CrackedStone":"ts/objects/ores/CrackedStone.ts","./config":"ts/config.ts","./objects/ores/DeepStone":"ts/objects/ores/DeepStone.ts","./objects/ores/Cidium":"ts/objects/ores/Cidium.ts","./managers/dome":"ts/managers/dome.ts","./objects/ores/Osmy":"ts/objects/ores/Osmy.ts","./objects/ores/Basalt":"ts/objects/ores/Basalt.ts","./engine/utils/math":"ts/engine/utils/math.ts","./objects/ores/Antin":"ts/objects/ores/Antin.ts","./objects/ores/Rady":"ts/objects/ores/Rady.ts","./objects/ores/BurntBasalt":"ts/objects/ores/BurntBasalt.ts","./objects/ores/Nerius":"ts/objects/ores/Nerius.ts","./objects/ores/StonyGround":"ts/objects/ores/StonyGround.ts","./objects/ores/Destrony":"ts/objects/ores/Destrony.ts","./objects/ores/Manty":"ts/objects/ores/Manty.ts","./objects/ores/FetusStone":"ts/objects/ores/FetusStone.ts","./objects/ores/MushroomStone":"ts/objects/ores/MushroomStone.ts"}],"C:/Users/Aser/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59362" + '/');

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
},{}]},{},["C:/Users/Aser/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","ts/main.ts"], null)
//# sourceMappingURL=/main.0e24b174.js.map
