// Instructions:
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

// Parameters: 3 numbers

// Return: boolean whether or not a triangle can be made with these values

// Examples:
// isTriangle(1, 2, 2);
// isTriangle(7, 2, 2);

// Pseudocode:
function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}

console.log(isTriangle(1, 2, 2));
console.log(isTriangle(7, 2, 2));
