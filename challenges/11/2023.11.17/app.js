// Instructions:
// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

// Parameters: array of numbers

// Return: average of array

// Examples:

// Pseudocode:
function findAverage(array) {
  return array.length > 0
    ? array.reduce((total, current) => total + current, 0) / array.length
    : 0;
}
