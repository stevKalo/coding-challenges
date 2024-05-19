// Instructions:
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Parameters:
// array of strings (letters)

// Return:
// "Missing" letter

// Examples:
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

// Pseudocode:
export function findMissingLetter(array: string[]): string {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  let answer = '';
  array.forEach((item, index) => {
    if (index === array.length - 1) {
      return;
    }
    // check if upper case
    const isUpperCase = item === item.toUpperCase();
    // get alpha index
    const alphaIndex = ALPHABET.indexOf(item.toLowerCase());
    // get next alphabet letter
    const nextAlpha = ALPHABET.charAt(alphaIndex + 1);
    // check if next item in array is equal to next alphabet letter
    if (nextAlpha !== array[index + 1].toLowerCase()) {
      isUpperCase ? (answer = nextAlpha.toUpperCase()) : (answer = nextAlpha);
    }
  });
  return answer;
}
