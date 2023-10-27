// Instructions:
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Parameters:
// an arr including strings and numbers

// Return:
// new arr without strings, only numbers

// Examples:
filter_list([1, 2, "a", "b"]) == [1, 2];
filter_list([1, "a", "b", 0, 15]) == [1, 0, 15];
filter_list([1, 2, "aasf", "1", "123", 123]) == [1, 2, 123];

// Pseudocode:
function filter_list(list) {
  // filter arr checking for type
  // if type == num, pass
  return list.filter((item) => typeof item == "number");
}

console.log(filter_list([1, 2, "a", "b"]));
