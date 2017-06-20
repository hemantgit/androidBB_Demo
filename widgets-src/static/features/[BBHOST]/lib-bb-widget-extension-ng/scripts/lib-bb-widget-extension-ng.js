(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib-bb-widget-ng"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-widget-extension-ng", ["lib-bb-widget-ng"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-widget-extension-ng"] = factory(require("lib-bb-widget-ng"));
	else
		root["lib-bb-widget-extension-ng"] = factory(root["lib-bb-widget-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_19__) {
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

	module.exports = __webpack_require__(36);

/***/ },

/***/ 19:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.extensionHooksKey = undefined;
	
	var _libBbWidgetNg = __webpack_require__(19);
	
	var _widgetExtension = __webpack_require__(37);
	
	var _widgetExtension2 = _interopRequireDefault(_widgetExtension);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @name extensionHooksKey
	 * @type {string}
	 * @description
	 * The injector key to be used to access the extension hooks module
	 */
	/**
	 * @module lib-bb-widget-extension-ng
	 *
	 * @description
	 * Provides a helper function that creates an angular injectable, which works in conjunction
	 * with `lib-bb-start-ng` to:
	 *  1. merge the custom hooks from the widgets extension with the defaults provided by the widget.
	 *  2. provide the hooks with limited access to contextually useful services.
	 *
	 * Extensible widgets should use this library to create hooks that can be consumed by a widget
	 * extension.
	 *
	 * @example
	 * // extension exports hooks, file: ext-bb-example-ng/scripts/index.js
	 *
	 * export const hooks = ({ widget }) => ({
	 *   prepareData: (data) => widget.getPreference('reverse') ? data.reverse() : data,
	 * });
	 *
	 * // widget consumes extension hook implementation, file: widget-bb-example-ng/scripts/index.js
	 * import extendHooks from 'lib-bb-widget-extension-ng';
	 *
	 * import * as defaultHooks from './default-hooks';
	 *
	 * angular.module(...)
	 *   .factory('my-widget:hooks', extendHooks(defaultHooks));
	 *
	 */
	
	var extensionHooksKey = exports.extensionHooksKey = 'widget-ext:hooks';
	
	/**
	 * @name default
	 * @type {function}
	 * @description
	 * Create an angular injectable to help merge the widgets extension hooks with the default hooks
	 * provided by the widget.
	 * @param {Hooks} defaultHooks The default hook implementation
	 * @returns {NgInjectedFunction}
	 */
	
	exports.default = function (defaultHooks) {
	  return [extensionHooksKey, _libBbWidgetNg.widgetKey,
	  /* into */
	  function (extensionHooks, widget) {
	    return (0, _widgetExtension2.default)(defaultHooks, extensionHooks, {
	      widget: widget
	    });
	  }];
	};

/***/ },

/***/ 37:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @private
	 * Extend the default hooks with the hooks from the extension module.
	 *
	 * @param {Hooks} defaultHooks The default hook implementations
	 * @param {Hooks|HooksFactory} extensionHooks The hooks to override
	 * @param {HooksContext} context Additional context that may be useful for the hooks implementations
	 */
	exports.default = function (defaultHooks, extensionHooks, context) {
	  return Object.assign({}, defaultHooks, typeof extensionHooks === 'function' ? extensionHooks(context) : extensionHooks);
	};
	
	/**
	 * @typedef Hooks
	 * @type {object.<function>}
	 */
	
	/**
	 * @typedef HooksFactory
	 * @type {function}
	 * @param {HooksContext} context
	 * @returns {Hooks}
	 */
	
	/**
	 * @typedef HooksContext
	 * @type {object}
	 * @property {module:lib-bb-widget-ng.widget} widget
	 */

/***/ }

/******/ })
});
;
//# sourceMappingURL=lib-bb-widget-extension-ng.js.map