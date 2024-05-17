// Instructions:
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except
// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// Parameters:
// string of letters

// Return:
// largest sum of sub strings (separated by vowels)

// Examples:
// solve('zodiacs') = 26;

// Pseudocode:
export function solve(s: string) {
  const ALPHABET = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const totals: number[] = [];
  const newStr = s.replace(/[aeiou]/g, ' ');
  const subStrings = newStr.split(' ');
  subStrings.map((item) => {
    const newArr = item.split('');
    let newTotal = 0;
    newArr.forEach((item) => {
      const value = ALPHABET.indexOf(item) + 1;
      newTotal += value;
    });
    totals.push(newTotal);
  });
  return totals.sort((a, b) => b - a)[0];
}
