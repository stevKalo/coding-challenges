// Instructions:
// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// Parameters:

// Return:

// Examples:
// titleCase('a clash of KINGS', 'a an the of') => should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') => should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') => should return: 'The Quick Brown Fox'

// Pseudocode:
function titleCase(title, minorWords = '') {
  const exceptions = minorWords.toLowerCase().split(' ');
  return title
    .toLowerCase()
    .split(' ')
    .map((word, index) =>
      exceptions.includes(word) && index !== 0
        ? word
        : word[0].toUpperCase() + word.slice(1),
    )
    .join(' ');
}

const test1 = 'a clash of KINGS';
const test2 = 'a an the of';
const testA = 'THE WIND IN THE WILLOWS';
const testB = 'The In';
const testLast = 'the quick brown fox';

console.log(titleCase(test1, test2));
console.log(titleCase(testA, testB));
console.log(titleCase(testLast));
