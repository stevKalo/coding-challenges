// Instructions:
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// Parameters: arr of nums

// Return: return arr w/ counts of pos and negative sum

// Examples:
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// Pseudocode:
function countPositivesSumNegatives(arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    let posIndex = 0;
    let negSum = 0;
    arr.map((item) => {
      if (item < 0) {
        negSum += item;
      } else if (item > 0) {
        ++posIndex;
      }
      return null; // Add a return statement here
    });
    return [posIndex, negSum];
  }
  return [];
}
