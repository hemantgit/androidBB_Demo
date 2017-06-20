(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("config-bb-providers-ng", [], factory);
	else if(typeof exports === 'object')
		exports["config-bb-providers-ng"] = factory();
	else
		root["config-bb-providers-ng"] = factory();
})(this, function() {
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

	module.exports = __webpack_require__(3);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @module config-bb-providers-ng
	 * @description Project level configuration of modules
	 *
	 * This configuration module is intended to be replaced and overwritten per project. It is used
	 * to configure angular providers during the widget's
	 * [config phase](https://docs.angularjs.org/guide/module#configuration-blocks).
	 *
	 * To replace this module, it must export a single array as default.
	 *
	 * The array can contain any number of configration arrays, where the first item is the
	 * angular provider injector key, and the 2nd item is the configuration function to run.
	 *
	 * It is most commonly used to configure the data modules to connect to the correct services
	 * endpoints.
	 *
	 * @example
	 * // The default export is a nested array in this format:
	 * export default [
	 *   [ <angular provider injector key>, <configuration function> ],
	 *   [ <angular provider injector key>, <configuration function> ],
	 *   ...
	 * ]
	 *
	 * // Basic example
	 * const myServiceConfig = [ 'my-serviceProvider', function(p) { p.setConfig({a: '1'}) } ];
	 * const vendorServiceConfig = [ 'some-vendorProvider', function(p) { p.setSomething(b, 2) } ];
	 * export default [
	 *     myServiceConfig,
	 *     vendorServiceConfig
	 * ];
	 *
	 * // Configure data module
	 * const contactProviderKey = 'data-bb-contact-http-ng:contactDataProvider';
	 * export default [
	 *   [contactProviderKey, (contactProvider) => {
	 *     contactProvider.setBaseUri('http://example.com/api');
	 *   }],
	 * ];
	 *
	 * // Configure angular HTTP and a data module
	 * export default [
	 *   [contactProviderKey, (contactProvider) => {
	 *     contactProvider.setBaseUri('http://example.com/api');
	 *   }],
	 *   ['$httpProvider', $httpProvider => {
	 *     $httpProvider.interceptors.push('myHttpInterceptor');
	 *   }],
	 * ];
	 *
	 */
	
	exports.default = [];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=config-bb-providers-ng.js.map