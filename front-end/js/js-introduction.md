# JavaScript Introduction

## Declarations
```javascript
let name = 'Fulano';
let lastName = "Sicrano";
const sex = 'Male';
var doNotUse = "Don't Use 'var'";
```

## Variable scope

```javascript
if (true) {
  var x = 5; // complex scope
}
console.log(x);  // x is 5

if (true) {
  let y = 5; // local scope
}
console.log(y);  // ReferenceError: y is not defined

const a = 10; // global scope

if (true){
  console.log(a); // a is 10
}

```

## Data Types

* null, undefine
* String
* Number
* Boolean
* Object
* Array



## Functions

**Function declarations**

```javascript
function square(number) {
  return number * number;
}
```

**Function expressions**

```javascript
const square = function(number){
  return number * number;
}
```

## Object and Arrays

**Object**
```javascript
//object declaration
const user = {name: 'Jhon', age: 21, married: true };

// Accessing Object Properties <objectName.propertyName>
// Example:
console.log(user.name);

// Modifying Object Properties
user.age = 25;
console.log(user.age);
```

**Array**
```javascript
// array declaration
const cars = ["Ferrari", "Volvo", "BMW"];

//Changing an Array Element
cars[0] = 'Fiat';

// array size
cars.length;

//Adding Array Elements
cars.push('Tesla');
console.log(cars);
```

- Array elements can be Objects;
- How to access the first element of the array?
- How to access the last element of the array?
- How to iterate over elements of an array?

**for, foreach and filter**
```javascript
// for
for (var i = 0; i < 9; i++) {
  console.log(i)
}
// for to interate over elements of an array
const fruits = ['abacaxi', 'maça', 'uva']; 
for(i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

// foreach
fruits.foreach(function(fruit){
  console.log(fruit);
})


// filter
const students = [{name: 'Anne', age: 17},
                  {name: 'Jhon', age: 18},
                  {name: 'Gab', age: 15},
                  {name: 'Zoe', age: 19},];

// print the name of the adult students
// create a new list with adult students

const adultStudents = students.filter(function(student){
  return student.age >= 18;
});
```

## Comparison and Logical operators 

Comparison and Logical operators are used to test for true or false.

* == equal value
* === equal value and equal type
* != not equal
* && and
& || or

```javascript
//examples
2 < 12 // true
2 < '12' // true
5 == '5' // true
5 === '5' // false
```

Reference: 
- [https://www.w3schools.com/js/js_intro.asp](https://www.w3schools.com/js/js_intro.asp)
- [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Values,_variables,_and_literals](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Values,_variables,_and_literals)
