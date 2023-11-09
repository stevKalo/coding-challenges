// Instructions:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Parameters: array of integers in both string and num form

// Return: return the sum of all

// Examples:

// Pseudocode:
function sumMix(arr) {
  return +arr.reduce((total, curr) => +total + +curr);
}
