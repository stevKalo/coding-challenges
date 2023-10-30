// Instructions:
// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).

// Parameters: two numbers, n and x

// Return: an array with n multiples of x

// Examples:
// countBy(1, 10) === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// countBy(2, 5) === [2, 4, 6, 8, 10];

// Pseudocode:
function countBy(x, n) {
  let z = [];
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += x;
    z.push(count);
  }
  return z;
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));
