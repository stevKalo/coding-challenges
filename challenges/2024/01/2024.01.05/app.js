// Instructions:
// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// Parameters: array of nums

// Return: first item in array not consecutive

// Examples:
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// Pseudocode:
function firstNonConsecutive(arr) {
  const nonConsec = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      if (arr[i] !== arr[i - 1] + 1) {
        nonConsec.push(arr[i]);
      }
    }
  }
  return nonConsec.length > 0 ? nonConsec[0] : null;
}
