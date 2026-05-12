/*
Create a function named countOccurrences that takes a 2D array of strings matrix and a string target. 
It should return how many times target appears across all rows and columns.
*/

// SAMPLE INPUT: [["a", "b", "a"], ["c", "a", "d"], ["a", "e", "f"]], a
// SAMPLE OUTPUT: 4

function countOccurrences(matrix, target) {
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        count++;
      }
    }
  }
  return count;
}

console.log(
  countOccurrences(
    [
      ['a', 'b', 'a'],
      ['c', 'a', 'd'],
      ['a', 'e', 'f'],
    ],
    'a',
  ),
);
