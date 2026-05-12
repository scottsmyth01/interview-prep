/*
Create a function mirrorRows that takes a 2D array matrix as an argument and 
returns a new 2D array in which each row is reversed.
*/

// SAMPLE INPUT: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// SAMPLE OUTPUT: [ [ 3, 2, 1 ], [ 6, 5, 4 ], [ 9, 8, 7 ] ]

function mirrorRows(matrix) {
  let newArr = [];

  for (let i = 0; i < matrix.length; i++) {
    newArr.push([]);
    for (let j = matrix[i].length - 1; j >= 0; j--) {
      newArr[i].push(matrix[i][j]);
    }
  }
  return newArr;
}

console.log(
  mirrorRows([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
