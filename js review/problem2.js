/*
Create a function named greetAll that takes an array of names and returns one string. Each name in the array 
should produce a line with the format Hello, <Name>! joined together into a single string, separated by newlines. 
Use template literals for the greeting lines.
*/

// EXAMPLE INPUT: ["Alice", "Bob", "Charlie"]
// EXAMPLE OUPUT:
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!

function greetAll(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}!`);
  }
}

greetAll(["Alice", "Bob", "Charlie"]);
