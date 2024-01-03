// Instructions:
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// Parameters: array of numbers

// Return: sorted array of numbers

// Examples:
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// Pseudocode:
function solution(nums) {
  if (Array.isArray(nums) && nums.length > 0) {
    return nums.sort((a, b) => {
      return a - b;
    });
  } else {
    return [];
  }
}
