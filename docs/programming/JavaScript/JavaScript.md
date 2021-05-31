---
title: JavaScript
---

https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

## Overview

JavaScript language:
- has no concept of input or output
- designed to run as a scripting language in a host environment
    - most common host environment is the browser
    - but JavaScript interpreters can also be found in a huge list of other places
        - server-side environments such as Node.js
        - NoSQL databases like the open source Apache CouchDB
        - Adobe Acrobat, Adobe Photoshop
        - SVG images etc.
    - up to the host environment to provide mechanisms for communicating with the outside world
- multi-paradigm
- dynamic language
- supports object-oriented programming with object prototypes, instead of classes
- supports functional programming — because they are objects, functions may be stored in variables and passed around like any other object

## Types

### Number

```javascript
console.log(3 / 2);                 // 1.5
console.log(Math.floor(3 / 2));     // 1

isFinite(1 / 0); // false
isFinite(-Infinity); // false
isFinite(NaN); // false

```

#### Convert Number

```javascript
// use the built-in parseInt() function
parseInt('123', 10);    // 123
parseInt('010', 10);    // 10
parseInt('010');        // 8 (on some older browsers)
parseInt('11', 2);      // 3

// use the unary + operator
+ '42';   // 42
+ '010';  // 10
+ '0x10'; // 16

```

#### NaN

A special value called NaN (short for "Not a Number") is returned if the string is non-numeric:

```javascript
parseInt('hello', 10); // NaN

NaN + 5; // NaN

Number.isNaN(NaN); // true
Number.isNaN('hello'); // false
Number.isNaN('1'); // false
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN([1]) // false
Number.isNaN([1,2]) // false

```

But don’t test for NaN using the global isNaN() function, [which has unintuitive behavior](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN#confusing_special-case_behavior):

```javascript
isNaN('hello'); // true
isNaN('1'); // false
isNaN(undefined); // true
isNaN({}); // true
isNaN([1]) // false
isNaN([1,2]) // true
```

### String

```javascript
'hello'.length; // 5

'hello'.charAt(0); // "h"
'hello, world'.replace('world', 'mars'); // "hello, mars"
'hello'.toUpperCase(); // "HELLO"
```

### Boolean

1. false, 0, empty strings (""), NaN, null, and undefined all become false.
1. All other values become true.

```javascript
Boolean('');  // false
Boolean(234); // true
```

### Other types

-  `null`: a value that indicates a deliberate non-value (and is only accessible through the `null` keyword)
- `undefined`: a value of type `undefined` that indicates an uninitialized variable — that is, a value hasn't even been assigned yet.

## Variables

New variables in JavaScript are declared using one of three keywords: `let`, `const`, or `var`.

`let` allows you to declare block-level variables. The declared variable is available from the block it is enclosed in.

```javascript
// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here
```

`const` allows you to declare variables whose values are never intended to change. The variable is available from the block it is declared in.

```javascript
const Pi = 3.14; // variable Pi is set
Pi = 1; // will throw an error because you cannot change a constant variable.
```

`var` is the most common declarative keyword. It does not have the restrictions that the other two keywords have. A variable declared with the var keyword is available from the function it is declared in.

```javascript
// myVarVariable *is* visible out here

for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) {
  // myVarVariable is visible to the whole function
}

// myVarVariable *is* visible out here
```

In JavaScript, blocks do not have scope; only functions have a scope. So if a variable is defined using `var` in a compound statement (for example inside an if control structure), it will be visible to the entire function. However, starting with ECMAScript 2015, `let` and `const` declarations allow you to create block-scoped variables.

If you declare a variable without assigning any value to it, its type is `undefined`.

## Operators

JavaScript's numeric operators are `+`, `-`, `*`, `/` and `%` which is the remainder operator.

Values are assigned using `=`.

Compound assignment using `+=`, `-=` etc..

Increment and decrement `++` and `--`.

String concatenation `+`.
```javascript
// Adding an empty string to something is a useful way of converting it to a string itself.
'' + 4;         // "4"
'3' + 4 + 5;    // "345"
3 + 4 + '5';    // "75"
```

Comparisons: `<`, `>`, `<=`, `>=`.

Equality: `==` and `===`, `!=` and `!==`.
```javascript
123 == '123';   // true
1 == true;      // true

123 === '123';  // false
1 === true;     // false
```

## Control structures

```javascript
var name = 'kittens';
if (name === 'puppies') {
  name += ' woof';
} else if (name === 'kittens') {
  name += ' meow';
} else {
  name += '!';
}
name === 'kittens meow';


while (true) {
  // an infinite loop!
}

var input;
do {
  input = get_input();
} while (inputIsNotValid(input));

for (var i = 0; i < 5; i++) {
  // Will execute 5 times
}
```

### for...of

```javascript
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

### for...in

```javascript
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```

### Logic
The `&&` and `||` operators use short-circuit logic.

```javascript
// checking for null objects before accessing their attributes
var name = o && o.getName();

// caching values (when falsy values are invalid)
var name = cachedName || (cachedName = getName());
```

### Ternary operator

```javascript
var allowed = (age > 18) ? 'yes' : 'no';
```

### switch

```javascript
switch (action) {
  case 'draw':
    drawIt();
    break;
  case 'eat':
    eatIt();
    break;
  default:
    doNothing();
}

switch (a) {
  case 1: // fallthrough
  case 2:
    eatIt();
    break;
  default:
    doNothing();
}

```

## Objects

JavaScript objects can be thought of as simple collections of name-value pairs.

There are two basic ways to create an empty object:

`var obj = new Object();`

And:

`var obj = {};`

The second is called object literal syntax and is more convenient. This syntax is also the core of JSON format and should be preferred at all times.

```javascript
var obj = {
  name: 'Carrot',
  _for: 'Max', // 'for' is a reserved word, use '_for' instead.
  details: {
    color: 'orange',
    size: 12
  }
};

obj.details.color; // orange
obj['details']['size']; // 12

```

The following example creates an object prototype(`Person`) and an instance of that prototype(`you`).

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Define an object
var you = new Person('You', 24);
// We are creating a new person named "You" aged 24.

// dot notation
obj.name = 'Simon';
var name = obj.name;

// bracket notation
obj['name'] = 'Simon';
var name = obj['name'];
// can use a variable to define a key
var user = prompt('what is your key?')
obj[user] = prompt('what is its value?')

```

## Arrays

```javascript
var a = new Array();
a[0] = 'dog';
a[1] = 'cat';
a[2] = 'hen';
a.length; // 3

var a = ['dog', 'cat', 'hen'];
a.length; // 3

var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
a.length; // 101

typeof a[90]; // undefined

a.push(item);
```

### Iterate

```javascript
for (var i = 0; i < a.length; i++) {
  // Do something with a[i]
}

for (const currentValue of a) {
  // Do something with currentValue
}

['dog', 'cat', 'hen'].forEach(function(currentValue, index, array) {
  // Do something with currentValue or array[index]
});
```

<table>
 <thead>
  <tr>
   <th scope="col">Method name</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>a.toString()</code></td>
   <td>Returns a string with the <code>toString()</code> of each element separated by commas.</td>
  </tr>
  <tr>
   <td><code>a.toLocaleString()</code></td>
   <td>Returns a string with the <code>toLocaleString()</code> of each element separated by commas.</td>
  </tr>
  <tr>
   <td><code>a.concat(item1[, item2[, ...[, itemN]]])</code></td>
   <td>Returns a new array with the items added on to it.</td>
  </tr>
  <tr>
   <td><code>a.join(sep)</code></td>
   <td>Converts the array to a string — with values delimited by the <code>sep</code> param</td>
  </tr>
  <tr>
   <td><code>a.pop()</code></td>
   <td>Removes and returns the last item.</td>
  </tr>
  <tr>
   <td><code>a.push(item1, ..., itemN)</code></td>
   <td>Appends items to the end of the array.</td>
  </tr>
  <tr>
   <td><code>a.shift()</code></td>
   <td>Removes and returns the first item.</td>
  </tr>
  <tr>
   <td><code>a.unshift(item1[, item2[, ...[, itemN]]])</code></td>
   <td>Prepends items to the start of the array.</td>
  </tr>
  <tr>
   <td><code>a.slice(start[, end])</code></td>
   <td>Returns a sub-array.</td>
  </tr>
  <tr>
   <td><code>a.sort([cmpfn])</code></td>
   <td>Takes an optional comparison function.</td>
  </tr>
  <tr>
   <td><code>a.splice(start, delcount[, item1[, ...[, itemN]]])</code></td>
   <td>Lets you modify an array by deleting a section and replacing it with more items.</td>
  </tr>
  <tr>
   <td><code>a.reverse()</code></td>
   <td>Reverses the array.</td>
  </tr>
 </tbody>
</table>

## Functions

```javascript
function add(x, y) {
  var total = x + y;
  return total;
}
```

If no return statement is used (or an empty return with no value), JavaScript returns `undefined`.

You can call a function without passing the parameters it expects, in which case they will be set to `undefined`.

```javascript
add(); // NaN
// You can't perform addition on undefined

add(2, 3, 4); // 5
// added the first two; 4 was ignored
```

Functions have access to an additional variable inside their body called arguments, which is an array-like object holding all of the values passed to the function.

```javascript
function avg() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
}

avg(2, 3, 4, 5); // 3.5
```

### Rest parameters

```javascript
function avg(...args) {
  var sum = 0;
  for (let value of args) {
    sum += value;
  }
  return sum / args.length;
}

avg(2, 3, 4, 5); // 3.5

avg.apply(null, [2, 3, 4, 5]); // 3.5

avg(...numbers)

```

### Anonymous functions

```javascript
var avg = function() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
};
```

### Recursive functions

```javascript
function countChars(elm) {
  if (elm.nodeType == 3) { // TEXT_NODE
    return elm.nodeValue.length;
  }
  var count = 0;
  for (var i = 0, child; child = elm.childNodes[i]; i++) {
    count += countChars(child);
  }
  return count;
}
```

## Custom objects

Version 1

```javascript
function makePerson(first, last) {
  return {
    first: first,
    last: last
  };
}
function personFullName(person) {
  return person.first + ' ' + person.last;
}
function personFullNameReversed(person) {
  return person.last + ', ' + person.first;
}

var s = makePerson('Simon', 'Willison');
personFullName(s); // "Simon Willison"
personFullNameReversed(s); // "Willison, Simon"
```

Version 2

```javascript
function makePerson(first, last) {
  return {
    first: first,
    last: last,
    fullName: function() {
      return this.first + ' ' + this.last;
    },
    fullNameReversed: function() {
      return this.last + ', ' + this.first;
    }
  };
}

var s = makePerson('Simon', 'Willison');
s.fullName(); // "Simon Willison"
s.fullNameReversed(); // "Willison, Simon"
```

Version 3

```javascript
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = function() {
    return this.first + ' ' + this.last;
  };
  this.fullNameReversed = function() {
    return this.last + ', ' + this.first;
  };
}
var s = new Person('Simon', 'Willison');
```

Version 4

```javascript
function personFullName() {
  return this.first + ' ' + this.last;
}
function personFullNameReversed() {
  return this.last + ', ' + this.first;
}
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = personFullName;
  this.fullNameReversed = personFullNameReversed;
}
```

Version 5

```javascript
function Person(first, last) {
  this.first = first;
  this.last = last;
}
Person.prototype.fullName = function() {
  return this.first + ' ' + this.last;
};
Person.prototype.fullNameReversed = function() {
  return this.last + ', ' + this.first;
};

var s = new Person('Simon', 'Willison');
s.toString(); // [object Object]

Person.prototype.toString = function() {
  return '<Person: ' + this.fullName() + '>';
}

s.toString(); // "<Person: Simon Willison>"
```

### Inner functions

Nested functions in JavaScript can access variables in their parent function's scope:

```javascript
function parentFunc() {
  var a = 1;

  function nestedFunc() {
    var b = 4; // parentFunc can't use this
    return a + b;
  }
  return nestedFunc(); // 5
}
```

## Closures

A [closure](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work) is a pairing of:

1. A function, and
1. A reference to that function's outer scope (lexical environment)

In the following code, `inner` forms a closure with the lexical environment of the execution context created when `foo` is invoked, closing over variable `secret`:

```javascript
function foo() {
  const secret = Math.trunc(Math.random()*100)
  return function inner() {
    console.log(`The secret number is ${secret}.`)
  }
}
const f = foo() // `secret` is not directly accessible from outside `foo`
f() // The only way to retrieve `secret`, is to invoke `f`
```

In other words: in JavaScript, functions carry a reference to a private "box of state", to which only they (and any other functions declared within the same lexical environment) have access. This box of the state is invisible to the caller of the function, delivering an excellent mechanism for data-hiding and encapsulation.

### Uses of Closures
Closures are useful whenever you need a private state associated with a function.

#### Private Instance Variables

In the following code, the function `toString` closes over the details of the car.

```javascript
function Car(manufacturer, model, year, color) {
  return {
    toString() {
      return `${manufacturer} ${model} (${year}, ${color})`
    }
  }
}
const car = new Car('Aston Martin','V8 Vantage','2012','Quantum Silver')
console.log(car.toString())
```

#### Functional Programming

In the following code, the function `inner` closes over both `fn` and `args`.

```javascript
function curry(fn) {
  const args = []
  return function inner(arg) {
    if(args.length === fn.length) return fn(...args)
    args.push(arg)
    return inner
  }
}

function add(a, b) {
  return a + b
}

const curriedAdd = curry(add)
console.log(curriedAdd(2)(3)()) // 5
```

## Arrow function

```javascript
// Traditional Function
function (a){
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body brackets and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;
```

If you have multiple arguments or no arguments:

```javascript
// Traditional Function
function (a, b){
  return a + b + 100;
}

// Arrow Function
(a, b) => a + b + 100;

// Traditional Function (no arguments)
let a = 4;
let b = 2;
function (){
  return a + b + 100;
}

// Arrow Function (no arguments)
let a = 4;
let b = 2;
() => a + b + 100;
```

If the body requires additional lines of processing:

```javascript
// Traditional Function
function (a, b){
  let chuck = 42;
  return a + b + chuck;
}

// Arrow Function
(a, b) => {
  let chuck = 42;
  return a + b + chuck;
}
```

Named functions:

```javascript
// Traditional Function
function bob (a){
  return a + 100;
}

// Arrow Function
let bob = a => a + 100;
```

### Used as methods

```javascript
var obj = { // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}
```

## Classes

### Class declarations

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

### Class expressions

```javascript
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle"

// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle2"
```