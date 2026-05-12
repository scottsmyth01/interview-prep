/*
Create a function named stringWeaver that takes two strings and returns a new string where:

Ignore numbers as if they don't exist - Remove all numbers from both strings first
Combine the cleaned strings - Put all characters from the first cleaned string, followed by all characters from the second cleaned string
Convert all vowels to uppercase - In the final combined string
Return the final string. 

EXAMPLE INPUT: "web2024", "dev2025"
EXAMPLE OUTPUT: "wEbdEv"

EXAMPLE INPUT: "123hello", "456world"
EXAMPLE OUTPUT: "hEllOwOrld"
*/

function stringWeaver(str1, str2) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  newStr1 = '';
  newStr2 = '';
  combinedStr = '';

  for (let i = 0; i < str1.length; i++) {
    if (numbers.includes(str1[i])) {
      continue;
    } else {
      newStr1 += str1[i];
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (numbers.includes(str2[i])) {
      continue;
    } else {
      newStr1 += str2[i];
    }
  }
  combinedStr = newStr1 + newStr2;
  let finalStr = '';

  for (let i = 0; i < combinedStr.length; i++) {
    if (vowels.includes(combinedStr[i])) {
      finalStr += combinedStr[i].toUpperCase();
    } else {
      finalStr += combinedStr[i];
    }
  }
  return finalStr;
}

console.log(stringWeaver('123hello', '456world'));
console.log(stringWeaver('web2024', 'dev2025'));
