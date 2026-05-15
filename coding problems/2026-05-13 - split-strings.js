/*
Description:
Complete the solution so that it splits the string into strings of two characters in a list/array
 (depending on the language you use). If the string contains an odd number of characters then it should 
 replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

/*
Steps

1. check if the string is even or odd length
2. if even,
    create a result array
    set up loop to iterate through the string
        result.push(str[i] + str[i+1])
        i++; (iterate twice)
*/

function solution(str) {
  result = [];

  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length; i++) {
      result.push(str[i] + str[i + 1]);
      i++;
    }
    return result;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (i === str.length - 1) {
        result.push(str[i] + '_');
      } else {
        result.push(str[i] + str[i + 1]);
        i++;
      }
    }
    return result;
  }
}

// solution("abcdef"), ["ab", "cd", "ef"]);
// solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
// solution(""), []);

console.log(solution('abcdef'));
console.log(solution('abcdefg'));
