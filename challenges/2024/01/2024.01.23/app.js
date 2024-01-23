// Instructions:
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Parameters: array of strings

// Return: number of valid smilies
// Valid: :) :D ;-D :~)
// Invalid: ;( :> :} :]

// Examples:
// countSmileys([':)', ';(', ';}', ':-D']); // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']); // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Pseudocode:
function countSmileys(arr) {
  const validChars = {
    eyes: [':', ';'],
    noses: ['-', '~'],
    mouths: [')', 'D'],
  };
  let count = 0;
  arr.map((item) => {
    if (item.length === 2) {
      if (
        validChars.eyes.includes(item.slice(0, 1)) &&
        validChars.mouths.includes(item.slice(1, 2))
      ) {
        count += 1;
      }
    } else if (item.length === 3) {
      if (
        validChars.eyes.includes(item.slice(0, 1)) &&
        validChars.noses.includes(item.slice(1, 2)) &&
        validChars.mouths.includes(item.slice(2, 3))
      ) {
        count += 1;
      }
    }
  });
  return count;
}

const test1 = [':)', ';(', ';}', ':-D'];
const test2 = [';D', ':-(', ':-)', ';~)'];
const test3 = [';]', ':[', ';*', ':$', ';-D'];

console.log(countSmileys(test1));
console.log(countSmileys(test2));
console.log(countSmileys(test3));
