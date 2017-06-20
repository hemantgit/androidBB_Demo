(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-demo-welcome-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-demo-welcome-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"));
	else
		root["widget-demo-welcome-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_27__) {
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

	module.exports = __webpack_require__(41);

/***/ },

/***/ 23:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ },

/***/ 24:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ },

/***/ 25:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ },

/***/ 27:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vendorBbAngular = __webpack_require__(23);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbWidgetNg = __webpack_require__(24);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbEventBusNg = __webpack_require__(25);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _controller = __webpack_require__(42);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _libBbWidgetExtensionNg = __webpack_require__(27);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _defaultHooks = __webpack_require__(43);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-demo-welcome-ng
	 *
	 * @description
	 * Welcome
	 */
	var moduleKey = 'widget-demo-welcome-ng';
	var hooksKey = moduleKey + ':hooks';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _libBbEventBusNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).controller('WelcomeController', [
	// dependencies to inject
	_libBbEventBusNg.eventBusKey, hooksKey, _libBbWidgetNg.widgetKey,
	/* into */
	_controller2.default]).run([_libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, function (bus, widget) {}]).name;

/***/ },

/***/ 42:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = WelcomeController;
	/**
	 * @module widget-demo-welcome-ng
	 * @name WelcomeController
	 *
	 * @description
	 * Welcome
	 */
	
	function WelcomeController(bus, hooks, widget) {
	  var $ctrl = this;
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name WelcomeController#$onInit
	   * @returns {void}
	   */
	  var $onInit = function $onInit() {
	    bus.publish('bb.item.loaded', {
	      id: widget.getId()
	    });
	
	    // Initiate preloading on demand for other pages
	    bus.publish('home-loaded');
	  };
	
	  // Define the function that is triggered when the "Get started" button is clicked
	  var getStarted = function getStarted() {
	    // Send a pub/sub event to the application that will use this event by checking if there's a matching page in the behaviour map
	    bus.publish('getStartedClicked');
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    getStarted: getStarted
	
	  });
	}

/***/ },

/***/ 43:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var identity = function identity(a) {
	  return a;
	};
	
	exports.default = {};

/***/ }

/******/ })
});
;
//# sourceMappingURL=widget-demo-welcome-ng.js.map