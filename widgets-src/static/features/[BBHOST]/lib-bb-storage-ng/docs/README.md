# lib-bb-storage-ng

Provides a cross-platform interface for temporary storage or data between widget/page instances.
It provides a key-value store that is persisted between Page loads in the browser and between
WebViews on mobile.

## Imports

* vendor-bb-angular

---

## Exports

### *default*

The angular module name

**Type:** *string*

### *bbStorageServiceKey*

Injector name for a [bbStorageService](#bbStorageService)

**Type:** *string*


---

## Example

```javascript
import bbStorageModuleKey, { bbStorageServiceKey } from 'lib-bb-storage-ng';

angular
  .module('ExampleModule', [
    bbStorageModuleKey,
  ])
  .controller('MyController', [
    bbStorageServiceKey,
    // into //
    (bbStorage) => {
      const $ctrl = this;
      let unsubscribe = () => {};

      const counterStorage = 'counter';

      $ctrl.$onInit = () => {
        unsubscribe = bbStorage.subscribe(counterStorage, (newValue) => {
          // called whenever the value in the storage is set
          $ctrl.counter = newValue;
        });
      };

      $ctrl.$onDestroy = () => {
        unsubscribe();
      };

      $ctrl.increment = () =>
        bbStorage.getItem(counterStorage)
        .then((oldValue = 0) => bbStorage.setItem(counterStorage, oldValue + 1));
    },
  ]);
```

---

### *#bbStorageService()*

The [Storage Service](#StorageService) factory.
Creates a new storage service by detecting the best storage mechanism available in the
current environment.


##### Returns

StorageService - **

---

## StorageService

A service that provides a consistent interface allowing setting and getting persistent data
via some underlying (platform specific) storage mechanism


### *#setItem(key, value)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| key | string | The key to set |
| value | any | The value to store - must be serializable to JSON |

##### Returns

Promise.&lt;void&gt; - **

### *#getItem(key)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| key | string | The key to fetch |

##### Returns

Promise.&lt;any&gt; - *The value stored in the key, if any (null if key holds invalid JSON)*

### *#removeItem(key)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| key | string | The key to remove |

##### Returns

Promise.&lt;void&gt; - **

### *#subscribe(key, callback)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| key | string | The key to subscribe to |
| callback | Subscription | The callback to be called with the new value of the key |

##### Returns

Unsubscribe - **

## Type Definitions


### *Unsubscribe()*

Unsubscribe from notifications

##### Returns

void - **

### *Subscription(newValue)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| newValue | any | The new value attached to the key |

##### Returns

void - **

---
