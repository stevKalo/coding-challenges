// Instructions:
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Parameters: array of numbers

// Return: array of sorted numbers, only odds

// Examples:
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// Pseudocode:
function sortArray(array) {
  let arr = array;
  let indexes = [];
  let odds = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      indexes.push(i);
      odds.push(arr[i]);
    }
  }
  odds = odds.sort((a, b) => a - b);
  for (let i = 0; i < indexes.length; i++) {
    arr[indexes[i]] = odds[i];
  }
  return arr;
}
