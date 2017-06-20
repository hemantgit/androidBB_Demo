# lib-bb-event-bus-ng

Event bus module, angular wrapper around CXP's gadgets.pubsub.

## Imports

* vendor-bb-angular

---

## Exports

### *default*

Angular module name

**Type:** *string*

### *eventBusKey*

Injector name of [EventBus](#EventBus) instance

**Type:** *string*


---

## Example

```javascript
import bbEventBusModuleKey, { eventBusKey } from 'lib-bb-event-bus-ng';

angular.module('MyModule', [bbEventBusModuleKey])
  .controller('Controller1', [eventBusKey, (eventBus) => ({
    $onInit: () => {
      eventBus.publish('example.event', { msg: 'Hello' });
    },
  })])
  .controller('Controller2', [eventBusKey, (eventBus) => ({
    $onInit: () => {
      eventBus.subscribe('example.event', ({ msg }) => {
        console.log(`Controller 1 says ${msg}`);
      });
    },
  })])
```

---

## EventBus


### *#publish(topic, payload)*

Publish an event to the bus. Any subscribers should be notified

| Parameter | Type | Description |
| :-- | :-- | :-- |
| topic | string | The name of the event, this value is needed to subscribe |
| payload | any | The data payload to provide additional context to the event |

## Example

```javascript
bbEventBus
 .publish('test', {})
```

### *#subscribe(topic, callback)*

Subscribe to be notified when an event on the same topic event is `publish`ed.
The callback will trigger an angular digest.

| Parameter | Type | Description |
| :-- | :-- | :-- |
| topic | string |  |
| callback | Subscription | To be called when an event is published on the same topic |

##### Returns

void - **

## Example

```javascript
bbEventBus
 .subscribe('test', function(){
   console.log('event')
 })
```

---

## EventBusProvider


### *#setWidget(portalWidget)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| portalWidget | Object | portal client widget instance (a.k.a __WIDGET__) |

##### Returns

void - **

### *#$get()*


##### Returns

EventBus - *An [EventBus](#EventBus) service*

## Type Definitions


### *Subscription(payload)*


| Parameter | Type | Description |
| :-- | :-- | :-- |
| payload | any | The data payload that was `publish`ed with the event |

##### Returns

void - **

---
