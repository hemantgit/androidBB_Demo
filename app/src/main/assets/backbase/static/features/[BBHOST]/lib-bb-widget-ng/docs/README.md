# lib-bb-widget-ng

Provides access to the details of the instance of the widget in the
portal, such as its ID and preferences.

## Imports

* lib-bb-widget
* vendor-bb-angular

---

## Exports

### *default*

Angular module name

**Type:** *string*

### *widgetKey*

Injector name of [widget](#Widget) instance

**Type:** *string*


---

## Example

```javascript
// file: index.js
import libBbWidgetNgKey, { widgetKey } from 'lib-bb-widget-ng';
import Controller from './controller.js';

angular.module('blah', [ libBbWidgetNgKey ])
.controller([
  // inject
  widgetKey
  // into
  Controller
])

// file: controller.js
function Controller(bbWidget) {
  // ...
}
```

---

## widgetProvider

Service can be configured with underlying widget instance.

### *#config(portalWidget)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| portalWidget | Object | portal client widget instance (a.k.a __WIDGET__) |

### *#$get()*


##### Returns

widget - *A [widget](#Widget) service*

## Example

```javascript
angular.module(...)
  .config([`${widgetKey}Provider`,
    (widgetProvider) => {
      widgetProvider.config( ... );
    });
```
