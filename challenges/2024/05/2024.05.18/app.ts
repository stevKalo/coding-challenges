// Instructions:
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

// Parameters:
// Array of integers
// Array of integers to be subtracted

// Return:
// Array after subtraction

// Examples:
// arrayDiff([], [4,5]) => []
// arrayDiff([3,4], [3]) => [4];

// Pseudocode:
export function arrayDiff(a: number[], b: number[]): number[] {
  const newArr = a.filter((item) => {
    return b.includes(item) ? false : true;
  });
  return newArr;
}
