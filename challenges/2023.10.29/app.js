// Instructions:
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

// Parameters: 2 whole numbers

// Return: sum of both numbers and all whole numbers bewteen them

// Examples:
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// Pseudocode:
function getSum(a, b) {
  // determine if a > b
  // set the lower value to x, higher to y
  // build loop that increments i up or down from x -> y
  // make i = a and add each increment along the way
  // return sum
  if (a === b) {
    return a;
  } else {
    let x;
    let y;
    if (a < b) {
      x = a;
      y = b;
    } else if (a > b) {
      x = b;
      y = a;
    }
    let sum = 0;
    for (i = x; i <= y; i++) {
      sum += i;
    }
    return sum;
  }
}

console.log(getSum(2, 2));
