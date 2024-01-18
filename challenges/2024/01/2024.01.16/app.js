// Instructions:
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

// Parameters: array of integers

// Return: new array without lowest integer

// Examples:
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

// Pseudocode:
function removeSmallest(numbers) {
  const min = Math.min(...numbers);
  const index = numbers.indexOf(min);
  return [...numbers.slice(0, index), ...numbers.slice(index + 1)];
}

const test1 = [1, 2, 3, 4, 5];
const test2 = [5, 3, 2, 1, 4];

console.log(removeSmallest(test1));
console.log(removeSmallest(test2));
