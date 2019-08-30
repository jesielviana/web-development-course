# Javascript Callback and Promisse

Callback is typically passed as the argument of another function and / or call when an event has occurred, or when a piece of code receives a response it was expecting.

Exemples:

```javascript
// Synchronous
console.log(1);
console.log(2);
console.log(3);
```

```javascript
//Asynchronous with callback
setTimeout(() => console.log("a"), 5000);
console.log("b");
```