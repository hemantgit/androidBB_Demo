(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-storage-ng", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-storage-ng"] = factory(require("vendor-bb-angular"));
	else
		root["lib-bb-storage-ng"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(24);

/***/ },

/***/ 5:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bbStorageServiceKey = undefined;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _storage = __webpack_require__(25);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _mobileSdk = __webpack_require__(26);
	
	var _mobileSdk2 = _interopRequireDefault(_mobileSdk);
	
	var _memory = __webpack_require__(27);
	
	var _memory2 = _interopRequireDefault(_memory);
	
	var _web = __webpack_require__(28);
	
	var _web2 = _interopRequireDefault(_web);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleKey = 'lib-bb-storage';
	
	/**
	 * @name bbStorageServiceKey
	 * @type {string}
	 * @description Injector name for a [bbStorageService](#bbStorageService)
	 */
	/* global window */
	/**
	 * @module lib-bb-storage-ng
	 * @description
	 * Provides a cross-platform interface for temporary storage or data between widget/page instances.
	 * It provides a key-value store that is persisted between Page loads in the browser and between
	 * WebViews on mobile.
	 *
	 * @example
	 * import bbStorageModuleKey, { bbStorageServiceKey } from 'lib-bb-storage-ng';
	 *
	 * angular
	 *   .module('ExampleModule', [
	 *     bbStorageModuleKey,
	 *   ])
	 *   .controller('MyController', [
	 *     bbStorageServiceKey,
	 *     // into //
	 *     (bbStorage) => {
	 *       const $ctrl = this;
	 *       let unsubscribe = () => {};
	 *
	 *       const counterStorage = 'counter';
	 *
	 *       $ctrl.$onInit = () => {
	 *         unsubscribe = bbStorage.subscribe(counterStorage, (newValue) => {
	 *           // called whenever the value in the storage is set
	 *           $ctrl.counter = newValue;
	 *         });
	 *       };
	 *
	 *       $ctrl.$onDestroy = () => {
	 *         unsubscribe();
	 *       };
	 *
	 *       $ctrl.increment = () =>
	 *         bbStorage.getItem(counterStorage)
	 *         .then((oldValue = 0) => bbStorage.setItem(counterStorage, oldValue + 1));
	 *     },
	 *   ]);
	 */
	
	var bbStorageServiceKey = exports.bbStorageServiceKey = moduleKey + ':bbStorageService';
	
	/**
	 * Detect if session storage is available
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_support_vs_availability
	 * @inner
	 * @type {function}
	 * @return {bool} True if session storage is available
	 */
	var sessionStorageAvailable = function sessionStorageAvailable() {
	  try {
	    var storage = window.sessionStorage;
	    var x = '__storage_test__';
	    storage.setItem(x, x);
	    storage.removeItem(x);
	    return true;
	  } catch (e) {
	    return false;
	  }
	};
	
	/**
	 * Attempt to choose the correct storage adapter
	 *
	 * @name detectStorage
	 * @inner
	 * @type {function}
	 * @param {Promise} Promise A promise constructor
	 * @return {StorageAdapter} The adapter suitable for the current environment
	 */
	var detectStorage = function detectStorage(Promise) {
	  if (window.cxp && window.cxp.mobile && window.cxp.mobile.plugins && window.cxp.mobile.plugins.InMemoryStorage) {
	    return (0, _mobileSdk2.default)(Promise, window.cxp.mobile.plugins.InMemoryStorage);
	  }
	  if (sessionStorageAvailable()) {
	    return (0, _web2.default)(Promise, window.sessionStorage);
	  }
	  return (0, _web2.default)(Promise, (0, _memory2.default)());
	};
	
	/**
	 * @name default
	 * @type {string}
	 * @description The angular module name
	 */
	exports.default = _vendorBbAngular2.default.module(moduleKey, [])
	
	/**
	 * The [Storage Service](#StorageService) factory.
	 * Creates a new storage service by detecting the best storage mechanism available in the
	 * current environment.
	 *
	 * @name bbStorageService
	 * @ngkey lib-bb-storage-ng:bbStorageService
	 * @type {function}
	 * @return {StorageService}
	 */
	.factory(bbStorageServiceKey, ['$q', function (Promise) {
	  return (0, _storage2.default)(detectStorage(Promise));
	}]).name;
	
	/**
	 * @typedef StorageAdapter
	 * @inner
	 * @type {object}
	 */
	/**
	 * @typedef StorageAdapter#getItem
	 * @inner
	 * @type {function}
	 * @param {string} key The key to fetch
	 * @return {Promise.<?string>} The serialized value stored in the key, if any
	 */
	/**
	 * @typedef StorageAdapter#setItem
	 * @inner
	 * @type {function}
	 * @param {string} key The key to set
	 * @param {string} value The value to store - should be serialized JSON
	 * @return {Promise.<void>}
	 */
	/**
	 * @typedef StorageAdapter#removeItem
	 * @inner
	 * @type {function}
	 * @param {string} key The key to remove
	 * @return {Promise.<void>}
	 */
	/**
	 * @typedef StorageAdapter#subscribe
	 * @inner
	 * @type {function}
	 * @param {string} key The key to subscribe to
	 * @param {AdapterSubscription} callback The callback for when the value changes
	 * @return {AdapterUnsubscribe}
	 */
	/**
	 * @typedef AdapterUnsubscribe
	 * @inner
	 * @description Unsubscribe from notifications
	 * @type {function}
	 * @return {void}
	 */
	/**
	 * @typedef AdapterSubscription
	 * @inner
	 * @type {function}
	 * @param {string} key The key that changed
	 * @param {string} oldValue The previous value attached to the key
	 * @param {string} newValue The new value attached to the key
	 * @return {void}
	 */

/***/ },

/***/ 25:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @name default
	 * @inner
	 * @type {function}
	 * @param {StorageAdapter} adapter An adapter for the underlying storage mechanism
	 * @return {StorageService}
	 */
	
	/**
	 * Attempt to parse a JSON value
	 * @name parseValue
	 * @inner
	 * @type {function}
	 * @param {string} value The JSON encoded value
	 * @return {any|null} The parsed value, or null if parsing fails
	 */
	var parseValue = function parseValue(value) {
	  try {
	    return JSON.parse(value);
	  } catch (e) {
	    return null;
	  }
	};
	
	/**
	 * A service that provides a consistent interface allowing setting and getting persistent data
	 * via some underlying (platform specific) storage mechanism
	 *
	 * @name StorageService
	 * @type {object}
	 */
	
	exports.default = function (adapter) {
	  return {
	    /**
	     * @name StorageService#setItem
	     * @type {function}
	     * @param {string} key The key to set
	     * @param {any} value The value to store - must be serializable to JSON
	     * @return {Promise.<void>}
	     */
	    setItem: function setItem(key, value) {
	      return adapter.setItem(key, JSON.stringify(value));
	    },
	
	    /**
	     * @name StorageService#getItem
	     * @type {function}
	     * @param {string} key The key to fetch
	     * @return {Promise.<any>} The value stored in the key, if any (null if key holds invalid JSON)
	     */
	    getItem: function getItem(key) {
	      return adapter.getItem(key).then(parseValue);
	    },
	
	    /**
	     * @name StorageService#removeItem
	     * @type {function}
	     * @param {string} key The key to remove
	     * @return {Promise.<void>}
	     */
	    removeItem: function removeItem(key) {
	      return adapter.removeItem(key);
	    },
	
	    /**
	     * @name StorageService#subscribe
	     * @type {function}
	     * @param {string} key The key to subscribe to
	     * @param {Subscription} callback The callback to be called with the new value of the key
	     * @return {Unsubscribe}
	     */
	    subscribe: function subscribe(key, callback) {
	      return adapter.subscribe(key, function (changedKey, oldValue, newValue) {
	        if (key === changedKey && oldValue !== newValue) {
	          callback(parseValue(newValue));
	        }
	      });
	    }
	  };
	};
	
	/**
	 * @typedef Unsubscribe
	 * @description Unsubscribe from notifications
	 * @type {function}
	 * @return {void}
	 */
	/**
	 * @typedef Subscription
	 * @type {function}
	 * @param {any} newValue The new value attached to the key
	 * @return {void}
	 */

/***/ },

/***/ 26:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name mobileSdkAdapter
	 * @inner
	 * @see https://my.backbase.com/docs/product-documentation/documentation//mobile-sdk/latest/in_memory_storage.html
	 * @type {function}
	 * @param {Promise} Promise A Promise constructor
	 * @param {object} plugin An instance of the CXP Mobile SDK Storage plugin
	 * @return {StorageAdapter}
	 */
	exports.default = function (Promise, plugin) {
	  return {
	    setItem: function setItem(key, value) {
	      return new Promise(function (resolve, reject) {
	        plugin.setItem(function () {
	          resolve();
	        }, reject, key, value);
	      });
	    },
	
	    getItem: function getItem(key) {
	      return new Promise(function (resolve, reject) {
	        plugin.getItem(function (item) {
	          resolve(item);
	        }, reject, key);
	      });
	    },
	
	    removeItem: function removeItem(key) {
	      return new Promise(function (resolve, reject) {
	        plugin.removeItem(function () {
	          resolve();
	        }, reject, key);
	      });
	    },
	
	    subscribe: function subscribe(key, callback) {
	      var wrapped = function wrapped(_ref) {
	        var changedKey = _ref.key,
	            oldValue = _ref.oldValue,
	            newValue = _ref.newValue;
	
	        if (changedKey === key) {
	          callback(key, oldValue, newValue);
	        }
	      };
	      plugin.subscribe(wrapped);
	      return function () {
	        plugin.unsubscribe(wrapped);
	      };
	    }
	  };
	};

/***/ },

/***/ 27:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @name memoryAdapter
	 * @inner
	 * @type {function}
	 * @return {SynchronousDataAdapter}
	 */
	exports.default = function () {
	  var data = {};
	  return {
	    getItem: function getItem(key) {
	      return Object.prototype.hasOwnProperty.call(data, key) ? data[key] : null;
	    },
	    setItem: function setItem(key, value) {
	      data[key] = value;
	    },
	    removeItem: function removeItem(key) {
	      delete data[key];
	    }
	  };
	};

/***/ },

/***/ 28:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * @name webStorageAdapter
	 * @inner
	 * @type {function}
	 * @param {Promise} Promise A Promise constructor
	 * @param {SynchronousDataAdapter} data A data adapter
	 * @return {StorageAdapter}
	 */
	exports.default = function (Promise, data) {
	  var subscriptions = {};
	
	  var subscriptionsFor = function subscriptionsFor(key) {
	    return subscriptions[key] || [];
	  };
	
	  var notify = function notify(key, oldValue, newValue) {
	    subscriptionsFor(key).forEach(function (callback) {
	      callback(key, oldValue, newValue);
	    });
	  };
	
	  return {
	    setItem: function setItem(key, newValue) {
	      return new Promise(function (resolve) {
	        var oldValue = data.getItem(key);
	        data.setItem(key, newValue);
	        notify(key, oldValue, newValue);
	        resolve();
	      });
	    },
	
	    getItem: function getItem(key) {
	      return Promise.resolve(data.getItem(key));
	    },
	
	    removeItem: function removeItem(key) {
	      return new Promise(function (resolve) {
	        var oldValue = data.getItem(key);
	        data.removeItem(key);
	        notify(key, oldValue, null);
	        resolve();
	      });
	    },
	
	    subscribe: function subscribe(key, callback) {
	      subscriptions[key] = [].concat(_toConsumableArray(subscriptionsFor(key)), [callback]);
	      return function () {
	        subscriptions[key] = subscriptionsFor(key).filter(function (fn) {
	          return fn !== callback;
	        });
	      };
	    }
	  };
	};
	
	/**
	 * @typedef SynchronousDataAdapter
	 * @inner
	 * @type {object}
	 */
	/**
	 * @typedef SynchronousDataAdapter#getItem
	 * @inner
	 * @type {function}
	 * @param {string} key The key to fetch
	 * @return {?string} The serialized value stored in the key, if any
	 */
	/**
	 * @typedef SynchronousDataAdapter#setItem
	 * @inner
	 * @type {function}
	 * @param {string} key The key to set
	 * @param {string} value The value to store - should be serialized JSON
	 * @return {void}
	 */
	/**
	 * @typedef SynchronousDataAdapter#removeItem
	 * @inner
	 * @type {function}
	 * @param {string} key The key to remove
	 * @return {void}
	 */

/***/ }

/******/ })
});
;
//# sourceMappingURL=lib-bb-storage-ng.js.map