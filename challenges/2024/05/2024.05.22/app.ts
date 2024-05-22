// Instructions:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Parameters:
// String of Letters (Word)

// Return:
// Word translated to piglatin

// Examples:
// pigIt('Pig latin is cool'); => igPay atinlay siay oolcay
// pigIt('Hello world !');    => elloHay orldway !

// Pseudocode:
export const pigIt = (str: string): string => {
  const wordArr = str.split(' ').map((item) => {
    const regExp = /[a-zA-z]/g;
    if (!regExp.test(item)) {
      return item;
    }
    const firstLetter = item.slice(0, 1);
    return item.slice(1) + firstLetter + 'ay';
  });
  return wordArr.join(' ');
};
