// Parameters: 1 array of several "stops" where stops[0] is people getting on and stops[1] is people getting off

// Return: integer value of number of people left on bus after last stop

// // Examples:
// assert.strictEqual(
//   number([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ]),
//   5
// );
// assert.strictEqual(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 10],
//     [12, 2],
//     [6, 1],
//     [7, 10],
//   ]),
//   17
// );
// assert.strictEqual(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 8],
//     [12, 2],
//     [6, 1],
//     [7, 8],
//   ]),
//   21
// );
// assert.strictEqual(number([[0, 0]]), 0);

// Psuedocode:
var number = function (busStops) {
  // for every arr in bS, add arr[0] and arr[1], make new array with results
  let arr = busStops.map(([first, second]) => first - second);
  // return new array reduced by adding itself together
  return arr.reduce((total, item) => (total += item), 0);
};
