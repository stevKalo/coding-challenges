// Parameters:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Return:
// a string made of "(" and ")" depending on the frequecny of the character in the string

// Examples:
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// Pseudocode:
function duplicateEncode(str) {
  // make string lowercase
  str = str.toLowerCase();
  let arr = [];
  // for loop through string.length
  for (let i = 0; i < str.length; i++) {
    // slice each char and test to see if remaining str includes it
    let char = str.at(i);
    let newStr = str.slice(0, i) + str.slice(i + 1);
    newStr.includes(char) ? arr.push(")") : arr.push("(");
    // if yes, push ) into conuterArr
    // if no, push ( into counterArr
  }
  return arr.join("");
}

console.log(duplicateEncode("recede"));
