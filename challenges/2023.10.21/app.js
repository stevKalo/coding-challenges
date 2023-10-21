// Parameters:

// Return:
// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// Examples:
// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// Pseudocode:
let solve = function (array) {
  // check that each array has no duplicates
  // if duplicates, make new arr that doesn't have duplicates
  array = array.map((arr) => [...new Set(arr)]);
  return array.reduce((total, item) => total * item.length, 1);
  // multiply each arr.length by the others
  // return the ans
};

console.log(solve([[1, 2], [4], [5, 6]], 4));
console.log(
  solve(
    [
      [1, 2],
      [4, 4],
      [5, 6, 6],
    ],
    4
  )
);
console.log(
  solve(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    8
  )
);

console.log(
  solve(
    [
      [1, 2, 3],
      [3, 4, 6, 6, 7],
      [8, 9, 10, 12, 5, 6],
    ],
    72
  )
);
