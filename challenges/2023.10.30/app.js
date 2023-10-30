// Instructions:
// This time no story, no theory. The examples below show you how to write function accum:

// Parameters:
// take in a string of letters

// Return:
// new string that:
// - splits each letter
// - repeats letter based on index
// - joins with "-"

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// Pseudocode:
function accum(str) {
  // lowercase and then split string into arr
  let arr = str.split("");
  // loop through arr, add item to itself number of times equal to its index
  let newArr = arr.map((item, index) => {
    item = item.toUpperCase();
    return item + item.toLowerCase().repeat(index);
  });
  // join arr with -
  return newArr.join("-");
}

console.log(accum("abcd"));
