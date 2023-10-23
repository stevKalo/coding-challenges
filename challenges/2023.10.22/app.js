// Parameters: a string containing a sentence

// Return: the same string but each word starts with a capitalized letter

// Examples:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// Pseudocode:
String.prototype.toJadenCase = function () {
  // split the string into an arr on ' '
  // map arr, targeting the first char in each split string with a .toUpperCase
  // re join arr with ' ' between items and return
  let arr = this.split(" ");
  arr = arr.map((item) => item.charAt(0).toUpperCase() + item.slice(1));
  return arr.join(" ");
};
