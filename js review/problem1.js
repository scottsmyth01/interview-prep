/*
Create a function named countUniqueVowels that takes a string as an argument and returns the number of unique vowels 
in the string (vowels are a, e, i, o, u). The function should not be case-insensitive. 
(include also the uppercased vowels)
*/

function countUniqueVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let vowelCounted = [];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i]) && !vowelCounted.includes(str[i])) {
      vowelCounted.push(str[i]);
    }
  }
  return vowelCounted.length;
}

console.log(countUniqueVowels("mumbojumbo"));
console.log(countUniqueVowels("banAna tree"));
