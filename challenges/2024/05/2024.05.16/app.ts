// Instructions:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Parameters:
// Array of numbers

// Return:
// String of numbers (phone number w/ area code)

// Examples:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// => returns "(123) 456-7890"

// Pseudocode:
export function createPhoneNumber(numbers: number[]): string {
  const stringArr = numbers.map((item) => {
    return item.toString();
  });
  return `(${stringArr[0] + stringArr[1] + stringArr[2]}) ${stringArr[3] + stringArr[4] + stringArr[5]}-${stringArr[6] + stringArr[7] + stringArr[8] + stringArr[9]}`;
}
