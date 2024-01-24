// Instructions:
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// Parameters: two integers

// Return: array of all whole integers between inputs, including inputs

// Examples:
// a = 1
// b = 4
// --> [1, 2, 3, 4]

// Pseudocode:
function between(a, b) {
  const array = [];
  for (let i = a; i <= b; i++) {
    array.push(i);
  }
  return array;
}

console.log(between(1, 4));
