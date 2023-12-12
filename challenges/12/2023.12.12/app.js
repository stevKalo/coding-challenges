// Instructions:
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Parameters: number

// Return: next perfect square or -1

// Examples:
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// Pseudocode:
function findNextSquare(sq) {
  let root = Math.sqrt(sq);
  if (root % 1 == 0) {
    return (++root) ** 2;
  } else {
    return -1;
  }
}
