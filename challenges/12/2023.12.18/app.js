// Instructions:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// Parameters: an array of booleans, true means

// Return: number of sheep present

// Examples:
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// Pseudocode:
function countSheeps(sheep) {
  let count = 0;
  sheep.map((item) => {
    if (item) {
      count++;
    }
  });
  return count;
}
