# Javascript Callback and Promise

**Synchronous**
Task that blocks you from doing another task because it depends on completing a third task.

**Asynchronous**
Non-blocking task to perform while other tasks are being done.

## Callback

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

## Promise

The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

Reference: [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)

```javascript
function message(){
  setTimeout(function() {
    return 'Hoooow!';
  }, 3000);
}
//execute
message()
```

```javascript
// with callback
function message(callback){
  setTimeout(function() {
    callback('Hoooow!');
  }, 300);
}

//execute with callback
function execute(content){
	console.log(content);
}
```


```javascript
//promise
const message = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('Hoooow!');
  }, 3000);
});

console.log(message);
// expected output: [object Promise]

message.then(function(value) {
  console.log(value);
  // expected output: "Hoooow!"
});

```

