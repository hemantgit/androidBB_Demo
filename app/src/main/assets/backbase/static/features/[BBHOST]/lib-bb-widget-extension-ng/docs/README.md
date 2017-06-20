# lib-bb-widget-extension-ng

Provides a helper function that creates an angular injectable, which works in conjunction
with `lib-bb-start-ng` to:
 1. merge the custom hooks from the widgets extension with the defaults provided by the widget.
 2. provide the hooks with limited access to contextually useful services.

Extensible widgets should use this library to create hooks that can be consumed by a widget
extension.

## Imports

* lib-bb-widget-ng

---

## Exports


### *default(defaultHooks)*

Create an angular injectable to help merge the widgets extension hooks with the default hooks
provided by the widget.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| defaultHooks | Hooks | The default hook implementation |

##### Returns

NgInjectedFunction - **
### *extensionHooksKey*

The injector key to be used to access the extension hooks module

**Type:** *string*


---

## Example

```javascript
// extension exports hooks, file: ext-bb-example-ng/scripts/index.js

export const hooks = ({ widget }) => ({
  prepareData: (data) => widget.getPreference('reverse') ? data.reverse() : data,
});

// widget consumes extension hook implementation, file: widget-bb-example-ng/scripts/index.js
import extendHooks from 'lib-bb-widget-extension-ng';

import * as defaultHooks from './default-hooks';

angular.module(...)
  .factory('my-widget:hooks', extendHooks(defaultHooks));
```

## Type Definitions

### *Hooks*


**Type:** *object.&lt;function&gt;*


### *HooksFactory(context)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| context | HooksContext |  |

##### Returns

Hooks - **

## HooksContext


| Property | Type | Description |
| :-- | :-- | :-- |
| widget | module:lib-bb-widget-ng.widget |  |

---
