# lib-bb-start

Provides a consistent interface for bootstrapping a Widget's JavaScript.

The purpose of this module is to handle the loading of bootstrap helpers, so on-page `script`
tags can be consistent and independent of the bootstrap process.

---

### *#BB.Widget.ngStart(widgetInstance)*

A helper function that lazy loads the angular start library and
uses it to start the given module.

It is attached to the global (window) scope to allow access from non-modular JavaScript code,
such as the widget's main template (index.html)


| Parameter | Type | Description |
| :-- | :-- | :-- |
| widgetInstance | WidgetInstance | WidgetInstance to start |

##### Returns

void - **

## Example

```javascript
<body g:onload="BB.Widget.ngStart(__WIDGET__);">
```

## Type Definitions


## WidgetInstance


| Property | Type | Description |
| :-- | :-- | :-- |
| id | string | Unique ID of the widget instance |
| name | string | The name of the widget |
| body | HTMLElement | The DOM Node where the widget can be rendered |
| getPreference | WidgetInstance#getPreference | Get a preference from the widget model |

### *WidgetInstance#getPreference(preferenceName)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| preferenceName | string | Name of the preference to fetch from the model |

##### Returns

?string - *The value of the preference in the model, or undefined if it isn't available*

---
