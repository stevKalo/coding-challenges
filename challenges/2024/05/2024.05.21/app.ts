// Instructions:
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Parameters:
// Single Int

// Return:
// Binary Expression of Int

// Examples:
// 1234 (10011010010) => 5

// Pseudocode:
export function countBits(num: number): number {
  const binary = num.toString(2);
  return binary.split('').filter((item) => item === '1').length;
}
