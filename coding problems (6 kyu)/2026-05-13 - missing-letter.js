// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

// Steps
/*
Get code of current characeter (code1)
Get code of current + 1 character (code2)
If code2 - code1 != 1 then we know that the letter is missing; return code2 - 1
*/

function findMissingLetter(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let code1 = array[i].charCodeAt(0);
    let code2 = array[i + 1].charCodeAt(0);

    if (code2 - code1 !== 1) return String.fromCharCode(code2 - 1);
  }
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
console.log(findMissingLetter(['O', 'Q', 'R', 'S']));
