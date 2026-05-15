function sumFactorial(arr){
    // 1. create sum varaible
      let sum = 0;
    // 2. loop through the array
      for (i = 0; i < arr.length; i++){
        // 3. for each element, find factorial and add it to the sum variable
        let factorial = 1;
        for (j = 1; j <= arr[i]; j++) {
          factorial *= j;
        }
        sum += factorial;
      }
    // 4. return the total sum to the console
      return sum;
}

// TESTS

console.log(sumFactorial([4,6]));
console.log(sumFactorial([5,4,1]));