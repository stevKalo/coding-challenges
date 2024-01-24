// Instructions:
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// Parameters: array of integers

// Return: the integer that appears an odd number of times

// Examples:
const test1 = [7];
// expected '7'
const test2 = [1, 1, 2];
// expected '2'

// Pseudocode:
// eslint-disable-next-line consistent-return
function findOdd(array) {
  const numbers = [...new Set(array)];
  const countObj = {};
  numbers.map((item) => {
    countObj[item] = 0;
    return item;
  });
  array.map((item) => {
    countObj[item] += 1;
    return item;
  });
  // eslint-disable-next-line no-restricted-syntax, prefer-const
  for (let num in countObj) {
    if (countObj[num] % 2 !== 0) {
      return Number(num);
    }
  }
}

console.log(findOdd(test1));
console.log(findOdd(test2));
