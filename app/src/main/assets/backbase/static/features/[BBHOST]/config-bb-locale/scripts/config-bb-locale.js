(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("config-bb-locale", [], factory);
	else if(typeof exports === 'object')
		exports["config-bb-locale"] = factory();
	else
		root["config-bb-locale"] = factory();
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

	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* global document */
	/**
	 * @module config-bb-locale
	 * @description Configuration module for localization and translation.
	 *
	 * This configuration module is intended to be replaced and overwritten per project. It is used
	 * by lib-bb-start-ng to bootstrap the localisation settings for the widget.
	 *
	 * When replacing this config, please ensure the functions below are implemented.
	 */
	
	/**
	 * @name locale
	 * @description Return which locale should be used. By default it uses the locale provided by the
	 *   portal client widget instance (to be compatible with CXP 6) and falls back to reading the lang
	 *   or xml:lang from the document. This allows custom pages in CXP to configure the locale from the
	 *   server-side.
	 * @type {function}
	 * @param {string} currentLocale The locale identifier, determined by portal client (if available)
	 * @return {?string} The locale identifier
	 */
	var locale = exports.locale = function locale(currentLocale) {
	  return currentLocale || document.documentElement.lang || document.documentElement.getAttribute('xml:lang');
	};
	
	/**
	 * @name localeModuleName
	 * @description Returns the name of the angular locale module to load
	 *   to be loaded during widget startup. This module does not need to export anything, but can
	 *   configure the local environment with the relevant locale - by default it will load the
	 *   relevant angular ngLocale module for the selected locale.
	 * @type {function}
	 * @param {string} currentLocale The locale identifier, determined by portal client (if available)
	 * @return {?string} The module to load to setup the locale
	 */
	var localeModuleName = exports.localeModuleName = function localeModuleName(currentLocale) {
	  return currentLocale && (
	  // default implementation does not load any module for "en-us" as it is build into core angular
	  currentLocale.toLowerCase() === 'en-us' ? null : 'config-bb-locale/assets/angular-locale_' + currentLocale.toLowerCase() + '.js');
	};
	
	/**
	 * @name messageBundleModule
	 * @description Returns the name of a module that contains the message bundle with the needed
	 * translations. By default it will load the assets/messages.json from the widget's extension. This
	 * can be customized by setting a messages preference on the widget pointing to the relevant module.
	 * @type {function}
	 * @param {module:lib-bb-widget.BBWidget} widget The current widget
	 * @return {?string} The module to load to provide the message bundle
	 */
	var messageBundleModule = exports.messageBundleModule = function messageBundleModule(widget) {
	  var extensionModuleName = widget.getStringPreference('extension');
	  return widget.getStringPreference('messages') || (!!extensionModuleName ? extensionModuleName + '/assets/messages.json' : null);
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=config-bb-locale.js.map