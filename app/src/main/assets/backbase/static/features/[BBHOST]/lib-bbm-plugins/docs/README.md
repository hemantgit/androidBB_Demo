# lib-bbm-plugins

Provides access to the mobile native plugins with a Promise interface, rather than

---

## ActivityIndicator

Uses ActivityIndicator mobile plugin


### *#show(message)*

Shows activity indicator with given message

| Parameter | Type | Description |
| :-- | :-- | :-- |
| message | String |  |

##### Returns

Promise - **

### *#hide()*

Hides activity indicator

##### Returns

Promise - **

---

## AlertDialog

Uses AlertDialog mobile plugin


## ButtonType

Determines the kind of button to be rendered by the system


### *#show(options)*

Method to show the alert dialog

| Parameter | Type | Description |
| :-- | :-- | :-- |
| options | object |  |

| Property | Type | Description |
| :-- | :-- | :-- |
| options.title | string | Alert title |
| options.message | string | Alert message |
| options.buttons | Array.&lt;ButtonType&gt; | Alert buttons |

##### Returns

Promise - **

---

## Camera

Uses Camera mobile plugin


### *#getImageFromCamera(maxWidth, maxHeight)*

Method to get the image from camera


| Parameter | Type | Description |
| :-- | :-- | :-- |
| maxWidth | number | Maximum width |
| maxHeight | number | Maximum height |

##### Returns

Promise - **

### *#getImageFromGallery(maxWidth, maxHeight)*

Method to get the image from gallery


| Parameter | Type | Description |
| :-- | :-- | :-- |
| maxWidth | number | Maximum width |
| maxHeight | number | Maximum height |

##### Returns

Promise - **

---

## DatePicker

The plugin that shows or hides date picker


### *#show(options)*

Shows date picker with given date


| Parameter | Type | Description |
| :-- | :-- | :-- |
| options | Object |  |

| Property | Type | Description |
| :-- | :-- | :-- |
| options.dateFormat | string | Format of the dates. It will be applied for both input and output dates. See http://www.unicode.org/reports/tr35/tr35-19.html#Date_Format_Patterns for the patterns |
| options.minDate | string | Min date accepted by the component. Must comply with the format specified by dateFormat parameter. |
| options.maxDate | string | Max date accepted by the component. The date must comply with the format specified by dateFormat parameter |

##### Returns

Promise - **

### *#hide()*

Hides date picker


##### Returns

Promise - **

---

## DropdownAccounts

Uses dropdown accounts mobile plugin


### *#show(options)*

Method to show the dropdown Accounts


| Parameter | Type | Description |
| :-- | :-- | :-- |
| options | Object |  |
| options.title | string | Accounts dropdown title |
| options.items | Array | Contains array of accounts |

##### Returns

Object - *Promise*

---

## Dropdown

Uses dropdown mobile plugin


### *#show(options)*

Method to show the dropdown


| Parameter | Type | Description |
| :-- | :-- | :-- |
| options | Object |  |
| options.title | string | Dropdown title |
| options.items | Array | Contains array of dropdown items |
| options.selectedIndex | ?Array | Index of the selected item. Optional. |

##### Returns

Object - *Promise*

---

## Snackbar

Uses snackbar mobile plugin


### *#success(message)*

Shows success snackbar with given message


| Parameter | Type | Description |
| :-- | :-- | :-- |
| message | string | Message to be shown |

##### Returns

Promise - **

### *#error(message)*

Shows error snackbar with given message


| Parameter | Type | Description |
| :-- | :-- | :-- |
| message | String | Message to be shown |

##### Returns

Promise - **

### *#warning(message)*

Shows warning snackbar with given message


| Parameter | Type | Description |
| :-- | :-- | :-- |
| message | String | Message to be shown |

##### Returns

Promise - **

### *#info(message)*

Shows info snackbar with given message


| Parameter | Type | Description |
| :-- | :-- | :-- |
| message | String | Message to be shown |

##### Returns

Promise - **

### *#noInternet(message)*

Shows noInternet snackbar with given message


| Parameter | Type | Description |
| :-- | :-- | :-- |
| message | String | Message to be shown |

##### Returns

Promise - **

### *#hide()*

Method to hide the snackbar


##### Returns

Promise - **

---

### *#getMobilePlugin(name)*

Utility to get the mobile plugin


| Parameter | Type | Description |
| :-- | :-- | :-- |
| name | string | Name of the plugin |

##### Returns

object|undefined - *Returns plugin object if available.*
