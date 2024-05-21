// Instructions:
// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// Parameters:
// Single Integer

// Return:
// Array with X number of SubArrays with ascending lengths

// Examples:
// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

// Pseudocode:
export function pyramid(n: number): Array<Array<Number>> {
  const arr: Array<Array<Number>> = [];
  if (n === 0) {
    return arr;
  }
  for (let i = 0; i < n; i++) {
    const newArr: number[] = [];
    for (let j = 0; j < i + 1; j++) {
      newArr.push(1);
    }
    arr.push(newArr);
  }
  return arr;
}
