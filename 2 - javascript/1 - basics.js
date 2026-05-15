/*
var = not used anymore 
let = for variables that may change
const = for variables that don’t change
*/

let variable1 = true;
let variable2 = 'Hello Hi!';
let variable3 = 3.14;

let a, b, c;

let d = null,
  e = undefined,
  f = NaN;

// note: this is dynamically typed. They data type is not specified.

/*
NaN

Stands for ‘not a number’
Used to represent something that should be a number but isn’t actually a valid numeric value.

Math.sqrt(-1)
1 + NaN
undefined + undefined
‘foo’ / 3
*/

/*
primitive data types:
    - String
    - Number
    - Boolean
    - Null
    - Undefined

    exist on the stack
*/

/*
reference data types
    - objects
    - arrays
    - funcitons
    pointer on the stack that points to the data on the heap
    exists on the heap
*/

// type conversion

let amount = '100';
// amount = parseInt(amount)
amount = Number(amount);

let amount2 = 100;
// amount2 = amount2.toString()
amount2 = String(amount);

// Arithmetic operators

let num1 = 30;
let num2 = 20;
let num3 = num1 - num2;

num1 += 10;
num3 *= 2;

let num = 15;

if (num % 2 === 0) console.log('even number');
if (num % 2 === 1) console.log('odd number');

// comparison operators

// loosly equal
console.log(30 == '30'); //true (just the value)

// strictly equal
console.log(30 === '30'); //false (value and type of the data)

/* 
 Type coercion

 1. Explicit
 2. Implicit
 */

let x;
//—> first 5 gets converted to a string and concatenates the second string
x = 5 + '5';
//—> since * can’t be used by a string, the string gets converted to a number and the result is 25
x = 5 * '5';

// The above is implicit coercion - meaning JS does the work for us. When we cast a value it is explicitly coerced

// STRING METHODS

let str = 'Hello World!';

str.length;
str[x];

// note: these do not manipulate the original string, you need to save these to a new variable if you want to capture the behaviour
str.toUpperCase();
str.charAt(0);
str.indexOf('c');
str.substring(0, 5);
str.slice(7, 9);
str.trim();
str.replace('Hello', 'Goodbye');
str.includes('World');
str.split(' ');
