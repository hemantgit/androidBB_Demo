# config-bb-locale

Configuration module for localization and translation.

This configuration module is intended to be replaced and overwritten per project. It is used
by lib-bb-start-ng to bootstrap the localisation settings for the widget.

When replacing this config, please ensure the functions below are implemented.

## Exports


### *locale(currentLocale)*

Return which locale should be used. By default it uses the locale provided by the
  portal client widget instance (to be compatible with CXP 6) and falls back to reading the lang
  or xml:lang from the document. This allows custom pages in CXP to configure the locale from the
  server-side.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| currentLocale | string | The locale identifier, determined by portal client (if available) |

##### Returns

?string - *The locale identifier*

### *localeModuleName(currentLocale)*

Returns the name of the angular locale module to load
  to be loaded during widget startup. This module does not need to export anything, but can
  configure the local environment with the relevant locale - by default it will load the
  relevant angular ngLocale module for the selected locale.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| currentLocale | string | The locale identifier, determined by portal client (if available) |

##### Returns

?string - *The module to load to setup the locale*

### *messageBundleModule(widget)*

Returns the name of a module that contains the message bundle with the needed
translations. By default it will load the assets/messages.json from the widget's extension. This
can be customized by setting a messages preference on the widget pointing to the relevant module.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| widget | module:lib-bb-widget.BBWidget | The current widget |

##### Returns

?string - *The module to load to provide the message bundle*

---
