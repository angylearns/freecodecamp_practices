// The "Counting Cards" practice from the Basic JavaScript section of the freeCodeCamp's JavaScript 
// Algorithms and Data Structures certificate.

// Instructions: 
// "You will write a card counting function. It will receive a card parameter, which can be a number
// or a string, and increment or decrement the global count variable according to a card's value.
// The function will then return a string with the current count and the string Bet if the count
// is positive, or Hold if the count is zero or negative. The current count and the player's decision
// (Bet or Hold) should be separated by a single space."


let count = 0;

function cc(card) {
  // Only change code below this line
  let arr = [[2, 3, 4, 5, 6], [7, 8, 9], [10, 'J', 'Q', 'K', 'A']];
  let message = "";

    for (var i = 0; i <= arr.length-1; i++) {
        if (arr[i].includes(card) == true) {
            var index = arr.indexOf(arr[i]);
            var value = 0;
            if (index == arr.length - arr.length) {
                count += 1;
            } else if (index == arr.length-1) {
                count -= 1;
            }
        }
    }
    
    if (count >= 1) {
        message = " Bet";
    }   else {
        message = " Hold";
    }

    return count + message;
    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');