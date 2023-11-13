// Instructions:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// Parameters: take in an array or string sequence

// Return: array of items from input without duplicates and in the same order

// Examples:
// uniqueInOrder("AAAABBBCCDAABBB") == ["A", "B", "C", "D", "A", "B"];
// uniqueInOrder("ABBCcAD") == ["A", "B", "C", "c", "A", "D"];
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3];

// Pseudocode:
var uniqueInOrder = function (iterable) {
  let arr = [];
  if (iterable.length == 0) {
    return arr;
  }
  if (typeof iterable === "string") {
    arr = iterable.split("");
  } else if (Array.isArray(iterable)) {
    arr = iterable;
  }
  let sortedArr = [];
  sortedArr.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    // check if it's the first item
    // if first, add it
    // it not first, check if it equals the last item
    if (arr[i] !== arr[i - 1]) {
      sortedArr.push(arr[i]);
    }
  }
  return sortedArr;
};

uniqueInOrder("AAAABBBCCDAABBB");
