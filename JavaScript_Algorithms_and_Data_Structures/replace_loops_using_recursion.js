// The "Replace Loops using Recursion" practice from the Basic JavaScript section of the freeCodeCamp's JavaScript 
// Algorithms and Data Structures certificate.

// Instructions: 
// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
      } else {
        return sum(arr, n - 1) + arr[n - 1];
      }
    // Only change code above this line
  }

sum([1,2,3,4], 4); // output: 10