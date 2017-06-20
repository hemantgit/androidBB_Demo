(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"), require("lib-bb-event-bus-ng"), require("lib-bb-notifications-ng"), require("lib-bb-widget-ng"), require("lib-bb-widget"), require("lib-bb-i18n-ng"), require("lib-bb-widget-extension-ng"), require("config-bb-locale"));
	else if(typeof define === 'function' && define.amd)
		define("lib-bb-start-ng", ["vendor-bb-angular", "lib-bb-event-bus-ng", "lib-bb-notifications-ng", "lib-bb-widget-ng", "lib-bb-widget", "lib-bb-i18n-ng", "lib-bb-widget-extension-ng", "config-bb-locale"], factory);
	else if(typeof exports === 'object')
		exports["lib-bb-start-ng"] = factory(require("vendor-bb-angular"), require("lib-bb-event-bus-ng"), require("lib-bb-notifications-ng"), require("lib-bb-widget-ng"), require("lib-bb-widget"), require("lib-bb-i18n-ng"), require("lib-bb-widget-extension-ng"), require("config-bb-locale"));
	else
		root["lib-bb-start-ng"] = factory(root["vendor-bb-angular"], root["lib-bb-event-bus-ng"], root["lib-bb-notifications-ng"], root["lib-bb-widget-ng"], root["lib-bb-widget"], root["lib-bb-i18n-ng"], root["lib-bb-widget-extension-ng"], root["config-bb-locale"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_23__) {
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

	module.exports = __webpack_require__(17);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = start;
	
	var _vendorBbAngular = __webpack_require__(5);
	
	var _vendorBbAngular2 = _interopRequireDefault(_vendorBbAngular);
	
	var _libBbEventBusNg = __webpack_require__(15);
	
	var _libBbEventBusNg2 = _interopRequireDefault(_libBbEventBusNg);
	
	var _libBbNotificationsNg = __webpack_require__(18);
	
	var _libBbNotificationsNg2 = _interopRequireDefault(_libBbNotificationsNg);
	
	var _libBbWidgetNg = __webpack_require__(19);
	
	var _libBbWidgetNg2 = _interopRequireDefault(_libBbWidgetNg);
	
	var _libBbWidget = __webpack_require__(20);
	
	var _libBbWidget2 = _interopRequireDefault(_libBbWidget);
	
	var _libBbI18nNg = __webpack_require__(21);
	
	var _libBbI18nNg2 = _interopRequireDefault(_libBbI18nNg);
	
	var _libBbWidgetExtensionNg = __webpack_require__(22);
	
	var _configBbLocale = __webpack_require__(23);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @module lib-bb-start-ng
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * @description Start module for angular apps. Initialises the widget instance, extensions,
	                                                                                                                                                                                                     * locales, and translation messages.
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * Usually this module shouldn't be called directly. It will be called by lib-bb-start.
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * Bootstrapping involves the following features:
	                                                                                                                                                                                                     *  - Initialises lib-bb-widget instance from CXP widget
	                                                                                                                                                                                                     *  - Loads the locale settings from config-bb-locale
	                                                                                                                                                                                                     *  - Loads messages file (set from config-bb-locale)
	                                                                                                                                                                                                     *  - Provides messages to lib-bb-i18n
	                                                                                                                                                                                                     *  - Provides context to widget extensions (helpers, events)
	                                                                                                                                                                                                     *  - Makes the extension hooks available to the widget instance
	                                                                                                                                                                                                     *  - Loads the widget's JS with the modules looader (configured by config-bb-module-loader)
	                                                                                                                                                                                                     *  - Bootstrap the angular application
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * @usage
	                                                                                                                                                                                                     * import bbStart from 'lib-bb-start-ng';
	                                                                                                                                                                                                     */
	
	// Calculate "Provider" keys
	var widgetKeyProvider = _libBbWidgetNg.widgetKey + 'Provider';
	var eventBusKeyProvider = _libBbEventBusNg.eventBusKey + 'Provider';
	var translateProvider = _libBbI18nNg.bbTranslateKey + 'Provider';
	
	/**
	 * Create an Angular Module to combine the Widget, Extension and "common" modules
	 *
	 * Angular modules don't provide proper namespacing. We use this to merge the injectables
	 * of the widget, the extension, and any other angular modules. This module also allows
	 * configuration of common services that are used by widgets (eg. anything that requires the
	 * CXP "__WIDGET__" object).
	 *
	 * @inner
	 * @param {string} widgetName The name of the widget
	 * @param {WidgetInstance} widgetInstance An instance of the CXP Widget object (__WIDGET__)
	 * @param {string[]} dependencyKeys Angular Module Keys this app depends on
	 * @param {Array.<NgInjectedFunction>} configs Functions to configure angular providers
	 * @param {object.<object.<string>>} messages A map of locale code and translation keys to messages
	 * @returns {!string} The Angular Module Key for the App Module
	 */
	function createAppModule(widgetName, widgetInstance, dependencyKeys, configs, messages, locale) {
	  // Generate an NG Module key including the widget ID to avoid namespace collisions on a page
	  var moduleKey = widgetName + ':' + widgetInstance.id;
	
	  return _vendorBbAngular2.default.module(moduleKey, [_libBbWidgetNg2.default, _libBbEventBusNg2.default, _libBbI18nNg2.default, _libBbNotificationsNg2.default].concat(_toConsumableArray(dependencyKeys)))
	
	  // configure the translation service with the current language/locale
	  .config([translateProvider, function (translate) {
	    if (!messages) return;
	    if (!messages[locale]) {
	      // eslint-disable-next-line no-console
	      console.warn('No translations found for locale: "' + locale + '"');
	      if (messages['en-US']) {
	        // eslint-disable-next-line no-console
	        console.warn('DEPRECATED - Falling back to "en-US" translations.\n' + 'This fallback is deprecated and you should ensure you have translations ' + 'for the configured locale.');
	        translate.setMessages(messages['en-US']);
	      }
	      return;
	    }
	    translate.setMessages(messages[locale]);
	  }])
	
	  // Configure the `widget` with the current `widgetInstance`
	  .config([widgetKeyProvider, function (widgetProvider) {
	    widgetProvider.config(widgetInstance);
	  }])
	
	  // Configure the `eventBus` with the current `widgetInstance`
	  .config([eventBusKeyProvider, function (eventBusProvider) {
	    eventBusProvider.setWidget(widgetInstance);
	  }])
	
	  // Add a function to configure the angular providers
	  .config(['$injector', function ($injector) {
	    configs.forEach(function (c) {
	      // extract the dependencies from the injectable declaration
	      var providers = $injector.annotate(c);
	      // only config the module if the provider exists
	      if (providers.every($injector.has)) {
	        $injector.invoke(c);
	      }
	    });
	  }]).name;
	}
	
	/**
	 * Create an Angular Module to expose the widgets Extension Module
	 *
	 * @inner
	 * @param {string} moduleName The name of the module to create
	 * @param {Object} extension
	 * @param {?Array.<string>} extension.dependencyKeys Angular Module that the extension depends upon
	 * @param {Object.<string, function>} extension.hooks Function hooks that the extension overrides
	 * @param {?Object.<string, function>} extension.events The events the extension wants to react to
	 * @param {?Object.<string, function>} extension.helpers View helper functions that will be
	 *                                                       available on `scope.ext.helpers` in view
	 * @returns {!string} The Angular Module Key for the Extension Module
	 */
	function createExtensionModule(moduleName, extension) {
	  return _vendorBbAngular2.default.module(moduleName, extension.dependencyKeys || [])
	
	  // Make the extension hooks available via the angular injector
	  .value(_libBbWidgetExtensionNg.extensionHooksKey, extension.hooks)
	
	  // Attach event listeners
	  .run(['$filter', _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbNotificationsNg.notificationsKey, function ($filter, eventBus, widget, notifications) {
	    var context = {
	      $filter: $filter,
	      widget: widget,
	      notifications: notifications,
	      publish: eventBus.publish
	    };
	    var events = typeof extension.events === 'function' ? extension.events(context) : extension.events || {};
	    Object.keys(events).forEach(function (event) {
	      eventBus.subscribe(event, events[event]);
	    });
	  }])
	
	  // Make extension view helpers available to the template
	  .run(['$rootScope', '$filter', _libBbEventBusNg.eventBusKey, _libBbWidgetNg.widgetKey, _libBbNotificationsNg.notificationsKey, function (scope, $filter, eventBus, widget, notifications) {
	    var context = {
	      $filter: $filter,
	      widget: widget,
	      notifications: notifications,
	      publish: eventBus.publish
	    };
	    var helpers = typeof extension.helpers === 'function' ? extension.helpers(context) : extension.helpers || {};
	
	    // eslint-disable-next-line no-param-reassign
	    scope.ext = { helpers: helpers };
	  }]).name;
	}
	
	/**
	 * Extract the widget enterprise catalog name from the instance name
	 *
	 * This is used because there does not appear to be a consistent way to get the
	 * widget name (as specified in the source model.xml/enterprise catalog) from the
	 * wiget instance object.
	 *
	 * Assumes the format "<name>_<hash>" or "<name>-<numbers>"
	 *
	 * @inner
	 * @param {string} instanceName The name of the widget instance object
	 * @returns {string} The name of the widget in the enterprise catalog
	 */
	function extractWidgetName(instanceName) {
	  console.warn('DEPRECATED', 'Determining the widgets JS module path based on the widget name is deprecated.' + ' You should specify the module to bootstrap via a `path` property in your model.xml.');
	  var separatorIndex = instanceName.lastIndexOf('_');
	  if (separatorIndex === -1) {
	    return instanceName.replace(/-\d+$/, '');
	  }
	  return instanceName.slice(0, separatorIndex);
	}
	
	function getLocale(widgetInstance) {
	  if (_configBbLocale.currentLocale) {
	    console.warn('DEPRECATED', '`config-bb-locale.currentLocale` is deprecated in favor of `config-bb-locale.locale');
	    return (0, _configBbLocale.currentLocale)(widgetInstance);
	  }
	  return (0, _configBbLocale.locale)(widgetInstance.locale);
	}
	
	function getMessageBundleModule(widgetInstance, widget) {
	  if (_configBbLocale.messageBundleModuleName) {
	    console.warn('DEPRECATED', '`config-bb-locale.messageBundleModuleName` is deprecated' + ' in favor of `config-bb-locale.messageBundleModule');
	    return (0, _configBbLocale.messageBundleModuleName)(widgetInstance);
	  }
	  return (0, _configBbLocale.messageBundleModule)(widget);
	}
	
	/**
	 * @name start
	 * @type {function}
	 * @description Start an Angular Based Widget
	 *
	 * @param {function} require Used to dynamically load modules
	 * @param {WidgetInstance} widgetInstance An instance of the CXP Widget Object (__WIDGET__)
	 * @returns {void}
	 */
	function start(require, widgetInstance) {
	  var widgetInstanceName = widgetInstance.name || widgetInstance.model.extendedItemName;
	  var widget = (0, _libBbWidget2.default)(widgetInstance, Promise);
	
	  var widgetModuleName = widget.getStringPreference('path') || extractWidgetName(widgetInstanceName);
	  var extensionModuleName = widget.getStringPreference('extension');
	  var locale = getLocale(widgetInstance);
	
	  // Collect the names of the JS modules that are needed to start the widget
	  // { dependencyName: jsModuleName }
	  var requiredModules = {
	    widgetModule: widgetModuleName,
	    configProvidersModule: 'config-bb-providers-ng', // TODO: configurable name
	    extensionModule: extensionModuleName,
	    messageBundleModule: getMessageBundleModule(widgetInstance, widget),
	    localeModule: (0, _configBbLocale.localeModuleName)(locale)
	  };
	
	  // Partition the dependencies map into keys/values (this is the inverse of `_.zipObject`)
	  // eg. { 'a': 1, 'b', 2 } -> [['a', 'b'], [1, 2]]
	  // This is so we can pass the array of jsModuleNames into `require` and build the
	  // { dependencyName: jsModule } mapping once the modules are loaded
	
	  var _Object$keys$filter$r = Object.keys(requiredModules).filter(function (key) {
	    return !!requiredModules[key];
	  }).reduce(function (_ref, key) {
	    var _ref2 = _slicedToArray(_ref, 2),
	        ks = _ref2[0],
	        vs = _ref2[1];
	
	    return [ks.concat([key]), vs.concat([requiredModules[key]])];
	  }, [[], []]),
	      _Object$keys$filter$r2 = _slicedToArray(_Object$keys$filter$r, 2),
	      dependencyNames = _Object$keys$filter$r2[0],
	      jsModuleNames = _Object$keys$filter$r2[1];
	
	  require(jsModuleNames, function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    // Build a { dependencyName: jsModule } mapping from the loaded modules (in the args array)
	    var modules = args.reduce(function (acc, module, index) {
	      acc[dependencyNames[index]] = module; // eslint-disable-line no-param-reassign
	      return acc;
	    }, {});
	
	    // Collect the NG Module keys
	    var dependencyKeys = [modules.widgetModule.default];
	
	    // `extensionModule` may not be loaded if not in the model
	    if (!!modules.extensionModule) {
	      dependencyKeys.push(createExtensionModule(extensionModuleName, modules.extensionModule));
	    }
	
	    // TODO: Split this function up
	    var appModuleKey = createAppModule(widgetInstanceName, widgetInstance, dependencyKeys, modules.configProvidersModule.default, modules.messageBundleModule, locale);
	
	    // Bootstrap Angular with the Angular App
	    _vendorBbAngular2.default.bootstrap(widgetInstance.body, [appModuleKey]);
	  });
	}
	
	/**
	 * An AngularJS compatible injectable. Annotated with one of the three available
	 * methods described in https://docs.angularjs.org/api/auto/service/$injector.
	 * NB. "inline" annotation is preferred.
	 *
	 * @private
	 * @typedef NgInjectedFunction
	 * @type {array}
	 */

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=lib-bb-start-ng.js.map