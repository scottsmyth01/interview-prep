/*
Create a function named alternateCase that takes a string as input and returns a new string where the cases are alternated. 
The first character should be uppercase, the second lowercase, the third uppercase, and so on.
*/

function alternateCase(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newStr += str[i].toUpperCase();
    }
    if (i % 2 === 1) {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

console.log(alternateCase("Hello World"));
