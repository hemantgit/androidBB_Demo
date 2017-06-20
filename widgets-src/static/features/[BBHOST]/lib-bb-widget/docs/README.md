# lib-bb-widget

Provides access to the details of the instance of the widget in the
portal, such as its ID and preferences.

## Example

```javascript
// file: index.js
import bbWidget from 'lib-bb-widget';

const widget = bbWidget(widgetInstance);
widget.getPreference('foo');
```

---

## Widget

A service that provides access to the instance of the widget in the portal.


### *#getPreference(name)*

Gets a preference from widget configuration (model.xml) and attempts to return it as a string

*DEPRECATED*
`getPreference` is deprecated in favor of the type specific `get<Type>Preference` methods.
This makes the use of the preferences in the context of a widget more reliable, as they are
parsed/coerced into the expected type in a reliable and consistent way, instead of ad-hoc
whenever a preference is used.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | string |  |

##### Returns

?string - *The parsed value of the preference*

### *#getStringPreference(name)*

Gets a preference from widget configuration (model.xml) and attempts to return it as a string


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | string |  |

##### Returns

?string - *The parsed value of the preference*

### *#getLongPreference(name)*

Gets a preference from widget configuration (model.xml) and attempts to return it as a integer
number.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | string |  |

##### Returns

?number - *The parsed value of the preference*

### *#getDoublePreference(name)*

Gets a preference from widget configuration (model.xml) and attempts to return it as a decimal
number.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | string |  |

##### Returns

?number - *The parsed value of the preference*

### *#getBooleanPreference(name)*

Gets a preference from widget configuration (model.xml) and attempts to return it as a boolean.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | string |  |

##### Returns

?boolean - *The parsed value of the preference*

### *#getStringArrayPreference(name)*

Gets a preference from widget configuration (model.xml) and attempts to return it as an array
of strings, split on commas.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | string |  |

##### Returns

?Array.&lt;string&gt; - *The parsed value of the preference*

### *#getNullPreference(name)*

Gets a preference from widget configuration (model.xml) and attempts to return it as an null.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | string |  |

##### Returns

?null - *The parsed value of the preference*

### *#getRawPreference(name)*

Gets a preference from widget as returned by portal client. This method is provided
as a "escape hatch" when none of the types methods work, but should generally be
avoided in common use due to its reliance on the underlying portal client implementation.

*N.B.* The return type is dependant on the underlying portal client implementation, and may
change across portal client versions.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | string |  |

##### Returns

any - *The value of the preference directly from the portal client*

### *#setPreference(name, value)*

Sets a given value for a given preference

*DEPRECATED*
`setPreference` is deprecated in favor of `savePreference` which also persists the value to
the portal.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | string |  |
| value | string |  |

##### Returns

object|string - *preference*

### *#savePreference(name, value)*

Sets a given value for a given preference and persists it to the portal.


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | string |  |
| value | string |  |

##### Returns

Promise.&lt;void&gt; - **

### *#getId()*

Returns the widget's instance ID

##### Returns

string - **

## Type Definitions


## WidgetAdapter


### *GetPreference(name)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | string | The name of the preference to get |

##### Returns

string|undefined - *The current value of the requested preference*

### *SetPreference(name, value)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | string | The name of the preference to set |
| value | any | The value to set the current preference to |

##### Returns

any - *The new value of the preference*

### *SaveModel(callback)*

Persist the updated model preference values if required

| Parameter | Type | Description |
| :-- | :-- | :-- |
| callback | function | The callback to be called once any preferences are persisted |

##### Returns

void - **

---
