// Instructions:
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// Parameters: a pair of arrays, each containing the dimmensions of a cuboid

// Return: difference in the volume of the cuboids

// Examples:
// [2, 2, 3], [5, 4, 1];
// Volume A = 12
// Volume B = 20
// Return = 8

// Pseudocode:
function findDifference(a, b) {
  const volumeA = a[0] * a[1] * a[2];
  const volumeB = b[0] * b[1] * b[2];
  return Math.abs(volumeA - volumeB);
}
