// Instructions:
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Write a function that returns both the minimum and maximum number of the given list/array.

// Parameters: list of numbers

// Return: the lowest and the highest number in an array

// Examples:
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

// Pseudocode:
function minMax(arr) {
  let sort = arr.sort((a, b) => a - b);
  return [sort.at(0), sort.at(-1)];
}

let test = [1, 2, 3, 4, 5];

minMax(test);
