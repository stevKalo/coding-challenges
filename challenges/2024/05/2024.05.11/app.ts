// Instructions:
// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
// Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

// Parameters: single integer

// Return: string of roman numerals

// Examples:
//    1 -->       "I"
// 1000 -->       "M"
// 1666 --> "MDCLXVI"

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// Pseudocode:
export function solution(number: number): string {
  const letterPools: { [key: number]: string[] } = {
    1: ['I', 'V'],
    2: ['X', 'L'],
    3: ['C', 'D'],
    4: ['M', ''],
  };
  const digits = number.toString().split('');
  const romans = digits.map((item, index) => {
    const position: number = digits.length - index;
    const pool: Array<string> = letterPools[position];
    if (+item === 0) {
      return;
    }
    if (+item < 4) {
      return pool[0].repeat(+item);
    } else if (+item === 4) {
      return pool[0] + pool[1];
    } else if (+item < 9) {
      return pool[1] + pool[0].repeat(+item - 5);
    } else if (+item === 9) {
      const upperPool: Array<string> = letterPools[position + 1];
      return pool[0] + upperPool[0];
    }
  });
  return romans.join('');
}
