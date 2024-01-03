// Instructions:
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()

// Parameters: 3 numbers

// Return: largest possible number after adding "+, *, and ()"

// Examples:
// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9

// Pseudocode:
function expressionMatter(a, b, c) {
  return Math.max(
    a * (b + c),
    a + b + c,
    a * b * c,
    a + b * c,
    (a + b) * c,
    a * b + c
  );
}
