# lib-bb-start-ng

Start module for angular apps. Initialises the widget instance, extensions,
locales, and translation messages.

Usually this module shouldn't be called directly. It will be called by lib-bb-start.

Bootstrapping involves the following features:
 - Initialises lib-bb-widget instance from CXP widget
 - Loads the locale settings from config-bb-locale
 - Loads messages file (set from config-bb-locale)
 - Provides messages to lib-bb-i18n
 - Provides context to widget extensions (helpers, events)
 - Makes the extension hooks available to the widget instance
 - Loads the widget's JS with the modules looader (configured by config-bb-module-loader)
 - Bootstrap the angular application

## Imports

* config-bb-locale
* lib-bb-event-bus-ng
* lib-bb-i18n-ng
* lib-bb-notifications-ng
* lib-bb-widget
* lib-bb-widget-extension-ng
* lib-bb-widget-ng
* vendor-bb-angular

---

## Exports


### *start(require, widgetInstance)*

Start an Angular Based Widget

| Parameter | Type | Description |
| :-- | :-- | :-- |
| require | function | Used to dynamically load modules |
| widgetInstance | WidgetInstance | An instance of the CXP Widget Object (__WIDGET__) |

##### Returns

void - **

---

## Example

```javascript
import bbStart from 'lib-bb-start-ng';
```
