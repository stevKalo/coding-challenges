// Instructions:
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Parameters: array of integers

// Return: new array with integers incrementing by 1 from min to max

// Examples:
// 1,3,5,6,7,8 => 1,2,3,4,5,6,7,8

// Pseudocode:
function pipeFix(numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}

const test1 = [1, 2, 3, 5, 6, 8, 9];
const test2 = [1, 2, 3, 12];

console.log(pipeFix(test1));
console.log(pipeFix(test2));
