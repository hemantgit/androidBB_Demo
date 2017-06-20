# config-bb-providers-ng

Project level configuration of modules

This configuration module is intended to be replaced and overwritten per project. It is used
to configure angular providers during the widget's
[config phase](https://docs.angularjs.org/guide/module#configuration-blocks).

To replace this module, it must export a single array as default.

The array can contain any number of configration arrays, where the first item is the
angular provider injector key, and the 2nd item is the configuration function to run.

It is most commonly used to configure the data modules to connect to the correct services
endpoints.

## Example

```javascript
// The default export is a nested array in this format:
export default [
  [ <angular provider injector key>, <configuration function> ],
  [ <angular provider injector key>, <configuration function> ],
  ...
]

// Basic example
const myServiceConfig = [ 'my-serviceProvider', function(p) { p.setConfig({a: '1'}) } ];
const vendorServiceConfig = [ 'some-vendorProvider', function(p) { p.setSomething(b, 2) } ];
export default [
    myServiceConfig,
    vendorServiceConfig
];

// Configure data module
const contactProviderKey = 'data-bb-contact-http-ng:contactDataProvider';
export default [
  [contactProviderKey, (contactProvider) => {
    contactProvider.setBaseUri('http://example.com/api');
  }],
];

// Configure angular HTTP and a data module
export default [
  [contactProviderKey, (contactProvider) => {
    contactProvider.setBaseUri('http://example.com/api');
  }],
  ['$httpProvider', $httpProvider => {
    $httpProvider.interceptors.push('myHttpInterceptor');
  }],
];
```
