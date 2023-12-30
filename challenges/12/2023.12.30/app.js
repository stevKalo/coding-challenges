// Instructions:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

// Parameters: string of characters

// Return: obj with props for each char and their count

// Examples:
// count('aba'); // { a: 2, b: 1 }

// Pseudocode:
function count(string) {
  let arr = string.split("");
  let countObj = arr.reduce((acc, item) => {
    if (acc[item]) {
      acc[item] += 1;
    } else if (!acc[item]) {
      acc[item] = 1;
    }
    return acc;
  }, {});
  return countObj;
}
