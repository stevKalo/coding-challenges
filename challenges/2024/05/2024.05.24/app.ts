// Instructions:
// Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

// Parameters:
// num - Number of People in Circle
// killNum - Number at which someone is eliminated from Circle

// Return:
// Last Number Standing

// Examples:
// n=7, k=3 => means 7 people in a circle
// one every 3 is eliminated until one remains
// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!

// Pseudocode:
export function josephusSurvivor(num: number, killNum: number) {
  const numArray: number[] = [];
  for (let i = 0; i < num; i++) {
    numArray.push(i + 1);
  }
  const initLength = numArray.length;
  let killIndex = 0;
  while (numArray.length > 1) {
    killIndex = (killIndex + killNum - 1) % numArray.length;
    numArray.splice(killIndex, 1);
  }
  return numArray[0];
}
