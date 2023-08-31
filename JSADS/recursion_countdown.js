// The "Use Recursion to Create a Countdown" practice from the Basic JavaScript section of the freeCodeCamp's JavaScript 
// Algorithms and Data Structures certificate.

// Instructions:
// We have defined a function called countdown with one parameter (n). The function should use recursion
// to return an array containing the integers n through 1 based on the n parameter. If the function is
// called with a number less than 1, the function should return an empty array. For example, calling this
// function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling
// itself and must not use loops of any kind.


// Only change code below this line
function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const fullArray = countdown(n - 1);
      fullArray.unshift(n);
      return fullArray;
    }
  }
  // Only change code above this line

countdown(5); // output: [5, 4, 3, 2, 1]