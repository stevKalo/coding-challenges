// Instructions:
// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Parameters: List of integers

// Return: Reversed list if integers

// Examples:
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

// Pseudocode:
function reverseList(list) {
  return list.reverse();
}

const test1 = [1, 2, 3, 4];
const test2 = [9, 2, 0, 7];

console.log(reverseList(test1));
console.log(reverseList(test2));
