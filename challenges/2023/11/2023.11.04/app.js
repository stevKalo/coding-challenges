// Instructions:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Parameters: one string

// Return: one string (with repeats)

// Examples:
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// Pseudocode:
function doubleChar(str) {
  return str
    .split("")
    .map((item) => item + item)
    .join("");
}

console.log(doubleChar("string"));
