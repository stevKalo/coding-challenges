// Parameters: non-empty array of integers

// Return:  the result of multiplying the values together in order

// Examples: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// Pseudocode:

function grow(x) {
  // reduce over the array by multiplying each
  return x.reduce((total, item) => total * item, 1);
}
