// ARRAY BASICS

/*
Arrays are a special type of 'object' and data structure that 
store one or more different values in a container

*/

// Declaring an array
const numbers = [12, 45, 33, 29, 39];
const mixed = [12, 'Hello', true, null, NaN, undefined];
const fruits = new Array('apple', 'grape', 'orange');

let x = numbers[0] * 10;

// Arrays are mutable, that is, some methods change the original data

fruits[2] = 'pear'; //this will mutate the fruits array

// Add to the end of the array
fruits[fruits.length] = 'peach';
fruits.push('blueberry');

console.log(fruits);

// console.dir and console.table

const hands = [
  { id: 1, vpip: 22, profit: 15 },
  { id: 2, vpip: 18, profit: -5 },
];

console.dir(hands);
console.table(hands);

/*
Array Methods
*/

// push/pop and unshift/shift
fruits.push('banana');
fruits.pop();

fruits.unshift('kiwi');
fruits.shift();

// reverse the array
fruits.reverse();

// includes and indexOf
x = fruits.includes('grape');
x = fruits.indexOf('apple');

//slice - does not change the original array
x = numbers.slice(1, 4); //start at index 1 and go to 3

//splice - changes the original array (plucks out values)
// console.log(numbers);
// x = numbers.splice(1, 3); //start at 1 and move 3 indexes
// console.log(x, numbers);

// remove item at certain index
console.log(numbers); //original array
numbers.splice(3, 1); //removes 29
console.log(numbers); //new array created

// chaining methods
let y;

y = numbers.slice(1, 4).reverse().toString().charAt(0);

// SPREAD OPERATOR

// can be used for arrays or objects
// just takes items from an array and add them to a new array

const veggies = ['tomato', 'cucumber', 'carrot', 'cellery'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

y = [...fruits, ...berries];

console.log(y);

// Flatten Array
const arr1 = [1, 2, [3, 4], 5, [6, 7], 8];
console.dir(arr1);
console.dir(arr1.flat());
