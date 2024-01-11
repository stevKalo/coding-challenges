// Instructions:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// Sequence 1 - 1/4 - 1/7 - 1/10 - 1/13
// Add 3 to the denominator for each sequence

// Parameters: number

// Return: sum of all numbers in sequence up to (number) rounded to 2 decimal points

// Examples:
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// Pseudocode:
function SeriesSum(num) {
  let denominator = 1;
  let sum = 0;
  for (let i = 0; i < num; ++i) {
    sum += 1 / denominator;
    denominator += 3;
  }
  return sum.toFixed(2);
}

console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(5));
