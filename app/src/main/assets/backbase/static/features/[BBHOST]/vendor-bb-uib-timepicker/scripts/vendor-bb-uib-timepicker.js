(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vendor-bb-angular"));
	else if(typeof define === 'function' && define.amd)
		define("vendor-bb-uib-timepicker", ["vendor-bb-angular"], factory);
	else if(typeof exports === 'object')
		exports["vendor-bb-uib-timepicker"] = factory(require("vendor-bb-angular"));
	else
		root["vendor-bb-uib-timepicker"] = factory(root["vendor-bb-angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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

	module.exports = __webpack_require__(86);

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	module.exports = __webpack_require__(87);
	__webpack_require__(90);

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(88);
	__webpack_require__(89);
	
	var MODULE_NAME = 'vendor-bb-uib-timepicker';
	
	angular.module(MODULE_NAME, ['ui.bootstrap.timepicker', 'uib/template/timepicker/timepicker.html']);
	
	module.exports = MODULE_NAME;

/***/ },

/***/ 88:
/***/ function(module, exports) {

	"use strict";
	
	angular.module("uib/template/timepicker/timepicker.html", []).run(["$templateCache", function ($templateCache) {
	  $templateCache.put("uib/template/timepicker/timepicker.html", "<table class=\"uib-timepicker\">\n" + "  <tbody>\n" + "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" + "      <td class=\"uib-increment hours\"><a ng-click=\"incrementHours()\" ng-class=\"{disabled: noIncrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementHours()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" + "      <td>&nbsp;</td>\n" + "      <td class=\"uib-increment minutes\"><a ng-click=\"incrementMinutes()\" ng-class=\"{disabled: noIncrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementMinutes()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" + "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" + "      <td ng-show=\"showSeconds\" class=\"uib-increment seconds\"><a ng-click=\"incrementSeconds()\" ng-class=\"{disabled: noIncrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementSeconds()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" + "      <td ng-show=\"showMeridian\"></td>\n" + "    </tr>\n" + "    <tr>\n" + "      <td class=\"form-group uib-time hours\" ng-class=\"{'has-error': invalidHours}\">\n" + "        <input type=\"text\" placeholder=\"HH\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementHours()\" ng-blur=\"blur()\">\n" + "      </td>\n" + "      <td class=\"uib-separator\">:</td>\n" + "      <td class=\"form-group uib-time minutes\" ng-class=\"{'has-error': invalidMinutes}\">\n" + "        <input type=\"text\" placeholder=\"MM\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementMinutes()\" ng-blur=\"blur()\">\n" + "      </td>\n" + "      <td ng-show=\"showSeconds\" class=\"uib-separator\">:</td>\n" + "      <td class=\"form-group uib-time seconds\" ng-class=\"{'has-error': invalidSeconds}\" ng-show=\"showSeconds\">\n" + "        <input type=\"text\" placeholder=\"SS\" ng-model=\"seconds\" ng-change=\"updateSeconds()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementSeconds()\" ng-blur=\"blur()\">\n" + "      </td>\n" + "      <td ng-show=\"showMeridian\" class=\"uib-time am-pm\"><button type=\"button\" ng-class=\"{disabled: noToggleMeridian()}\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\" ng-disabled=\"noToggleMeridian()\" tabindex=\"{{::tabindex}}\">{{meridian}}</button></td>\n" + "    </tr>\n" + "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" + "      <td class=\"uib-decrement hours\"><a ng-click=\"decrementHours()\" ng-class=\"{disabled: noDecrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementHours()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" + "      <td>&nbsp;</td>\n" + "      <td class=\"uib-decrement minutes\"><a ng-click=\"decrementMinutes()\" ng-class=\"{disabled: noDecrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementMinutes()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" + "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" + "      <td ng-show=\"showSeconds\" class=\"uib-decrement seconds\"><a ng-click=\"decrementSeconds()\" ng-class=\"{disabled: noDecrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementSeconds()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" + "      <td ng-show=\"showMeridian\"></td>\n" + "    </tr>\n" + "  </tbody>\n" + "</table>\n" + "");
	}]);

/***/ },

/***/ 89:
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.timepicker', []).constant('uibTimepickerConfig', {
	  hourStep: 1,
	  minuteStep: 1,
	  secondStep: 1,
	  showMeridian: true,
	  showSeconds: false,
	  meridians: null,
	  readonlyInput: false,
	  mousewheel: true,
	  arrowkeys: true,
	  showSpinners: true,
	  templateUrl: 'uib/template/timepicker/timepicker.html'
	}).controller('UibTimepickerController', ['$scope', '$element', '$attrs', '$parse', '$log', '$locale', 'uibTimepickerConfig', function ($scope, $element, $attrs, $parse, $log, $locale, timepickerConfig) {
	  var selected = new Date(),
	      watchers = [],
	      ngModelCtrl = { $setViewValue: angular.noop },
	      // nullModelCtrl
	  meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS,
	      padHours = angular.isDefined($attrs.padHours) ? $scope.$parent.$eval($attrs.padHours) : true;
	
	  $scope.tabindex = angular.isDefined($attrs.tabindex) ? $attrs.tabindex : 0;
	  $element.removeAttr('tabindex');
	
	  this.init = function (ngModelCtrl_, inputs) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;
	
	    ngModelCtrl.$formatters.unshift(function (modelValue) {
	      return modelValue ? new Date(modelValue) : null;
	    });
	
	    var hoursInputEl = inputs.eq(0),
	        minutesInputEl = inputs.eq(1),
	        secondsInputEl = inputs.eq(2);
	
	    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;
	
	    if (mousewheel) {
	      this.setupMousewheelEvents(hoursInputEl, minutesInputEl, secondsInputEl);
	    }
	
	    var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
	    if (arrowkeys) {
	      this.setupArrowkeyEvents(hoursInputEl, minutesInputEl, secondsInputEl);
	    }
	
	    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
	    this.setupInputEvents(hoursInputEl, minutesInputEl, secondsInputEl);
	  };
	
	  var hourStep = timepickerConfig.hourStep;
	  if ($attrs.hourStep) {
	    watchers.push($scope.$parent.$watch($parse($attrs.hourStep), function (value) {
	      hourStep = +value;
	    }));
	  }
	
	  var minuteStep = timepickerConfig.minuteStep;
	  if ($attrs.minuteStep) {
	    watchers.push($scope.$parent.$watch($parse($attrs.minuteStep), function (value) {
	      minuteStep = +value;
	    }));
	  }
	
	  var min;
	  watchers.push($scope.$parent.$watch($parse($attrs.min), function (value) {
	    var dt = new Date(value);
	    min = isNaN(dt) ? undefined : dt;
	  }));
	
	  var max;
	  watchers.push($scope.$parent.$watch($parse($attrs.max), function (value) {
	    var dt = new Date(value);
	    max = isNaN(dt) ? undefined : dt;
	  }));
	
	  var disabled = false;
	  if ($attrs.ngDisabled) {
	    watchers.push($scope.$parent.$watch($parse($attrs.ngDisabled), function (value) {
	      disabled = value;
	    }));
	  }
	
	  $scope.noIncrementHours = function () {
	    var incrementedSelected = addMinutes(selected, hourStep * 60);
	    return disabled || incrementedSelected > max || incrementedSelected < selected && incrementedSelected < min;
	  };
	
	  $scope.noDecrementHours = function () {
	    var decrementedSelected = addMinutes(selected, -hourStep * 60);
	    return disabled || decrementedSelected < min || decrementedSelected > selected && decrementedSelected > max;
	  };
	
	  $scope.noIncrementMinutes = function () {
	    var incrementedSelected = addMinutes(selected, minuteStep);
	    return disabled || incrementedSelected > max || incrementedSelected < selected && incrementedSelected < min;
	  };
	
	  $scope.noDecrementMinutes = function () {
	    var decrementedSelected = addMinutes(selected, -minuteStep);
	    return disabled || decrementedSelected < min || decrementedSelected > selected && decrementedSelected > max;
	  };
	
	  $scope.noIncrementSeconds = function () {
	    var incrementedSelected = addSeconds(selected, secondStep);
	    return disabled || incrementedSelected > max || incrementedSelected < selected && incrementedSelected < min;
	  };
	
	  $scope.noDecrementSeconds = function () {
	    var decrementedSelected = addSeconds(selected, -secondStep);
	    return disabled || decrementedSelected < min || decrementedSelected > selected && decrementedSelected > max;
	  };
	
	  $scope.noToggleMeridian = function () {
	    if (selected.getHours() < 12) {
	      return disabled || addMinutes(selected, 12 * 60) > max;
	    }
	
	    return disabled || addMinutes(selected, -12 * 60) < min;
	  };
	
	  var secondStep = timepickerConfig.secondStep;
	  if ($attrs.secondStep) {
	    watchers.push($scope.$parent.$watch($parse($attrs.secondStep), function (value) {
	      secondStep = +value;
	    }));
	  }
	
	  $scope.showSeconds = timepickerConfig.showSeconds;
	  if ($attrs.showSeconds) {
	    watchers.push($scope.$parent.$watch($parse($attrs.showSeconds), function (value) {
	      $scope.showSeconds = !!value;
	    }));
	  }
	
	  // 12H / 24H mode
	  $scope.showMeridian = timepickerConfig.showMeridian;
	  if ($attrs.showMeridian) {
	    watchers.push($scope.$parent.$watch($parse($attrs.showMeridian), function (value) {
	      $scope.showMeridian = !!value;
	
	      if (ngModelCtrl.$error.time) {
	        // Evaluate from template
	        var hours = getHoursFromTemplate(),
	            minutes = getMinutesFromTemplate();
	        if (angular.isDefined(hours) && angular.isDefined(minutes)) {
	          selected.setHours(hours);
	          refresh();
	        }
	      } else {
	        updateTemplate();
	      }
	    }));
	  }
	
	  // Get $scope.hours in 24H mode if valid
	  function getHoursFromTemplate() {
	    var hours = +$scope.hours;
	    var valid = $scope.showMeridian ? hours > 0 && hours < 13 : hours >= 0 && hours < 24;
	    if (!valid || $scope.hours === '') {
	      return undefined;
	    }
	
	    if ($scope.showMeridian) {
	      if (hours === 12) {
	        hours = 0;
	      }
	      if ($scope.meridian === meridians[1]) {
	        hours = hours + 12;
	      }
	    }
	    return hours;
	  }
	
	  function getMinutesFromTemplate() {
	    var minutes = +$scope.minutes;
	    var valid = minutes >= 0 && minutes < 60;
	    if (!valid || $scope.minutes === '') {
	      return undefined;
	    }
	    return minutes;
	  }
	
	  function getSecondsFromTemplate() {
	    var seconds = +$scope.seconds;
	    return seconds >= 0 && seconds < 60 ? seconds : undefined;
	  }
	
	  function pad(value, noPad) {
	    if (value === null) {
	      return '';
	    }
	
	    return angular.isDefined(value) && value.toString().length < 2 && !noPad ? '0' + value : value.toString();
	  }
	
	  // Respond on mousewheel spin
	  this.setupMousewheelEvents = function (hoursInputEl, minutesInputEl, secondsInputEl) {
	    var isScrollingUp = function isScrollingUp(e) {
	      if (e.originalEvent) {
	        e = e.originalEvent;
	      }
	      //pick correct delta variable depending on event
	      var delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
	      return e.detail || delta > 0;
	    };
	
	    hoursInputEl.bind('mousewheel wheel', function (e) {
	      if (!disabled) {
	        $scope.$apply(isScrollingUp(e) ? $scope.incrementHours() : $scope.decrementHours());
	      }
	      e.preventDefault();
	    });
	
	    minutesInputEl.bind('mousewheel wheel', function (e) {
	      if (!disabled) {
	        $scope.$apply(isScrollingUp(e) ? $scope.incrementMinutes() : $scope.decrementMinutes());
	      }
	      e.preventDefault();
	    });
	
	    secondsInputEl.bind('mousewheel wheel', function (e) {
	      if (!disabled) {
	        $scope.$apply(isScrollingUp(e) ? $scope.incrementSeconds() : $scope.decrementSeconds());
	      }
	      e.preventDefault();
	    });
	  };
	
	  // Respond on up/down arrowkeys
	  this.setupArrowkeyEvents = function (hoursInputEl, minutesInputEl, secondsInputEl) {
	    hoursInputEl.bind('keydown', function (e) {
	      if (!disabled) {
	        if (e.which === 38) {
	          // up
	          e.preventDefault();
	          $scope.incrementHours();
	          $scope.$apply();
	        } else if (e.which === 40) {
	          // down
	          e.preventDefault();
	          $scope.decrementHours();
	          $scope.$apply();
	        }
	      }
	    });
	
	    minutesInputEl.bind('keydown', function (e) {
	      if (!disabled) {
	        if (e.which === 38) {
	          // up
	          e.preventDefault();
	          $scope.incrementMinutes();
	          $scope.$apply();
	        } else if (e.which === 40) {
	          // down
	          e.preventDefault();
	          $scope.decrementMinutes();
	          $scope.$apply();
	        }
	      }
	    });
	
	    secondsInputEl.bind('keydown', function (e) {
	      if (!disabled) {
	        if (e.which === 38) {
	          // up
	          e.preventDefault();
	          $scope.incrementSeconds();
	          $scope.$apply();
	        } else if (e.which === 40) {
	          // down
	          e.preventDefault();
	          $scope.decrementSeconds();
	          $scope.$apply();
	        }
	      }
	    });
	  };
	
	  this.setupInputEvents = function (hoursInputEl, minutesInputEl, secondsInputEl) {
	    if ($scope.readonlyInput) {
	      $scope.updateHours = angular.noop;
	      $scope.updateMinutes = angular.noop;
	      $scope.updateSeconds = angular.noop;
	      return;
	    }
	
	    var invalidate = function invalidate(invalidHours, invalidMinutes, invalidSeconds) {
	      ngModelCtrl.$setViewValue(null);
	      ngModelCtrl.$setValidity('time', false);
	      if (angular.isDefined(invalidHours)) {
	        $scope.invalidHours = invalidHours;
	      }
	
	      if (angular.isDefined(invalidMinutes)) {
	        $scope.invalidMinutes = invalidMinutes;
	      }
	
	      if (angular.isDefined(invalidSeconds)) {
	        $scope.invalidSeconds = invalidSeconds;
	      }
	    };
	
	    $scope.updateHours = function () {
	      var hours = getHoursFromTemplate(),
	          minutes = getMinutesFromTemplate();
	
	      ngModelCtrl.$setDirty();
	
	      if (angular.isDefined(hours) && angular.isDefined(minutes)) {
	        selected.setHours(hours);
	        selected.setMinutes(minutes);
	        if (selected < min || selected > max) {
	          invalidate(true);
	        } else {
	          refresh('h');
	        }
	      } else {
	        invalidate(true);
	      }
	    };
	
	    hoursInputEl.bind('blur', function (e) {
	      ngModelCtrl.$setTouched();
	      if (modelIsEmpty()) {
	        makeValid();
	      } else if ($scope.hours === null || $scope.hours === '') {
	        invalidate(true);
	      } else if (!$scope.invalidHours && $scope.hours < 10) {
	        $scope.$apply(function () {
	          $scope.hours = pad($scope.hours, !padHours);
	        });
	      }
	    });
	
	    $scope.updateMinutes = function () {
	      var minutes = getMinutesFromTemplate(),
	          hours = getHoursFromTemplate();
	
	      ngModelCtrl.$setDirty();
	
	      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
	        selected.setHours(hours);
	        selected.setMinutes(minutes);
	        if (selected < min || selected > max) {
	          invalidate(undefined, true);
	        } else {
	          refresh('m');
	        }
	      } else {
	        invalidate(undefined, true);
	      }
	    };
	
	    minutesInputEl.bind('blur', function (e) {
	      ngModelCtrl.$setTouched();
	      if (modelIsEmpty()) {
	        makeValid();
	      } else if ($scope.minutes === null) {
	        invalidate(undefined, true);
	      } else if (!$scope.invalidMinutes && $scope.minutes < 10) {
	        $scope.$apply(function () {
	          $scope.minutes = pad($scope.minutes);
	        });
	      }
	    });
	
	    $scope.updateSeconds = function () {
	      var seconds = getSecondsFromTemplate();
	
	      ngModelCtrl.$setDirty();
	
	      if (angular.isDefined(seconds)) {
	        selected.setSeconds(seconds);
	        refresh('s');
	      } else {
	        invalidate(undefined, undefined, true);
	      }
	    };
	
	    secondsInputEl.bind('blur', function (e) {
	      if (modelIsEmpty()) {
	        makeValid();
	      } else if (!$scope.invalidSeconds && $scope.seconds < 10) {
	        $scope.$apply(function () {
	          $scope.seconds = pad($scope.seconds);
	        });
	      }
	    });
	  };
	
	  this.render = function () {
	    var date = ngModelCtrl.$viewValue;
	
	    if (isNaN(date)) {
	      ngModelCtrl.$setValidity('time', false);
	      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
	    } else {
	      if (date) {
	        selected = date;
	      }
	
	      if (selected < min || selected > max) {
	        ngModelCtrl.$setValidity('time', false);
	        $scope.invalidHours = true;
	        $scope.invalidMinutes = true;
	      } else {
	        makeValid();
	      }
	      updateTemplate();
	    }
	  };
	
	  // Call internally when we know that model is valid.
	  function refresh(keyboardChange) {
	    makeValid();
	    ngModelCtrl.$setViewValue(new Date(selected));
	    updateTemplate(keyboardChange);
	  }
	
	  function makeValid() {
	    ngModelCtrl.$setValidity('time', true);
	    $scope.invalidHours = false;
	    $scope.invalidMinutes = false;
	    $scope.invalidSeconds = false;
	  }
	
	  function updateTemplate(keyboardChange) {
	    if (!ngModelCtrl.$modelValue) {
	      $scope.hours = null;
	      $scope.minutes = null;
	      $scope.seconds = null;
	      $scope.meridian = meridians[0];
	    } else {
	      var hours = selected.getHours(),
	          minutes = selected.getMinutes(),
	          seconds = selected.getSeconds();
	
	      if ($scope.showMeridian) {
	        hours = hours === 0 || hours === 12 ? 12 : hours % 12; // Convert 24 to 12 hour system
	      }
	
	      $scope.hours = keyboardChange === 'h' ? hours : pad(hours, !padHours);
	      if (keyboardChange !== 'm') {
	        $scope.minutes = pad(minutes);
	      }
	      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
	
	      if (keyboardChange !== 's') {
	        $scope.seconds = pad(seconds);
	      }
	      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
	    }
	  }
	
	  function addSecondsToSelected(seconds) {
	    selected = addSeconds(selected, seconds);
	    refresh();
	  }
	
	  function addMinutes(selected, minutes) {
	    return addSeconds(selected, minutes * 60);
	  }
	
	  function addSeconds(date, seconds) {
	    var dt = new Date(date.getTime() + seconds * 1000);
	    var newDate = new Date(date);
	    newDate.setHours(dt.getHours(), dt.getMinutes(), dt.getSeconds());
	    return newDate;
	  }
	
	  function modelIsEmpty() {
	    return ($scope.hours === null || $scope.hours === '') && ($scope.minutes === null || $scope.minutes === '') && (!$scope.showSeconds || $scope.showSeconds && ($scope.seconds === null || $scope.seconds === ''));
	  }
	
	  $scope.showSpinners = angular.isDefined($attrs.showSpinners) ? $scope.$parent.$eval($attrs.showSpinners) : timepickerConfig.showSpinners;
	
	  $scope.incrementHours = function () {
	    if (!$scope.noIncrementHours()) {
	      addSecondsToSelected(hourStep * 60 * 60);
	    }
	  };
	
	  $scope.decrementHours = function () {
	    if (!$scope.noDecrementHours()) {
	      addSecondsToSelected(-hourStep * 60 * 60);
	    }
	  };
	
	  $scope.incrementMinutes = function () {
	    if (!$scope.noIncrementMinutes()) {
	      addSecondsToSelected(minuteStep * 60);
	    }
	  };
	
	  $scope.decrementMinutes = function () {
	    if (!$scope.noDecrementMinutes()) {
	      addSecondsToSelected(-minuteStep * 60);
	    }
	  };
	
	  $scope.incrementSeconds = function () {
	    if (!$scope.noIncrementSeconds()) {
	      addSecondsToSelected(secondStep);
	    }
	  };
	
	  $scope.decrementSeconds = function () {
	    if (!$scope.noDecrementSeconds()) {
	      addSecondsToSelected(-secondStep);
	    }
	  };
	
	  $scope.toggleMeridian = function () {
	    var minutes = getMinutesFromTemplate(),
	        hours = getHoursFromTemplate();
	
	    if (!$scope.noToggleMeridian()) {
	      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
	        addSecondsToSelected(12 * 60 * (selected.getHours() < 12 ? 60 : -60));
	      } else {
	        $scope.meridian = $scope.meridian === meridians[0] ? meridians[1] : meridians[0];
	      }
	    }
	  };
	
	  $scope.blur = function () {
	    ngModelCtrl.$setTouched();
	  };
	
	  $scope.$on('$destroy', function () {
	    while (watchers.length) {
	      watchers.shift()();
	    }
	  });
	}]).directive('uibTimepicker', ['uibTimepickerConfig', function (uibTimepickerConfig) {
	  return {
	    require: ['uibTimepicker', '?^ngModel'],
	    controller: 'UibTimepickerController',
	    controllerAs: 'timepicker',
	    replace: true,
	    scope: {},
	    templateUrl: function templateUrl(element, attrs) {
	      return attrs.templateUrl || uibTimepickerConfig.templateUrl;
	    },
	    link: function link(scope, element, attrs, ctrls) {
	      var timepickerCtrl = ctrls[0],
	          ngModelCtrl = ctrls[1];
	
	      if (ngModelCtrl) {
	        timepickerCtrl.init(ngModelCtrl, element.find('input'));
	      }
	    }
	  };
	}]);

/***/ },

/***/ 90:
/***/ function(module, exports) {

	'use strict';
	
	angular.module('ui.bootstrap.timepicker').run(function () {
	  !angular.$$csp().noInlineStyle && !angular.$$uibTimepickerCss && angular.element(document).find('head').prepend('<style type="text/css">.uib-time input{width:50px;}</style>');angular.$$uibTimepickerCss = true;
	});

/***/ }

/******/ })
});
;
//# sourceMappingURL=vendor-bb-uib-timepicker.js.map