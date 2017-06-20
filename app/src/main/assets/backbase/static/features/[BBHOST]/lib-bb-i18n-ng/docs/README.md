# lib-bb-i18n-ng

Translation of message keys.

Generally this library doesn't need to be used directly, and you should use ui-bb-i18n-ng for
translations.

## Imports

* vendor-bb-angular

---

## Exports

### *default*

Angular module name

**Type:** *string*

### *bbMessageFormatKey*

The dependency injection key for the bbMessageFormat Service

**Type:** *string*

### *bbTranslateKey*

The dependency injection key for the bbTranslate Service

**Type:** *string*


---

## Example

```javascript
import angular from 'vendor-bb-angular';
import libBbI18nNgModuleKey, { bbTranslateKey, bbMessageFormatKey } from 'lib-bb-i18n-ng';

angular.module('example-module', [libBbI18nNgModuleKey])
  .config([`${bbTranslateKey}Provider`, function(i18n) {
    i18n.setMessages({
      'example.greeting': 'Greetings, {user}!',
    });
  }])

  .factory('MyService', [
    bbTranslateKey, bbMessageFormatKey,
    (translate, format) => ({
      internationalize: (key, data) => format(data, translate(key)),
    }),
  ]);
```

---

## bbTranslateProvider

A provider that allows configuration of the localized messages to use.
Set the messages for the current locale using the `setMessages` provider method.


| Injector Key |
| :-- |
| *lib-bb-i18n-ng:bbTranslateProvider* |


### *#setMessages(msgs)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| msgs | object.&lt;string&gt; | A map of translation keys to translations |

### *#$get()*


##### Returns

bbTranslate - *A translation function*

## Example

```javascript
angular.module(...)
  .config([
    `${bbTranslateKey}Provider`,
    (i18nProvider) => {
      i18nProvider.setMessages(...);
    }
  ]);
```

---

### *#bbMessageFormat()*

A factory to get a message format function, allowing translated messages to have values
subsituted into their placeholders.


##### Returns

bbMessageFormat - *Function which returns message with substituted data.*

## Type Definitions


### *bbTranslate(key)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| key | string | The translation key for which to find a translation |

##### Returns

string - *The translated message. Empty string if not translation is available.*

### *bbMessageFormat(message, data)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| message | string | The message, with placeholders, to format |
| data | object.&lt;string&gt; | A map of placeholder to value. To be substituted into the message |

##### Returns

string - *The message with substituted data. Missing data leaves the key in place*

---
