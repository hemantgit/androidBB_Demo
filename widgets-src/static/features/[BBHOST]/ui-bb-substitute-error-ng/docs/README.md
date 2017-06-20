# ui-bb-substitute-error-ng

UI Component to replace content with an error message

## Imports

* vendor-bb-angular

---

## Exports

### *default*

The angular module name

**Type:** *string*


---

## Example

```javascript
// In an extension:
// file: scripts/index.js
import uiBbSubstituteErrorNgKey from 'ui-bb-substitute-error-ng';

export const dependencyKeys = [
  uiBbSubstituteErrorNgKey,
];

// file: templates/template.ng.html
<ui-bb-substitute-error-ng
error="$ctrl.productKindsError">
</ui-bb-substitute-error-ng>
```

---

## uiBbSubstituteErrorComponent

Substitute Error Component Object

| Property | Type | Description |
| :-- | :-- | :-- |
| error | object | Object containing error message. Kept for backwards compatibility. |
| message | string | Translated error message |
