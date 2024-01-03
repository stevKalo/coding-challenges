// Instructions:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2

// Parameters: 2 strings containing a-z chars

// Return: new sorted string including all unique chars

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// Pseudocode:
function longest(s1, s2) {
  let str1 = s1.split("");
  let str2 = s2.split("");
  let arr = Array.from(new Set(str1.concat(str2).sort()));
  return arr.join("");
}
