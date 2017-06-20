(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"));
	else if(typeof define === 'function' && define.amd)
		define("widget-demo-about-ng", ["vendor-bb-angular", "lib-bb-widget-ng", "lib-bb-event-bus-ng", "lib-bb-widget-extension-ng"], factory);
	else if(typeof exports === 'object')
		exports["widget-demo-about-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-widget-ng"), require("lib-bb-event-bus-ng"), require("lib-bb-widget-extension-ng"));
	else
		root["widget-demo-about-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-widget-ng"], root["lib-bb-event-bus-ng"], root["lib-bb-widget-extension-ng"]);
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
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
	
	var _controller = __webpack_require__(26);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _libBbWidgetExtensionNg = __webpack_require__(27);
	
	var _libBbWidgetExtensionNg2 = _interopRequireDefault(_libBbWidgetExtensionNg);
	
	var _defaultHooks = __webpack_require__(28);
	
	var _defaultHooks2 = _interopRequireDefault(_defaultHooks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @module widget-demo-about-ng
	 *
	 * @description
	 * About
	 */
	var moduleKey = 'widget-demo-about-ng';
	var hooksKey = moduleKey + ':hooks';
	
	exports.default = _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _libBbEventBusNg2.default]).factory(hooksKey, (0, _libBbWidgetExtensionNg2.default)(_defaultHooks2.default)).controller('AboutController', [
	// dependencies to inject
	_libBbEventBusNg.eventBusKey, hooksKey, _libBbWidgetNg.widgetKey, '$scope',
	
	/* into */
	_controller2.default]).run([_libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, function (bus, widget) {}]).name;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = AboutController;
	/**
	 * @module widget-demo-about-ng
	 * @name AboutController
	 *
	 * @description
	 * About
	 */
	
	function AboutController(bus, hooks, widget, $scope) {
	  var $ctrl = this;
	
	  // Check if the Contact widget feature is available, if this is the case we process triggers for its services
	  var contactFeature = cxp.mobile.plugins && cxp.mobile.plugins.ContactPlugin;
	
	  /**
	   * AngularJS Lifecycle hook used to initialize the controller
	   *
	   * @name AboutController#$onInit
	   * @returns {void}
	   */
	  var $onInit = function $onInit() {
	    if (contactFeature) {
	
	      // Enable the call button
	      $ctrl.callUsEnabled = true;
	
	      // Check if the app is able to send an email via a widget feature
	      var isEmailAvailableSuccessCallback = function isEmailAvailableSuccessCallback(data) {
	        if (data.result) {
	          $ctrl.emailUsEnabled = true;
	        } else {
	          $ctrl.emailUsEnabled = false;
	        }
	
	        $scope.$apply();
	      };
	
	      var isEmailAvailableErrorCallback = function isEmailAvailableErrorCallback(data) {
	        $ctrl.emailUsEnabled = false;
	      };
	
	      contactFeature.isEmailAvailable(isEmailAvailableSuccessCallback, isEmailAvailableErrorCallback);
	    }
	
	    bus.publish('bb.item.loaded', {
	      id: widget.getId()
	    });
	  };
	
	  // Define the method that is triggered when the user clicks the email button
	  var emailUs = function emailUs() {
	
	    // Send email
	    contactFeature.sendEmail(null, null, 'support@backbase.com', 'Support request from the CXP Mobile app', 'Dear Backbase,\n\n');
	  };
	
	  // Define the method that is triggered when the user clicks the call button
	  var callUs = function callUs() {
	
	    // Call phone number
	    contactFeature.callPhoneNumber(null, null, '0031204658888');
	  };
	
	  // Define the method that is triggered when the user clicks on the website button
	  var visitWebsite = function visitWebsite() {
	    // Redirect the user to the website
	    window.location = 'http://www.backbase.com';
	  };
	
	  Object.assign($ctrl, {
	    $onInit: $onInit,
	    emailUs: emailUs,
	    callUs: callUs,
	    visitWebsite: visitWebsite
	
	  });
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ },
/* 28 */
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
/******/ ])
});
;
//# sourceMappingURL=widget-demo-about-ng.js.map